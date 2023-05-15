<template>
    <div class="how-we-work">
        <div class="container">
            <div class="section-title">
                <div class="section-title-text">Как мы работаем</div>
            </div>
            <div class="how-we-work__list">
                <div class="how-we-work__item">
                    <div class="how-we-work__card">
                        <div class="how-we-work__num">
                        01
                        <svg width="394" height="18" viewBox="0 0 394 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M394 9L379 0.339746V17.6603L394 9ZM0 10.5H380.5V7.5H0V10.5Z" fill="#224386"/>
                        </svg>
                        </div>
                        <div class="how-we-work__time">ПРЯМО СЕЙЧАС</div>
                        <div class="how-we-work__title">Вы позвоните</div>
                        <ul>
                            <li>Отвечаем быстро</li>
                            <li>Бесплатная консультация</li>
                        </ul>
                    </div>
                </div>
                <div class="how-we-work__item">
                    <div class="how-we-work__card">
                        <div class="how-we-work__num">
                        02
                        <svg width="394" height="18" viewBox="0 0 394 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M394 9L379 0.339746V17.6603L394 9ZM0 10.5H380.5V7.5H0V10.5Z" fill="#224386"/>
                        </svg>
                        </div>
                        <div class="how-we-work__time">ЗАВТРА</div>
                        <div class="how-we-work__title">Проведем замер</div>
                        <ul>
                            <li>Замер - БЕСПЛАТНО и ни к чему не обязывает;</li>
                            <li>Приедем, когда удобно Вам;</li>
                            <li>Опытный эксперт поможет воплотить именно Ваши идеи;</li>
                            <li>При нашей первой встрече c нас подарок.</li>
                        </ul>
                    </div>
                </div>
                <div class="how-we-work__item">
                    <div class="how-we-work__card">
                        <div class="how-we-work__num">
                        03
                        <svg width="394" height="18" viewBox="0 0 394 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M394 9L379 0.339746V17.6603L394 9ZM0 10.5H380.5V7.5H0V10.5Z" fill="#224386"/>
                        </svg>
                        </div>
                        <div class="how-we-work__time">ЧЕРЕЗ 24 ЧАСА</div>
                        <div class="how-we-work__title">Подготовим проект</div>
                        <ul>
                            <li>По итогам замеров подготовим <br> индивидуальный эскизный проект.</li>
                        </ul>
                    </div>
                </div>
                <div class="how-we-work__item">
                    <div class="how-we-work__card">
                        <div class="how-we-work__num">
                        04
                        <svg width="394" height="18" viewBox="0 0 394 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M394 9L379 0.339746V17.6603L394 9ZM0 10.5H380.5V7.5H0V10.5Z" fill="#224386"/>
                        </svg>
                        </div>
                        <div class="how-we-work__time">ЧЕРЕЗ 24 ЧАСА</div>
                        <div class="how-we-work__title">Подготовим расчет</div>
                        <ul>
                            <li>Составим подробную смету за 24 часа.</li>
                        </ul>
                    </div>
                </div>
                <div class="how-we-work__item">
                    <div class="how-we-work__card">
                        <div class="how-we-work__num">
                        05
                        <svg width="394" height="18" viewBox="0 0 394 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M394 9L379 0.339746V17.6603L394 9ZM0 10.5H380.5V7.5H0V10.5Z" fill="#224386"/>
                        </svg>
                        </div>
                        <div class="how-we-work__time">ЧЕРЕЗ 7 ДНЕЙ</div>
                        <div class="how-we-work__title">Смонтируем</div>
                        <ul>
                            <li>Проведем пуско-наладочные работы и инструктаж;</li>
                            <li>Выполним монтаж в оговоренные сроки;</li>
                            <li>Уберем за собой весь мусор.</li>
                        </ul>
                    </div>
                </div>
                <div class="how-we-work__item">
                    <div class="how-we-work__card">
                        <div class="how-we-work__num">
                        06
                        <svg width="394" height="18" viewBox="0 0 394 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M394 9L379 0.339746V17.6603L394 9ZM0 10.5H380.5V7.5H0V10.5Z" fill="#224386"/>
                        </svg>
                        </div>
                        <div class="how-we-work__time">ВЕСЬ ПЕРИОД ЭКСПЛУАТАЦИИ</div>
                        <div class="how-we-work__title">Техническая поддержка</div>
                        <ul>
                            <li>Сервисное обслуживание 12 месяцев;</li>
                            <li>Техподдержка – ежедневно.</li>
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
.how-we-work
    padding-top: 95px
    padding-bottom: 47px
    background: url('@/assets/how-we-work.png') no-repeat
    background-size: cover
    background-position-x: center
    & .section-title
        margin-bottom: 106px
    &__list
        display: flex
        justify-content: space-between
        flex-wrap: wrap
        align-items: stretch
        width: calc(100% + 30px)
        transform: translateX(-15px)
    &__item
        flex-basis: 33.33%
        padding: 0 15px
        margin-bottom: 141px
    &__card
        & ul
            padding-left: 16px
        & li
            position: relative
            color: #828D99
            line-height: 1.55
            font-size: 21px
            &:before
                content: ''
                position: absolute
                left: -17px
                top: 7px
                width: 5px
                height: 5px
                background: #828D99
                border-radius: 50%
    &__num
        font-weight: 700
        font-size: 50px
        color: var(--primary-color)
        margin-bottom: 18px
        position: relative
        width: fit-content
        &::before
            content: ''
            position: absolute
            width: 12px
            height: 12px
            background: #FECC00
            right: -20px
            bottom: 10px
        & svg
            position: absolute
            bottom: 9px
            left: 86px
    &__time
        font-weight: 700
        font-size: 17px
        color: #828D99
        margin-bottom: 14px
    &__title
        font-weight: 700
        font-size: 27px
        color: var(--primary-color)
        margin-bottom: 47px
</style>