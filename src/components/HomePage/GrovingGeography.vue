<template>
  <div class="geography">
      <div class="section-title best__title">
          <div class="section-title-text">География развития</div>
      </div>
      <div class="geography__wrapper">
          <div class="geography__map">
              <img src="@/assets/map.png" alt="map">
          </div>
          <div class="geography__list">
            <div class="geography__item">
                <div class="geography__num">3</div>
                <div class="geography__text">Завода в России</div>
            </div>
            <div class="geography__item">
                <div class="geography__num">50 лет</div>
                <div class="geography__text">Срок службы продукции</div>
            </div>
            <div class="geography__item">
                <div class="geography__num">>2500</div>
                <div class="geography__text">Видов производимой продукции</div>
            </div>
            <div class="geography__item">
                <div class="geography__num"><span>на</span>10<span>млн</span></div>
                <div class="geography__text">Рублей <span>- продукция застрахована</span></div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
.geography
    &__wrapper
        margin-top: 90px
        display: flex
        justify-content: space-between
        align-items: stretch
    &__map
        width: 100%
        margin-right: 56px
        & img
            width: 100%
    &__list
        display: flex
        flex-direction: column
        justify-content: space-between
        min-width: 275px
        padding-left: 50px
    &__item
        position: relative
        &:last-child
            &::before
                background: #fff
                height: 100%
                width: 2px
        &::after
            content: ''
            position: absolute
            width: 20px
            height: 20px
            background: var(--primary-color)
            left: -50px
            top: 30px
        &::before
            content: ''
            position: absolute
            width: 1px
            background: #D8D8D8
            height: 200%
            left: -40px
            top: 30px
    &__num
        font-weight: 700
        font-size: 65px
        color: var(--primary-color)
        & span
            font-size: 40px
    &__text
        font-weight: 700
        font-size: 18px
        line-height: 146%
        color: #6C7689
        & span
            font-weight: 400

@media screen and (max-width: 1600px)
    .geography
        &__wrapper
            margin-top: 60px
        &__map
            margin-right: 25px
        &__list
            min-width: 130px
            padding-left: 30px
        &__item
            &::after
                width: 12px
                height: 12px
                left: -30px
                top: 25px
            &::before
                left: -24px
                top: 25px
        &__num
            font-size: 45px
            & span
                font-size: 25px
        &__text
            font-size: 14px
</style>