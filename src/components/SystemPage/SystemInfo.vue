<template>
  <div class="info">
      <div class="cards__wrapper">
          <div class="card">
              <div class="card__img">
                  <img src="@/assets/alpha-info/1.png" alt="1">
              </div>
              <p class="card__text">
                  Все материалы для монтажа в одном месте
              </p>
          </div>
          <div class="card">
              <div class="card__img">
                  <img src="@/assets/alpha-info/2.png" alt="1">
              </div>
              <p class="card__text">
                  100% совместимость <br> всех элементов <br> системы
              </p>
          </div>
          <div class="card">
              <div class="card__img">
                  <img src="@/assets/alpha-info/3.png" alt="1">
              </div>
              <p class="card__text">
                  Долговечные полипропиленовые трубы
              </p>
          </div>
          <div class="card">
              <div class="card__img">
                  <img src="@/assets/alpha-info/4.png" alt="1">
              </div>
              <p class="card__text">
                  Все инструменты для пайки в комплекте
              </p>
          </div>
      </div>
      <div class="info__card">
          <div class="info__img">
              <img src="@/assets/alpha-info/info.png" alt="info">
          </div>
          <p class="info__text">
            Основная проблема при прокладке внутренних водопроводных систем — совместимость компонентов трубопроводов. Даже если купить трубы и фитинги одного размера, при их соединении часто возникают проблемы, что увеличивает время работы, снижает герметичность соединений и повышает затраты. <br>
            Система Alpha решит все эти проблемы! Благодаря знаниям и опыту наших инженеров мы подготовили комплект всех необходимых материалов для монтажа систем водоснабжения и отопления, чтобы вы могли использовать детали одного производителя, которые полностью совместимы друг с другом. Вам достаточно выбрать нужную систему, и тратить время на подборку соместимых материалов больше не придется.
          </p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
.info
    padding: 74px 0 125px
    &__card
        background: #FFFFFF
        box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.15)
        border-radius: 8px
        display: flex
        align-items: center
        justify-content: space-between
    &__img
        position: absolute
        top: 0
        bottom: 0
        left: -2px
        & img
            display: block
            height: 100%
    &__text
        padding: 24px 24px 24px 145px
        font-size: 22px
        line-height: 170%
        text-align: justify
        color: #6C7689
.cards__wrapper
    display: flex
    justify-content: space-between
    margin-bottom: 100px
.card
    max-width: 286px
    &__img
        border-radius: 20px
        overflow: hidden
        & img
            width: 100%
    &__text
        font-weight: 700
        font-size: 27px
        line-height: 139%
        text-align: center
        color: var(--primary-color)

@media screen and (max-width: 1600px)
    .info
        padding: 74px 0 62px
        &__text
            padding: 27px 37px 12px 85px
            font-size: 13px
    .cards__wrapper
        margin-bottom: 76px
    .card
        max-width: 220px
        &__text
            font-size: 20px
</style>