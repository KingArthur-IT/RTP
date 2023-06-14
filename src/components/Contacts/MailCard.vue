<template>
  <div class="mail">
      <div class="mail__hero">
          <div class="mail__title">E-mail</div>

          <a href="mailto:info@rtp.ru" class="mail__adress">info@rtp.ru</a>
          <div class="mail__description mail__mb">по остальным вопросам</div>
          
          <a href="mailto:sale@rtp.ru" class="mail__adress">sale@rtp.ru</a>
          <div class="mail__description">по вопросам приобретения<br> продукции</div>
      </div>
      <img src="@/assets/contacts/mail.png" alt="" class="mail__logo">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
.mail
    background: #EDEDED
    height: 100%
    position: relative
    &__hero
        padding: 36px 33px 30px 30px
    &__title
        font-weight: 700
        font-size: 16px
        text-align: right
        color: var(--primary-color)
        margin-bottom: 14px
    &__logo
        position: absolute
        left: 0
        top: 10px
        bottom: 0
    &__adress
        font-weight: 500
        font-size: 16px
        text-align: right
        color: #42474D
        display: block
    &__description
        font-weight: 300
        font-size: 10px
        text-align: right
        color: #42474D
    &__mb
        margin-bottom: 14px

@media screen and (max-width: 1600px)
    .mail
        &__hero
            padding: 28px 12px 30px 20px
        &__title
            font-size: 14px
            margin-bottom: 7px
        &__logo
            position: absolute
            left: 0
            top: 9px
            bottom: auto
            width: 58px
        &__adress
            font-size: 12px
        &__mb
            margin-bottom: 9px
</style>