<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__hero">
        <FooterHead />
        <FooterSocials />
      </div>
    </div>
    <FooterCookies />
  </footer>
</template>

<script>
import FooterCookies from './FooterCookies.vue'
import FooterHead from './FooterHead.vue'
import FooterSocials from './FooterSocials.vue'

export default {
  components: {
    FooterHead,
    FooterSocials,
    FooterCookies
  }
}
</script>

<style scoped lang="sass">
.footer
  background: #42474D
  color: #fff
  font-size: 16px
  &__hero
    padding: 43px
  
@media screen and (max-width: 1600px)
  .footer
    font-size: 14px
    &__hero
      padding: 31px 40px 25px
</style>