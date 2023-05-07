<template>
  <main>
    <div class="container">
      <BanerCarousel class="baner" />
      <SystemsList />
      <ActionForm />
      <BestSales />
    </div>
    <VideoSection />
  </main>
</template>

<script>
import ActionForm from '../components/HomePage/ActionForm.vue'
import BanerCarousel from '../components/HomePage/BanerCarousel.vue'
import SystemsList from '../components/HomePage/SystemsList.vue'
import BestSales from '../components/HomePage/BestSales.vue'
import VideoSection from '../components/HomePage/VideoSection.vue'

export default {
  components: {
    BanerCarousel,
    SystemsList,
    ActionForm,
    BestSales,
    VideoSection
  }
}
</script>

<style scoped lang="sass">
.baner
  margin-bottom: 25px
</style>