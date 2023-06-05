<template>
  <div :class="pageName" @click="globalClick">
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
    mounted() {
      console.clear()
    },
    computed: {
      pageName() {
        return this.$route.name
      }
    },
    methods: {
      globalClick() {
        this.$showHint.value = false
      }
    }
}
</script>

<style scoped lang="sass">
.services
  background: linear-gradient(180deg, #F6F6FA 0%, rgba(237, 237, 237, 0) 100%)
.catalog
  background: linear-gradient(180deg, #F6F6FA 0%, rgba(237, 237, 237, 0) 100%)
  min-height: 100vh
  display: flex
  flex-direction: column
.catalog-system
  background: linear-gradient(180deg, #F6F6FA 0%, rgba(237, 237, 237, 0) 100%)
.cart
  background: linear-gradient(180deg, #F6F6FA 0%, rgba(237, 237, 237, 0) 100%)
  min-height: 100vh
  display: flex
  flex-direction: column
.card
  background: linear-gradient(180deg, #F6F6FA 0%, rgba(237, 237, 237, 0) 100%)
.search
  background: linear-gradient(180deg, #F6F6FA 0%, rgba(237, 237, 237, 0) 100%)
</style>
