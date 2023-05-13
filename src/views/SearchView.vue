<template>
  <main>
      <div class="container">
            <BreadCrumbs />
            <div class="search">
                <h1 class="search__title">Результаты поиска</h1>
                <div class="search__text">{{ resultText }}</div>
                <div v-if="!searchResults.length" class="search__no-results-btn" @click="$router.push({ name: 'catalog' })">
                    <button>Перейти в каталог</button>
                </div>
                <div v-else class="filters-wrapper">
                    <FiltersRow v-model:activeFilter="filterValue" v-model:displayMode="dispayModeValue"/>
                </div>
            </div>
            <div v-if="dispayModeValue === 'col'" class="search-hero-col">
                <div v-for="item in searchResults.slice(pageStartVal, pageEndVal)" :key="item.id" class="search-hero-col__card">
                    <ProductCard 
                        :id="item.id" 
                        :description="item.description"
                        :newPrice="item.newPrice"
                        :oldPrice="item.oldPrice"
                        :isBenefitShown="false"
                    />
                </div>
            </div>
            <div v-else class="search-hero-row">
                <div v-for="item in searchResults.slice(pageStartVal, pageEndVal)" :key="item.id" class="search-hero-row__card">
                    <ProductHorizontalCard 
                        :id="item.id" 
                        :title="item.title"
                        :price="item.newPrice"
                        :description="item.description"
                        :infoList="item.info"
                    />
                </div>
            </div>
            <div v-if="isMoreBtnShown" class="more-btn" @click="showMore">
                <DarkRectButton :text="'Показать еще'" />
            </div>
            <div v-if="isMoreBtnShown" class="pagination">
                <div v-if="currentPage != 1" class="pagination__btn" @click="currentPage --">
                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1L1 10L11 19" stroke="#42474D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div 
                    v-for="(item, i) in paginationItems" :key="i" 
                    class="pagination__item"
                    :class="{'active': i + 1 == currentPage}"
                    @click="currentPage = i + 1"
                >{{ item }}</div>
                <div v-if="currentPage != pagesCount" class="pagination__btn" @click="currentPage ++">
                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19L11 10L1 1" stroke="#42474D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <SuggestSection :list="suggestionsList" />
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
import DarkRectButton from '../components/UIKit/DarkRectButton.vue'
import ProductCard from '../components/UIKit/ProductCard.vue'
import ProductHorizontalCard from '../components/UIKit/ProductHorizontalCard.vue'

export default {
    components: {
        BreadCrumbs,
        SuggestSection,
        FiltersRow,
        ProductCard,
        ProductHorizontalCard,
        DarkRectButton,
        SearchSystemsList
    },
    data() {
        return {
            searchValue: '',
            searchResults: [
                { id: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 2, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 3, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 4, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 5, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 6, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 7, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 8, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 9, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 10, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 11, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 12, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 13, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 14, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 15, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 16, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: 17, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262, info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
            ],
            suggestionsList: [
                { id: 1, description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262 },
                { id: 2, description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262 },
                { id: 3, description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262 },
                { id: 4, description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262 },
                { id: 5, description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: 189, oldPrice: 262 },
            ],
            cardsPerPage: 10,
            currentPage: 1,
            filterValue: 'popular',
            dispayModeValue: 'col'
        }
    },
    mounted() {
        this.searchValue = this.$route.query.search
    },
    computed: {
        resultText() {
            if (!this.searchResults.length)
                return `По вашему запросу «${this.searchValue}» ничего не нашлось. Попробуйте поискать товар вручную.`
            if (this.searchResults.length === 1)
                return `По вашему запросу «${this.searchValue}» найден 1 товар.`
            return `По вашему запросу «${this.searchValue}» найдено ${this.searchResults.length} товаров.`
        },
        isMoreBtnShown() {
            return this.searchResults.length > this.cardsPerPage
        },
        pageStartVal() {
            return (this.currentPage - 1) * this.cardsPerPage
        },
        pageEndVal() {
            return this.currentPage * this.cardsPerPage
        },
        pagesCount() {
            return  Math.ceil(this.searchResults.length / this.cardsPerPage)
        },
        paginationItems() {
            if (this.pagesCount > 6)
                return ['1', '2', '3', '4', '...', this.pagesCount]
            else {
                const arr = []
                for (let i = 0; i < this.pagesCount; i++)
                    arr.push(i + 1)
                return arr
            }
        }
    },
    methods: {
        showMore() {
            this.cardsPerPage += 10
            this.currentPage = 1
        },
    }
}
</script>

<style scoped lang="sass">
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
.more-btn
    margin-top: 39px
    width: 100%
    height: 37px

.pagination
    display: flex
    align-items: center
    justify-content: center
    margin-top: 65px
    &__item
        cursor: pointer
        font-weight: 500
        font-size: 20px
        color: #42474D
        padding: 4px 10px
        margin: 0 5px
        border-radius: 50%
        transition: color .3s ease, background .3s ease
        &.active
            color: #fff
            background: var(--primary-color)
    &__btn
        cursor: pointer
        padding: 4px 10px
        margin: 0 5px
.search-system-list
    margin: 78px 0 112px
</style>