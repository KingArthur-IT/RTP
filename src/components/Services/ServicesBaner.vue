<template>
    <div class="services-baner">
        <div class="container">
            <div class="services-baner__hero">
                <div class="services-baner__content">
                    <div class="services-baner__title">
                        <h1>Отопление дома <br> 
                        <span>
                            «под ключ»
                            <svg width="335" height="19" viewBox="0 0 335 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.99106 15.4999C0.99106 15.4999 111.996 4.00117 164.999 4.00006C218.001 3.99894 333.991 9.49991 333.991 9.49991" stroke="#FECC00" stroke-width="7"/>
                            </svg>
                        </span>
                        от производителя от 1590 ₽ за м²</h1>
                        <img src="@/assets/services/no1.png" alt="1">
                    </div>
                    <div class="services-baner__list">
                        <div class="services-baner__item">
                            <div class="services-baner__card">
                                <div class="icon">
                                    <img src="@/assets/services/iso.png" alt="iso">
                                </div>
                                <p>
                                    <span>Гарантия высокого качества по оптимальной цене</span> без наценок посредников. Вся продукция поставляется напрямую с завода, исключая фальсификат.
                                </p>
                            </div>
                        </div>
                        <div class="services-baner__item">
                            <div class="services-baner__card">
                                <div class="icon">
                                    <img src="@/assets/services/fix.png" alt="fix">
                                </div>
                                <p>
                                    <span>Надежность</span>, исключение брака в поставках благодаря тщательному контролю качества на всех этапах производства.
                                </p>
                            </div>
                        </div>
                        <div class="services-baner__item">
                            <div class="services-baner__card last">
                                <div class="icon">
                                    <img src="@/assets/services/guarantee.png" alt="guarantee">
                                </div>
                                <p>
                                    <span>Расширенная гарантия</span>, страхование ответственности. Ответственность производителя застрахована на 10 млн. руб., т.е. ущерб из-за брака, возникшего по вине производителя, будет полностью возмещен.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="services-baner__btn" @click="isModalShow = true">
                        <LightRectButton :text="'Рассчитать стоимость'" />
                    </div>
                    <div class="services-baner__info">
                        *Производитель ООО “РТП” №1 в России по количеству выпускаемой продукции - более 3000 наименований. 
                    </div>
                </div>
                <div class="baner-list">
                <div class="baner-list__item">
                    <div class="baner-list__num">3500+</div>
                    <div class="baner-list__text">Стали жить <br> с комфортом</div>
                </div>
                <div class="baner-list__item">
                    <div class="baner-list__num">91%</div>
                    <div class="baner-list__text">Клиентов рекомендуют нас</div>
                </div>
                <div class="baner-list__item">
                    <div class="baner-list__num">587</div>
                    <div class="baner-list__text">аккредитованных монтажников в РФ</div>
                </div>
                <div class="baner-list__item">
                    <div class="baner-list__num">17<span>лет</span></div>
                    <div class="baner-list__text">Производим <br> инженерные системы</div>
                </div>
                </div>
            </div>
        </div>
    </div>
    <Modal 
        v-model:open="isModalShow"
        :title="'Обратный звонок'"
        :descriptionHtml="'Пожалуйста, заполните обязательные поля, <br> и мы с Вами свяжемся.'"
        :formInfo="'form-calculate-cost-from-services'"
        :type="'calculate'"
      />
</template>

<script>
import Modal from '../Modals/Modal.vue'
import LightRectButton from '../UIKit/LightRectButton.vue'

export default {
    components: {
        LightRectButton,
        Modal
    },
    data() {
        return {
            isModalShow: false
        }
    }
}
</script>

<style scoped lang="sass">
.services-baner
    width: 100%
    background: url('@/assets/services/baner.jpg') no-repeat
    background-size: cover
    background-position-x: center
    &__hero
        padding: 68px 0 43px 0
        display: flex
        justify-content: space-between
    &__content
        max-width: 1106px
    &__title
        display: flex
        align-items: center
        margin-bottom: 57px
        & h1
            font-weight: 700
            font-size: 55px
            line-height: 132%
            color: #FFFFFF
            max-width: 873px
            & span
                position: relative
                z-index: 4
                & svg
                    position: absolute
                    bottom: -12px
                    left: 0
                    z-index: -1
        & img
            filter: drop-shadow(0px 1px 19px #FECC00)
    &__list
        display: flex
        justify-content: space-between
        margin-bottom: 18px
    &__item
        flex-basis: 33.33%
    &__card
        margin-right: 88px
        &.last
            margin-right: 50px
        & .icon
            width: 71px
            margin-bottom: 15px
            & img
                width: 100%
                height: 100%
                filter: drop-shadow(0px 0px 4px #2E78D9)
        & p
            font-weight: 500
            font-size: 18px
            line-height: 164%
            color: #fff
            & span
                font-weight: 700
                color: #FECC00
    &__btn
        width: 291px
        height: 42px
        margin-bottom: 65px
    &__info
        font-size: 14px
        color: #fff

.baner-list
    display: flex
    flex-direction: column
    justify-content: space-between
    max-width: 250px
    padding-left: 56px
    margin-top: -31px
    &__item
        position: relative
        &:last-child
            &::before
                display: none
        &::after
            content: ''
            position: absolute
            width: 20px
            height: 20px
            background: #FECC00
            left: -50px
            top: 30px
        &::before
            content: ''
            position: absolute
            width: 1px
            background: #D8D8D8
            height: 160%
            left: -40px
            top: 30px
    &__num
        font-weight: 700
        font-size: 65px
        color: #fff
        & span
            font-size: 55px
    &__text
        font-weight: 700
        font-size: 18px
        line-height: 146%
        color: #fff
        width: 102%

@media screen and (max-width: 1600px)
    .services-baner
        &__hero
            padding: 40px 0 13px 0
        &__title
            margin-bottom: 30px
            & h1
                font-size: 35px
                max-width: 580px
                & span
                    & svg
                        width: 210px
            & img
                width: 98px
        &__list
            margin-bottom: 18px
        &__card
            margin-right: 35px
            &.last
                margin-right: 10px
            & .icon
                width: 44px
                margin-bottom: 11px
            & p
                font-size: 14px
        &__btn
            width: 188px
            height: 35px
            margin-bottom: 44px
        &__info
            font-size: 10px

    .baner-list
        max-width: 250px
        padding-left: 56px
        margin-top: -20px
        &__item
            &::after
                width: 12px
                height: 12px
                left: -30px
                top: 13px
            &::before
                height: 160%
                left: -25px
                top: 13px
            &:last-child
                & .baner-list__text
                    width: 125%
        &__num
            font-size: 35px
            & span
                font-size: 35px
        &__text
            font-size: 14px
            width: 102%
</style>