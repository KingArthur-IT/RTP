<template>
  <div class="history">
      <div class="container">
        <div class="stages">
          <div class="stages__title">Этапы развития компании</div>
          <div class="stages__hero">
              <div class="stages__list">
                  <CompanyHistoryCol 
                      :years="['2005 г.', '2009 г.', '2011 г.', '2013 г.']"
                      :description="firstDescription"
                  />
              </div>
              <div class="stages__list">
                  <CompanyHistoryCol 
                      :years="['2014 г.', '2015 г.', '2016 г.', '2017 г.']"
                      :description="secondDescription"
                  />
              </div>
              <div class="stages__list">
                  <CompanyHistoryCol 
                      :years="['2018 г.', '2019 г.', '2020 г.', '2023 г.']"
                      :description="thirdDescription"
                  />
              </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import CompanyHistoryCol from './CompanyHistoryCol.vue'

export default {
    components: {
        CompanyHistoryCol
    },
    data() {
        return {
            firstDescription: [
                'Основание компании;<br> производство внутренней канализации',
                'Производство наружной канализации',
                'Производство полипропиленовых труб и фитингов для водоснабжения и отопления PP-R, а также труб ПНД',
                'Производство компрессионных фитингов'
            ],
            secondDescription: [
                'Построен новый складской комплекс',
                'Производство полипропиленовых труб, армированных алюминием по центру (PP-R/AL/PP-R), введен в строй новый цех',
                'Производство трубы и фитингов больших диаметров (до 160 мм), в т.ч. армированных стекловолокном, а также труб и фитингов других цветов (серый, зеленый и др.)',
                '<ul class="stage-ul"><li>Производство трубы PE-RT для теплого пола</li><li>Открытие завода в Новосибирске</li></ul>'
            ],
            thirdDescription: [
                'Производство изделий из латуни;<br> строительство склада-терминала класса А',
                'Собственные американки диаметром до 63 мм малошумная канализация серии «ELITE» производство кранов ППР в России производство латунных кранов и фитингов',
                'Производство трубы PE-Xa / EVOH',
                '<ul class="stage-ul"><li>Производство трубы PE-RT /EVOH / PE-RT</li><li>Производство гофрированной трубы</li></ul>'
            ]
        }
    }
}
</script>

<style scoped lang="sass">
.history
    background: url('@/assets/company-stages.jpg') no-repeat
    background-size: cover
    background-position-x: center
.stages
    padding: 50px 0 90px
    &__title
        font-weight: 500
        font-size: 32px
        color: #FFFFFF
        margin-bottom: 46px
    &__hero
        display: flex
        justify-content: space-between
        width: calc( 100% + 110px )
        transform: translateX(-55px)
    &__list
        padding: 0 55px
        flex-basis: 33.33%

@media screen and (max-width: 1600px)
    .stages
        padding: 21px 0 30px
        &__title
            font-size: 25px
            margin-bottom: 34px
        &__hero
            width: calc( 100% + 30px )
            transform: translateX(-15px)
        &__list
            padding: 0 15px
</style>