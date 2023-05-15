<template>
  <main>
      <div class="container">
          <div class="breadcrumbs">
              <BreadCrumbs />
          </div>
      </div>
  </main>
</template>

<script>
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs.vue'

export default {
    components: {
        BreadCrumbs,
    },
    mounted(){
        window.scrollTo(0, 0);
    },
}
</script>

<style scoped lang="sass">

</style>