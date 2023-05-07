<template>
  <div class="mounting">
      <div class="section-title best__title">
          <div class="section-title-text">Услуги по монтажу</div>
      </div>
      <div class="mounting__wrapper">
          <div class="mounting__item">
              <div class="mounting__img">
                  <img src="@/assets/mounting/1.jpg" alt="1">
              </div>
          </div>
          <div class="mounting__item">
              <div class="mounting__img">
                  <img src="@/assets/mounting/2.jpg" alt="1">
              </div>
          </div>
          <div class="mounting__item">
              <div class="mounting__img">
                  <img src="@/assets/mounting/3.jpg" alt="1">
              </div>
          </div>
          <div class="mounting__item">
              <div class="mounting__img">
                  <img src="@/assets/mounting/4.jpg" alt="1">
              </div>
          </div>
          <div class="mounting__item">
              <div class="mounting__img">
                  <img src="@/assets/mounting/5.jpg" alt="1">
              </div>
          </div>
          <div class="mounting__item">
              <div class="mounting__img">
                  <img src="@/assets/mounting/6.jpg" alt="1">
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
.mounting
    &__wrapper
        margin-top: 90px
        display: grid
        grid-template-columns: repeat(3, 1fr)
        grid-template-rows: repeat(5, 1fr)
        grid-column-gap: 0px
        grid-row-gap: 0px
        width: calc( 100% + 48px )
        transform: translateX(-24px)
    &__item
        padding: 24px
        width: 100%
        height: 100%
        &:nth-child(1)
            grid-area: 1 / 1 / 3 / 2
        &:nth-child(2)
            grid-area: 3 / 1 / 6 / 2
        &:nth-child(3)
            grid-area: 1 / 2 / 4 / 3
        &:nth-child(4)
            grid-area: 4 / 2 / 6 / 3
        &:nth-child(5)
            grid-area: 1 / 3 / 3 / 4
        &:nth-child(6)
            grid-area: 3 / 3 / 6 / 4
    &__img
        width: 100%
        height: 100%
        border-radius: 8px
        overflow: hidden
        & img
            width: 100%
            height: 100%

@media screen and (max-width: 1600px)
    .mounting
        &__wrapper
            margin-top: 60px
            display: grid
            width: calc( 100% + 30px )
            transform: translateX(-15px)
        &__item
            padding: 15px
</style>