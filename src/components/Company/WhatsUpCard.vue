<template>
  <div class="whatsup">
      <div class="whatsup__hero">
          <div class="whatsup__title">WhatsApp</div>
          <a href="https://wa.me/79257405262" class="whatsup__phone">+7 (925) 740 52 62</a>
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
        padding: 30px
    &__title
        font-weight: 700
        font-size: 22px
        text-align: right
        color: var(--primary-color)
        margin-bottom: 12px
    &__phone
        color: #42474D
        font-weight: 700
        font-size: 22px
        text-align: right
        display: block
    &__logo
        position: absolute
        left: 0
        top: auto
        bottom: 0

@media screen and (max-width: 1600px)
    .whatsup
        &__logo
            position: absolute
            left: 0
            top: 10px
            bottom: 10px
            height: calc(100% - 20px)
</style>