<template>
  <div class="catalog-hero">
      <div class="catalog-baner" :class="banerInfo.name">
            <img :src="getImageUrl('baner-bg', banerInfo.name)" :alt="pageName" class="catalog-baner__bg">
            <div class="catalog-baner__hero">
                <div class="catalog-baner__label">
                    <img :src="getImageUrl('logos', banerInfo.name)" :alt="pageName" class="catalog-baner__logo">
                    <span>{{ banerInfo.title }}</span>
                </div>
                <h2 class="catalog-baner__title" v-html="banerInfo.catalogBanerTitleHtml"></h2>
                <p class="catalog-baner__text" v-html="banerInfo.catalogBanerTextHtml"></p>
            </div>
      </div>
      <div class="often-buy">
          <div class="often-buy__title">Часто оказывается в корзине</div>
          <div class="often-buy__hero">
              <div 
                v-for="(item, index) in oftenBuyList" :key="index" 
                class="often-buy__item"
                @click="goToCard"
              >{{ item }}</div>
          </div>
      </div>
      <div class="filters">
          <FiltersRow v-model:activeFilter="filterValue" v-model:displayMode="dispayModeValue"/>
      </div>
      <div v-if="dispayModeValue === 'col'" class="list-col">
            <div v-for="item in filteredList.slice(0, 8)" :key="item.id" class="list-col__card">
                <ProductCard 
                    :id="item.id" 
                    :description="item.description"
                    :newPrice="item.newPrice"
                    :oldPrice="item.oldPrice"
                    :isBenefitShown="false"
                />
            </div>
            <div class="list-col__gather">
                <GatherBusket @showModal="isModalShow = true" />
            </div>
            <div v-for="item in filteredList.slice(8, filteredList.length)" :key="item.id" class="list-col__card">
                <ProductCard 
                    :id="item.id" 
                    :description="item.description"
                    :newPrice="item.newPrice"
                    :oldPrice="item.oldPrice"
                    :isBenefitShown="false"
                />
            </div>
        </div>
        <div v-else class="list-row">
            <div v-for="(item, index) in filteredList" :key="item.id" class="list-row__card">
                <ProductHorizontalCard 
                    :id="item.id" 
                    :title="item.title"
                    :price="item.newPrice"
                    :description="item.description"
                    :infoList="item.info"
                />
                <div v-if="index === 1" class="list-row__gather">
                    <GatherBusket @showModal="isModalShow = true"  />
                </div>
            </div>
      </div>
  </div>
  <Modal 
        v-model:open="isModalShow"
        :title="'Обратный звонок'"
        :descriptionHtml="'Пожалуйста, заполните обязательные поля, <br> и мы с Вами свяжемся.'"
   />
</template>

<script>
import { getImageUrl } from '@/use/helpers.js'
import { systemList } from '@/data/data.js'
import ProductCard from '../UIKit/ProductCard.vue'
import ProductHorizontalCard from '../UIKit/ProductHorizontalCard.vue'
import GatherBusket from './GatherBusket.vue'
import FiltersRow from '../Search/FiltersRow.vue'
import Modal from '../Modals/Modal.vue'

