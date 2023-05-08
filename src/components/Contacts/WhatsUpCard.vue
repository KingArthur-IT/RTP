<template>
  <div class="whatsup">
      <div class="whatsup__hero">
          <div class="whatsup__title">WhatsApp</div>
          <div class="whatsup__phone">+7 (925) 740 52 62</div>
      </div>
      <img src="@/assets/contacts/whatsup.png" alt="" class="whatsup__logo">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
.whatsup
    background: #EDEDED
    height: 100%
    position: relative
    &__hero
        padding: 28px 30px 30px 30px
    &__title
        font-weight: 700
        font-size: 16px
        text-align: right
        color: var(--primary-color)
        margin-bottom: 12px
    &__phone
        color: #42474D
        font-weight: 700
        font-size: 16px
        text-align: right
        display: block
    &__logo
        position: absolute
        left: 0
        top: 10px
        bottom: 0

@media screen and (max-width: 1600px)
    .whatsup
        &__hero
            padding: 22px 16px 16px 16px
        &__title
            font-size: 14px
            margin-bottom: 34px
        &__phone
            font-size: 14px
        &__logo
            position: absolute
            left: 0
            top: 9px
            bottom: auto
            width: 60px
</style>