<template>
  <main>
      <div class="container">
          <div class="breadcrumbs">
              <BreadCrumbs />
          </div>
          <div class="payment">
              <div class="payment__title">Способы оплаты</div>
              <div class="payment__subtitle">Оплата через СБП</div>
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
              </div>
              <ul>
                  <li>Без переплат: вы внесете только фактическую стоимость товара</li>
                  <li>Доступно всем: рассрочкой могут воспользоваться клиенты любых банков</li>
                  <li>Удобно и быстро: рассрочка оформляется онлайн – не нужно никуда ехать</li>
              </ul>
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
    & ul
        padding-left: 25px
        & li
            font-size: 18px
            position: relative
            margin-bottom: 18px
            color: #42474D
            &:before
                content: ''
                position: absolute
                width: 3px
                height: 3px
                background: #42474D
                left: -15px
                top: 7px
                border-radius: 50%

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