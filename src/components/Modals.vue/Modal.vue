<template>
  <div class="modal-wrapper" :class="{'show': isShown, 'visible': isVisible}">
      <div class="modal">
          <div class="modal__head">
              <div class="modal__title">{{ title }}</div>
              <div class="modal__description" v-html="descriptionHtml"></div>
              <div class="modal__close" @click="closeModal">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 20.5L10.5 13L3 20.5L0.499999 18L8 10.5L0.499999 3L3 0.500001L10.5 8L18 0.500001L20.5 3L13 10.5L20.5 18L18 20.5Z" fill="white"/>
                  </svg>
              </div>
          </div>
          <div class="modal__body">
              <div class="modal__column">
                  <div class="input-wrapper">
                      <CustomInput 
                          :label="'Имя'"
                          :isRequired="true"
                          v-model:value="name"
                          :placeholder="'Введите имя'"
                          :isLight="true"
                          :isValid="isNameValid"
                      />
                  </div>
                  <div class="input-wrapper">
                      <CustomInput 
                          :label="'Телефон'"
                          :isRequired="true"
                          :isNumber="true"
                          v-model:value="phone"
                          :placeholder="'+7'"
                          :isLight="true"
                          :isValid="isPhoneValid"
                      />
                  </div>
                  <div class="input-wrapper">
                    <CustomInput 
                        :label="'Тема'"
                        v-model:value="theme"
                        :placeholder="'Введите текст'"
                        :isLight="true"
                    />
                  </div>
                  <div class="input-wrapper">
                      <div class="input-label">Проверка*</div>
                      <vue-recaptcha sitekey="key"
                            size="normal" 
                            theme="light"
                            hl="tr"
                            @verify="recaptchaVerified"
                            @expire="recaptchaExpired"
                            ref="vueRecaptcha">
                    </vue-recaptcha>
                  </div>
                  <CustomRectButton 
                    class="modal__submit" 
                    :text="'Отправить'" 
                    :isWhiteBtn="true" 
                    @click="formSubmit"
                  />
                  <div class="modal__logo">
                      <img src="@/assets/modal-logo.png" alt="RTP">
                  </div>
              </div>
              <div class="modal__column">
                  <div class="input-wrapper">
                      <CustomInput 
                          :label="'Фамилия'"
                          v-model:value="surname"
                          :placeholder="'Введите фамилию'"
                          :isLight="true"
                      />
                  </div>
                  <div class="input-wrapper">
                      <CustomInput 
                          :label="'E-mail'"
                          :isRequired="true"
                          :type="'email'"
                          v-model:value="email"
                          :placeholder="'Введите e-mail'"
                          :isLight="true"
                          :isValid="isEmailValid"
                      />
                  </div>
                  <div class="input-wrapper textarea">
                    <CustomInput 
                        class="action__textarea"
                        :label="'Сообщение'"
                        v-model:value="message"
                        :placeholder="'Введите текст'"
                        :isTextArea="true"
                        :rowsCount="20"
                        :isLight="true"
                    />
                  </div>
                  <div>
                      <DropDown v-model:value="file" />
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import CustomInput from '../UIKit/CustomInput.vue'
import DropDown from '../UIKit/DropDown.vue';
import CustomRectButton from '../UIKit/LightRectButton.vue';
import { validateEmail } from '@/use/helpers.js'
import vueRecaptcha from 'vue3-recaptcha2';

export default {
    components: {
        CustomInput,
        CustomRectButton,
        DropDown,
        vueRecaptcha
    },
    props: {
        title: {
            type: String,
            required: true
        },
        descriptionHtml: {
            type: String,
            required: true
        },
        open: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            name: '',
            surname: '',
            phone: '',
            email: '',
            message: '',
            theme: '',
            file: '',
            isNameValid: true,
            isPhoneValid: true,
            isEmailValid: true,
            isRecaptchaVerified: null,
            isShown: false,
            isVisible: false
        }
    },
    methods: {
        validateEmail,
        recaptchaVerified(response) {
            console.log(response);
            this.isRecaptchaVerified = response
        },
        recaptchaExpired() {
            this.$refs.vueRecaptcha.reset();
        },
        formSubmit() {
            this.isNameValid = !!this.name
            this.isEmailValid = this.validateEmail(this.email)
            this.isPhoneValid = this.phone.length === 12

            if (!this.isNameValid || !this.isEmailValid || !this.isPhoneValid)
                return

            //отправить данные
        },
        closeModal() {
            this.$emit('update:open', false)
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
    width: 1170px
    &__head
        position: relative
        padding: 42px 0 68px 73px
        background: url('@/assets/modal-head-bg.png') no-repeat
        background-size: cover
        background-position-x: center
    &__title
        font-weight: 700
        font-size: 40px
        line-height: 121%
        color: #FFFFFF
        margin-bottom: 30px
    &__description
        font-weight: 500
        font-size: 16px
        line-height: 24px
        color: #FFFFFF
    &__close
        position: absolute
        top: 20px
        right: 20px
        cursor: pointer
    &__body
        background: #fff
        padding: 30px 50px 45px
        display: flex
    &__column
        display: flex
        flex-direction: column
        flex-basis: 50%
        padding: 0 25px
    &__submit
        margin-bottom: 50px
        margin-top: 50px
        width: 230px
    &__logo
        width: 115px
        & img
            width: 100%

.input-wrapper
    margin-bottom: 18px
.input-label
    display: block
    color: #A6ACB3
    margin-bottom: 12px
    font-weight: 500
    font-size: 16px
    margin-top: 90px

@media screen and (max-width: 1600px)
    .input-label
        font-size: 10px
        margin-bottom: 4px
        margin-top: 50px
    .input-wrapper
        margin-bottom: 14px
    .modal
        width: 740px
        &__head
            padding: 26px 0 35px 45px
        &__title
            font-size: 30px
            margin-bottom: 15px
        &__description
            font-size: 13px
            line-height: 18px
        &__close
            top: 15px
            right: 15px
        &__body
            padding: 22px 30px 28px
        &__column
            padding: 0 16px
        &__submit
            margin-bottom: 34px
            margin-top: 26px
            width: 145px
        &__logo
            width: 72px
</style>