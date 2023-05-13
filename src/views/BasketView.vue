<template>
  <main>
    <div class="container">
      <BreadCrumbs />
      <div class="basket">
        <!-- form -->
        <form class="basket__form">
          <div class="basket__callme">
            <button @click.prevent="callMeEvent">Не хочу ничего заполнять, перезвоните мне</button>
          </div>
          <!-- phone -->
          <div class="basket__input-wrapper">
            <input type="text" v-model="callMePhone" placeholder="Номер телефона*">
            <div v-if="!isCallMePhoneValid" class="basket-error">
              <div class="basket-error__icon">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.125 10H7.5V7.5H6.875M7.5 5H7.50625M13.125 7.5C13.125 8.23869 12.9795 8.97014 12.6968 9.65259C12.4141 10.3351 11.9998 10.9551 11.4775 11.4775C10.9551 11.9998 10.3351 12.4141 9.65259 12.6968C8.97014 12.9795 8.23869 13.125 7.5 13.125C6.76131 13.125 6.02986 12.9795 5.34741 12.6968C4.66495 12.4141 4.04485 11.9998 3.52252 11.4775C3.00019 10.9551 2.58586 10.3351 2.30318 9.65259C2.02049 8.97014 1.875 8.23869 1.875 7.5C1.875 6.00816 2.46763 4.57742 3.52252 3.52252C4.57742 2.46763 6.00816 1.875 7.5 1.875C8.99184 1.875 10.4226 2.46763 11.4775 3.52252C12.5324 4.57742 13.125 6.00816 13.125 7.5Z" stroke="#F27272" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="basket-error__text">Проверьте номер телефона</div>
            </div>
          </div>
          <div class="basket__my-data-text">Ваши данные</div>
          <!-- name -->
          <div class="basket__input-wrapper">
            <input type="text" v-model="name" placeholder="Ваше имя*">
            <div v-if="!isNameValid" class="basket-error">
              <div class="basket-error__icon">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.125 10H7.5V7.5H6.875M7.5 5H7.50625M13.125 7.5C13.125 8.23869 12.9795 8.97014 12.6968 9.65259C12.4141 10.3351 11.9998 10.9551 11.4775 11.4775C10.9551 11.9998 10.3351 12.4141 9.65259 12.6968C8.97014 12.9795 8.23869 13.125 7.5 13.125C6.76131 13.125 6.02986 12.9795 5.34741 12.6968C4.66495 12.4141 4.04485 11.9998 3.52252 11.4775C3.00019 10.9551 2.58586 10.3351 2.30318 9.65259C2.02049 8.97014 1.875 8.23869 1.875 7.5C1.875 6.00816 2.46763 4.57742 3.52252 3.52252C4.57742 2.46763 6.00816 1.875 7.5 1.875C8.99184 1.875 10.4226 2.46763 11.4775 3.52252C12.5324 4.57742 13.125 6.00816 13.125 7.5Z" stroke="#F27272" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="basket-error__text">Введите имя</div>
            </div>
          </div>
          <!-- phone -->
          <div class="basket__input-wrapper">
            <input type="text" v-model="phone" placeholder="Номер телефона*">
            <div v-if="!isPhoneValid" class="basket-error">
              <div class="basket-error__icon">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.125 10H7.5V7.5H6.875M7.5 5H7.50625M13.125 7.5C13.125 8.23869 12.9795 8.97014 12.6968 9.65259C12.4141 10.3351 11.9998 10.9551 11.4775 11.4775C10.9551 11.9998 10.3351 12.4141 9.65259 12.6968C8.97014 12.9795 8.23869 13.125 7.5 13.125C6.76131 13.125 6.02986 12.9795 5.34741 12.6968C4.66495 12.4141 4.04485 11.9998 3.52252 11.4775C3.00019 10.9551 2.58586 10.3351 2.30318 9.65259C2.02049 8.97014 1.875 8.23869 1.875 7.5C1.875 6.00816 2.46763 4.57742 3.52252 3.52252C4.57742 2.46763 6.00816 1.875 7.5 1.875C8.99184 1.875 10.4226 2.46763 11.4775 3.52252C12.5324 4.57742 13.125 6.00816 13.125 7.5Z" stroke="#F27272" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="basket-error__text">Проверьте номер телефона</div>
            </div>
          </div>
          <!-- email -->
          <div class="basket__input-wrapper">
            <input type="email" v-model="email" placeholder="Электронная почта*">
            <div v-if="!isEmailValid" class="basket-error">
              <div class="basket-error__icon">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.125 10H7.5V7.5H6.875M7.5 5H7.50625M13.125 7.5C13.125 8.23869 12.9795 8.97014 12.6968 9.65259C12.4141 10.3351 11.9998 10.9551 11.4775 11.4775C10.9551 11.9998 10.3351 12.4141 9.65259 12.6968C8.97014 12.9795 8.23869 13.125 7.5 13.125C6.76131 13.125 6.02986 12.9795 5.34741 12.6968C4.66495 12.4141 4.04485 11.9998 3.52252 11.4775C3.00019 10.9551 2.58586 10.3351 2.30318 9.65259C2.02049 8.97014 1.875 8.23869 1.875 7.5C1.875 6.00816 2.46763 4.57742 3.52252 3.52252C4.57742 2.46763 6.00816 1.875 7.5 1.875C8.99184 1.875 10.4226 2.46763 11.4775 3.52252C12.5324 4.57742 13.125 6.00816 13.125 7.5Z" stroke="#F27272" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="basket-error__text">Не верный e-mail</div>
            </div>
          </div>

          <div class="basket__delivery">
            <img src="@/assets/cdek.png" alt="cdek">
            <p>Доставка</p>
          </div>

          <div class="basket__date-title">Желаемая дата получения заказа</div>
          <div class="basket__input-wrapper basket__date-wrapper">
            <div class="date-picker">
              <div class="date-picker__text">{{ selectedDate }}</div>
              <div class="date-picker__input">
                <VueDatePicker 
                  :enable-time-picker="false"
                  locale="ru" 
                  v-model="date"
                  select-text="Выбрать"
                  cancel-text="Отмена"
                ></VueDatePicker>
              </div>
              <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.4444 2.4H19.1667V0H16.6111V2.4H6.38889V0H3.83333V2.4H2.55556C1.13722 2.4 0.0127778 3.48 0.0127778 4.8L0 21.6C0 22.2365 0.269245 22.847 0.748505 23.2971C1.22776 23.7471 1.87778 24 2.55556 24H20.4444C21.85 24 23 22.92 23 21.6V4.8C23 3.48 21.85 2.4 20.4444 2.4ZM20.4444 21.6H2.55556V9.6H20.4444V21.6ZM7.66667 14.4H5.11111V12H7.66667V14.4ZM12.7778 14.4H10.2222V12H12.7778V14.4ZM17.8889 14.4H15.3333V12H17.8889V14.4ZM7.66667 19.2H5.11111V16.8H7.66667V19.2ZM12.7778 19.2H10.2222V16.8H12.7778V19.2ZM17.8889 19.2H15.3333V16.8H17.8889V19.2Z" fill="#EBEBEB"/>
              </svg>
            </div>
          </div>

          <div class="delivery-adress">
            <div class="delivery-adress__text">Доставка по адресу: </div>
            <div class="delivery-adress__content" :class="{'w-100': isAdressEditing}">
              <input v-if="isAdressEditing" v-model="adress" type="text" class="delivery-adress__adress">
              <div v-else class="delivery-adress__adress">{{ adress }}</div>
              <svg @click="isAdressEditing = !isAdressEditing" class="delivery-adress__icon" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3 6.175L12.05 1.975L13.45 0.575C13.8333 0.191667 14.3043 0 14.863 0C15.4217 0 15.8923 0.191667 16.275 0.575L17.675 1.975C18.0583 2.35833 18.2583 2.821 18.275 3.363C18.2917 3.905 18.1083 4.36733 17.725 4.75L16.3 6.175ZM14.85 7.65L4.25 18.25H0V14L10.6 3.4L14.85 7.65Z" fill="#BDBDBD"/>
              </svg>
            </div>
          </div>

          <div class="basket__input-wrapper">
            <textarea v-model="message" cols="30" rows="10" placeholder="Комментарий курьеру"></textarea>
          </div>

          <div class="basket__info">
            Итоговая сумма оплаты спишется после сборки заказа и подтверждения
          </div>

          <div class="basket__btn">
            <DarkRectButton @click.prevent="submitBasket" :text="'Оформить заказ'" />
          </div>

          <div class="basket__small-info">
            Нажимая “Оформить заказ” вы даете свое согласие на обработку персональных данных
            и соглашаетесь с нашей политикой конфиденциальности
          </div>
        </form>
        <!-- estimate -->
        <div class="estimate-wrapper">
          <BasketProductsList 
            :basketList="basketList" 
            @deleteCard="deleteCard" 
            :deliveryCost="deliveryCost"
          />
        </div>
      </div>
    </div>
    <AcceptOrderModal v-model:open="isModalShown" />
  </main>
