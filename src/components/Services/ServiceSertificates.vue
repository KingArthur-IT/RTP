<template>
    <div class="container">
        <div class="sertificates">
            <div class="section-title sertificates__title">
                <div class="section-title-text">Сертификаты и документация</div>
            </div>
            <div class="sertificates__hero">
                <div class="sertificates__content">
                    <div class="sertificates__subtitle">Вся продукция торговой марки RTP сертифицирована и имеет необходимые разрешительные документы.</div>
                    <div class="sertificates__text">
                        Подтверждая качество и надежность своих изделий ТМ RTP застраховала весь ассортимент своей продукции в Страховой компании “Альфа”.  
                    </div>
                </div>
                <div class="sertificates__images">
                    <div class="sertificates__alpha">
                        <img src="@/assets/sertificates/alpha.png" alt="alpga">
                    </div>
                    <div class="sertificates__iso">
                        <img src="@/assets/sertificates/iso.png" alt="iso">
                    </div>
                </div>
            </div>
            <div class="sertificates__cards">
                <div class="sertificates__item">
                    <div class="sertificates__card">
                    <div class="sertificates__card-title"><span>Гарантии</span> качества и надежности</div>
                    <ul>
                        <li>Вся продукция сертифицирована на территории РФ и ТС и имеет все необходимые свидетельства и сертификаты.</li>
                        <li>Продукция прошла добровольную сертификацию и имеет сертификат МОССТРОЙСЕРТИФИКАЦИЯ (продукция проходит 1000-часовые лабораторные испытания в независимой лаборатории).</li>
                        <li>Трехступенчатая система контроля качества: входной контроль сырья и материалов, производственный контроль выпускаемой продукции, контроль качества готовой продукции.</li>
                        <li>На заводе РТП внедрена система экологического менеджмента ISO 14001:2015, а также система менеджмента качества ISO 9001:2015</li>
                    </ul>
                    </div>
                </div>
                <div class="sertificates__item">
                    <div class="sertificates__card">
                    <div class="sertificates__card-title">Членство в <span>АПТС гарантирует</span></div>
                    <ul>
                        <li>Компания РТП входит в Ассоциацию Производителей Трубопроводных Систем (АПТС), которая объединяет ведущие предприятия трубопроводной отрасли.</li>
                        <li>Высокое качество продукции (регулярно проводятся лабораторные испытания выборочной продукции).</li>
                        <li>Уверенность в продукции (исключается любая фальсификация и контрафакт, осуществляется проверка репутации производителя, наличие сертификатов соответствия и паспортов качества).</li>
                        <li>Участие представителей компании РТП в заседаниях региональных комиссий по противодействию незаконному обороту продукции, участие представителей организации в разработке и актуализации отраслевых нормативных документах совместно с АПТС.</li>
                    </ul>
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
.sertificates
    &__title
        margin-bottom: 59px
    &__hero
        display: flex
        justify-content: space-between
        margin-bottom: 68px
    &__content
        flex-basis: 50%
    &__subtitle
        font-weight: 500
        font-size: 24px
        line-height: 125%
        color: #6C7689
        margin-bottom: 34px
        max-width: 632px
    &__text
        font-size: 17px
        line-height: 176%
        color: #6C7689
        max-width: 488px
    &__images
        display: flex
        flex-basis: 50%
        align-items: center
    &__alpha
        max-width: 315px
        padding-left: 35px
        & img
            width: 100%
    &__iso
        max-width: 424px
        transform: translateX(73px)
        & img
            width: 100%
    &__cards
        display: flex
        align-items: stretch
        width: calc(100% + 100px)
        transform: translateX(-50px)
    &__item
        flex-basis: 50%
        padding: 0 50px
    &__card
        height: 100%
        padding: 35px 14px 59px 17px
        background: #FFFFFF
        border-radius: 8px
        transition: box-shadow .3s ease
        &:hover
            box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.25)
        &-title
            font-weight: 500
            font-size: 32px
            margin-bottom: 53px
            margin-left: 46px
            color: #828D99
            & span
                color: var(--primary-color)
                font-weight: 700
        & ul
            & li
                position: relative
                font-weight: 500
                font-size: 21px
                line-height: 181%
                color: #828D99
                padding: 29px 0
                padding-left: 42px
                border-bottom: 1px solid #DBDBDB
                &:before
                    content: ''
                    position: absolute
                    width: 20px
                    height: 20px
                    background: var(--primary-color)
                    top: 36px
                    left: 4px
                &:last-child
                    border: none

@media screen and (max-width: 1600px)
    .sertificates
        &__title
            margin-bottom: 34px
        &__hero
            margin-bottom: 60px
        &__subtitle
            font-size: 16px
            margin-bottom: 16px
            max-width: 500px
        &__text
            font-size: 14px
            max-width: 410px
        &__images
            justify-content: flex-end
        &__alpha
            max-width: 185px
            padding-left: 35px
        &__iso
            max-width: 182px
            transform: translateX(40px)
        &__cards
            width: calc(100% + 20px)
            transform: translateX(-10px)
        &__item
            padding: 0 10px
        &__card
            padding: 29px 14px 19px 17px
            &-title
                font-size: 20px
                margin-bottom: 30px
                margin-left: 0px
                text-align: center
            & ul
                & li
                    font-size: 14px
                    padding: 12px 0
                    padding-left: 24px
                    &:before
                        width: 11px
                        height: 11px
                        top: 19px
                        left: 4px
</style>