<template>
  <main>
      <div class="container">
          <div class="breadcrumbs">
              <BreadCrumbs />
          </div>
          <div class="delivery">
              <div class="delivery__title">«Правила доставки»</div>
              <div class="delivery__text">
                  Для доставки заказов используются услуги транспортной компании СДЭК. Клиент может выбрать один из двух вариантов доставки:
              </div>
              <ul class="delivery__list">
                  <div class="delivery__item">до пункта выдачи СДЭК</div>
                  <div class="delivery__item">или до указанного адреса.</div>
              </ul>
              <div class="delivery__text">
                  После оформления заказа наш менеджер свяжется с клиентом для уточнения деталей и стоимости доставки. Оплатить услуги доставки можно:
              </div>
              <ul class="delivery__list">
                  <div class="delivery__item">наличными курьеру,</div>
                  <div class="delivery__item">наличными или картой в пункте выдачи СДЭК,</div>
                  <div class="delivery__item">а также через электронные способы оплаты на сайте.</div>
              </ul>
              <div class="delivery__text">
                  Для юридических лиц предусмотрены
              </div>
              <ul class="delivery__list">
                  <div class="delivery__item">почтовый или банковский перевод,</div>
                  <div class="delivery__item">а также электронные способы оплаты на сайте.</div>
              </ul>
              <div class="delivery__text">
                  Предварительную стоимость доставки можно уточнить самостоятельно на сайте транспортной компании по ссылке (<a class="delivery__link" href="https://www.cdek.ru/ru/calculate">https://www.cdek.ru/ru/calculate</a>).
              </div>
              <div class="delivery__text">
                  После передачи заказа в СДЭК клиент получит смс-уведомление с уникальным номером для отслеживания отправления. Отследить заказ можно на сайте транспортной компании (<a class="delivery__link" href="https://www.cdek.ru/ru/tracking">https://www.cdek.ru/ru/tracking</a>). 
              </div>
              <div class="delivery__text">
                  При поступлении заказа в пункт выдачи или передачи курьеру клиент получает смс-уведомление. Заказ необходимо получить в течение 14 дней с момента получения данного уведомления. При превышении указанного срока транспортная компания взимает плату за хранение. Тарифы за хранение определяются непосредственно транспортной компанией СДЭК.
              </div>
              <div class="delivery__text">
                  Важно! При приемке заказа необходимо убедиться в целостности упаковки. После вскрытия заказа проверьте все заказанные позиции, а также их внешний вид на наличие деформаций и сколов. В случае возникновения претензий к качеству изделий и/или комплектности заказа необходимо обратиться к менеджеру. 
              </div>
              <div class="delivery__text">
                  Благодарим за обращение в наш магазин!
              </div>
              <div class="delivery__btn">
                  <DarkRectButtonVue @click="$router.push({ name: 'catalog' })" :text="'Начать покупки'" />
              </div>
          </div>
      </div>
  </main>
</template>

<script>
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs.vue'
import DarkRectButtonVue from '../components/UIKit/DarkRectButton.vue'

export default {
    components: {
        BreadCrumbs,
        DarkRectButtonVue
    },
    mounted(){
        window.scrollTo(0, 0);
    },
}
</script>

<style scoped lang="sass">
.breadcrumbs
    margin-top: 5px
.delivery
    margin-top: 66px
    margin-bottom: 107px
    &__title
        font-weight: 500
        font-size: 32px
        color: var(--primary-color)
        margin-bottom: 48px
    &__text
        font-size: 16px
        line-height: 130%
        color: #42474D
        margin-bottom: 21px
    &__list
        padding-left: 24px
        margin-bottom: 22px
    &__item
        font-size: 16px
        position: relative
        color: #42474D
        line-height: 1.3
        &::before
            content: ''
            position: absolute
            width: 4px
            height: 4px
            background: #42474D
            left: -14px
            top: 7px
            border-radius: 50%
    &__link
        color: #2598D2
        text-decoration: underline
    &__btn
        height: 37px
        margin-top: 51px

@media screen and (max-width: 1600px)
    .delivery
        margin-top: 48px
        margin-bottom: 94px
        &__text
            font-size: 12px
            margin-bottom: 17px
        &__list
            padding-left: 24px
            margin-bottom: 17px
        &__item
            font-size: 12px
</style>