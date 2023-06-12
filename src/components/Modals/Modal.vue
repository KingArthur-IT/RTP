<template>
  <div 
    class="modal-wrapper" 
    :class="{'show': isShown, 'visible': isVisible}"
    @click="closeModal"
  >
      <div class="modal" @click.stop>
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
              <!-- левая колонка -->
              <div class="modal__column">
                  <div class="input-wrapper">
                      <CustomInput 
                          :label="'Имя'"
                          :isRequired="true"
                          v-model:value="name"
                          :placeholder="'Введите имя'"
                          :isLight="true"
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
                          :isLight="true"
                          :isValid="isPhoneValid"
                          :noValidText="'Проверьте номер телефона'"
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
                      <div v-if="loadedRecaptchaKey">
                        <vue-recaptcha 
                            :sitekey="loadedRecaptchaKey"
                            size="normal" 
                            theme="light"
                            @verify="recaptchaVerified"
                            @expire="recaptchaExpired"
                            ref="vueRecaptcha">
                        </vue-recaptcha>
                      </div>
                      <div v-if="!isRecaptchaChecked" class="input-error">
                        <div class="input-error__icon">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.125 10H7.5V7.5H6.875M7.5 5H7.50625M13.125 7.5C13.125 8.23869 12.9795 8.97014 12.6968 9.65259C12.4141 10.3351 11.9998 10.9551 11.4775 11.4775C10.9551 11.9998 10.3351 12.4141 9.65259 12.6968C8.97014 12.9795 8.23869 13.125 7.5 13.125C6.76131 13.125 6.02986 12.9795 5.34741 12.6968C4.66495 12.4141 4.04485 11.9998 3.52252 11.4775C3.00019 10.9551 2.58586 10.3351 2.30318 9.65259C2.02049 8.97014 1.875 8.23869 1.875 7.5C1.875 6.00816 2.46763 4.57742 3.52252 3.52252C4.57742 2.46763 6.00816 1.875 7.5 1.875C8.99184 1.875 10.4226 2.46763 11.4775 3.52252C12.5324 4.57742 13.125 6.00816 13.125 7.5Z" stroke="#F27272" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="input-error__text">Пройдите проверку</div>
                      </div>
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
              <!-- правая колонка -->
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
                          :noValidText="'Не верный e-mail'"
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
                      <DropFileSection v-model="file" />
                  </div>
              </div>
          </div>
      </div>
      <AcceptOrderModalVue  
        :title="'Ваш сообщение принято в работу!'"
        :isOrder="false"
        v-model:open="isAcceptedModalShown"
        @closeModal="clearAndCloseForm"
      />
  </div>
</template>

<script>
import CustomInput from '../UIKit/CustomInput.vue'
import DropFileSection from '../UIKit/DropFileSection.vue';
import CustomRectButton from '../UIKit/LightRectButton.vue';
import { validateEmail } from '@/use/helpers.js'
import { sendFormData, sendFile } from '@/use/middleware.js'
import { VueRecaptcha } from 'vue-recaptcha';
import AcceptOrderModalVue from './AcceptOrderModal.vue';

export default {
    components: {
        CustomInput,
        CustomRectButton,
        DropFileSection,
        VueRecaptcha,
        AcceptOrderModalVue
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
        },
        formInfo: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'callback'
        },
    },
    data() {
        return {
            recaptchaKey: '6LcwCykmAAAAABP9W5phHOE9GWHkyvwca1y1B9hz',
            loadedRecaptchaKey: '',
            name: '',
            surname: '',
            phone: '+7 (',
            email: '',
            message: '',
            theme: '',
            file: null,
            isNameValid: true,
            isPhoneValid: true,
            isEmailValid: true,
            recaptchaResponse: null,
            isRecaptchaChecked: true,
            isShown: false,
            isVisible: false,
            isAcceptedModalShown: false,
        }
    },
    methods: {
        validateEmail,
        sendFormData,
        sendFile,
        recaptchaVerified(response) {
            this.recaptchaResponse = response
        },
        recaptchaExpired() {
            this.$refs.vueRecaptcha.reset();
        },
        async formSubmit() {
            this.isRecaptchaChecked = !!this.recaptchaResponse
            this.isNameValid = !!this.name
            this.isEmailValid = this.validateEmail(this.email)
            this.isPhoneValid = this.phone.length === 18

            if (!this.isNameValid || !this.isEmailValid || !this.isPhoneValid || !this.isRecaptchaChecked)
                return

            let fileRez = ''
            if (this.file)
                fileRez = await this.sendFile(this.file)

            console.log('fileRez', fileRez);

            const rez = await this.sendFormData(this.type, this.formInfo, window.location.href, this.name, this.surname, this.phone, this.email, this.theme, this.message, fileRez)
            if (rez) {
                this.isAcceptedModalShown = true
            }
        },  
        closeModal() {
            this.$emit('update:open', false)
        },
        clearAndCloseForm() {
            this.name = ''
            this.surname = ''
            this.phone = '+7 ('
            this.email = ''
            this.message = ''
            this.theme = ''
            this.file = null
            this.isRecaptchaChecked = true
            this.recaptchaResponse = null
            this.isEmailValid = true
            this.isNameValid = true
            this.isPhoneValid = true
            setTimeout(() => {
                this.closeModal()
            }, 500);
        }
    },
    watch: {
        open() {
            if (!this.recaptchaKey)
                this.recaptchaExpired()
            if (this.open) {
                if (!this.loadedRecaptchaKey) {
                    this.loadedRecaptchaKey = this.recaptchaKey
                }
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
    -webkit-backdrop-filter: blur(15px)
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
        margin-top: 22px
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
    margin-top: 70px

.input-error
    display: flex
    align-items: center
    padding: 4px
    &__icon
        margin-right: 3px
        height: 15px
        width: 15px
    &__text
        font-weight: 500
        font-size: 10px
        color: #F27272

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
    .input-label
        font-size: 10px
        margin-bottom: 4px
        margin-top: 30px
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
            margin-top: 12px
            width: 145px
        &__logo
            width: 72px
</style>