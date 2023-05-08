<template>
  <div class="breadcrumbs">
      <div class="breadcrumbs__item home" @click="$router.push({ name: 'home' })">Главная</div>
      <div class="breadcrumbs__icon">
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292969 1.70703L4.58597 6.00003L0.292969 10.293L1.70697 11.707L7.41397 6.00003L1.70697 0.293031L0.292969 1.70703Z" fill="#A6ACB3"/>
          </svg>
      </div>
      <div class="breadcrumbs__item">{{ getPageName }}</div>
  </div>
</template>

<script>
export default {
    computed: {
        getPageName() {
            return this.$route.meta.name
        }
    }
}
</script>

<style scoped lang="sass">
.breadcrumbs
    display: flex
    align-items: center
    &__item
        font-weight: 700
        font-size: 18px
        color: var(--primary-color)
        &.home
            cursor: pointer
            color: #A6ACB3
    &__icon
        padding: 0 12px

@media screen and (max-width: 1600px)
    .breadcrumbs
        &__item
            font-size: 12px
        &__icon
            padding: 0 9px

</style>