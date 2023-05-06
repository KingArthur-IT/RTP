<template>
  <main>
    <div class="container">
      <BanerCarousel class="baner" />
      <SystemsList />
      <ActionForm />
    </div>
  </main>
</template>

<script>
import ActionForm from '../components/HomePage/ActionForm.vue'
import BanerCarousel from '../components/HomePage/BanerCarousel.vue'
import SystemsList from '../components/HomePage/SystemsList.vue'

export default {
  components: {
    BanerCarousel,
    SystemsList,
    ActionForm
  }
}
</script>

<style scoped lang="sass">
.baner
  margin-bottom: 25px
</style>