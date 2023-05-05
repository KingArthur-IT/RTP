<template>
  <header class="header">
      <div class="container">
          <FullHeader v-if="isDesctop" />
          <MobileHeader v-else />
      </div>
  </header>
</template>

<script>
import FullHeader from './FullHeader.vue'
import MobileHeader from './MobileHeader.vue'

export default {
    components: {
        FullHeader,
        MobileHeader
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    data() {
        return {
            windowWidth: 0
        }
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        }
    },
    computed: {
        isDesctop() {
            return this.windowWidth > 1155
        }
    }
}
</script>

<style scoped lang="sass">
.header
    width: 100%
    background-color: var(--primary-color)
    border-radius: 92px
    padding: 22px 0 37px

@media screen and (max-width: 1600px)
    .header
        padding: 20px 0 25px

@media screen and (max-width: 1155px)
    .header
        padding: 18px 0

@media screen and (max-width: 525px)
    .header
        padding: 18px 20px

@media screen and (max-width: 475px)
    .header
        padding: 18px 32px
</style>