<template>
  <main>
    <div class="container">
      <BanerCarousel class="baner" />
      <SystemsList />
      <ActionForm class="action-form" />
      <BestSales />
    </div>
    <VideoSection class="video-section" />
    <div class="container">
      <Advantages />
      <MountingService class="mounting-service" />
      <GrovingGeography class="geography-groving" />
    </div>
  </main>
</template>

<script>
import ActionForm from '../components/HomePage/ActionForm.vue'
import BanerCarousel from '../components/HomePage/BanerCarousel.vue'
import SystemsList from '../components/HomePage/SystemsList.vue'
import BestSales from '../components/HomePage/BestSales.vue'
import VideoSection from '../components/HomePage/VideoSection.vue'
import Advantages from '../components/HomePage/Advantages.vue'
import MountingService from '../components/HomePage/MountingService.vue'
import GrovingGeography from '../components/HomePage/GrovingGeography.vue'

export default {
  components: {
    BanerCarousel,
    SystemsList,
    ActionForm,
    BestSales,
    VideoSection,
    Advantages,
    MountingService,
    GrovingGeography
  }
}
</script>

<style scoped lang="sass">
.baner
  margin-bottom: 25px
.action-form
  margin: 92px 0
.video-section
  margin: 66px 0 77px
.mounting-service
  margin: 100px 0 60px
.geography-groving
  margin-bottom: 120px

@media screen and (max-width: 1600px)
  .action-form
    margin: 30px 0 60px
  .video-section
    margin: 45px 0 60px
  .mounting-service
    margin: 52px 0 62px
  .geography-groving
    margin-bottom: 90px
</style>