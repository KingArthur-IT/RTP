<template>
  <div class="action">
    <form @submit.prevent class="action__form">
        <div class="input-wrapper">
            <CustomInput 
                :label="'ФИО'"
                :isRequired="true"
                v-model:value="name"
                :placeholder="'Введите ФИО'"
                :isValid="isNameValid"
                :isLabelBlue="true"
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
                :isLabelBlue="true"
                :noValidText="'Проверьте номер телефона'"
            />
        </div>
        <div class="input-wrapper">
            <CustomInput 
                :label="'E-mail'"
                :isRequired="true"
                :type="'email'"
                v-model:value="email"
                :placeholder="'Введите e-mail'"
                :isValid="isEmailValid"
                :isLabelBlue="true"
                :noValidText="'Не верный e-mail'"
            />
        </div>
        <div class="submit-wrapper">
            <CustomCheckbox v-model="isConfirmed" :isValid="isConfirmedValid">
                <span class="conditions-text">Согласие с политикой конфиденциальности</span>
            </CustomCheckbox>
            <div class="action__submit">
                <CustomRectButton :text="'Оставить заявку'" @click="sendForm"/>
            </div>
        </div>
        <div class="message-wrapper">
            <CustomInput 
                class="action__textarea"
                :label="'Сообщение'"
                v-model:value="message"
                :placeholder="'Введите текст'"
                :isTextArea="true"
                :rowsCount="7"
                :additionalClass="'main-form'"
                :isLabelBlue="true"
            />
        </div>
    </form>
  </div>
</template>

<script>
import CustomInput from '../UIKit/CustomInput.vue'
import CustomRectButton from '../UIKit/LightRectButton.vue';
import CustomCheckbox from '../UIKit/CustomCheckbox.vue';
import { validateEmail } from '@/use/helpers.js'
import { sendFormData } from '@/use/middleware.js'

export default {
    components: {
        CustomInput,
        CustomRectButton,
        CustomCheckbox,
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

            const rez = await this.sendFormData('questions', 'form-questions-from-company', window.location.href, this.name, '', this.phone, this.email, '', this.message)
            if (rez) {
                this.$emit('questionFormSended')
                this.clearAndCloseForm()
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
    background: url('@/assets/company-form-bg.jpg') no-repeat
    background-size: cover
    background-position: center
    padding: 26px 53px 34px 61px
    &__form
        display: flex
        justify-content: space-between
        flex-wrap: wrap
        width: calc( 100% + 24px )
        transform: translateX(-12px)
    &__submit
        height: 45px
.input-wrapper
    flex-basis: 33.33%
    margin-bottom: 11px
    padding: 0 12px
.conditions-text
    color: #fff
    font-size: 15px
    margin-left: 6px
.submit-wrapper
    flex-basis: 33.33%
    padding: 35px 12px 0
    display: flex
    flex-direction: column
    justify-content: space-between
.message-wrapper
    flex-basis: 66.66%
    padding: 0 12px

@media screen and (max-width: 1600px)
    .action
        padding: 26px 35px 34px 80px
        &__form
            width: calc( 100% + 20px )
            transform: translateX(-10px)
        &__submit
            width: 220px
            margin-top: 35px
    .input-wrapper
        padding: 0 10px
    .conditions-text
        font-size: 11px
    .submit-wrapper
        flex-basis: 33.33%
        padding: 0px 10px
        justify-content: flex-start
    .message-wrapper
        padding: 0 10px
</style>