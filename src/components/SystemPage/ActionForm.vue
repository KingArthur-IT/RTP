<template>
  <div class="action">
      <div class="container">
          <div class="action__hero">
              <div class="action__head">
                  <h2 class="action__title">Остались вопросы?</h2>
                  <div class="action__info">
                        Мы поможем! Позвоните нам по телефону <br> <a href="tel:+74955405262">+ 7 (495) 540 52 62</a> или оставьте заявку.
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
                      <CustomCheckbox class="input-checkbox" v-model="isConfirmed" :isValid="isConfirmedValid">
                        <span class="conditions-text">Согласие с политикой конфиденциальности</span>
                      </CustomCheckbox>
                      <div class="action__submit">
                          <CustomRectButton :text="'Отправить'" @click="sendForm"/>
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
      </div>
      <AcceptOrderModal  
        :title="'Ваш сообщение принято в работу!'"
        :isOrder="false"
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

            const rez = await this.sendFormData('questions', 'form-questions-from-alpha', window.location.href, this.name, '', this.phone, this.email, '', this.message)
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
    &__hero
        margin-left: auto
        width: 753px
        display: flex
        flex-direction: column
        color: #fff
        margin-right: 143px
        padding: 57px 0 41px
    &__head
        display: flex
        align-items: center
        margin-bottom: 40px
    &__title
        font-weight: 700
        font-size: 40px
        margin-right: 20px
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
        flex-grow: 1
    &__submit
        margin-top: auto
        align-self: flex-end
        width: 230px
        margin-right: auto
        margin-bottom: 8px

.input-wrapper
    margin-bottom: 18px
.input-checkbox
    margin-top: 6px
.conditions-text
    font-size: 13px
    margin-left: 6px

@media screen and (max-width: 1600px)
    .action
        &__hero
            padding: 28px 0 25px
            max-width: 565px
        &__title
            font-size: 25px
            margin-right: 14px
        &__info
            font-size: 14px
            border-left: 1px solid #fff
            padding: 0px 0 0px 14px
            & a
                font-size: 14px
        &__left
            max-width: 250px
            margin-right: 26px
        &__submit
            width: 140px
            margin-bottom: 0
    .input-wrapper
        margin-bottom: 11px
    .conditions-text
        font-size: 11px
        margin-left: 4px
    .input-checkbox
        margin-top: 0px
</style>