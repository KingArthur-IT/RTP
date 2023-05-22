<template>
  <main>
      <div class="container">
          <div class="breadcrumbs">
              <BreadCrumbsVue />
          </div>
      </div>
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
      <div class="bg-logo">
          <img src="@/assets/RTP.png">
      </div>
      <div class="container">
          <div class="our-services">
            <div class="section-title our-services__title">
                <div class="section-title-text">Наши услуги</div>
            </div>
            <div class="our-services__hero">
                <div class="our-services__item" @click="isModalShow = true">
                    <img src="@/assets/our-services/1.jpg" alt="1">
                    <div class="our-services__label"><span>/</span>Монтаж систем отопления</div>
                </div>
                <div class="our-services__item" @click="isModalShow = true">
                    <img src="@/assets/our-services/2.jpg" alt="1">
                    <div class="our-services__label"><span>/</span>Монтаж водоснабжения</div>
                </div>
                <div class="our-services__item" @click="isModalShow = true">
                    <img src="@/assets/our-services/3.jpg" alt="1">
                    <div class="our-services__label"><span>/</span>Монтаж котельного оборудования</div>
                </div>
                <div class="our-services__item" @click="isModalShow = true">
                    <img src="@/assets/our-services/4.jpg" alt="1">
                    <div class="our-services__label"><span>/</span>Монтаж канализации</div>
                </div>
                <div class="our-services__item" @click="isModalShow = true">
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
      <Modal 
        v-model:open="isModalShow"
        :title="'Консультация по монтажу'"
        :descriptionHtml="'Подбор оборудования, консультация и расчет сметы для Вас - БЕСПЛАТНО! <br> Пожалуйста, заполните обязательные поля, и мы с Вами свяжемся. '"
        :formInfo="'form-consultation-from-services'"
        :type="'consultation'"
      />
  </main>
</template>

<script>
import BreadCrumbsVue from '../components/BreadCrumbs/BreadCrumbs.vue';
import MountingService from '../components/HomePage/MountingService.vue';
import VideoSection from '../components/HomePage/VideoSection.vue';
import Modal from '../components/Modals/Modal.vue';
import ServicesBaner from '../components/Services/ServicesBaner.vue';
import ServiceSertificates from '../components/Services/ServiceSertificates.vue';
import ServicesHowWeWork from '../components/Services/ServicesHowWeWork.vue';
import ServicesQuiestions from '../components/Services/ServicesQuiestions.vue';

export default {
    components: {
        BreadCrumbsVue,
        ServicesBaner,
        MountingService,
        VideoSection,
        ServiceSertificates,
        ServicesHowWeWork,
        ServicesQuiestions,
        Modal
    }, 
    mounted(){
        window.scrollTo(0, 0);
    },
    data() {
        return {
            isModalShow: false,
        }
    },
}
</script>

<style scoped lang="sass">
.baner
    margin-top: 24px
.bg-logo
    position: relative
    & img
        position: absolute
        left: 0
        right: 0
        top: 0
        width: 100%

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
        padding: 18px 39px 25px 27px
        overflow: hidden
        height: 100%
        transition: background .3s ease
        & h3
            font-weight: 700
            font-size: 22px
            margin-bottom: 27px
            color: var(--primary-color)
        & p
            font-weight: 500
            font-size: 17px
            line-height: 146%
            color: #828D99
        & img
            position: absolute
            bottom: 13px
            right: 0
            pointer-events: none
            opacity: 0
            transition: opacity .3s ease
        &:hover
            background: var(--primary-color)
            & img
                opacity: 1
            & h3
                color: #fff
            & p
                color: #fff

.our-services
    margin-bottom: 147px
    padding-top: 59px
    &__title
        margin-bottom: 86px
    &__hero
        display: grid
        grid-template-columns: repeat(3, 1fr)
        grid-template-rows: repeat(4, 188px)
        grid-column-gap: 41px
        grid-row-gap: 31px
    &__item
        position: relative
        border-radius: 8px
        overflow: hidden
        cursor: pointer
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

.questions
    margin-top: 83px

@media screen and (max-width: 1600px)
    .features-list
        padding: 51px 0 61px
        &__wrap
            width: calc( 100% + 22px )
            transform: translateX(-11px)
        &__item
            padding: 0 11px
        &__card
            padding: 14px 14px 12px 16px
            & h3
                font-size: 16px
                margin-bottom: 22px
            & p
                font-size: 15px
            & img
                bottom: 9px
                width: 90px

    .our-services
        margin-bottom: 64px
        padding-top: 18px
        &__title
            margin-bottom: 50px
        &__hero
            display: grid
            grid-template-columns: repeat(3, 1fr)
            grid-template-rows: repeat(2, 240px)
            grid-column-gap: 20px
            grid-row-gap: 18px
        &__item
            &:nth-child(1)
                grid-area: 1 / 1 / 3 / 2
            &:nth-child(2)
                grid-area: 1 / 2 / 2 / 3
            &:nth-child(3)
                grid-area: 2 / 2 / 3 / 3
            &:nth-child(4)
                grid-area: 1 / 3 / 2 / 4
            &:nth-child(5)
                grid-area: 2 / 3 / 3 / 4
            & img
                width: 100%
        &__label
            padding: 10px 16px
            min-height: 68px
            font-size: 18px
            & span
                margin-right: 4px

    .advantages
        &__list
            padding: 23px 0px
            width: calc( 100% + 32px )
            transform: translateX(-16px)
        &__item
            padding: 16px 27px
            font-size: 18px

    .examples
        margin-top: 50px
        margin-bottom: 40px

    .sertificates
        margin-top: 69px

    .questions
        margin-top: 63px
</style>