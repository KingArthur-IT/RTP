<template>
  <main>
    <div class="container">
      <BanerCarousel class="baner" />
      <SystemsList />
    </div>
  </main>
</template>

<script>
import BanerCarousel from '../components/HomePage/BanerCarousel.vue'
import SystemsList from '../components/HomePage/SystemsList.vue'

export default {
  components: {
    BanerCarousel,
    SystemsList
  }
}
</script>

<style scoped lang="sass">
.baner
  margin-bottom: 25px
</style>