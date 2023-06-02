<template>
  <main>
    <div class="container">
      <div class="breadcrumbs">
        <BreadCrumbs />
      </div>
      <div v-if="!isLoaded" class="loader">
          <Loader />
      </div>
      <div v-if="isLoaded" class="catalog">
        <div v-for="card in catalogList" :key="card.ID" class="catalog__card">
          <GeneralCatalogCard
            :title="card.NAME"
            :data="card.list"
            :pageName="getPageName(card.NAME)"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import GeneralCatalogCard from '../components/Catalog/GeneralCatalogCard.vue'
import { getPageName } from '@/use/helpers.js'
import { getCatalog, getAllCategoriesCount } from '@/use/middleware.js'
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs.vue'
import Loader from '../components/UIKit/Loader.vue'

export default {
  components: {
    GeneralCatalogCard,
    BreadCrumbs,
    Loader
  },
  data() {
    return {
      catalogList: [],
      sectionIdCounts: [],
      isLoaded: false
    }
  },
  async mounted(){
    window.scrollTo(0, 0);
    this.catalogList = await this.getCatalog()
    this.sectionIdCounts = await this.getAllCategoriesCount()

    this.catalogList.forEach(cat => {
      cat.list.forEach(subcat => {
        subcat.count = this.sectionIdCounts[subcat.ID] || 0
      })
    })

    this.isLoaded = true
  },
  methods: {
    getCatalog, 
    getAllCategoriesCount,
    getPageName
  }
}
</script>

<style scoped lang="sass">
.loader
  margin-top: 40px
.catalog
  margin: 33px 0 74px
  width: calc( 100% + 20px )
  transform: translateX(-10px)
  display: grid
  grid-template-columns: repeat(6, 1fr)
  grid-template-rows: repeat(4, auto)
  grid-column-gap: 0px
  grid-row-gap: 0px
  &__card
    padding: 10px
    height: 100%
    &:nth-child(1)
      grid-area: 1 / 1 / 3 / 3
    &:nth-child(2)
      grid-area: 1 / 3 / 2 / 5
    &:nth-child(3)
      grid-area: 1 / 5 / 2 / 7
    &:nth-child(4)
      grid-area: 2 / 3 / 3 / 7
    &:nth-child(5)
      grid-area: 3 / 1 / 4 / 4
    &:nth-child(6)
      grid-area: 3 / 4 / 4 / 7
    &:nth-child(7)
      grid-area: 4 / 1 / 5 / 4
    &:nth-child(8)
      grid-area: 4 / 4 / 5 / 7

@media screen and (max-width: 1600px)
  .catalog
    margin: 13px 0 84px
</style>