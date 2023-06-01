<template>
  <div class="questions-sect">
      <div class="container">
          <div class="section-title questions-sect__title">
            <div class="section-title-text">Остались вопросы</div>
          </div>
          <div class="questions-sect__text">
              Менеджер перезвонит вам, чтобы уточнить детали по вашему вопросу
          </div>
          <form @click.prevent class="questions-sect__form">
              <div class="questions-sect__row">
                  <div class="input-wrapper">
                      <CustomInput 
                        v-model:value="name"
                        :label="'Имя'"
                        :isRequired="true"
                        :placeholder="'Введите имя'"
                        :isLight="true"
                        :isValid="isNameValid"
                        :noValidText="'Это поле обязательно для заполнения'"
                      />
                  </div>
                  <div class="input-wrapper">
                      <CustomInput 
                        v-model:value="phone"
                        :label="'Телефон'"
                        :isRequired="true"
                        :placeholder="'+7'"
                        :isLight="true"
                        :isNumber="true"
                        :isValid="isPhoneValid"
                        :noValidText="'Проверьте номер телефона'"
                      />
                  </div>
              </div>
              <div class="questions-sect__row">
                  <div class="input-wrapper">
                      <CustomInput 
                        v-model:value="message"
                        :label="'Сообщение'"
                        :placeholder="'Введите текст'"
                        :isLight="true"
                        :isTextArea="true"
                        :additionalClass="'question-form'"
                      />
                  </div>
                  <div class="input-wrapper">
                      <CustomInput 
                        v-model:value="email"
                        :label="'E-mail'"
                        :isRequired="true"
                        :placeholder="'Введите e-mail'"
                        :isLight="true"
                        :type="'email'"
                        :isValid="isEmailValid"
                        :noValidText="'Не верный e-mail'"
                      />
                  </div>
              </div>
              <div class="questions-sect__btn" @click="formSubmit">
                  <LightRectButton :text="'Отправить'" :isWhiteBtn="true" />
              </div>
          </form>
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
import LightRectButton from '../UIKit/LightRectButton.vue'
import { validateEmail } from '@/use/helpers.js'
import { sendFormData } from '@/use/middleware.js'
import AcceptOrderModal from '../Modals/AcceptOrderModal.vue'

export default {
    components: {
        CustomInput,
        LightRectButton,
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
            isAcceptedModalShown: false
        }
    },
    methods: {
        validateEmail,
        sendFormData,
        async formSubmit() {
            this.isNameValid = !!this.name
            this.isEmailValid = this.validateEmail(this.email)
            this.isPhoneValid = this.phone.length === 18

            if (!this.isNameValid || !this.isEmailValid || !this.isPhoneValid)
                return

            const rez = await this.sendFormData('questions', 'form-questions-from-services', window.location.href, this.name, '', this.phone, this.email, '', this.message)
            if (rez) {
                this.isAcceptedModalShown = true
            }
        },
        clearAndCloseForm() {
            this.name = ''
            this.email = ''
            this.phone = '+7 ('
            this.message = ''
        }
    }
}
</script>

<style scoped lang="sass">
.questions-sect
    width: 100%
    background: url('@/assets/questions.png') no-repeat
    background-size: cover
    background-position-x: center
    padding-bottom: 180px
    &__title
        margin-bottom: 64px
    &__text
        font-weight: 500
        font-size: 24px
        line-height: 125%
        color: #6C7689
        max-width: 607px
        margin-bottom: 40px
    &__row
        display: flex
        margin-bottom: 13px
    &__btn
        width: 230px
        height: 45px
        margin-top: 44px
    
.input-wrapper
    width: 480px
    margin-right: 32px

@media screen and (max-width: 1600px)
    .questions-sect
        padding-bottom: 45px
        background-size: contain
        background-position-x: 100%
        &__title
            margin-bottom: 33px
        &__text
            font-size: 14px
            max-width: 360px
            margin-bottom: 22px
        &__row
            margin-bottom: 8px
        &__btn
            width: 161px
            height: 31px
            margin-top: 31px
        
    .input-wrapper
        width: 250px
        margin-right: 16px
</style>