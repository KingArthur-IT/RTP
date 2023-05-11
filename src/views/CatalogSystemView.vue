<template>
  <main>
    <div class="container">
      <BreadCrumbsSecondLevel />
      <div class="catalog-system">
        <div class="catalog-system__filters">
          <SystemFilters />
        </div>
        <div class="catalog-system__hero">
          <SystemCatalogHero />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import BreadCrumbsSecondLevel from '../components/BreadCrumbs/BreadCrumbsSecondLevel.vue';
import SystemCatalogHero from '../components/SystemCatalog/SystemCatalogHero.vue';
import SystemFilters from '../components/SystemCatalog/SystemFilters.vue';

export default {
  components: {
    BreadCrumbsSecondLevel,
    SystemFilters,
    SystemCatalogHero
  },
  data() {
    return {

    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
}
</script>

<style scoped lang="sass">
.catalog-system
    margin-top: 50px
    display: flex
    justify-content: space-between
    &__filters
      width: 320px
      margin-right: 44px
    &__hero
      flex-grow: 1
</style>