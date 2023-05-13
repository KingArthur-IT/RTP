<template>
  <div class="learn">
      <img src="@/assets/alpha-info/basket.png" alt="basket" class="learn__img">
      <div class="learn__hero">
        <div class="learn__title">Нет времени самостоятельно <br> изучать каталог? </div>
        <div class="learn__text">Менеджер соберет корзину по Вашему списку!</div>
      </div>
      <div class="learn__btn-wrap" @click="isModalShow = true">
        <DarkRectButton :text="'Соберите мне корзину'" />
      </div>
  </div>
  <Modal 
      v-model:open="isModalShow"
      :title="'Соберите мне корзину'"
      :descriptionHtml="'Пожалуйста, заполните обязательные поля, <br> и мы с Вами свяжемся.'"
  />
</template>

<script>
import DarkRectButton from '../UIKit/DarkRectButton.vue'
import Modal from '../Modals/Modal.vue'

export default {
    components: {
        DarkRectButton,
        Modal
    },
    data() {
        return {
            isModalShow: false
        }
    },
}
</script>

<style scoped lang="sass">
.learn
    position: relative
    display: flex
    &::before
        content: ''
        position: absolute
        background: linear-gradient(90deg, #224386 16.22%, #82D3FC 98.28%)
        width: 100%
        left: 0
        right: 0
        top: 0
        bottom: 0
        pointer-events: none
        z-index: 0
    &::after
        content: ''
        position: absolute
        right: 40px
        bottom: 0
        top: 0
        min-width: 333px
        background: url('@/assets/alpha-info/logo.png') no-repeat
        background-size: contain
        background-position-x: 100%
        opacity: 0.4
        z-index: 0
        pointer-events: none
    &__img
        margin-left: 24px
        height: 100%
    &__hero
        color: #fff
        padding: 46px 10px 70px 65px
    &__title
        font-weight: 700
        font-size: 45px
        line-height: 122%
        margin-bottom: 18px
    &__text
        font-weight: 500
        font-size: 25px
    &__btn-wrap
        min-width: 363px
        min-height: 54px
        align-self: center
        margin-left: auto
        margin-right: 200px

@media screen and (max-width: 1650px)
    .learn
        &::after
            right: 28px
        &__img
            margin-left: 30px
            max-height: 176px
        &__hero
            padding: 25px 10px 40px 60px
        &__title
            font-size: 30px
            margin-bottom: 15px
        &__text
            font-size: 17px
        &__btn-wrap
            min-width: 227px
            min-height: 36px
            margin-right: 133px

</style>