<template>
  <div class="head">
      <div class="container">
          <div class="head__hero">
              <router-link to="/catalog">
                <button class="head__catalog">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H1.66667V1.66667H0V0ZM0 4.16667H1.66667V5.83333H0V4.16667ZM0 8.33333H1.66667V10H0V8.33333ZM13.3333 1.66667V0H3.3525V1.66667H12.3333H13.3333ZM3.33333 4.16667H13.3333V5.83333H3.33333V4.16667ZM3.33333 8.33333H13.3333V10H3.33333V8.33333Z" fill="white"/>
                    </svg>
                    <span>Каталог товаров</span>
                </button>
              </router-link>
              <RoundSearchButton class="head__search" />
              <Busket />
          </div>
      </div>
  </div>
</template>

<script>
import Busket from '../UIKit/Busket.vue'
import RoundSearchButton from '../UIKit/RoundSearchButton.vue'

export default {
    components: {
        RoundSearchButton,
        Busket
    },
}
</script>

<style scoped lang="sass">
.head
    padding: 30px 0 44px
    &__hero
        display: flex
        align-items: center
    &__catalog
        background: var(--primary-color)
        border-radius: 3px
        display: flex
        align-items: center
        justify-content: center
        padding: 11px 38px
        transition: filter .3s ease
        margin-right: 100px
        & svg
            margin-right: 15px
        & span
            font-size: 16px
            color: #fff
        &:hover
            filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))
    &__search
        margin-right: 40px
        width: 46vw

@media screen and (max-width: 1600px)
    .head
        padding: 20px 0 28px
        &__catalog
            margin-right: 65px
            padding: 9px 29px
            & span
                font-size: 10px
        &__search
            margin-right: 34px
            width: 49vw
</style>