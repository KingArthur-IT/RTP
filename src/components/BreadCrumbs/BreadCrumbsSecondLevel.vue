<template>
  <div class="breadcrumbs">
      <div class="breadcrumbs__item home" @click="$router.push({ name: 'home' })">Главная</div>
      <div class="breadcrumbs__icon">
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292969 1.70703L4.58597 6.00003L0.292969 10.293L1.70697 11.707L7.41397 6.00003L1.70697 0.293031L0.292969 1.70703Z" fill="#A6ACB3"/>
          </svg>
      </div>
      <div class="breadcrumbs__item home" @click="$router.push({ name: 'catalog' })">Каталог</div>
      
      <div class="breadcrumbs__icon" :class="{'home': thirdLevel}">
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292969 1.70703L4.58597 6.00003L0.292969 10.293L1.70697 11.707L7.41397 6.00003L1.70697 0.293031L0.292969 1.70703Z" fill="#224386"/>
          </svg>
      </div>
      <div class="breadcrumbs__item" :class="{'home': thirdLevel}" @click="goToPage">{{ getPageDescription }}</div>

      <div v-if="thirdLevel" class="breadcrumbs__icon">
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292969 1.70703L4.58597 6.00003L0.292969 10.293L1.70697 11.707L7.41397 6.00003L1.70697 0.293031L0.292969 1.70703Z" fill="#224386"/>
          </svg>
      </div>
      <div v-if="thirdLevel" class="breadcrumbs__item" v-html="thirdLevel"></div>
  </div>
</template>

<script>
export default {
    mounted() {
        this.pageName = this.$route.params.name;
    },
    props: {
        thirdLevel: {
            type: String,
            default: ''
        },
        thirdLevelPage: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            pageName: ''
        }
    },
    computed: {
        getPageDescription() {
            const page = !!this.thirdLevelPage ? this.thirdLevelPage : this.pageName
            if (page === 'alpha')
                return 'Трубы и фитинги из полипропилена'
            if (page === 'sigma')
                return 'Запорная арматура и латунные резьбовые фитинги'
            if (page === 'delta')
                return 'Система DELTA - Трубы PE-Xa / EVOH и аксиальные фитинги'
            if (page === 'omega')
                return 'Трубы и комплектующие для теплого пола'
            if (page === 'beta-elite')
                return 'Малошумная канализация'
            if (page === 'beta-orange')
                return 'Наружная канализация'
            if (page === 'beta')
                return 'Внутренняя канализация'
            if (page === 'gamma')
                return 'Трубы ПНД и компрессионные фитинги'
        }
    },
    methods: {
        goToPage() {
            if (this.thirdLevel)
                this.$router.push({ name: 'catalog-system', params: this.pageName })
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
        padding: 0 10px
        &.home svg path
            fill: #A6ACB3

@media screen and (max-width: 1600px)
    .breadcrumbs
        &__item
            font-size: 12px
        &__icon
            padding: 0 9px

</style>