<template>
    <div class="estimate">
        <div v-for="prod in cartList" :key="prod.prod_id" class="estimate__card">
            <BasketCard 
                :id="prod.prod_id"
                :title="prod.title"
                :description="prod.description"
                :price="prod.price"
                :photoUrl="prod.photo"
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
                <div class="resume__row-txt">
                    {{ productsTotalCost }}
                    <svg class="rub-symb" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.16 18V0.863999H7.632C9.84 0.863999 11.448 1.312 12.456 2.208C13.48 3.104 13.992 4.336 13.992 5.904C13.992 6.832 13.784 7.704 13.368 8.52C12.952 9.336 12.256 9.992 11.28 10.488C10.32 10.984 9.008 11.232 7.344 11.232H5.784V18H2.16ZM0.24 15.432V13.104H9.48V15.432H0.24ZM0.24 11.232V8.256H7.272V11.232H0.24ZM6.984 8.256C7.672 8.256 8.264 8.184 8.76 8.04C9.256 7.88 9.64 7.632 9.912 7.296C10.184 6.96 10.32 6.536 10.32 6.024C10.32 5.288 10.088 4.744 9.624 4.392C9.16 4.024 8.432 3.84 7.44 3.84H5.784V8.256H6.984Z" fill="#42474D"/>
                    </svg>
                </div>
            </div>
            <div class="resume__row resume__nds">
                <div class="resume__row-txt">НДС (20%):</div>
                <div class="resume__row-txt">
                    {{ taxes }}
                    <svg class="rub-symb" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.16 18V0.863999H7.632C9.84 0.863999 11.448 1.312 12.456 2.208C13.48 3.104 13.992 4.336 13.992 5.904C13.992 6.832 13.784 7.704 13.368 8.52C12.952 9.336 12.256 9.992 11.28 10.488C10.32 10.984 9.008 11.232 7.344 11.232H5.784V18H2.16ZM0.24 15.432V13.104H9.48V15.432H0.24ZM0.24 11.232V8.256H7.272V11.232H0.24ZM6.984 8.256C7.672 8.256 8.264 8.184 8.76 8.04C9.256 7.88 9.64 7.632 9.912 7.296C10.184 6.96 10.32 6.536 10.32 6.024C10.32 5.288 10.088 4.744 9.624 4.392C9.16 4.024 8.432 3.84 7.44 3.84H5.784V8.256H6.984Z" fill="#42474D"/>
                    </svg>
                </div>
            </div>
            <!-- <div class="resume__row resume__delivery">
                <div class="resume__row-txt">Доставка:</div>
                <div class="resume__row-txt">{{ deliveryCost }} ₽</div>
            </div> -->
            <div class="resume__row resume__total">
                <div class="resume__row-txt">Всего к оплате:</div>
                <div class="resume__row-txt">
                    {{ totalForPay }}
                    <svg class="rub-symb" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.16 18V0.863999H7.632C9.84 0.863999 11.448 1.312 12.456 2.208C13.48 3.104 13.992 4.336 13.992 5.904C13.992 6.832 13.784 7.704 13.368 8.52C12.952 9.336 12.256 9.992 11.28 10.488C10.32 10.984 9.008 11.232 7.344 11.232H5.784V18H2.16ZM0.24 15.432V13.104H9.48V15.432H0.24ZM0.24 11.232V8.256H7.272V11.232H0.24ZM6.984 8.256C7.672 8.256 8.264 8.184 8.76 8.04C9.256 7.88 9.64 7.632 9.912 7.296C10.184 6.96 10.32 6.536 10.32 6.024C10.32 5.288 10.088 4.744 9.624 4.392C9.16 4.024 8.432 3.84 7.44 3.84H5.784V8.256H6.984Z" fill="#224386"/>
                    </svg>
                </div>
            </div>
            <div class="resume__btn" @click="downloadFile">
                <button>Скачать смету</button>
                <div v-if="isCartEmpty" class="basket-error">
                    <div class="basket-error__icon">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.125 10H7.5V7.5H6.875M7.5 5H7.50625M13.125 7.5C13.125 8.23869 12.9795 8.97014 12.6968 9.65259C12.4141 10.3351 11.9998 10.9551 11.4775 11.4775C10.9551 11.9998 10.3351 12.4141 9.65259 12.6968C8.97014 12.9795 8.23869 13.125 7.5 13.125C6.76131 13.125 6.02986 12.9795 5.34741 12.6968C4.66495 12.4141 4.04485 11.9998 3.52252 11.4775C3.00019 10.9551 2.58586 10.3351 2.30318 9.65259C2.02049 8.97014 1.875 8.23869 1.875 7.5C1.875 6.00816 2.46763 4.57742 3.52252 3.52252C4.57742 2.46763 6.00816 1.875 7.5 1.875C8.99184 1.875 10.4226 2.46763 11.4775 3.52252C12.5324 4.57742 13.125 6.00816 13.125 7.5Z" stroke="#F27272" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="basket-error__text">Корзина пуста</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BasketCard from './BasketCard.vue'
import { addProductToBacket, printCart } from '@/use/middleware.js'

export default {
    components: {
        BasketCard,
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
    data() {
        return {
            isCartEmpty: false
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
        printCart,
        deleteCard(id) {
            this.$emit('deleteCard', id)
        },
        async updateProductCount({ delta, id }){
            const cartId = localStorage.getItem('cartId')
            console.log('add');
            await this.addProductToBacket(id, delta, cartId)
        },
        async downloadFile() {
            if (this.cartList?.length) {
                const cartId = localStorage.getItem('cartId')
    
                const fileUrl = await this.printCart(cartId)
                if (fileUrl) {
                    window.open(fileUrl, '_blank');
                }
            }
            else this.isCartEmpty = true
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
  margin-bottom: 40px
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
    & .rub-symb
        height: 13px
        margin-left: -2px
  &__delivery
    margin: 32px 0
  &__nds
      padding-bottom: 32px
      margin-bottom: 0
  &__total
    padding: 0
    padding: 32px 0 27px
    border-top: 1px solid #42474D
    margin-bottom: 0
    & .resume__row-txt
      font-size: 20px
      color: var(--primary-color)
      & .rub-symb
        height: 16px
        margin-left: -2px
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
      margin-bottom: 10px
      &:hover
          box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.35)

.basket-error
  display: flex
  align-items: center
  padding: 4px 8px
  &__icon
    margin-right: 3px
    height: 15px
    width: 15px
  &__text
    font-weight: 500
    font-size: 10px
    color: #F27272

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
                & .rub-symb
                    height: 14px
        & .resume__row-txt
            font-size: 18px
        &__btn
            margin-bottom: 32px
        & button
            font-size: 14px

</style>