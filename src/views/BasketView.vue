<template>
  <main>
    <div class="container">
      <BreadCrumbs />
      <div class="basket">
        <!-- form -->
        <form class="basket__form">
          <div class="basket__callme">
            <button @click.prevent>Не хочу ничего заполнять, перезвоните мне</button>
          </div>
          <div class="basket__input-wrapper">
            <input type="text" placeholder="Ваше имя*">
          </div>
          <div class="basket__input-wrapper">
            <input type="text" placeholder="Номер телефона*">
          </div>
          <div class="basket__input-wrapper">
            <input type="email" placeholder="Электронная почта*">
          </div>

          <div class="basket__delivery">
            <img src="@/assets/cdek.png" alt="cdek">
            <p>Доставка</p>
          </div>

          <div class="basket__date-title">Желаемая дата получения заказа</div>
          <div class="basket__input-wrapper basket__date-wrapper">
            <input type="date">
          </div>

          <div class="delivery-adress">
            <div class="delivery-adress__text">Доставка по адресу: </div>
            <div class="delivery-adress__content">
              <div class="delivery-adress__adress">Коломна, ул. Ленина, 35А</div>
              <svg class="delivery-adress__icon" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3 6.175L12.05 1.975L13.45 0.575C13.8333 0.191667 14.3043 0 14.863 0C15.4217 0 15.8923 0.191667 16.275 0.575L17.675 1.975C18.0583 2.35833 18.2583 2.821 18.275 3.363C18.2917 3.905 18.1083 4.36733 17.725 4.75L16.3 6.175ZM14.85 7.65L4.25 18.25H0V14L10.6 3.4L14.85 7.65Z" fill="#BDBDBD"/>
              </svg>
            </div>
          </div>

          <div class="basket__input-wrapper">
            <textarea cols="30" rows="10" placeholder="Комментарий курьеру"></textarea>
          </div>

          <div class="basket__info">
            Итоговая сумма оплаты спишется после сборки заказа и подтверждения
          </div>

          <div class="basket__btn">
            <DarkRectButton @click.prevent :text="'Оформить заказ'" />
          </div>

          <div class="basket__small-info">
            Нажимая “Оформить заказ” вы даете свое согласие на обработку персональных данных
            и соглашаетесь с нашей политикой конфиденциальности
          </div>
        </form>
        <!-- estimate -->
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
              <div class="resume__allcount">{{ basketList.length }} товаров</div>
            </div>
            <div class="resume__row">
              <div class="resume__row-txt">Товары ({{ basketList.length }})</div>
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
      </div>
    </div>
  </main>
</template>

<script>
import BasketCard from '../components/Basket/BasketCard.vue'
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs.vue'
import DarkRectButton from '../components/UIKit/DarkRectButton.vue'

export default {
  components: {
    BreadCrumbs,
    DarkRectButton,
    BasketCard
  },
  data() {
    return {
      basketList: [
        { 
          id: 1,
          title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', 
          description: 'Труба из полипропилена . PN 16 SDR 7.4 ХВС, ГВС, отопление до 60 0С., проекта сантехники для дома ALPHA диаметр 25мм., толщина стенки 3,5мм., 25 шт*4м., цвет белый', 
          price: 1000, 
          count: 1 
        },
        { 
          id: 2,
          title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', 
          description: 'Труба из полипропилена . PN 16 SDR 7.4 ХВС, ГВС, отопление до 60 0С., проекта сантехники для дома ALPHA диаметр 25мм., толщина стенки 3,5мм., 25 шт*4м., цвет белый', 
          price: 1000, 
          count: 2 
        },
        { 
          id: 3,
          title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', 
          description: 'Труба из полипропилена . PN 16 SDR 7.4 ХВС, ГВС, отопление до 60 0С., проекта сантехники для дома ALPHA диаметр 25мм., толщина стенки 3,5мм., 25 шт*4м., цвет белый', 
          price: 1000, 
          count: 3 
        },
        { 
          id: 4,
          title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', 
          description: 'Труба из полипропилена . PN 16 SDR 7.4 ХВС, ГВС, отопление до 60 0С., проекта сантехники для дома ALPHA диаметр 25мм., толщина стенки 3,5мм., 25 шт*4м., цвет белый', 
          price: 1000, 
          count: 4 
        },
        { 
          id: 5,
          title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', 
          description: 'Труба из полипропилена . PN 16 SDR 7.4 ХВС, ГВС, отопление до 60 0С., проекта сантехники для дома ALPHA диаметр 25мм., толщина стенки 3,5мм., 25 шт*4м., цвет белый', 
          price: 1000, 
          count: 5 
        },
        { 
          id: 6,
          title: 'Труба из полипропилена PN SDR 11 - 20*1.9мм', 
          description: 'Труба из полипропилена . PN 16 SDR 7.4 ХВС, ГВС, отопление до 60 0С., проекта сантехники для дома ALPHA диаметр 25мм., толщина стенки 3,5мм., 25 шт*4м., цвет белый', 
          price: 1000, 
          count: 6 
        },
      ],
      deliveryCost: 1000
    }
  },
  methods: {
    deleteCard(id) {
      this.basketList = this.basketList.filter(p => p.id !== id)
    }
  },
  computed: {
    productsTotalCost() {
      return this.basketList.reduce((acc, el) => acc += el.price, 0)
    }
  }
}
</script>

