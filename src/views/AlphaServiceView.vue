<template>
  <main>
    <div class="container">
      <BreadCrumbs />
      <!-- <MountingService class="mounting-service" /> -->
    </div>
    <BanerSystem />
    <div class="info-wrapper">
      <div class="container">
        <SystemInfo />
      </div>
    </div>
    <LearnCatalog />
    <div class="container">
      <SalesBenefits />
      <ExamplesCarousel />
    </div>
      <!-- <ActionForm class="action-form" /> -->
  </main>
</template>

<script>
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs.vue'
import BanerSystem from '../components/SystemPage/BanerSystem.vue'
import ExamplesCarousel from '../components/SystemPage/ExamplesCarousel.vue'
import LearnCatalog from '../components/SystemPage/LearnCatalog.vue'
import SalesBenefits from '../components/SystemPage/SalesBenefits.vue'
import SystemInfo from '../components/SystemPage/SystemInfo.vue'

// import ActionForm from '../components/HomePage/ActionForm.vue'
// import MountingService from '../components/HomePage/MountingService.vue'

export default {
  components: {
    BreadCrumbs,
    BanerSystem,
    SystemInfo,
    LearnCatalog,
    SalesBenefits,
    ExamplesCarousel
    // ActionForm,
    // MountingService,
  }
}
</script>

<style scoped lang="sass">
.info-wrapper
  position: relative
  &::before
    content: ''
    position: absolute
    bottom: 0
    left: 0
    right: 0
    width: 100%
    height: 50%
    background: linear-gradient(0deg, rgba(37, 152, 210, 0.1) 2.21%, rgba(130, 211, 252, 0) 98.28%)
    pointer-events: none
    z-index: 0
</style>