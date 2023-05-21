<template>
  <div class="action">
      <div class="action__hero">
          <div class="action__head">
              <h2 class="action__title">Не знаете, что выбрать <br> или есть вопросы?</h2>
              <div class="action__info">
                    Мы поможем! Позвоните нам <br>
                    по телефону <a href="tel:+74955405262">+ 7 (495) 540 52 62</a><br>
                    или оставьте заявку.
              </div>
          </div>
          <form @submit.prevent class="action__form">
              <div class="action__left">
                  <div class="input-wrapper">
                      <CustomInput 
                        :label="'Имя'"
                        :isRequired="true"
                        v-model:value="name"
                        :placeholder="'Введите имя'"
                        :isValid="isNameValid"
                        :noValidText="'Это поле обязательно для заполнения'"
                      />
                  </div>
                  <div class="input-wrapper">
                      <CustomInput 
                        :label="'Телефон'"
                        :isRequired="true"
                        :isNumber="true"
                        v-model:value="phone"
                        :placeholder="''"
                        :isValid="isPhoneValid"
                        :noValidText="'Проверьте номер телефона'"
                      />
                  </div>
                  <CustomCheckbox v-model="isConfirmed" :isValid="isConfirmedValid">
                    <span class="conditions-text">Согласие с политикой конфиденциальности</span>
                  </CustomCheckbox>
                  <div class="action__btn-wrapper">
                      <CustomRectButton class="action__submit" :text="'Отправить'" @click="sendForm"/>
                  </div>
              </div>
              <div class="action__right">
                <div class="input-wrapper">
                      <CustomInput 
                        :label="'E-mail'"
                        :isRequired="true"
                        :type="'email'"
                        v-model:value="email"
                        :placeholder="'Введите e-mail'"
                        :isValid="isEmailValid"
                        :noValidText="'Не верный e-mail'"
                      />
                  </div>
                  <div>
                      <CustomInput 
                        class="action__textarea"
                        :label="'Сообщение'"
                        v-model:value="message"
                        :placeholder="'Введите текст'"
                        :isTextArea="true"
                        :rowsCount="20"
                        :additionalClass="'main-form'"
                      />
                  </div>
              </div>
          </form>
      </div>
      <AcceptOrderModal  
        v-model:open="isAcceptedModalShown"
        @closeModal="clearAndCloseForm"
      />
  </div>
</template>

<script>
import CustomInput from '../UIKit/CustomInput.vue'
import CustomRectButton from '../UIKit/LightRectButton.vue';
import CustomCheckbox from '../UIKit/CustomCheckbox.vue';
import { validateEmail } from '@/use/helpers.js'
import { sendFormData } from '@/use/middleware.js'
import AcceptOrderModal from '../Modals/AcceptOrderModal.vue';

export default {
    components: {
        CustomInput,
        CustomRectButton,
        CustomCheckbox,
        AcceptOrderModal
    },
    data() {
        return {
            name: '',
            phone: '+7 (',
            email: '',
            message: '',
            isNameValid: true,
            isPhoneValid: true,
            isEmailValid: true,
            isConfirmedValid: true,
            isConfirmed: false,
            isAcceptedModalShown: false
        }
    },
    methods: {
        validateEmail,
        sendFormData,
        async sendForm() {
            this.isNameValid = !!this.name
            this.isEmailValid = this.validateEmail(this.email)
            this.isPhoneValid = this.phone.length === 18
            this.isConfirmedValid = this.isConfirmed

            if (!this.isNameValid || !this.isEmailValid || !this.isPhoneValid || !this.isConfirmed)
                return

            const rez = await this.sendFormData('callback', 'form-questions-from-main', window.location.href, this.name, '', this.phone, this.email, '', this.message)
            if (rez) {
                this.isAcceptedModalShown = true
            }
        },
        clearAndCloseForm() {
            this.name = ''
            this.email = ''
            this.phone = '+7 ('
            this.message = ''
            this.isConfirmed = false
        }
    }
}
</script>

<style scoped lang="sass">
.action
    width: 100%
    background: url('@/assets/form-bg.png') no-repeat
    background-size: cover
    background-position: center
    padding: 40px 140px
    &__hero
        margin-left: auto
        max-width: 800px
        display: flex
        flex-direction: column
        color: #fff
    &__head
        display: flex
        align-items: center
        margin-left: auto
        margin-bottom: 17px
    &__title
        font-weight: 700
        font-size: 40px
        margin-right: 14px
    &__info
        font-size: 16px
        border-left: 2px solid #fff
        padding: 5px 0 5px 14px
        line-height: 1.35
        & a
            font-weight: bold
            color: #fff
            font-size: 18px
    &__form
        display: flex
        justify-content: flex-end
    &__left
        flex-basis: 50%
        max-width: 300px
        margin-right: 50px
        display: flex
        flex-direction: column
        padding-bottom: 3px
    &__right
        flex-basis: 50%
    &__btn-wrapper
        margin-top: auto
        align-self: flex-end
        margin-right: auto
        width: 230px

.input-wrapper
    margin-bottom: 18px
.conditions-text
    font-size: 13px
    margin-left: 6px

@media screen and (max-width: 1600px)
    .action
        padding: 17px 74px
        &__hero
            max-width: 520px
        &__title
            font-size: 25px
            margin-right: 10px
        &__info
            font-size: 14px
            border-left: 1px solid #fff
            padding: 0px 0 0px 8px
            & a
                font-size: 14px
        &__left
            max-width: 250px
            margin-right: 26px
        &__btn-wrapper
            width: 140px
    .input-wrapper
        margin-bottom: 11px
    .conditions-text
        font-size: 11px
        margin-left: 4px
</style>