</template>

<script>
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs.vue'
import DarkRectButton from '../components/UIKit/DarkRectButton.vue'
import { validateEmail, getMonthName } from '@/use/helpers.js'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import BasketProductsList from '../components/Basket/BasketProductsList.vue';
import AcceptOrderModal from '../components/Modals/AcceptOrderModal.vue';

export default {
  components: {
    BreadCrumbs,
    DarkRectButton,
    VueDatePicker,
    BasketProductsList,
    AcceptOrderModal
  },
  data() {
    return {
      isModalShown: false,
      callMePhone: '',
      isCallMePhoneValid: true,
      name: '',
      phone: '',
      email: '',
      message: '',
      date: new Date(),
      adress: '',
      isAdressEditing: false,
      isNameValid: true,
      isPhoneValid: true,
      isEmailValid: true,
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
    validateEmail,
    getMonthName,
    deleteCard(id) {
      this.basketList = this.basketList.filter(p => p.id !== id)
    },
    submitBasket() {
      this.isNameValid = !!this.name.length
      this.isEmailValid = this.validateEmail(this.email)
      this.isPhoneValid = this.phone.length === 18
    },
    callMeEvent() {
      this.isCallMePhoneValid = this.callMePhone.length === 18

      if (this.isCallMePhoneValid)
        this.isModalShown = true
    }
  },
  computed: {
    selectedDate() {
      return this.date.getDate() + ' ' + this.getMonthName(this.date.getMonth())
    },
  },
  watch: {
    phone() {
      const value = this.phone.replace(/\D+/g, "");
      const numberLength = 11;

      let result = '+';

      for (let i = 0; i < value.length && i < numberLength; i++) {
          switch (i) {
          case 0:
              result += '7 ('
              continue;
          case 4:
              result += ") ";
              break;
          case 7:
              result += "-";
              break;
          case 9:
              result += "-";
              break;
          default:
              break;
          }
          result += value[i];
      }

      this.phone = result;
    },
    callMePhone() {
      const value = this.callMePhone.replace(/\D+/g, "");
      const numberLength = 11;

      let result = '+';

      for (let i = 0; i < value.length && i < numberLength; i++) {
          switch (i) {
          case 0:
              result += '7 ('
              continue;
          case 4:
              result += ") ";
              break;
          case 7:
              result += "-";
              break;
          case 9:
              result += "-";
              break;
          default:
              break;
          }
          result += value[i];
      }

      this.callMePhone = result;
    }
  }
}
</script>

<style scoped lang="sass">
.w-100
  width: 100%
.basket
  margin-top: 132px
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
      padding: 10px
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
  &__my-data-text
    font-weight: 500
    font-size: 32px
    color: var(--primary-color)
    margin: 52px 0 29px
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
    margin-bottom: 22px
  &__info
    border-top: 2px solid #42474D
    border-bottom: 2px solid #42474D
    padding: 15px 25px 16px
    font-weight: 700
    font-size: 20px
    line-height: 132%
    color: #42474D
    margin: 42px 0 36px
  &__btn
    width: 100%
    height: 42px
    margin-bottom: 40px
  &__small-info
    font-weight: 500
    font-size: 16px
    text-align: center
    color: #42474D

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

.date-picker
  position: relative
  width: 100%
  display: flex
  align-items: center
  justify-content: space-between
  font-weight: 500
  font-size: 16px
  height: 64px
  background: #FFFFFF
  border: 1px solid #BDBDBD
  border-radius: 11px
  padding: 23px 24px 20px
  cursor: pointer
  &__input
    width: 100%
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
  & svg
    position: absolute
    right: 24px

.delivery-adress
  display: flex
  flex-wrap: wrap
  align-items: center
  font-size: 23px
  margin-bottom: 33px
  line-height: 2
  &__text
    color: #42474D
    font-weight: 500
    margin-right: 5px
  &__content
    display: flex
    align-items: center
  &__adress
    font-weight: 700
    color: #224386
  & input
    margin-top: 5px
    width: 100%
    font-size: 16px
    font-family: 'Ubuntu'
    height: 44px
    background: #FFFFFF
    border: 1px solid #BDBDBD
    border-radius: 11px
    padding: 12px 14px 11px
    outline: none
  &__icon
    cursor: pointer
    margin-left: 30px
    width: 18px

.estimate-wrapper
  margin-left: 80px
  flex-basis: 50%

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
    &__my-data-text
      font-size: 28px
      margin: 40px 0 29px
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

  .date-picker
    font-size: 14px
    height: 48px
    padding: 12px 14px 11px
    & svg
      width: 18px
      height: 18px
      position: absolute
      right: 14px

  .delivery-adress
    font-size: 18px
    margin-bottom: 30px
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

  .estimate-wrapper
    margin-left: 20px
    flex-basis: 60%
</style>