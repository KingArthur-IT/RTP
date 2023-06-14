<template>
  <div :class="pageName" @click="globalClick">
    <div class="stopper"></div>
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
      },
    },
    methods: {
      globalClick() {
        this.$showHint.value = false
      }
    }
}
</script>

<style scoped lang="sass">
.stopper
  position: fixed
  top: 0
  bottom: 0
  right: 0
  left: 0
  z-index: 999
  background: rgba(0, 0, 0, 0.2)
  opacity: 0
  transition: opacity .3s ease
  pointer-events: none
  &.show
    opacity: 1
    pointer-events: all
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
  min-height: 100vh
  display: flex
  flex-direction: column
.search
  background: linear-gradient(180deg, #F6F6FA 0%, rgba(237, 237, 237, 0) 100%)
</style>
