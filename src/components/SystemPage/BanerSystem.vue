<template>
  <div class="baner">
    <img src="@/assets/baner-bg/alpha.png" alt="alpha" class="baner__bg">
    <div class="container">
      <div class="baner__hero">
          <div class="baner__label">
              <img src="@/assets/logos/alpha.png" alt="alpha" class="baner__logo">
              <span>aplha</span>
          </div>
          <h2 class="baner__title">Система ALPHA - Новый <br> взгляд на привычные вещи</h2>
          <div class="baner__text">
            Система Alpha — уникальное комплексное решение для прокладки систем водопровода и канализации в частном доме, квартире или на коммерческом объекте.
          </div>
          <div class="baner__text">
            При покупке вы получаете весь необходимый набор для монтажа, начиная от совместимых труб и фитингов и заканчивая паяльником. Сэкономьте время на подборе материалов и повысьте качество результата.
          </div>
          <div class="baner__btns">
            <div class="baner__btn-wrap">
              <button class="baner__btn">Обратитесь к нам</button>
            </div>
            <div class="baner__btn-wrap">
              <button class="baner__btn baner__catalog">
                <img src="@/assets/catalog.png" alt="catalog">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.948 10V15C16.948 15.55 16.48 16 15.9079 16H3.4269C2.85485 16 2.38681 15.55 2.38681 15V10C2.38681 9.45 1.91878 9 1.34673 9C0.77468 9 0.306641 9.45 0.306641 10V16C0.306641 17.1 1.24272 18 2.38681 18H16.948C18.0921 18 19.0282 17.1 19.0282 16V10C19.0282 9.45 18.5602 9 17.9881 9C17.4161 9 16.948 9.45 16.948 10ZM10.7075 9.67L12.6629 7.79C12.7592 7.69742 12.8735 7.62398 12.9993 7.57387C13.1251 7.52377 13.26 7.49798 13.3961 7.49798C13.5323 7.49798 13.6672 7.52377 13.793 7.57387C13.9188 7.62398 14.0331 7.69742 14.1294 7.79C14.2257 7.88258 14.3021 7.99249 14.3542 8.11346C14.4063 8.23442 14.4331 8.36407 14.4331 8.495C14.4331 8.62593 14.4063 8.75558 14.3542 8.87654C14.3021 8.99751 14.2257 9.10742 14.1294 9.2L10.3955 12.79C10.2993 12.8827 10.185 12.9563 10.0591 13.0064C9.93332 13.0566 9.79844 13.0824 9.66222 13.0824C9.526 13.0824 9.39112 13.0566 9.2653 13.0064C9.13948 12.9563 9.02518 12.8827 8.92896 12.79L5.19505 9.2C5.00058 9.01302 4.89132 8.75943 4.89132 8.495C4.89132 8.23057 5.00058 7.97698 5.19505 7.79C5.38952 7.60302 5.65328 7.49798 5.92831 7.49798C6.20334 7.49798 6.4671 7.60302 6.66157 7.79L8.62733 9.67V1C8.62733 0.45 9.09537 0 9.66742 0C10.2395 0 10.7075 0.45 10.7075 1V9.67Z" fill="white"/>
                </svg>
                <span>Скачать каталог</span>
              </button>
            </div>
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
.baner
  width: 100%
  height: 100%
  position: relative
  &::after
    content: ''
    position: absolute
    width: 100%
    height: 100%
    left: 0
    right: 0
    bottom: 0
    right: 0
    background: linear-gradient(100deg, #2598D2 27.02%, rgba(148, 204, 232, 0.8) 54.87%, rgba(170, 214, 236, 0) 75.9%)
    z-index: 10
    pointer-events: none
  &__bg
    width: 100%
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    height: 100%
    width: 100%
  &__hero
    padding: 60px 0px 92px
    z-index: 12
    display: flex
    flex-direction: column
    justify-content: flex-start
  &__label
    width: fit-content
    border-radius: 40px
    padding: 8px 25px
    background: #fff
    display: flex
    align-items: center
    margin-bottom: 44px
    & span
        text-transform: uppercase
        font-size: 40px
        font-weight: bold
  &__logo
    width: 40px
    margin-right: 18px
  &__title
    font-weight: 700
    font-size: 55px
    color: #fff
    margin-bottom: 26px
    text-align: left
  &__text
    font-size: 22px
    line-height: 140%
    color: #FFFFFF
    margin-bottom: 32px
    max-width: 810px
  &__btns
    display: flex
    align-items: center
  &__btn-wrap
    margin-right: 50px
    height: 45px
    margin-top: 26px
  &__btn
    min-width: 230px
    position: relative
    width: 100%
    height: 100%
    border-radius: 4px
    background: var(--primary-color)
    color: #fff
    font-size: 16px
    font-weight: 700
    display: flex
    align-items: center
    justify-content: center
    padding: 13px
    transition: box-shadow .3s ease
    display: flex
    align-items: center
    justify-content: center
  &__catalog
    min-width: 270px
    padding-left: 88px
    & img
      position: absolute
      width: 80px
      left: -5px
      pointer-events: none
    & svg
      margin-right: 7px
      width: 18px
      height: 18px
    &:hover
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.35)

@media screen and (max-width: 1600px)
  .baner
    &__hero
      padding: 46px 0px 48px
    &__label
      padding: 5px 15px
      margin-bottom: 22px
      & span
          font-size: 16px
    &__logo
      width: 23px
      margin-right: 8px
    &__title
      font-size: 35px
      margin-bottom: 16px
    &__text
      font-size: 14px
      margin-bottom: 24px
      max-width: 505px
    &__btn-wrap
      margin-right: 50px
      height: 30px
      margin-top: 20px
    &__btn
      min-width: 160px
      font-size: 14px
      padding: 6px 8px 8px
    &__catalog
      min-width: 200px
      padding-left: 50px
      & img
        width: 62px
        left: -15px
      & svg
        margin-right: 6px
        width: 14px
        height: 14px

</style>