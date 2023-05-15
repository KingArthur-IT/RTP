<template>
  <main>
      <div class="baner">
          <ServicesBaner />
      </div>
      <div class="container">
          <div class="features-list">
              <div class="features-list__wrap">
                  <div class="features-list__item">
                      <div class="features-list__card">
                          <h3>Постгарантийное обслуживание</h3>
                          <p>
                              Вам не нужно беспокоиться и переживать о работе систем отопления, водоснабжения, канализации. Ежегодное своевременное обслуживание позволит избежать проблем, связанных с монтажом и эксплуатацией инженерных систем в доме.
                          </p>
                          <img src="@/assets/services/card-hover-1.png" alt="1">
                      </div>
                  </div>
                  <div class="features-list__item">
                      <div class="features-list__card">
                          <h3>Постоянный контакт</h3>
                          <p>
                            С представителями завода по телефону, по почте, через форму обратной связи на сайте. Оперативные консультации по ассортименту компании, техническим аспектам, оказание помощи вне очереди.
                          </p>
                          <img src="@/assets/services/card-hover-2.png" alt="2">
                      </div>
                  </div>
                  <div class="features-list__item">
                      <div class="features-list__card">
                          <h3>Постоянное наличие товара</h3>
                          <p>
                              На складе и широкий ассортимент продукции под любую инженерную задачу позволяет реализовать проект любой сложности в полном объеме.
                          </p>
                          <img src="@/assets/services/card-hover-3.png" alt="3">
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="our-services">
            <div class="section-title our-services__title">
                <div class="section-title-text">Наши услуги</div>
            </div>
            <div class="our-services__hero">
                <div class="our-services__item">
                    <img src="@/assets/our-services/1.jpg" alt="1">
                    <div class="our-services__label"><span>/</span>Монтаж систем отопления</div>
                </div>
                <div class="our-services__item">
                    <img src="@/assets/our-services/2.jpg" alt="1">
                    <div class="our-services__label"><span>/</span>Монтаж водоснабжения</div>
                </div>
                <div class="our-services__item">
                    <img src="@/assets/our-services/3.jpg" alt="1">
                    <div class="our-services__label"><span>/</span>Монтаж канализации</div>
                </div>
                <div class="our-services__item">
                    <img src="@/assets/our-services/4.jpg" alt="1">
                    <div class="our-services__label"><span>/</span>Монтаж котельного оборудования</div>
                </div>
                <div class="our-services__item">
                    <img src="@/assets/our-services/5.jpg" alt="1">
                    <div class="our-services__label"><span>/</span>Монтаж теплых полов</div>
                </div>
            </div>
          </div>
      </div>
      <div class="advantages">
          <div class="container">
              <div class="advantages__list">
                  <div class="advantages__item"><span>Гарантия</span> качества</div>
                  <div class="advantages__item"><span>Качественные</span> материалы</div>
                  <div class="advantages__item"><span>Возможность</span> рассрочки</div>
                  <div class="advantages__item"><span>Фиксированная</span> цена </div>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="examples">
              <MountingService :title="'Примеры наших работ'" />
          </div>
      </div>
      <div class="how-we-work">
          <ServicesHowWeWork />
      </div>
      <VideoSection />
      <div class="sertificates">
          <ServiceSertificates />
      </div>
      <div class="questions">
          <ServicesQuiestions />
      </div>
  </main>
</template>

<script>
import MountingService from '../components/HomePage/MountingService.vue';
import VideoSection from '../components/HomePage/VideoSection.vue';
import ServicesBaner from '../components/Services/ServicesBaner.vue';
import ServiceSertificates from '../components/Services/ServiceSertificates.vue';
import ServicesHowWeWork from '../components/Services/ServicesHowWeWork.vue';
import ServicesQuiestions from '../components/Services/ServicesQuiestions.vue';

export default {
    components: {
        ServicesBaner,
        MountingService,
        VideoSection,
        ServiceSertificates,
        ServicesHowWeWork,
        ServicesQuiestions
    }, 
    mounted(){
        window.scrollTo(0, 0);
    },
}
</script>

<style scoped lang="sass">
.features-list
    padding: 88px 0 66px
    &__wrap
        display: flex
        align-items: stretch
        justify-content: space-between
        width: calc( 100% + 38px )
        transform: translateX(-19px)
    &__item
        padding: 0 19px
        flex-basis: 33.33%
    &__card
        position: relative
        background: #EDEDED
        border-radius: 8px
        padding: 18px 39px 50px 27px
        color: var(--primary-color)
        overflow: hidden
        height: 100%
        transition: color .3s ease, background .3s ease
        & h3
            font-weight: 700
            font-size: 22px
            margin-bottom: 27px
        & p
            font-weight: 500
            font-size: 17px
            line-height: 146%
        & img
            position: absolute
            bottom: 13px
            right: 0
            pointer-events: none
            opacity: 0
            transition: opacity .3s ease
        &:hover
            background: var(--primary-color)
            color: #fff
            & img
                opacity: 1

.our-services
    margin-bottom: 147px
    &__title
        margin-bottom: 74px
    &__hero
        display: grid
        grid-template-columns: repeat(3, 1fr)
        grid-template-rows: repeat(4, 1fr)
        grid-column-gap: 41px
        grid-row-gap: 31px
    &__item
        position: relative
        border-radius: 8px
        overflow: hidden
        &:nth-child(1)
            grid-area: 1 / 1 / 5 / 2
            & img
                width: 100%
        &:nth-child(2)
            grid-area: 1 / 2 / 3 / 3
            & img
                width: 100%
        &:nth-child(3)
            grid-area: 1 / 3 / 3 / 4
        &:nth-child(4)
            grid-area: 3 / 2 / 5 / 3
        &:nth-child(5)
            grid-area: 3 / 3 / 5 / 4
            & img
                width: 100%
        & img
            height: 100%
    &__label
        position: absolute
        bottom: 0
        left: 0
        right: 0
        padding: 23px 18px 41px
        background: var(--primary-color)
        color: #fff
        font-weight: 700
        font-size: 24px
        border-radius: 8px
        & span
            color: #FECC00
            margin-right: 6px

.advantages
    background: #F0F0F0
    &__list
        display: flex
        align-items: center
        justify-content: space-between
        padding: 37px 33px
    &__item
        padding: 32px 62px
        font-size: 22px
        line-height: 127%
        color: var(--primary-color)
        border-right: 1px solid var(--primary-color)
        & span
            font-weight: 700
        &:last-child
            border: none

.examples
    margin-top: 109px
    margin-bottom: 118px

.sertificates
    margin-top: 140px
</style>