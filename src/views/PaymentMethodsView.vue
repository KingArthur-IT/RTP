<template>
  <main>
      <div class="container">
          <div class="breadcrumbs">
              <BreadCrumbs />
          </div>
          <div class="payment">
              <div class="payment__title">Оплата</div>
              
              <!--<div class="payment__subtitle">Оплата через СБП</div>
              <div class="payment__text">
                Платите через QR-код или ссылку. Вводить реквизиты карты не понадобится! Нужен только смартфон с приложением банка и интернетом
              </div>
              <div class="payment__subtitle">По QR-коду</div>
              <div class="payment__text">
                Откройте приложение банка и выберите пункт с оплатой через QR-код.C помощью камеры распознайте QR-код и подтвердите оплату
              </div>
              <div class="payment__subtitle">По ссылке</div>
              <div class="payment__text">
                Перейдите по ссылке на оплату и выберите приложение вашего банка. Затем перейдите в него и подтвердите оплату
              </div>
              <div class="payment__subtitle">Кредитование</div>
              <div class="payment__text">
                Вы можете оплатить заказ частями: 25% – при покупке, остальное – тремя платежами по 25% через каждые две недели.
              </div> -->
              <ol>
                  <li>Для окончательного оформления заказа с Вами свяжется наш менеджер для уточнения наличия товара.</li>
                  <li>После согласования деталей заказа, менеджер отправит Вам сообщение на электронную почту или СМС, содержащее ссылку для оплаты.</li>
                  <li>Ссылка действительна в течение 24 часов, с момента ее получения. К оплате принимаются любые банковские карты, выпущенные на территории Российской Федерации.</li>
                  <li>Если Вы не успели оплатить ваш заказ в течение 24 часов, с момента получения ссылки, свяжитесь, пожалуйста с нами для повторной отправки ссылки на оплату.</li>
                  <li>После оплаты Вам придет уведомление на электронную почту, что заказ оплачен и мы начнем сборку вашего заказа. </li>
                  <li>После сборки Ваш заказ передается в отгрузку и Вам придет сообщение с трек-номером (на почту или в виде смс) для отслеживания вашего заказа.</li>
                  <li>Спасибо за обращение в наш интернет- магазин!</li>
              </ol>
          </div>
      </div>
  </main>
</template>

<script>
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs.vue'

export default {
    components: {
        BreadCrumbs,
    },
    mounted(){
        window.scrollTo(0, 0);
    },
}
</script>

<style scoped lang="sass">
.payment
    margin: 60px 0
    &__title
        font-weight: 700
        font-size: 36px
        color: var(--primary-color)
        margin-bottom: 37px
    &__subtitle
        font-weight: 500
        font-size: 32px
        color: #42474D
        margin-bottom: 20px
    &__text
        font-size: 18px
        line-height: 130%
        color: #42474D
        margin-bottom: 20px
    & ol
        padding-left: 25px
        & li
            font-size: 18px
            position: relative
            margin-bottom: 18px
            color: #42474D

@media screen and (max-width: 1600px)
    .payment
        margin: 40px 0 60px
        &__title
            font-size: 30px
            margin-bottom: 37px
        &__subtitle
            font-size: 22px
            margin-bottom: 10px
        &__text
            font-size: 14px
            margin-bottom: 20px
        & ul
            margin-top: -10px
            padding-left: 25px
            & li
                font-size: 14px
                margin-bottom: 10px
                &:before
                    content: ''
                    position: absolute
                    width: 3px
                    height: 3px
                    background: #42474D
                    left: -15px
                    top: 7px
                    border-radius: 50%
</style>