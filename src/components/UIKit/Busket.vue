<template>
  <div class="busket" :class="{'no-products': cartCount == 0}" :data-value="cartCount" @click="goToCart">
    <svg class="busket__logo" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.1257 8.66951C23.0184 8.51442 22.8751 8.38766 22.708 8.30009C22.541 8.21252 22.3553 8.16674 22.1667 8.16667H6.22183L4.8755 4.93501C4.69897 4.50943 4.40005 4.14586 4.01663 3.89038C3.63321 3.63491 3.18257 3.49904 2.72183 3.50001H0V5.83334H2.72183L8.2565 19.1158C8.34515 19.3284 8.49471 19.5099 8.68633 19.6376C8.87795 19.7652 9.10307 19.8334 9.33333 19.8333H18.6667C19.1532 19.8333 19.5883 19.5312 19.7598 19.0773L23.2598 9.74401C23.326 9.5674 23.3483 9.37738 23.325 9.19025C23.3016 9.00311 23.2332 8.82443 23.1257 8.66951ZM17.8582 17.5H10.1115L7.19483 10.5H20.4832L17.8582 17.5Z" fill="#828D99"/>
      <path d="M9.91797 24.5C10.8845 24.5 11.668 23.7165 11.668 22.75C11.668 21.7835 10.8845 21 9.91797 21C8.95147 21 8.16797 21.7835 8.16797 22.75C8.16797 23.7165 8.95147 24.5 9.91797 24.5Z" fill="#828D99"/>
      <path d="M18.082 24.5C19.0485 24.5 19.832 23.7165 19.832 22.75C19.832 21.7835 19.0485 21 18.082 21C17.1155 21 16.332 21.7835 16.332 22.75C16.332 23.7165 17.1155 24.5 18.082 24.5Z" fill="#828D99"/>
    </svg>
    <div class="busket__text">Корзина</div>
  </div>
</template>

<script>
import { getBacketProducts } from '@/use/middleware.js'

export default {
  data() {
    return {
      cartCount: 0
    }
  },
  async mounted() {
    const cartId = localStorage.getItem('cartId') || 0

    //если не найдено товаров по запросу из корзины то очистить данные в приложении
    if (cartId) {
      const cartProducts = await this.getBacketProducts(cartId)
      this.$cartCount.value = cartProducts?.length || 0
      localStorage.setItem('cartCount', cartProducts?.length || 0)
    }
  },
  watch: {
    '$cartCount.value': {
      handler: function() {
        this.cartCount = this.$cartCount.value
        if (this.cartCount < 0)
          this.cartCount = 0
      },
      deep: true
    }
  },
  methods: {
    getBacketProducts,
    goToCart() {
      if (this.cartCount > 0)
        this.$router.push({ name: 'cart' })
    }
  }
}
</script>

<style scoped lang="sass">
.busket
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  cursor: pointer
  position: relative
  &::after
    content: attr(data-value)
    position: absolute
    width: 26px
    height: 26px
    top: 0
    right: 0
    transform: translate(20%, -40%)
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))
    border: 2px solid #fff
    border-radius: 50%
    background-color: #DC1818
    color: #fff
    font-size: 16px
    font-weight: 700
    display: flex
    align-items: center
    justify-content: center
  &.no-products::after
    display: none
  &__logo path
    transition: all .3s ease
  &:hover
    & svg path
      fill: var(--primary-color)
    & .busket__text
      color: var(--primary-color)
  &.no-products
    cursor: default
    & svg path
      fill: #828D99
    & .busket__text
      color: #828D99
  &__text
    color: #828D99
    font-size: 11px
    margin-top: 2px
    transition: color .3s ease

@media screen and (max-width: 1600px)
  .busket
    &__logo
      width: 20px
    &__text
      font-size: 7px
      margin-top: 0
    &::after
      width: 18px
      height: 18px
      transform: translate(20%, -30%)
      border: 1px solid #fff
      font-size: 10px
</style>