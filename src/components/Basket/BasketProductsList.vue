<template>
    <div class="estimate">
        <div v-for="prod in cartList" :key="prod.prod_id" class="estimate__card">
            <BasketCard 
                :id="prod.prod_id"
                :title="prod.title"
                :description="prod.description"
                :price="prod.price"
                v-model:count="prod.count"
                @delete="deleteCard(prod.prod_id)"
                @updateCount="updateProductCount"
            />
        </div>
        <div class="resume">
            <div class="resume__head">
                <div class="resume__title">Ваша корзина</div>
                <div class="resume__allcount">{{ totalProductsCount }} товаров</div>
            </div>
            <div class="resume__row">
                <div class="resume__row-txt">Товары ({{ totalProductsCount }})</div>
                <div class="resume__row-txt">{{ productsTotalCost }} ₽</div>
            </div>
            <div class="resume__row">
                <div class="resume__row-txt">НДС (20%):</div>
                <div class="resume__row-txt">{{ taxes }} ₽</div>
            </div>
            <div class="resume__row resume__delivery">
                <div class="resume__row-txt">Доставка:</div>
                <div class="resume__row-txt">{{ deliveryCost }} ₽</div>
            </div>
            <div class="resume__row resume__total">
                <div class="resume__row-txt">Всего к оплате:</div>
                <div class="resume__row-txt">{{ totalForPay }} ₽</div>
            </div>
            <div class="resume__btn">
                <button>Скачать смету</button>
            </div>
        </div>
    </div>
</template>

<script>
import BasketCard from './BasketCard.vue'
import { addProductToBacket } from '@/use/middleware.js'

export default {
    components: {
        BasketCard
    },
    props: {
        cartList: {
            type: Array,
            default: []
        },
        deliveryCost: {
            type: Number,
            default: 0
        }
    },
    computed: {
        productsTotalCost() {
            return this.cartList.reduce((acc, el) => acc += el.price * el.count, 0).toFixed(2)
        },
        totalProductsCount() {
            return this.cartList.reduce((acc, el) => acc += el.count, 0)
        },
        taxes() {
            return (this.productsTotalCost / 5).toFixed(2)
        },
        totalForPay() {
            return (this.productsTotalCost * 1.2 + this.deliveryCost).toFixed(2)
        }
    },
    methods: {
        addProductToBacket,
        deleteCard(id) {
            this.$emit('deleteCard', id)
        },
        async updateProductCount({ delta, id }){
            const cartId = localStorage.getItem('cartId')
            console.log('add');
            await this.addProductToBacket(id, delta, cartId)
        }
    },
}
</script>

<style scoped lang="sass">
.estimate
  width: 100%
  &__card
    margin-bottom: 15px
    &:last-child
        margin-bottom: 35px

.resume
  background: #F4F7FD
  border-radius: 8px
  padding: 20px
  width: 100%
  &__head
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 30px
  &__title
    font-weight: 700
    font-size: 20px
    color: #42474D
  &__allcount
    font-weight: 700
    font-size: 14px
    text-align: right
    color: #828D99
  &__row
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 12px
  &__row-txt
    font-weight: 700
    font-size: 16px
    color: #42474D
  &__delivery
    margin: 32px 0
  &__total
    padding: 0
    padding: 32px 0 27px
    border-top: 1px solid #42474D
    margin-bottom: 0
    & .resume__row-txt
      font-size: 20px
      color: var(--primary-color)
  &__btn
    width: 100%
    margin-bottom: 92px
    & button
      width: 100%
      background: #828D99
      border-radius: 4px
      padding: 12px
      display: flex
      align-items: center
      justify-content: center
      font-weight: 500
      font-size: 16px
      color: #F2F4F7
      transition: box-shadow .3s ease
      &:hover
          box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.35)

@media screen and (max-width: 1600px)
    .resume
        &__head
            margin-bottom: 32px
        &__title
            font-size: 18px
        &__allcount
            font-size: 13px
        &__row-txt
            font-size: 16px
        &__delivery
            margin: 28px 0
        &__total
            margin-bottom: 0
        & .resume__row-txt
            font-size: 18px
        &__btn
            margin-bottom: 32px
        & button
            font-size: 14px

</style>