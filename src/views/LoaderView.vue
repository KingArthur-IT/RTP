<template>
  <main class="loader-main">
    <div class="loader">
      <Loader />
    </div>
  </main>
</template>

<script>
import Loader from '../components/UIKit/Loader.vue'

export default {
  components: {
    Loader
  },
}
</script>

<style scoped lang="sass">
.loader-main
  min-height: 150vh
.loader
  margin-top: 40px
</style>