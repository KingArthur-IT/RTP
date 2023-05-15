<template>
  <div class="questions-sect">
      <div class="container">
          <div class="section-title questions-sect__title">
            <div class="section-title-text">Остались вопросы</div>
          </div>
          <div class="questions-sect__text">
              Менеджер перезвонит вам, чтобы уточнить детали по вашему вопросу
          </div>
          <form class="questions-sect__form">
              <div class="questions-sect__row">
                  <div class="input-wrapper">
                      <CustomInput 
                        :label="'Имя'"
                        :isRequired="true"
                        :placeholder="'Введите имя'"
                        :isLight="true"
                      />
                  </div>
                  <div class="input-wrapper">
                      <CustomInput 
                        :label="'Телефон'"
                        :isRequired="true"
                        :placeholder="'+7'"
                        :isLight="true"
                        :isNumber="true"
                      />
                  </div>
              </div>
              <div class="questions-sect__row">
                  <div class="input-wrapper">
                      <CustomInput 
                        :label="'Сообщение'"
                        :placeholder="'Иван'"
                        :isLight="true"
                        :isTextArea="true"
                        :additionalClass="'question-form'"
                      />
                  </div>
                  <div class="input-wrapper">
                      <CustomInput 
                        :label="'E-mail'"
                        :isRequired="true"
                        :placeholder="'vanivan@mail.ru'"
                        :isLight="true"
                        :type="'email'"
                      />
                  </div>
              </div>
              <div class="questions-sect__btn">
                  <LightRectButton :text="'Отправить'" :isWhiteBtn="true" />
              </div>
          </form>
      </div>
  </div>
</template>

<script>
import CustomInput from '../UIKit/CustomInput.vue'
import LightRectButton from '../UIKit/LightRectButton.vue'

export default {
    components: {
        CustomInput,
        LightRectButton
    },
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
</style>