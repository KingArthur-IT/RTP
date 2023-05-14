<template>
  <div class="gather-basket">
      <img src="@/assets/cart_icon.png" alt="busket" class="gather-basket__img">
      <div class="gather-basket__content">
          <div class="gather-basket__title">Соберите мне корзину</div>
          <div class="gather-basket__text">Доверти покупки профессионалам, загрузите или заполните список и наш менеджер соберет вам корзину </div>
      </div>
      <div class="gather-basket__btn">
          <DarkRectButtonVue @click="$emit('showModal')" :text="'Заказать обратный звонок'" />
      </div>
  </div>
</template>

<script>
import DarkRectButtonVue from '../UIKit/DarkRectButton.vue'

export default {
    components: {
        DarkRectButtonVue,
    },
}
</script>

<style scoped lang="sass">
.gather-basket
    width: 100%
    background: linear-gradient(90deg, #224386 20.72%, rgba(34, 67, 134, 0.8) 47.74%, #82D3FC 98.28%)
    border-radius: 8px
    display: flex
    max-height: 168px
    &__img
        width: 238px
        margin-left: 8px
        margin-right: 38px
    &__content
        margin-top: 30px
    &__title
        font-weight: 500
        font-size: 32px
        color: #FFFFFF
        margin-bottom: 15px
    &__text
        font-size: 20px
        line-height: 125%
        color: #FFFFFF
        max-width: 535px
    &__btn
        width: 282px
        height: 43px
        align-self: center
        margin-left: auto
        margin-right: 17px

@media screen and (max-width: 1600px)
    .gather-basket
        max-height: 168px
        &__img
            width: 175px
            margin-right: 26px
        &__content
            margin-top: 26px
        &__title
            font-size: 22px
            margin-bottom: 7px
        &__text
            font-size: 12px
            max-width: 350px
        &__btn
            width: 200px
            height: 43px
            margin-right: 17px
</style>