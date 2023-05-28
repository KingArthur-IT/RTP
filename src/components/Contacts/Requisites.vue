<template>
    <div class="requisites">
        <div class="requisites__title">Общество с ограниченной ответственностью «Ютара»</div>
        <div class="requisites__wrapper">
            <div class="requisites__adress">
                <div class="uradress">
                    <div class="uradress__name">Юридический адрес:</div>
                    <div class="uradress__value">119435, г. Москва, Большой Саввинский пер., д. 12 стр. 18, этаж 2, помещение IV, комната 9</div>
                </div>
                <div class="inn">
                    <div><span>ИНН</span> 9704043737 </div>
                    <div><span>КПП</span> 770401001</div>
                </div>
                <div class="line"><span>ОГРН</span>1217700012089 от 20 января 2021 г.</div>
            </div>
            <div class="requisites__center">
                <div class="requisites__left">
                    <div class="line first-line"><span>р/с</span>40702810940000097620</div>
                    <div class="text">ПАО Сбербанк г. Москва</div>
                    <div class="line second-line"><span>к/с</span>30101810400000000225</div>
                    <div class="line"><span>БИК</span>044525225</div>
                </div>
                <div class="requisites__right">
                    <div class="director">Генеральный директор</div>
                    <div class="text">Чайджы Фатих</div>
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
.requisites
    background: #EDEDED
    padding: 17px 34px 27px
    font-size: 16px
    color: #42474D
    &__title
        font-weight: 700
        color: var(--primary-color)
        margin-bottom: 18px
    &__wrapper
        display: flex
        justify-content: space-between
    & .uradress
        display: flex
        margin-bottom: 22px
        max-width: 530px
        &__name
            color: var(--primary-color)
            font-weight: 700
            min-width: 170px
            margin-right: 5px
        &__value
            font-weight: 500
    & .inn
        display: flex
        margin-bottom: 26px
        font-weight: 500
        & div
            margin-right: 19px
            & span
                color: var(--primary-color)
                font-weight: 700
                margin-right: 10px
    & .line
        font-weight: 500
        & span
            color: var(--primary-color)
            font-weight: 700
            margin-right: 10px
    & .text
        font-weight: 500
    &__center
        flex-basis: 55%
        display: flex
        justify-content: space-between
    &__left
        flex-basis: 40%
        & .first-line
            margin-bottom: 6px
        & .text
            margin-bottom: 16px
        & .second-line
            margin-bottom: 26px
    &__right
        flex-basis: 42%
        & .director
            margin-bottom: 6px
            font-weight: 700
            color: var(--primary-color)

@media screen and (max-width: 1600px)
    .requisites
        &__wrapper
            flex-wrap: wrap
        &__adress
            flex-basis: 60%
            margin-bottom: 26px
        &__center
            flex-basis: 40%
            flex-direction: column
        &__left
            margin-bottom: 26px
        &__right
            flex-basis: 100%
</style>