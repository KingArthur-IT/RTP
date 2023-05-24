<template>
  <main>
      <div class="container">
            <BreadCrumbs />
            <div v-if="isLoaded" class="search">
                <h1 class="search__title">Результаты поиска</h1>
                <div class="search__text">{{ resultText }}</div>
                <div v-if="!searchResults.length" class="search__no-results-btn" @click="$router.push({ name: 'catalog' })">
                    <button>Перейти в каталог</button>
                </div>
                <div v-else class="filters-wrapper">
                    <FiltersRow v-model:activeFilter="filterValue" v-model:displayMode="dispayModeValue"/>
                </div>
            </div>
            <!-- loader -->
            <div v-else class="loader-wrapper">
                <Loader />
            </div>
            <div v-if="dispayModeValue === 'col'" class="search-hero-col">
                <div v-for="item in filteredResults.slice(0, currentCardsCount)" :key="item.id" class="search-hero-col__card">
                    <ProductCard 
                        v-model:count="item.count"
                            :id="item.ID" 
                            :description="item.PREVIEW_TEXT"
                            :newPrice="item.PRICE"
                            :oldPrice="item.PRICE"
                            :isBenefitShown="true"
                            :isInCart="item.isInCart"
                            :photoes="item.photoes"
                            @addedToCart="addedToCart"
                            @updateCountInCart="updateCountInCart"
                            @deleteFromCart="deleteFromCart"
                    />
                </div>
            </div>
            <div v-else class="search-hero-row">
                <div v-for="item in filteredResults.slice(0, currentCardsCount)" :key="item.id" class="search-hero-row__card">
                    <ProductHorizontalCard 
                        v-model:count="item.count"
                        :id="item.ID" 
                        :title="item.NAME"
                        :price="item.PRICE"
                        :description="item.PREVIEW_TEXT"
                        :infoList="item.info"
                        :isInCart="item.isInCart"
                        :photoes="item.photoes"
                        @addedToCart="addedToCart"
                        @updateCountInCart="updateCountInCart"
                        @deleteFromCart="deleteFromCart"
                    />
                </div>
            </div>
            <!-- <div class="suggestions-wrapper">
                <SuggestSection :list="suggestionsList" />
            </div> -->
            <div class="search-system-list">
                <SearchSystemsList />
            </div>
      </div>
  </main>
</template>

<script>
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs.vue'
import FiltersRow from '../components/Search/FiltersRow.vue'
import SearchSystemsList from '../components/Search/SearchSystemsList.vue'
import SuggestSection from '../components/Search/SuggestSection.vue'
import ProductCard from '../components/UIKit/ProductCard.vue'
import ProductHorizontalCard from '../components/UIKit/ProductHorizontalCard.vue'
import { searchProducts, getBacketProducts, addProductToBacket, deleteCartItem } from '@/use/middleware.js'
import Loader from '../components/UIKit/Loader.vue'

