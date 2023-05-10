<template>
  <div class="cookies">
      <div class="container">
          <div class="cookies__hero">
              <div class="cookies__text">
                  Мы используем файлы cookie для вашего удобства пользования сайтом и повышения качества рекомендаций.
              </div>
              <a href="#" class="cookies__details">Подробнее</a>
              <div class="cookies__btn" @click="acceptCookies">
                  <LightRectButton :isAgreeBtn="true" :text="'Я согласен'" />
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import LightRectButton from '../UIKit/LightRectButton.vue'

export default {
    components: {
        LightRectButton
    },
    methods: {
        acceptCookies() {
            this.setCookie('cookies__accept', true, 100)
            this.$emit('acceptCookes')
        },
        setCookie(cname, cvalue, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
    }
}
</script>

<style scoped lang="sass">
.cookies
    background: #42474D
    padding: 24px 0 29px
    border-top: 1px solid #D9D9D9
    position: fixed
    bottom: 0
    left: 0
    right: 0
    &__hero
        display: flex
        align-items: center
        justify-content: center
    &__text
        color: #fff
        font-weight: 700
        font-size: 14px
    &__details
        font-weight: 700
        font-size: 14px
        color: #2598D2
        margin: 0 27px 0 16px
    &__btn
        min-width: 154px
        height: 34px

@media screen and (max-width: 1600px)
    .cookies
        padding: 10px 0 13px
        &__text
            font-size: 10px
        &__details
            font-size: 10px
            margin: 0 14px 0 6px
        &__btn
            min-width: 100px
            max-height: 23px
</style>