export default {
    components: {
        ProductHorizontalCard,
        GatherBusket,
        ProductCard,
        FiltersRow,
        Modal
    },
    data() {
        return {
            systemList,
            isModalShow: false,
            pageName: '',
            banerInfo: {},
            filterValue: 'popular',
            dispayModeValue: 'col',
            oftenBuyList: ['Труба PN10 SDR 11-25мм для ХВС', 'Труба PN16 SDR 7.4 -25мм для ГВС', 'Уголок 90гр', 'Муфта'],
            filteredList: [],
            cardsList: [
                { id: 1, date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 2, date: 2, starsCount: 2, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 200, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 3, date: 3, starsCount: 3, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 300, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 4, date: 4, starsCount: 4, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 490, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 5, date: 5, starsCount: 5, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 589, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 6, date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 689, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 7, date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 789, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 8, date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 889, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 9, date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 989, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 10, date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 109, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 11, date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 119, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 12, date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 129, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 13, date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 139, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 14, date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 149, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 15, date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 159, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 16, date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 169, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 17, date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 179, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
            ],
        }
    },
    mounted() {
        this.pageName = this.$route.params.name;
        this.banerInfo = this.systemList.find(el => el.name === this.pageName)
        this.filteredList = this.cardsList
    },
    methods: {
        getImageUrl,
        goToCard() {
            this.$router.push({ name: 'card', params: { name: this.$route.params.name || 'alpha' } })
        }
    },
    watch: {
        filterValue() {
            const compareFromCheap = ( a, b ) => {
                if ( a.newPrice < b.newPrice )
                    return -1;
                if ( a.newPrice > b.newPrice )
                    return 1;
                return 0;
            }
            const compareFromExpansive = ( a, b ) => {
                if ( a.newPrice > b.newPrice )
                    return -1;
                if ( a.newPrice < b.newPrice )
                    return 1;
                return 0;
            }
            const compareStars = ( a, b ) => {
                if ( a.startsCount > b.startsCount )
                    return -1;
                if ( a.startsCount < b.startsCount )
                    return 1;
                return 0;
            }
            const compareDate = ( a, b ) => {
                if ( a.date > b.date )
                    return -1;
                if ( a.date < b.date )
                    return 1;
                return 0;
            }

            if (this.filterValue === 'cheap')
                this.filteredList.sort(compareFromCheap)
            if (this.filterValue === 'expansive')
                this.filteredList.sort(compareFromExpansive)
            if (this.filterValue === 'popular')
                this.filteredList.sort(compareStars)
            if (this.filterValue === 'new')
                this.filteredList.sort(compareDate)
        }
    }
}
</script>

<style scoped lang="sass">
.catalog-hero
    width: 100%
    margin-bottom: 40px
    &__card
        padding: 10px 0
.catalog-baner
    width: 100%
    height: 100%
    border-radius: 8px
    overflow: hidden
    margin-bottom: 54px
    &::after
        content: ''
        position: absolute
        width: 100%
        height: 100%
        left: 0
        right: 0
        bottom: 0
        right: 0
        z-index: 10
        pointer-events: none
    &.alpha::after
        background: linear-gradient(100deg, #2598D2 27.02%, rgba(148, 204, 232, 0.8) 54.87%, rgba(170, 214, 236, 0) 75.9%)
    &.sigma::after
        background: linear-gradient(100deg, #003C47 18.31%, rgba(0, 60, 71, 0.8) 45.93%, rgba(0, 60, 71, 0.138423) 83.43%, rgba(0, 60, 71, 0) 97.77%)
    &.omega::after
        background: linear-gradient(100deg, #B92F2C -0.54%, rgba(185, 47, 44, 0.8) 24.06%, rgba(185, 47, 44, 0) 82.68%)
    &.beta-orange::after
        background: linear-gradient(100deg, #EE741D 18.31%, rgba(238, 116, 29, 0.8) 50.6%, rgba(238, 116, 29, 0) 83.44%)
    &.delta::after
        background: linear-gradient(100deg, #00949F 18.31%, rgba(0, 148, 159, 0.8) 44.23%, rgba(0, 148, 159, 0) 83.44%)
    &.beta::after
        background: linear-gradient(100deg, #7E8E97 18.31%, rgba(126, 142, 151, 0.8) 47.63%, rgba(126, 142, 151, 0) 83.44%)
    &.beta-elite::after
        background: linear-gradient(100deg, #80C2EC 18.31%, rgba(128, 194, 236, 0.8) 53.15%, rgba(128, 194, 236, 0) 83.44%)
    &.gamma::after
        background: linear-gradient(100deg, #224386 18.31%, rgba(34, 67, 134, 0.8) 42.96%, rgba(34, 67, 134, 0) 79.5%)
    &__bg
        position: absolute
        top: 0
        bottom: 0
        right: 0
        height: 100%
        object-fit: cover
    &__hero
        padding: 38px 45px 31px
        z-index: 12
        display: flex
        flex-direction: column
        justify-content: flex-start
    &__label
        width: fit-content
        border-radius: 40px
        padding: 11px 31px
        background: #fff
        display: flex
        align-items: center
        margin-bottom: 40px
        & span
            text-transform: uppercase
            font-size: 30px
            font-weight: bold
    &__logo
        width: 42px
        margin-right: 18px
    &__title
        font-weight: 700
        font-size: 40px
        color: #fff
        margin-bottom: 32px
        text-align: left
    &__text
        font-weight: 500
        font-size: 16px
        line-height: 1.5
        color: #FFFFFF
        max-width: 540px
.often-buy
    margin-bottom: 18px
    width: 100%
    &__title
        margin-bottom: 12px
        font-size: 20px
        color: #A6ACB3
    &__hero
        display: flex
        align-items: center
        flex-wrap: wrap
    &__item
        cursor: pointer
        background: #D5E0F5
        border-radius: 8px
        margin-right: 16px
        padding: 4px 10px
        font-size: 14px
        color: #42474D
        margin-bottom: 16px
.filters
    width: 100%
    margin-bottom: 11px
.list
    &-col
        display: flex
        flex-wrap: wrap
        width: calc( 100% + 16px )
        transform: translateX(-8px)
        &__wrap
            display: flex
            flex-wrap: wrap
            padding: 0
        &__card
            flex-basis: 25%
            padding: 8px
        &__gather
            padding: 8px
            width: 100%
    &-row
        display: flex
        flex-direction: column
        width:100%
        &__card
            flex-basis: 100%
            margin-bottom: 20px
        &__gather
            margin-top: 20px

@media screen and (max-width: 1600px)
    .catalog-baner
        margin-bottom: 30px
        &__label
            margin-bottom: 24px
        &__title
            font-size: 40px
            margin-bottom: 24px
        &__text
            font-size: 16px
            max-width: 540px
    .often-buy
        margin-bottom: 5px
</style>