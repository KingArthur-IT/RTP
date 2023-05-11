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
      <div class="filters">
          <div class="filters__hero">
              <div class="filters__item active">По популярности</div>
              <div class="filters__item">Новинки</div>
              <div class="filters__item">Сначала дешёвые</div>
              <div class="filters__item">Сначала дорогие</div>
          </div>
          <div class="filters__icons">
              <div class="filters__icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.70443 8H7.45443C7.70859 8 7.95235 7.89464 8.13207 7.70711C8.31179 7.51957 8.41276 7.26522 8.41276 7V1C8.41276 0.734784 8.31179 0.48043 8.13207 0.292893C7.95235 0.105357 7.70859 0 7.45443 0H1.70443C1.45026 0 1.20651 0.105357 1.02678 0.292893C0.847061 0.48043 0.746094 0.734784 0.746094 1V7C0.746094 7.26522 0.847061 7.51957 1.02678 7.70711C1.20651 7.89464 1.45026 8 1.70443 8ZM11.2878 8H17.0378C17.2919 8 17.5357 7.89464 17.7154 7.70711C17.8951 7.51957 17.9961 7.26522 17.9961 7V1C17.9961 0.734784 17.8951 0.48043 17.7154 0.292893C17.5357 0.105357 17.2919 0 17.0378 0H11.2878C11.0336 0 10.7898 0.105357 10.6101 0.292893C10.4304 0.48043 10.3294 0.734784 10.3294 1V7C10.3294 7.26522 10.4304 7.51957 10.6101 7.70711C10.7898 7.89464 11.0336 8 11.2878 8ZM1.70443 18H7.45443C7.70859 18 7.95235 17.8946 8.13207 17.7071C8.31179 17.5196 8.41276 17.2652 8.41276 17V11C8.41276 10.7348 8.31179 10.4804 8.13207 10.2929C7.95235 10.1054 7.70859 10 7.45443 10H1.70443C1.45026 10 1.20651 10.1054 1.02678 10.2929C0.847061 10.4804 0.746094 10.7348 0.746094 11V17C0.746094 17.2652 0.847061 17.5196 1.02678 17.7071C1.20651 17.8946 1.45026 18 1.70443 18ZM11.2878 18H17.0378C17.2919 18 17.5357 17.8946 17.7154 17.7071C17.8951 17.5196 17.9961 17.2652 17.9961 17V11C17.9961 10.7348 17.8951 10.4804 17.7154 10.2929C17.5357 10.1054 17.2919 10 17.0378 10H11.2878C11.0336 10 10.7898 10.1054 10.6101 10.2929C10.4304 10.4804 10.3294 10.7348 10.3294 11V17C10.3294 17.2652 10.4304 17.5196 10.6101 17.7071C10.7898 17.8946 11.0336 18 11.2878 18Z" fill="#828D99"/>
                    </svg>
              </div>
              <div class="filters__icon active">
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.83333 4H3.75C4.00417 4 4.24792 3.89464 4.42764 3.70711C4.60737 3.51957 4.70833 3.26522 4.70833 3V1C4.70833 0.734784 4.60737 0.48043 4.42764 0.292893C4.24792 0.105357 4.00417 0 3.75 0H1.83333C1.57917 0 1.33541 0.105357 1.15569 0.292893C0.975967 0.48043 0.875 0.734784 0.875 1V3C0.875 3.26522 0.975967 3.51957 1.15569 3.70711C1.33541 3.89464 1.57917 4 1.83333 4ZM7.58333 4H17.1667C17.4208 4 17.6646 3.89464 17.8443 3.70711C18.024 3.51957 18.125 3.26522 18.125 3V1C18.125 0.734784 18.024 0.48043 17.8443 0.292893C17.6646 0.105357 17.4208 0 17.1667 0H7.58333C7.32917 0 7.08541 0.105357 6.90569 0.292893C6.72597 0.48043 6.625 0.734784 6.625 1V3C6.625 3.26522 6.72597 3.51957 6.90569 3.70711C7.08541 3.89464 7.32917 4 7.58333 4ZM1.83333 18H3.75C4.00417 18 4.24792 17.8946 4.42764 17.7071C4.60737 17.5196 4.70833 17.2652 4.70833 17V15C4.70833 14.7348 4.60737 14.4804 4.42764 14.2929C4.24792 14.1054 4.00417 14 3.75 14H1.83333C1.57917 14 1.33541 14.1054 1.15569 14.2929C0.975967 14.4804 0.875 14.7348 0.875 15V17C0.875 17.2652 0.975967 17.5196 1.15569 17.7071C1.33541 17.8946 1.57917 18 1.83333 18ZM7.58333 18H17.1667C17.4208 18 17.6646 17.8946 17.8443 17.7071C18.024 17.5196 18.125 17.2652 18.125 17V15C18.125 14.7348 18.024 14.4804 17.8443 14.2929C17.6646 14.1054 17.4208 14 17.1667 14H7.58333C7.32917 14 7.08541 14.1054 6.90569 14.2929C6.72597 14.4804 6.625 14.7348 6.625 15V17C6.625 17.2652 6.72597 17.5196 6.90569 17.7071C7.08541 17.8946 7.32917 18 7.58333 18Z" fill="#828D99"/>
                        <path d="M3.75 11H1.83333C1.57917 11 1.33541 10.8946 1.15569 10.7071C0.975967 10.5196 0.875 10.2652 0.875 10V8C0.875 7.73478 0.975967 7.48043 1.15569 7.29289C1.33541 7.10536 1.57917 7 1.83333 7H3.75C4.00417 7 4.24792 7.10536 4.42764 7.29289C4.60737 7.48043 4.70833 7.73478 4.70833 8V10C4.70833 10.2652 4.60737 10.5196 4.42764 10.7071C4.24792 10.8946 4.00417 11 3.75 11Z" fill="#828D99"/>
                        <path d="M17.1667 11H7.58333C7.32917 11 7.08541 10.8946 6.90569 10.7071C6.72597 10.5196 6.625 10.2652 6.625 10V8C6.625 7.73478 6.72597 7.48043 6.90569 7.29289C7.08541 7.10536 7.32917 7 7.58333 7H17.1667C17.4208 7 17.6646 7.10536 17.8443 7.29289C18.024 7.48043 18.125 7.73478 18.125 8V10C18.125 10.2652 18.024 10.5196 17.8443 10.7071C17.6646 10.8946 17.4208 11 17.1667 11Z" fill="#828D99"/>
                    </svg>
              </div>
          </div>
      </div>
      <div v-for="(card, index) in cardsInfoList" :key="card.id">
          <div class="catalog-hero__card">
              <ProductHorizontalCard 
                :id="card.id" 
                :price="card.price" 
                :title="card.title"
                :description="card.description"
                :infoList="card.info"
              />
          </div>
          <div v-if="index === 1" class="catalog-hero__card">
              <GatherBusket />
          </div>
      </div>
  </div>
