<template>
  <div class="head">
      <div class="footer__contacts-col">
        <router-link to="/">
            <div class="footer__logo" :class="{'cursor-default': isHomePage}">
                <img src="@/assets/footer-logo.png" alt="RTP">
            </div>
        </router-link>
        <div class="footer__title">Оставайтесь на связи</div>
        <div class="footer__contacts">
        <a href="tel:+84955405262" class="footer__contact-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.975 12.0939L15.2484 15.2439C15.1464 15.6892 14.755 16.0008 14.2966 16.0008C6.4125 16.0002 0 9.58768 0 1.70331C0 1.24518 0.311531 0.853308 0.756875 0.751746L3.90687 0.0251839C4.36562 -0.0811285 4.83437 0.156996 5.025 0.591433L6.47875 3.98206C6.64869 4.38143 6.53406 4.84674 6.19812 5.12112L4.51562 6.47205C5.5775 8.63518 7.33625 10.3939 9.5 11.4564L10.8775 9.77517C11.149 9.4383 11.6178 9.32174 12.0172 9.49471L15.4078 10.9481C15.8156 11.1627 16.0813 11.6377 15.975 12.0939Z" fill="white"/>
            </svg>
            <span>8 (495) 540-52-62</span>
        </a>
        <a href="mailto:sale@rtp.ru" class="footer__contact-item">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 9C7.48344 9 6.96688 8.83056 6.52625 8.48719L0 3.4125V10.5C0 11.3281 0.671562 12 1.5 12H14.5C15.3284 12 16 11.3284 16 10.5V3.4125L9.475 8.49063C9.03438 8.83125 8.51562 9 8 9ZM0.509063 2.54063L7.14031 7.7C7.64625 8.09375 8.355 8.09375 8.86094 7.7L15.4922 2.54063C15.7844 2.29063 16 1.90625 16 1.5C16 0.671562 15.3281 0 14.5 0H1.5C0.671562 0 0 0.671562 0 1.5C0 1.90625 0.187813 2.29063 0.509063 2.54063Z" fill="white"/>
            </svg>
            <span>sale@rtp.ru</span>
        </a>
        </div>
        <div>Следите за новинками и акциями</div>
    </div>
    <div class="footer__nav-col">
        <div class="footer__title">Компания</div>
        <div class="nav-wrapper">
        <div class="nav">
            <router-link to="/company">
                <div class="nav__item">О компании</div>
            </router-link>
            <router-link to="/catalog">
                <div class="nav__item">Каталог</div>
            </router-link>
            <router-link to="/services">
                <div class="nav__item">Услуги</div>
            </router-link>
            <router-link to="/payment-methods">
                <div class="nav__item">Оплата</div>
            </router-link>
            <router-link to="/cart">
                <div class="nav__item" :class="{'disabled': !isCartActive}">Корзина</div>
            </router-link>
        </div>
        <div class="nav">
            <router-link to="/delivery-rules">
                <div class="nav__item">Доставка и сервис</div>
            </router-link>
            <router-link to="/contacts">
                <div class="nav__item">Контакты</div>
            </router-link>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            cartCount: 0
        }
    },
    async mounted() {
        const cartId = localStorage.getItem('cartId') || 0
    },
    methods: {
        goToPage(name) {
            if (name === 'cart' && !this.isCartActive) return
            this.$router.push({ name })
        },
        logoClick() {
            if (!this.isHomePage)   
                this.goToPage('home')
        }
    },
    computed: {
        isHomePage() {
            return this.$route.name === 'home'
        },
        isCartActive() {
            return true // this.cartCount > 0
        }
    },
    watch: {
        '$cartCount.value': {
            handler: function() {
                this.cartCount = this.$cartCount.value
            },
            deep: true
            }
    },
}
</script>

<style scoped lang="sass">
.head
    display: flex
.footer
    &__contacts-col
        min-width: 325px
        margin-right: 200px
    &__logo
        width: 190px
        margin-bottom: 63px
        cursor: pointer
        & img
            width: 100%
        &.cursor-default
            cursor: default
    &__title
        font-weight: 700
        font-size: 18px
        padding-bottom: 8px
        border-bottom: 1px solid #828D99
        margin-bottom: 28px
    &__contacts
        display: flex
        align-items: center
        justify-content: space-between
        margin-bottom: 21px
    &__contact-item
        display: flex
        align-items: center
        color: #fff
        font-weight: 500
        font-size: 14px
        & svg
            margin-right: 13px
    &__nav-col
        min-width: 570px

.nav-wrapper
    display: flex
    justify-content: space-between
.nav
  display: flex
  flex-direction: column
  &__item
    margin-bottom: 20px
    color: #fff
    cursor: pointer
    &.disabled
        cursor: default

@media screen and (max-width: 1600px)
    .footer
        &__contacts-col
            min-width: 260px
            margin-right: 150px
        &__logo
            width: 125px
            margin-bottom: 44px
        &__title
            font-size: 14px
            padding-bottom: 11px
            margin-bottom: 10px
        &__contacts
            margin-bottom: 22px
        &__contact-item
            font-size: 12px
            & svg
                margin-right: 5px
                width: 11px
                height: 11px
        &__nav-col
            min-width: 304px

    .nav
        &__item
            margin-bottom: 18px
</style>