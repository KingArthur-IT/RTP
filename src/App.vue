<template>
  <div :class="pageName">
    <main-header></main-header>
    <RouterView />
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from '@/components/Header/MainHeader.vue'
import MainFooter from '@/components/Footer/MainFooter.vue'
import { RouterView } from 'vue-router'

export default {
    components: {
        MainHeader,
        MainFooter
    },
    computed: {
      pageName() {
        return this.$route.name
      }
    }
}
</script>

<style scoped lang="sass">
.services
  background: linear-gradient(180deg, #F6F6FA 0%, rgba(237, 237, 237, 0) 100%)
</style>
