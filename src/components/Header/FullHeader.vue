<template>
    <div class="header__hero">
        <div class="header__logo">
            <img src="@/assets/logo.png" alt="RTP">
            <div class="header__logo-txt">
                Производитель<br>
                инженерной сантехники<br>
                с 17 летним опытом
            </div>
        </div>
        <div class="header__content">
            <nav class="header__nav">
                <div class="header__nav-item" :class="{'active': isServicesHeaderListShown}" @click="servicesListShownToogle">
                    <span>Сервис</span>
                    <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 6.55671e-07L12.9952 7.5L0.00480872 7.5L6.5 6.55671e-07Z" fill="#8CA7DD"/>
                    </svg>
                </div>
                <div class="header__nav-item">Услуги</div>
                <div class="header__nav-item">Доставка и сервис</div>
                <div class="header__nav-item">Оплата</div>
                <div class="header__nav-item">О компании</div>
                <div class="header__nav-item" :class="{'active': isCurrentPage('contacts')}" @click="goToPage('contacts')">Контакты</div>
                <ServicesList :isShown="isServicesHeaderListShown"/>
            </nav>
            <div class="header__call-info">
                <a href="tel:+84955405262" class="header__phone">8 (495) 540-52-62</a>
                <div class="header__phone-description">
                    Звонок бесплатный <br> Пн-Пт 9:00-18:00 
                </div>
            </div>
        </div>
        <div class="header__contacts">
            <button class="header__btn" @click="isModalShow = true">Заказать обратный звонок</button>
            <a href="mailto:sales@rtp.ru" class="header__mail">sales@rtp.ru</a>
        </div>
    </div>
    <Modal 
        v-model:open="isModalShow"
        :title="'Обратный звонок'"
        :descriptionHtml="'Пожалуйста, заполните обязательные поля, <br> и мы с Вами свяжемся.'"
    />
</template>

<script>
import ServicesList from './ServicesList.vue'
import Modal from '../Modals.vue/Modal.vue'

export default {
    components: {
        ServicesList,
        Modal
    },
    data() {
        return {
            isServicesHeaderListShown: false,
            isModalShow: false
        }
    },
    methods: {
        servicesListShownToogle() {
            this.isServicesHeaderListShown = !this.isServicesHeaderListShown
        },
        isCurrentPage(name) {
            return this.$route.name === name
        },
        goToPage(name) {
            this.$router.push({ name })
        }
    },
}
</script>

<style scoped lang="sass">
.header
    &__hero
        display: flex
        justify-content: space-between
        align-items: center
    &__logo 
        display: flex
        align-items: center
        & img
            width: 120px
            margin-right: 15px
    &__logo-txt
        color: #fff
        font-size: 12px
        line-height: 1.3
        border-left: 1px solid #fff
        padding-left: 13px
        max-width: 160px
    &__contacts
        display: flex
        flex-direction: column
        justify-content: space-between
        align-items: flex-end
    &__btn
        border: 2px solid #fff
        border-radius: 23px
        padding: 10px 13px
        background-color: transparent
        font-size: 17px
        color: #FFFFFF
        width: fit-content
        margin-bottom: 27px
        transition: color .3s ease, background .3s ease, border .3s ease
        &:hover
            background: #F5F5F5
            box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.35)
            color: var(--primary-color)
    &__mail
        display: block
        font-weight: 700
        font-size: 24px
        color: #FFFFFF
    &__content
        align-self: stretch
        display: flex
        flex-direction: column
        justify-content: space-between
    &__nav
        display: flex
        align-items: center
        padding-top: 9px
    &__nav-item
        position: relative
        font-size: 20px
        color: var(--notactive-color)
        margin-right: 40px
        display: flex
        align-items: center
        transition: color .3s ease
        cursor: pointer
        & span
            margin-right: 10px
        & svg
            transform: translateY(2px)
            transition: transform .3s ease
            & path
                transition: all .3s ease
        &:hover
            color: #fff
            & svg path
                fill: var(--secondary-color)
        &.active
            color: #fff
            & svg 
                transform: translateY(2px) rotate(180deg)
                & path
                    fill: var(--secondary-color)
    &__call-info
        display: flex
        align-items: center
    &__phone
        font-weight: 700
        font-size: 24px
        color: #FFFFFF
        margin-right: 15px
    &__phone-description
        font-size: 12px
        text-align: right
        color: #FFFFFF
        padding-left: 13px
        border-left: 1px solid #e0e0e0

@media screen and (max-width: 1600px)
    .header
        &__logo
            & img
                width: 80px
                margin-right: 10px
        &__logo-txt
            font-size: 8px
            padding-left: 11px
            max-width: 100px
        &__btn
            font-size: 10px
            margin-bottom: 18px
            padding: 6px 9px
            border: 1px solid #fff
        &__mail
            font-size: 14px
        &__nav
            padding-top: 4px
        &__nav-item
            font-size: 14px
            margin-right: 16px
            & span
                margin-right: 4px
            & svg
                width: 8px
                transform: translateY(1px)
        &__phone
            font-size: 14px
        &__phone-description
            font-size: 8px
            padding-left: 9px

</style>