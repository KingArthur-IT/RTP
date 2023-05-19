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
                <div v-for="item in filteredResults.slice(0, currentCardsCount)" :key="item.id" class="search-hero-col__card">
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
                <div v-for="item in filteredResults.slice(0, currentCardsCount)" :key="item.id" class="search-hero-row__card">
                    <ProductHorizontalCard 
                        :id="item.id" 
                        :title="item.title"
                        :price="item.newPrice"
                        :description="item.description"
                        :infoList="item.info"
                    />
                </div>
            </div>
            <div class="suggestions-wrapper">
                <SuggestSection :list="suggestionsList" />
            </div>
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

export default {
    components: {
        BreadCrumbs,
        SuggestSection,
        FiltersRow,
        ProductCard,
        ProductHorizontalCard,
        SearchSystemsList
    },
    data() {
        return {
            searchValue: '',
            filteredResults: [],
            searchResults: [
                { id: '1', date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '189', oldPrice: '262', info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: '2', date: 2, starsCount: 2, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '200', oldPrice: '262', info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: '3', date: 3, starsCount: 3, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '100', oldPrice: '262', info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: '4', date: 4, starsCount: 4, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '190', oldPrice: '262', info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: '5', date: 5, starsCount: 5, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '189', oldPrice: '262', info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: '6', date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '189', oldPrice: '262', info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: '7', date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '189', oldPrice: '262', info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: '8', date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '189', oldPrice: '262', info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: '9', date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '189', oldPrice: '262', info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: '10', date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '189', oldPrice: '262', info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: '11', date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '189', oldPrice: '262', info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: '12', date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '189', oldPrice: '262', info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: '13', date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '189', oldPrice: '262', info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: '14', date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '189', oldPrice: '262', info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: '15', date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '189', oldPrice: '262', info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: '16', date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '189', oldPrice: '262', info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
                { id: '17', date: 1, starsCount: 1, title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', description: 'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.', newPrice: '189', oldPrice: '262', info: [{ description: 'DN номинальный диаметр, мм', value: '20' }, { description: 'Толщина стенок, мм', value: '1,9' }, { description: 'Кол-во в упаковке м/шт', value: '100/25' }, { description: 'Материал', value: 'Полипропилен' }, { description: 'Цвет', value: 'Белый' }] },
            ],
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
            currentCardsCount: 10
        }
    },
    mounted() {
        this.searchValue = this.$route.query.search
        this.filteredResults = this.searchResults

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
                            console.log('123');
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
            if (!this.searchResults.length)
                return `По вашему запросу «${this.searchValue}» ничего не нашлось. Попробуйте поискать товар вручную.`
            if (this.searchResults.length === 1)
                return `По вашему запросу «${this.searchValue}» найден 1 товар.`
            return `По вашему запросу «${this.searchValue}» найдено ${this.searchResults.length} товаров.`
        },
    },
    methods: {

    },
    watch: {
        filterValue() {
            this.currentCardsCount = 10

            const compareFromCheap = ( a, b ) => {
                if ( Number(a.newPrice) < Number(b.newPrice) )
                    return -1;
                if ( Number(a.newPrice) > Number(b.newPrice) )
                    return 1;
                return 0;
            }
            const compareFromExpansive = ( a, b ) => {
                if ( Number(a.newPrice) > Number(b.newPrice) )
                    return -1;
                if ( Number(a.newPrice) < Number(b.newPrice) )
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
                this.filteredResults.sort(compareFromCheap)
            if (this.filterValue === 'expansive')
                this.filteredResults.sort(compareFromExpansive)
            if (this.filterValue === 'popular')
                this.filteredResults.sort(compareStars)
            if (this.filterValue === 'new')
                this.filteredResults.sort(compareDate)
        }
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

.search-system-list
    margin: 78px 0 112px
</style>