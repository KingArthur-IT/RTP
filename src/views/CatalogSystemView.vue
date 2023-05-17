<template>
  <main>
    <div class="container">
      <div class="breadcrumbs">
        <BreadCrumbsSecondLevel />
      </div>
      <div class="catalog-system">
        <div class="catalog-system__filters">
          <SystemFilters 
            :categoriesList="categories" 
            @applyFilters="applyFilters"
          />
        </div>
        <div class="catalog-system__hero">
          <SystemCatalogHero :cardsList="filteredProducts" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import BreadCrumbsSecondLevel from '../components/BreadCrumbs/BreadCrumbsSecondLevel.vue';
import SystemCatalogHero from '../components/SystemCatalog/SystemCatalogHero.vue';
import SystemFilters from '../components/SystemCatalog/SystemFilters.vue';
import { getCatalog, getProductsOfSelectedSystem } from '@/use/middleware.js'
import { isSelectedSystem } from '@/use/helpers.js'

export default {
  components: {
    BreadCrumbsSecondLevel,
    SystemFilters,
    SystemCatalogHero
  },
  data() {
    return {
      categories: [],
      allProducts: [],
      filteredProducts: []
    }
  },
  async mounted() {
    window.scrollTo(0, 0);
    const catalog = await this.getCatalog()

    const categoriesList = catalog.filter(c => this.isSelectedSystem(this.$route.params.name, c.NAME))
    
    this.allProducts = await this.getProductsOfSelectedSystem(categoriesList[0].list.map(c => { return c.ID }))

    const productsCatIdsArr = Object.values(this.allProducts)
      .map(el => { return el.arFields.IBLOCK_SECTION_ID })
      .reduce((acc, el) => {
          acc[el] = ( acc[el] || 0 ) + 1
          return acc
      }, {})

    categoriesList[0].list.forEach(element => {
      if (productsCatIdsArr[element.ID])
        this.categories.push({ isSelected: false, ...element })
    });

    this.allProducts = this.allProducts.map(pr => {
      return {
        ID: pr.arFields.ID,
        IBLOCK_SECTION_ID: pr.arFields.IBLOCK_SECTION_ID,
        NAME: pr.arFields.NAME,
        PREVIEW_PICTURE: pr.arFields.PREVIEW_PICTURE,
        PREVIEW_TEXT: pr.arFields.PREVIEW_TEXT,
        CREATED_DATE: pr.arFields.DATE_CREATE_UNIX,
        PRICE: pr.arPrice.PRICE,
        info: [
          { description: pr.arProps.DIAMETR.NAME, value: pr.arProps.DIAMETR.VALUE },
          { description: pr.arProps.DLINA.NAME, value: pr.arProps.DLINA.VALUE },
        ]
      }
    })
  },
  methods: {
    getCatalog, 
    getProductsOfSelectedSystem,
    isSelectedSystem,
    applyFilters(filters) {
      console.log(filters);
      // selectedCategories: this.categoriesList.filter(c => c.isSelected),
      //           minPrice: this.rangeMinValue,
      //           maxPrice: this.rangeMaxValue
      console.log(this.allProducts);
      this.filteredProducts = this.allProducts 
        .filter(p => Number(p.PRICE) >= filters.minPrice && Number(p.PRICE) <= filters.maxPrice)
        .filter(p => {
          return filters.selectedCategories.some(c => c.ID === p.IBLOCK_SECTION_ID) || !filters.selectedCategories.length
        })
    }
  },
  watch: {
    allProducts() {
      this.filteredProducts = this.allProducts
    }
  }
}
</script>

<style scoped lang="sass">
.breadcrumbs
  margin-top: 10px
.catalog-system
    margin-top: 50px
    display: flex
    justify-content: space-between
    margin-bottom: 114px
    &__filters
      width: 320px
      margin-right: 44px
    &__hero
      flex-grow: 1

@media screen and (max-width: 1600px)
  .catalog-system
      &__filters
        width: 220px
        margin-right: 30px
</style>