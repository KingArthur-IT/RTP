<template>
  <div class="systems-list">
      <div class="systems-list__item">
          <div class="systems-list__card alpha">
              <div class="hover-bg"></div>
              <div class="systems-list__label">
                  <img src="@/assets/logos/alpha.png" alt="alpha">
                  <p>alpha</p>
              </div>
              <div class="systems-list__text">
                Полипропиленовые трубы и фитинги PP-R
              </div>
          </div>
      </div>
      <div class="systems-list__item">
          <div class="systems-list__card sigma">
               <div class="hover-bg"></div>
              <div class="systems-list__label">
                  <img src="@/assets/logos/sigma.png" alt="sigma">
                  <p>sigma</p>
              </div>
              <div class="systems-list__text">
                Запорная арматура и латунные резьбовые фитинги
              </div>
          </div>
      </div>
      <div class="systems-list__item">
          <div class="systems-list__card omega">
               <div class="hover-bg"></div>
              <div class="systems-list__label">
                  <img src="@/assets/logos/omega.png" alt="omega">
                  <p>omega</p>
              </div>
              <div class="systems-list__text">
                Трубы и комплектующие для теплого пола PE-RT и PE-Xa
              </div>
          </div>
      </div>
      <div class="systems-list__item">
          <div class="systems-list__card delta">
               <div class="hover-bg"></div>
              <div class="systems-list__label">
                  <img src="@/assets/logos/delta.png" alt="delta">
                  <p>delta</p>
              </div>
              <div class="systems-list__text">
                Трубы PE-Xa / EVOH и аксиальные фитинги
              </div>
          </div>
      </div>
      <div class="systems-list__item">
          <div class="systems-list__card beta">
               <div class="hover-bg"></div>
              <div class="systems-list__label">
                  <img src="@/assets/logos/beta.png" alt="beta">
                  <p>beta</p>
              </div>
              <div class="systems-list__text">
                Внутренняя <br> канализация
              </div>
          </div>
      </div>
      <div class="systems-list__item">
          <div class="systems-list__card beta-elite">
               <div class="hover-bg"></div>
              <div class="systems-list__label">
                  <img src="@/assets/logos/beta-elite.png" alt="beta">
                  <p>beta-elite</p>
              </div>
              <div class="systems-list__text">
                Малошумная <br> канализаци
              </div>
          </div>
      </div>
      <div class="systems-list__item">
          <div class="systems-list__card beta-orange">
               <div class="hover-bg"></div>
              <div class="systems-list__label">
                  <img src="@/assets/logos/beta-orange.png" alt="beta">
                  <p>beta-orange</p>
              </div>
              <div class="systems-list__text">
                Наружная <br> канализация
              </div>
          </div>
      </div>
      <div class="systems-list__item">
          <div class="systems-list__card gamma">
               <div class="hover-bg"></div>
              <div class="systems-list__label">
                  <img src="@/assets/logos/gamma.png" alt="gamma">
                  <p>gamma</p>
              </div>
              <div class="systems-list__text">
                Трубы ПНД и компрессионные фитинги
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
.systems-list
    display: flex
    align-items: stretch
    width: calc( 100% + 8px )
    transform: translateX(-4px)
    &__item
        padding: 4px
        flex-basis: 12.5%
    &__card
        position: relative
        border-radius: 17px
        padding: 14px 12px 18px 12px
        transition: filter .3s ease
        height: 100%
        &.alpha
            background: #349ED4
            padding-right: 14px
            & .hover-bg
                background: url('@/assets/system-card-hover/alpha.png') no-repeat
                background-size: 100% auto
                background-position: center center
        &.sigma
            background: #003C47
            & .hover-bg
                background: url('@/assets/system-card-hover/sigma.png') no-repeat
                background-size: 100% auto
                background-position: center center
        &.omega
            background: #B92F2C
            padding-right: 10px
            & .hover-bg
                background: url('@/assets/system-card-hover/omega.png') no-repeat
                background-size: 100% auto
                background-position: center center
        &.delta
            background: #23A2AB
            & .hover-bg
                background: url('@/assets/system-card-hover/delta.png') no-repeat
                background-size: 100% auto
                background-position: center center
        &.beta
            background: #7E8E97
            & .hover-bg
                background: url('@/assets/system-card-hover/beta.png') no-repeat
                background-size: 100% auto
                background-position: center center
        &.beta-elite
            background: #80C2EC
            & .hover-bg
                background: url('@/assets/system-card-hover/beta.png') no-repeat
                background-size: 100% auto
                background-position: center center
        &.beta-orange
            background: #EE741D
            & .hover-bg
                background: url('@/assets/system-card-hover/beta.png') no-repeat
                background-size: 100% auto
                background-position: center center
        &.gamma
            background: #2A4A8A
            & .hover-bg
                background: url('@/assets/system-card-hover/gamma.png') no-repeat
                background-size: 100% auto
                background-position: center center
        &:hover
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.35)
            & .hover-bg
                opacity: 1
    &__label
        padding: 4px 10px
        background: #fff
        display: flex
        align-items: center
        min-width: 85px
        width: fit-content
        margin-bottom: 18px
        border-radius: 20px
        & img
            width: 16px
            height: 16px
            margin-right: 7px
        & p
            font-weight: 500
            font-size: 12px
            text-transform: uppercase
    &__text
        font-weight: 500
        font-size: 16px
        line-height: 1.25
        color: #FFFFFF
.hover-bg
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    border-radius: 17px
    opacity: 0
    pointer-events: none
    transition: opacity .3s ease

@media screen and (max-width: 1600px)
    .systems-list
        flex-wrap: wrap
        &__item
            flex-basis: 25%
            min-height: 220px
        &__card
            padding: 20px
        & img
            width: 18px
            height: 18px
        & p
            font-size: 14px
        &__text
            font-size: 20px
</style>