<style scoped lang="sass">
.basket
  margin-top: 126px
  margin-bottom: 46px
  display: flex
  justify-content: space-between
  &__form
    flex-basis: 50%
    margin-right: 80px
  &__callme
    width: 100%
    margin-bottom: 24px
    & button
      width: 100%
      font-weight: 500
      font-size: 16px
      color: var(--primary-color)
      padding: 12px
      display: flex
      justify-content: center
      align-items: center
      border: 2px solid var(--primary-color)
      border-radius: 4px
      background: transparent
      transition: color .3s ease, background .3s ease, box-shadow .3s ease
      &:hover
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.35)
        background: var(--primary-color)
        color: #fff
  &__input-wrapper
    margin-bottom: 24px
    width: 100%
    & input
      font-weight: 500
      font-size: 16px
      font-family: 'Ubuntu'
      width: 100%
      height: 64px
      background: #FFFFFF
      border: 1px solid #BDBDBD
      border-radius: 11px
      padding: 23px 24px 20px
      outline: none
      &::placeholder
        color: #42474D
        font-weight: 500
        font-size: 16px
    & textarea
      outline: none
      font-size: 16px
      font-family: 'Ubuntu'
      resize: none
      border: 1px solid #BDBDBD
      border-radius: 11px
      width: 100%
      padding: 20px 25px
      outline-color: var(--primary-color)
      &::placeholder
        font-family: 'Ubuntu'
        font-weight: 500
        font-size: 16px
        color: #42474D
  &__delivery
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25)
    border-radius: 11px
    display: flex
    align-items: center
    justify-content: space-between
    padding: 19px 34px 19px 24px
    max-width: 328px
    margin: 48px 0 40px
    & img
      width: 145px
    & p
      font-weight: 500
      font-size: 20px
      color: #42474D
  &__date-title
    font-weight: 700
    font-size: 25px
    color: var(--primary-color)
    margin-bottom: 31px
  &__date-wrapper
    max-width: 474px
    margin-bottom: 32px
  &__info
    border-top: 2px solid #42474D
    border-bottom: 2px solid #42474D
    padding: 15px 25px 19px
    font-weight: 700
    font-size: 20px
    line-height: 132%
    color: #42474D
    margin: 45px 0 36px
  &__btn
    width: 100%
    height: 42px
    margin-bottom: 40px
  &__small-info
    font-weight: 500
    font-size: 16px
    text-align: center
    color: #42474D

.delivery-adress
  display: flex
  flex-wrap: wrap
  align-items: center
  font-size: 23px
  margin-bottom: 44px
  line-height: 2
  &__text
    color: #42474D
    font-weight: 500
    margin-right: 3px
  &__content
    display: flex
    align-items: center
  &__adress
    font-weight: 700
    color: #224386
  &__icon
    cursor: pointer
    margin-left: 30px
    width: 18px

.estimate
  margin-left: 80px
  flex-basis: 50%
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
    margin-bottom: 35px
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
  .basket
    margin-top: 40px
    &__form
      margin-right: 20px
      flex-basis: 40%
    &__callme
      margin-bottom: 18px
      & button
        font-size: 14px
        padding: 12px
    &__input-wrapper
      margin-bottom: 18px
      & input
        font-size: 14px
        height: 48px
        padding: 12px 14px 11px
        &::placeholder
          font-size: 14px
      & textarea
        padding: 12px 14px
        font-size: 14px
        &::placeholder
          font-size: 14px
    &__delivery
      padding: 19px 34px 19px 24px
      max-width: 270px
      margin: 40px 0
      & img
        width: 100px
      & p
        font-size: 18px
    &__date-title
      font-size: 21px
      margin-bottom: 24px
    &__info
      border-top: 1px solid #42474D
      border-bottom: 1px solid #42474D
      padding: 14px
      font-size: 16px
      margin: 40px 0 36px
    &__btn
      margin-bottom: 40px
    &__small-info
      font-size: 13px

  .delivery-adress
    font-size: 18px
    margin-bottom: 40px
    &__text
      color: #42474D
      font-weight: 500
    &__adress
      font-weight: 700
      color: #224386
      margin-left: 3px
    &__icon
      margin-left: 30px
      width: 18px

  .estimate
    margin-left: 20px
    flex-basis: 60%

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