<template>
  <main>
    <div class="container">
      <BreadCrumbs />
    </div>

    <div class="system-baner">
      <BanerSystem />
    </div>

    <div class="info-wrapper">
      <div class="container">
        <SystemInfo />
      </div>
    </div>

    <LearnCatalog />

    <div class="benefits-wrapper">
      <div class="container">
        <SalesBenefits class="system-benefits" />
        <ExamplesCarousel />
      </div>
    </div>

    <CompareSystem />

    <div class="system-mounting">
      <div class="container">
        <MountingService class="mounting-service" />
      </div>
    </div>
      <ActionForm class="action-form" />
  </main>
</template>

<script>
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs.vue'
import BanerSystem from '../components/SystemPage/BanerSystem.vue'
import CompareSystem from '../components/SystemPage/CompareSystem.vue'
import ExamplesCarousel from '../components/SystemPage/ExamplesCarousel.vue'
import LearnCatalog from '../components/SystemPage/LearnCatalog.vue'
import SalesBenefits from '../components/SystemPage/SalesBenefits.vue'
import SystemInfo from '../components/SystemPage/SystemInfo.vue'
import MountingService from '../components/HomePage/MountingService.vue'
import ActionForm from '../components/SystemPage/ActionForm.vue'

export default {
  components: {
    BreadCrumbs,
    BanerSystem,
    SystemInfo,
    LearnCatalog,
    SalesBenefits,
    ExamplesCarousel,
    CompareSystem,
    MountingService,
    ActionForm,
  },
  mounted(){
    window.scrollTo(0, 0);
  },
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
.system-baner
  margin-top: 46px
.benefits-wrapper
  position: relative
  &::before
    background: linear-gradient(180deg, rgba(37, 152, 210, 0.1) 2.21%, rgba(130, 211, 252, 0) 98.28%)
    content: ''
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    pointer-events: none
.system-benefits
  padding: 87px 0 72px
.system-mounting
  margin-top: -224px
  margin-bottom: 200px

@media screen and (max-width: 1600px)
  .system-baner
    margin-top: 23px
  .system-benefits
    padding: 85px 0 100px
  .system-mounting
    margin-top: -140px
    margin-bottom: 32px
</style>