<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__hero">
        <FooterHead />
        <FooterSocials />
      </div>
    </div>
    <div>
      <FooterCookies v-if="!isCookiesAccepted" @acceptCookes="isCookiesAccepted = true" />
    </div>
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
  },
  data() {
    return {
      isCookiesAccepted: false
    }
  },
  mounted() {
    this.isCookiesAccepted = !!this.getCookie('cookies__accept')
  },
  methods: {
    getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
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