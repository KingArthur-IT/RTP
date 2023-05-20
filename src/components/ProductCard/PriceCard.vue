<template>
  <div class="price-card">
      <div class="price-card__text">Цена за упаковку</div>
      <div class="price-card__price">
        {{ numberWithSpaces(price) }}
        <svg class="rub-symb" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.16 18V0.863999H7.632C9.84 0.863999 11.448 1.312 12.456 2.208C13.48 3.104 13.992 4.336 13.992 5.904C13.992 6.832 13.784 7.704 13.368 8.52C12.952 9.336 12.256 9.992 11.28 10.488C10.32 10.984 9.008 11.232 7.344 11.232H5.784V18H2.16ZM0.24 15.432V13.104H9.48V15.432H0.24ZM0.24 11.232V8.256H7.272V11.232H0.24ZM6.984 8.256C7.672 8.256 8.264 8.184 8.76 8.04C9.256 7.88 9.64 7.632 9.912 7.296C10.184 6.96 10.32 6.536 10.32 6.024C10.32 5.288 10.088 4.744 9.624 4.392C9.16 4.024 8.432 3.84 7.44 3.84H5.784V8.256H6.984Z" fill="#224386"/>
        </svg>
      </div>
      <div class="price-card__count">х{{ count }}</div>
      <div class="price-card__total">
        {{ numberWithSpaces(price * count) }}
        <svg class="rub-symb" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.16 18V0.863999H7.632C9.84 0.863999 11.448 1.312 12.456 2.208C13.48 3.104 13.992 4.336 13.992 5.904C13.992 6.832 13.784 7.704 13.368 8.52C12.952 9.336 12.256 9.992 11.28 10.488C10.32 10.984 9.008 11.232 7.344 11.232H5.784V18H2.16ZM0.24 15.432V13.104H9.48V15.432H0.24ZM0.24 11.232V8.256H7.272V11.232H0.24ZM6.984 8.256C7.672 8.256 8.264 8.184 8.76 8.04C9.256 7.88 9.64 7.632 9.912 7.296C10.184 6.96 10.32 6.536 10.32 6.024C10.32 5.288 10.088 4.744 9.624 4.392C9.16 4.024 8.432 3.84 7.44 3.84H5.784V8.256H6.984Z" fill="#42474D"/>
        </svg>
      </div>
      <div class="count-btns">
        <button @click="decrementProductCount">
            <svg width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H17V3H0V0Z" fill="#42474D"/>
            </svg>
        </button>
        <input type="text" v-model="count" @input="onCountInput">
        <button @click="incrementProductCount">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 7H7V0H10V7H17V10H10V17H7V10H0V7Z" fill="#42474D"/>
            </svg>
        </button>
      </div>
      <div class="price-card__btn">
          <DarkRectButton :text="'В корзину'" @click="$router.push({ name: 'basket' })" />
      </div>
      <div class="gather-basket">
          <div class="gather-basket__head">
            <img src="@/assets/cart_icon.png" alt="cart">
            <h3>Соберите мне корзину</h3>
            <p class="gather-basket__text">
                Доверти покупки профессионалам, 
                загрузите или заполните список и наш
                менеджер соберет вам корзину 
            </p>
          </div>
          <div class="gather-basket__btn">
            <DarkRectButton :text="'Заказать обратный звонок'" @click="isModalShow = true" />
          </div>
      </div>
  </div>
  <Modal 
    v-model:open="isModalShow"
    :title="'Обратный звонок'"
    :descriptionHtml="'Пожалуйста, заполните обязательные поля, <br> и мы с Вами свяжемся.'"
  />
</template>

<script>
import DarkRectButton from '../UIKit/DarkRectButton.vue'
import Modal from '../Modals/Modal.vue'
import { numberWithSpaces } from '@/use/helpers.js'

export default {
    components: {
        DarkRectButton,
        Modal
    },
    props: {
        price: {
            type: Number,
            required: true
        },
        productCount: {
            type: Number,
            default: 1
        },
    },
    data() {
        return {
            count: 1,
            isModalShow: false
        }
    },
    mounted() {
        this.count = this.productCount
    },
    methods: {
        numberWithSpaces,
        decrementProductCount() {
            if (this.count > 1)
                this.count --
        },
        incrementProductCount() {
            this.count ++
        },
        onCountInput() {
            this.count = this.count.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1')
            // this.productCount = this.productCount.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1')
            // this.$emit('update:productCount', )
        },
    },
    watch: {
        count() {
            this.$emit('update:productCount', this.count)
        }
    }
}
</script>

<style scoped lang="sass">
.price-card
    filter: drop-shadow(0px 2px 10px rgba(130, 169, 188, 0.06)) drop-shadow(0px 5px 10px rgba(0, 67, 101, 0.08))
    background: #fff
    padding: 13px 22px 29px 22px
    width: 100%
    border-radius: 8px
    &__text
        font-size: 20px
        color: #A6ACB3
        text-align: right
        margin-bottom: 16px
    &__price
        font-weight: 700
        color: var(--primary-color)
        margin-bottom: 8px
        text-align: right
        font-size: 24px
    &__count
        text-align: right
        font-size: 16px
        color: #42474D
        margin-bottom: 8px
    &__total
        font-weight: 700
        font-size: 24px
        color: #42474D
        text-align: right
        border-top: 1px solid #D9D9D9
        padding-top: 8px
        margin-bottom: 24px
    &__btn
        width: 100%
        height: 42px
        margin-bottom: 35px

.count-btns
    display: flex
    align-items: center
    justify-content: flex-end
    margin-bottom: 20px
    & button
        width: 35px
        height: 35px
        background: #EDEDED
        border-radius: 4px
        display: flex
        align-items: center
        justify-content: center
    & input
        border: none
        appearance: none
        outline: none
        font-weight: 700
        font-size: 16px
        color: #42474D
        padding: 0 8px
        width: 80px
        text-align: center

.gather-basket
    position: relative
    background: linear-gradient(180deg, #224386 2.77%, #82D3FC 100%)
    border-radius: 8px
    padding: 18px 10px 20px
    &__head
        display: flex
        align-items: center
        justify-content: space-between
        margin-bottom: 22px
        flex-wrap: wrap
        & img
            width: 78px
            margin-right: 28px
            margin-left: 11px
        & h3
            font-weight: 700
            font-size: 21px
            color: #FFFFFF
            flex-basis: 50%
            margin-right: auto
    &__text
        flex-basis: 100%
        font-size: 13px
        line-height: 139%
        color: #FFFFFF
        margin-top: 21px
        padding: 0 1px 0 12px
    &__btn
        width: 100%
        height: 44px

@media screen and (max-width: 1600px)
    .price-card
        padding: 13px 19px 17px 19px
        &__text
            font-size: 14px
        &__price
            font-size: 20px
            & .rub-symb
                height: 15px
        &__total
            font-size: 20px
            & .rub-symb
                height: 15px
        &__btn
            margin-bottom: 73px
    .count-btns
        margin-bottom: 30px
        & input
            font-size: 14px
    .gather-basket
        padding: 14px 7px 21px 10px
        &__head
            margin-bottom: 24px
            padding-left: 80px
            & img
                width: 68px
                position: absolute
                left: 0
                top: 0
                margin-left: 0px
            & h3
                font-size: 13px
                flex-basis: 100%
        &__text
            font-size: 9px
            margin-top: 8px
            padding: 0
        &__btn
            padding-right: 3px
</style>