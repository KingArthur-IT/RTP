<template>
  <div 
    class="modal-wrapper" 
    :class="{'show': isShown, 'visible': isVisible}"
    @click="closeModal"
  >
      <div class="modal" @click.stop>
          <div class="modal__title">
              Оформление заказа или скачивание сметы в "пустой" корзине - невозможно. <br>
              Пожалуйста выберите товар из каталога и добавьте его в корзину - после этого вам станет доступен данный функционал.
          </div>
          <div class="modal__close" @click="closeModal">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 20.7344L10.5 13.2344L3 20.7344L0.499999 18.2344L8 10.7344L0.499999 3.23438L3 0.734376L10.5 8.23438L18 0.734376L20.5 3.23438L13 10.7344L20.5 18.2344L18 20.7344Z" fill="white"/>
              </svg>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        open: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            isShown: false,
            isVisible: false
        }
    },
    methods: {
        closeModal() {
            this.$emit('update:open', false)
            this.$emit('closeModal')
        }
    },
    watch: {
        open() {
            if (this.open) {
                document.body.classList.add('overflow-hidden')
                this.isShown = true
                setTimeout(() => {
                    this.isVisible = true
                }, 100);
            } else {
                document.body.classList.remove('overflow-hidden')
                this.isVisible = false
                setTimeout(() => {
                    this.isShown = false
                }, 300);
            }
        },
    }
}
</script>

<style scoped lang="sass">
.modal-wrapper
    padding: 0 30px
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: linear-gradient(30deg, rgba(255, 255, 255, 0.5) -19.85%, rgba(235, 235, 235, 0.367354) 4.2%, rgba(224, 224, 224, 0.287504) 13.88%, rgba(212, 212, 212, 0.21131) 27.98%, rgba(207, 207, 207, 0.175584) 37.8%, rgba(202, 202, 202, 0.143432) 44.38%, rgba(200, 200, 200, 0.126299) 50.54%, rgba(196, 196, 196, 0.1) 60.21%)
    backdrop-filter: blur(15px)
    -webkit-backdrop-filter: blur(15px)
    z-index: 20
    display: flex
    justify-content: center
    align-items: center
    display: none
    opacity: 0
    transition: opacity .3s ease
    &.show
        display: flex
    &.visible
        opacity: 1
.modal
    position: relative
    width: 900px
    background: url('@/assets/accept-order-model-bg.jpg') no-repeat
    background-size: cover
    background-position-x: center
    color: #fff
    padding: 64px 45px 84px
    box-shadow: 0px 0px 43px rgba(0, 0, 0, 0.25)
    border-radius: 25px
    &__title
        font-weight: 500
        font-size: 24px
        line-height: 130% 
    &__close
        position: absolute
        top: 18px
        right: 21px
        cursor: pointer
</style>