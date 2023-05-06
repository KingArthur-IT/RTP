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
                        v-model="name"
                        :placeholder="'Введите имя'"
                      />
                  </div>
                  <div class="input-wrapper">
                      <CustomInput 
                        :label="'Телефон'"
                        :isRequired="true"
                        :isNumber="true"
                        v-model="phone"
                        :placeholder="'+7'"
                      />
                  </div>
                  <CustomCheckbox v-model="isConfirmed">
                    <span class="conditions-text">Согласие с политикой конфиденциальности</span>
                  </CustomCheckbox>
                  <CustomRectButton class="action__submit" :text="'Отправить'" />
              </div>
              <div class="action__right">
                <div class="input-wrapper">
                      <CustomInput 
                        :label="'E-mail'"
                        :isRequired="true"
                        :type="'email'"
                        v-model="email"
                        :placeholder="'Введите e-mail'"
                      />
                  </div>
                  <div>
                      <CustomInput 
                        class="action__textarea"
                        :label="'Сообщение'"
                        v-model="message"
                        :placeholder="'Введите текст'"
                        :isTextArea="true"
                        :rowsCount="12"
                      />
                  </div>
              </div>
          </form>
      </div>
  </div>
</template>

<script>
import CustomInput from '../UIKit/CustomInput.vue'
import CustomRectButton from '../UIKit/CustomRectButton.vue';
import CustomCheckbox from '../UIKit/CustomCheckbox.vue';

export default {
    components: {
        CustomInput,
        CustomRectButton,
        CustomCheckbox
    },
    data() {
        return {
            name: '',
            phone: '',
            email: '',
            message: '',
            isConfirmed: false
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
    &__submit
        margin-top: auto
        align-self: flex-end
        max-width: 230px
        margin-right: auto

.input-wrapper
    margin-bottom: 18px
.conditions-text
    font-size: 13px
    margin-left: 6px

@media screen and (max-width: 1600px)
    .action
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
        &__submit
            max-width: 140px
    .input-wrapper
        margin-bottom: 11px
    .conditions-text
        font-size: 11px
        margin-left: 4px
</style>