export default {
    components: {
        BreadCrumbs,
        SuggestSection,
        FiltersRow,
        ProductCard,
        ProductHorizontalCard,
        SearchSystemsList,
        Loader
    },
    data() {
        return {
            cartId: 0,
            searchValue: '',
            filteredResults: [],
            searchResults: [],
            productsInCart: [],
            suggestionsList: [
                { id: '1', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '189', oldPrice: '262' },
                { id: '2', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '189', oldPrice: '262' },
                { id: '3', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '189', oldPrice: '262' },
                { id: '4', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '189', oldPrice: '262' },
                { id: '5', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '189', oldPrice: '262' },
            ],
            filterValue: 'popular',
            dispayModeValue: 'col',
            maxCardsPerPage: 5,
            currentCardsCount: 10,
            isLoaded: false
        }
    },
    async mounted() {
        await this.getSearchData()
        
        let previousY = 0
        let previousRatio = 0

        //Scroll animation
        const suggestionBlock = document.querySelector('.suggestions-wrapper');
        const showMoreObserver = new IntersectionObserver(entries => {
            const currentY = entries[0].boundingClientRect.y
            const currentRatio = entries[0].intersectionRatio
            const isIntersecting = entries[0].isIntersecting

            if (currentY < previousY)
                if (currentRatio > previousRatio && isIntersecting) {
                    entries.forEach(entry => {
                        if (this.filteredResults.length) {
                            this.currentCardsCount += this.maxCardsPerPage
                        }
                    })
                }

            previousY = currentY
            previousRatio = currentRatio
        }, {
            rootMargin: '-200px',
        });

        showMoreObserver.observe(suggestionBlock);
    },
    computed: {
        resultText() {
            if (!this.searchResults?.length)
                return `По вашему запросу «${this.searchValue}» ничего не нашлось. Попробуйте поискать товар вручную.`
            if (this.searchResults?.length === 1)
                return `По вашему запросу «${this.searchValue}» найден 1 товар.`
            return `По вашему запросу «${this.searchValue}» найдено ${this.searchResults.length} товаров.`
        },
    },
    methods: {
        searchProducts, getBacketProducts, addProductToBacket, deleteCartItem,
        async getSearchData() {
            this.filteredResults = []
            this.isLoaded = false

            this.searchValue = this.$route.query.search
            const cardsList = await this.searchProducts(this.searchValue)

            this.cartId = localStorage.getItem('cartId') || 0
            //получить товары из корзины
            const cartPrd = await this.getBacketProducts(this.cartId)
            this.productsInCart = cartPrd.map(p => { return { id: p.prod_id, count: p.count} })

            //трансформировать данные из массива продуктов
            const propsArray = ['DIAMETR', 'TOLSHCHINA_STENKI', 'TSVET']
            this.searchResults = cardsList.map(el => { 
                const infoList = []
                propsArray.forEach((propName) => {
                    if (el.arProps[propName].VALUE)
                    infoList.push({ description: el.arProps[propName].NAME, value: el.arProps[propName].VALUE })
                })
                const isInCart = this.productsInCart.some(pr => pr.id == el.arFields.ID)
                const count = isInCart ? this.productsInCart.find(pr => pr.id == el.arFields.ID).count : 1
                return {
                    isInCart: isInCart, 
                    count: count,
                    ID: el.arFields.ID,
                    IBLOCK_SECTION_ID: el.arFields.IBLOCK_SECTION_ID,
                    NAME: el.arFields.NAME,
                    PREVIEW_PICTURE: el.arFields.PREVIEW_PICTURE,
                    PREVIEW_TEXT: el.arFields.PREVIEW_TEXT,
                    PRICE: el.arPrice.PRICE,
                    CREATED_DATE: el.arFields.DATE_CREATE_UNIX,
                    info: infoList,
                    photoes: el.arPhoto
                }
            })

            this.filteredResults = this.searchResults
            this.isLoaded = true
        },
        addedToCart({ id, count }) { //нажата кнопка добавить в корзину
            const product = this.filteredResults.find(el => el.ID == id)
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
                this.filteredResults.find(p => p.ID == id).isInCart = false

                const cartCount = localStorage.getItem('cartCount')
                this.$cartCount.value = Number(cartCount) - 1
                localStorage.setItem('cartCount', cartCount - 1)
            }
        }
    },
    watch: {
        filterValue() {
            this.currentCardsCount = 10

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
                if ( a.CREATED_DATE > b.CREATED_DATE )
                    return -1;
                if ( a.CREATED_DATE < b.CREATED_DATE )
                    return 1;
                return 0;
            }

            if (this.filterValue === 'cheap')
                this.filteredResults.sort(compareFromCheap)
            if (this.filterValue === 'expansive')
                this.filteredResults.sort(compareFromExpansive)
            if (this.filterValue === 'popular')
                this.filteredResults.sort(compareStars)
            if (this.filterValue === 'new')
                this.filteredResults.sort(compareDate)
        },
        '$route.query.search': {
            handler() {
                this.getSearchData()
            }
        }
    }
}
</script>

<style scoped lang="sass">
.loader-wrapper
    margin-top: 71px
.search
    margin-top: 71px
    &__title
        font-weight: 700
        font-size: 40px
        color: var(--primary-color)
        margin-bottom: 34px
    &__text
        font-size: 16px
        color: #000000
        margin-bottom: 52px
    &__no-results-btn
        margin-bottom: 118px
        & button
            border: 2px solid var(--primary-color)
            border-radius: 3px
            min-height: 45px
            min-width: 230px
            color: var(--primary-color)
            display: flex
            align-items: center
            justify-content: center
            background: transparent
            font-weight: 700
            font-size: 17px
            transition: color .3s ease, background .3s ease, filter .3s ease
            &:hover
                background: var(--primary-color)
                color: #fff
                filter: drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.25))

.filters-wrapper
    margin-bottom: 30px

.search-hero-col
    display: flex
    flex-wrap: wrap
    width: calc( 100% + 30px )
    transform: translateX(-15px)
    &__card
        flex-basis: 20%
        padding: 15px
.search-hero-row
    display: flex
    flex-direction: column
    width:100%
    &__card
        flex-basis: 100%
        margin-bottom: 20px

.search-system-list
    margin: 78px 0 112px
</style>