<template>
  <div class="catalog-hero">
      <!-- baner -->
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
      <!-- often buy -->
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
      <!-- loader -->
      <span v-if="!isLoaded" class="loader"></span>
      <!-- filters -->
      <div v-if="filteredList.length" class="filters">
          <FiltersRow v-model:activeFilter="filterValue" v-model:displayMode="dispayModeValue"/>
      </div>
      <!-- products list -->
      <p v-if="!filteredList.length && isLoaded" class="no-products">По заданным критериям товары не найдены</p>
        <div v-if="dispayModeValue === 'col'" class="list-col">
            <div v-for="item in filteredList.slice(0, 8)" :key="item.id" class="list-col__card">
                <ProductCard 
                    v-model:count="item.count"
                    :hasShadow="false"
                    :id="item.ID" 
                    :description="item.PREVIEW_TEXT"
                    :newPrice="item.PRICE"
                    :oldPrice="'0'"
                    :isBenefitShown="false"
                    :isInCart="item.isInCart"
                    @addedToCart="addedToCart"
                    @updateCountInCart="updateCountInCart"
                    @deleteFromCart="deleteFromCart"
                />
            </div>
            <div class="list-col__gather">
                <GatherBusket @showModal="isModalShow = true" />
            </div>
            <div v-for="item in filteredList.slice(8, filteredList.length)" :key="item.ID" class="list-col__card">
                <ProductCard 
                    :id="item.ID" 
                    :description="item.PREVIEW_TEXT"
                    :newPrice="item.PRICE"
                    :oldPrice="'0'"
                    :isBenefitShown="false"
                    :isInCart="item.isInCart"
                    @addedToCart="addedToCart"
                    v-model:count="item.count"
                    @updateCountInCart="updateCountInCart"
                    @deleteFromCart="deleteFromCart"
                />
            </div>
        </div>
        <div v-else class="list-row">
            <div v-for="(item, index) in filteredList" :key="item.ID" class="list-row__card">
                <ProductHorizontalCard 
                    :id="item.ID" 
                    :title="item.NAME"
                    :price="item.PRICE"
                    :description="item.PREVIEW_TEXT"
                    :infoList="item.info"
                    :isInCart="item.isInCart"
                    @addedToCart="addedToCart"
                    v-model:count="item.count"
                    @updateCountInCart="updateCountInCart"
                    @deleteFromCart="deleteFromCart"
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
        :formInfo="'form-gather-cart-from-catalog'"
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
import { getBacketProducts, addProductToBacket, deleteCartItem } from '@/use/middleware.js'

export default {
    components: {
        ProductHorizontalCard,
        GatherBusket,
        ProductCard,
        FiltersRow,
        Modal
    },
    props: {
        cardsList: {
            type: Array,
            default: []
        },
        isLoaded: {
            type: Boolean,
            default: true
        }
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
            productsInCart: [],
        }
    },
    async mounted() {
        //получить товары из корзины и трансформировать в { id, count }
        // const cartPrd = await this.getBacketProducts()
        // this.productsInCart = cartPrd.map(p => { return { id: p.prod_id, count: p.count} })

        this.pageName = this.$route.params.name;
        this.banerInfo = this.systemList.find(el => el.name === this.pageName)

        //все товары + данные о том есть ли в корзине и кол-во
        await this.setFilteredList()
    },
    methods: {
        getImageUrl,
        getBacketProducts,
        addProductToBacket,
        deleteCartItem,
        goToCard() {
            this.$router.push({ name: 'card', params: { name: this.$route.params.name || 'alpha' } })
        },
        async setFilteredList() {
            const cartId = localStorage.getItem('cartId') || 0
            //получить товары из корзины и трансформировать в { id, count }
            const cartPrd = await this.getBacketProducts(cartId)
            this.productsInCart = cartPrd.map(p => { return { id: p.prod_id, count: p.count} })

            this.filteredList = this.cardsList.map(el => { 
                const isInCart = this.productsInCart.some(pr => pr.id == el.ID)
                const count = isInCart ? this.productsInCart.find(pr => pr.id == el.ID).count : 1
                return { isInCart: isInCart, count: count, ...el } 
            })
        },
        addedToCart({ id, count }) { //нажата кнопка добавить в корзину
            const product = this.filteredList.find(el => el.ID == id)
            product.isInCart = true
            product.count = count
        },
        async updateCountInCart({ delta, id }) {
            const cartId = localStorage.getItem('cartId') || 0
            console.log('add');
            await this.addProductToBacket(id, delta, cartId)
        },
        async deleteFromCart(id) {
            const cartId = localStorage.getItem('cartId')
            const rez = await deleteCartItem(id, cartId)
            if (rez) {
                this.filteredList.find(p => p.ID == id).isInCart = false

                const cartCount = localStorage.getItem('cartCount')
                this.$cartCount.value = Number(cartCount) - 1
                localStorage.setItem('cartCount', cartCount - 1)
            }
        }
    },
    watch: {
        filterValue() {
            const compareFromCheap = ( a, b ) => {
                if ( Number(a.PRICE) < Number(b.PRICE) )
                    return -1;
                if ( Number(a.PRICE) > Number(b.PRICE) )
                    return 1;
                return 0;
            }
            const compareFromExpansive = ( a, b ) => {
                if ( Number(a.PRICE) > Number(b.PRICE) )
                    return -1;
                if ( Number(a.PRICE) < Number(b.PRICE) )
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
                if ( Number(a.CREATED_DATE) > Number(b.CREATED_DATE) )
                    return -1;
                if ( Number(a.CREATED_DATE) < Number(b.CREATED_DATE) )
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
        },
        async cardsList() {
            await this.setFilteredList()
        }
    }
}
</script>

<style scoped lang="sass">
.no-products
    text-align: center
    color: #42474D
    padding: 10px 0 20px
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
            width: 25%
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

.loader
    width: 60px
    height: 60px
    border-radius: 50%
    position: relative
    animation: rotate 1s linear infinite
    display: block
    margin: auto
    margin-bottom: 20px
    &::before
        content: ""
        box-sizing: border-box
        position: absolute
        inset: 0px
        border-radius: 50%
        border: 5px solid var(--primary-color)
        animation: prixClipFix 2s linear infinite 
    &::after 
        content: ""
        box-sizing: border-box
        position: absolute
        inset: 0px
        border-radius: 50%
        border: 5px solid #FFF
        animation: prixClipFix 2s linear infinite 
        inset: 8px
        transform: rotate3d(90, 90, 0, 180deg )
        border-color: #D5E0F5 

@keyframes rotate 
    0%  
        transform: rotate(0deg)
    100%   
        transform: rotate(360deg)

@keyframes prixClipFix 
    0%   
        clip-path: polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)
    50%  
        clip-path: polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)
    75%, 100%  
        clip-path: polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)


@media screen and (max-width: 1600px)
    .catalog-baner
        margin-bottom: 30px
        &__label
            margin-bottom: 24px
            padding: 9px 22px
            & span
                font-size: 24px
        &__logo
            width: 30px
        &__title
            font-size: 32px
            margin-bottom: 24px
        &__text
            font-size: 14px
            max-width: 540px
    .often-buy
        margin-bottom: 5px
</style>