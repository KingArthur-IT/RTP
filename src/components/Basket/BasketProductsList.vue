<template>
    <div class="estimate">
        <div v-for="prod in basketList" :key="prod.id" class="estimate__card">
            <BasketCard 
                :title="prod.title"
                :description="prod.description"
                :price="prod.price"
                v-model:count="prod.count"
                @delete="deleteCard(prod.id)"
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
                <div class="resume__row-txt">{{ productsTotalCost / 5 }} ₽</div>
            </div>
            <div class="resume__row resume__delivery">
                <div class="resume__row-txt">Доставка:</div>
                <div class="resume__row-txt">{{ deliveryCost }} ₽</div>
            </div>
            <div class="resume__row resume__total">
                <div class="resume__row-txt">Всего к оплате:</div>
                <div class="resume__row-txt">{{ productsTotalCost * 1.2 + deliveryCost }} ₽</div>
            </div>
            <div class="resume__btn">
                <button>Скачать смету</button>
            </div>
        </div>
    </div>
</template>

<script>
import BasketCard from './BasketCard.vue'

export default {
    components: {
        BasketCard
    },
    props: {
        basketList: {
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
            return this.basketList.reduce((acc, el) => acc += el.price * el.count, 0)
        },
        totalProductsCount() {
            return this.basketList.reduce((acc, el) => acc += el.count, 0)
        }
    },
    methods: {
        deleteCard(id) {
            this.$emit('deleteCard', id)
        }
    }
}
</script>

<style scoped lang="sass">
.estimate
  width: 100%
  &__card
    margin-bottom: 15px

.resume
  margin-top: 35px
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