</template>

<script>
import { getImageUrl } from '@/use/helpers.js'
import { systemList } from '@/data/data.js'
import ProductHorizontalCard from '../UIKit/ProductHorizontalCard.vue'
import GatherBusket from './GatherBusket.vue'

export default {
    components: {
        ProductHorizontalCard,
        GatherBusket
    },
    data() {
        return {
            systemList,
            pageName: '',
            banerInfo: {},
            cardsInfoList: [
                {
                    id: 1, 
                    price: 10, 
                    description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', 
                    title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм',
                    info: [
                        { description: 'DN номинальный диаметр, мм', value: '20' },
                        { description: 'Толщина стенок, мм', value: '1,9' },
                        { description: 'Кол-во в упаковке м/шт', value: '100/25' },
                        { description: 'Материал', value: 'Полипропилен' },
                        { description: 'Цвет', value: 'Белый' },
                    ]
                },
                {
                    id: 1, 
                    price: 10, 
                    description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', 
                    title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм',
                    info: [
                        { description: 'DN номинальный диаметр, мм', value: '20' },
                        { description: 'Толщина стенок, мм', value: '1,9' },
                        { description: 'Кол-во в упаковке м/шт', value: '100/25' },
                        { description: 'Материал', value: 'Полипропилен' },
                        { description: 'Цвет', value: 'Белый' },
                    ]
                },
                {
                    id: 1, 
                    price: 10, 
                    description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', 
                    title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм',
                    info: [
                        { description: 'DN номинальный диаметр, мм', value: '20' },
                        { description: 'Толщина стенок, мм', value: '1,9' },
                        { description: 'Кол-во в упаковке м/шт', value: '100/25' },
                        { description: 'Материал', value: 'Полипропилен' },
                        { description: 'Цвет', value: 'Белый' },
                    ]
                },
                {
                    id: 1, 
                    price: 10, 
                    description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', 
                    title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм',
                    info: [
                        { description: 'DN номинальный диаметр, мм', value: '20' },
                        { description: 'Толщина стенок, мм', value: '1,9' },
                        { description: 'Кол-во в упаковке м/шт', value: '100/25' },
                        { description: 'Материал', value: 'Полипропилен' },
                        { description: 'Цвет', value: 'Белый' },
                    ]
                },
                {
                    id: 1, 
                    price: 10, 
                    description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', 
                    title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм',
                    info: [
                        { description: 'DN номинальный диаметр, мм', value: '20' },
                        { description: 'Толщина стенок, мм', value: '1,9' },
                        { description: 'Кол-во в упаковке м/шт', value: '100/25' },
                        { description: 'Материал', value: 'Полипропилен' },
                        { description: 'Цвет', value: 'Белый' },
                    ]
                },
                {
                    id: 1, 
                    price: 10, 
                    description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', 
                    title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм',
                    info: [
                        { description: 'DN номинальный диаметр, мм', value: '20' },
                        { description: 'Толщина стенок, мм', value: '1,9' },
                        { description: 'Кол-во в упаковке м/шт', value: '100/25' },
                        { description: 'Материал', value: 'Полипропилен' },
                        { description: 'Цвет', value: 'Белый' },
                    ]
                },
                {
                    id: 1, 
                    price: 10, 
                    description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', 
                    title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм',
                    info: [
                        { description: 'DN номинальный диаметр, мм', value: '20' },
                        { description: 'Толщина стенок, мм', value: '1,9' },
                        { description: 'Кол-во в упаковке м/шт', value: '100/25' },
                        { description: 'Материал', value: 'Полипропилен' },
                        { description: 'Цвет', value: 'Белый' },
                    ]
                },
                {
                    id: 1, 
                    price: 10, 
                    description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', 
                    title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм',
                    info: [
                        { description: 'DN номинальный диаметр, мм', value: '20' },
                        { description: 'Толщина стенок, мм', value: '1,9' },
                        { description: 'Кол-во в упаковке м/шт', value: '100/25' },
                        { description: 'Материал', value: 'Полипропилен' },
                        { description: 'Цвет', value: 'Белый' },
                    ]
                },
            ]
        }
    },
    mounted() {
        this.pageName = this.$route.params.name;
        this.banerInfo = this.systemList.find(el => el.name === this.pageName)
    },
    methods: {
        getImageUrl
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
        padding: 38px 45px 55px
        z-index: 12
        display: flex
        flex-direction: column
        justify-content: flex-start
    &__label
        width: fit-content
        border-radius: 40px
        padding: 8px 28px
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
        margin-bottom: 26px
        text-align: left
    &__text
        font-weight: 500
        font-size: 16px
        line-height: 24px
        color: #FFFFFF
        max-width: 540px
.filters
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 11px
    &__hero
        display: flex
        align-items: center
    &__item
        font-size: 14px
        line-height: 171%
        color: #42474D
        padding: 4px 10px
        background: transparent
        transition: background .3s ease
        border-radius: 8px
        cursor: pointer
        &.active
            background: #D5E0F5
    &__icons
        display: flex
        align-items: center
    &__icon
        height: 18px
        margin-left: 24px
        cursor: pointer
        &.active
            & svg path
                fill: var(--primary-color)
</style>