<template>
  <main>
    <div class="container">
        <div class="breadcrumbs">
            <BreadCrumbs />
        </div>
    </div>
    <div class="terms-baner">
        <div class="container">
            <div class="terms-baner__hero">
                <h1 class="terms-baner__title">Политика конфиденциальности</h1>
                <div class="terms-baner__text">
                    Данная политика определяет порядок обработки персональных данных и меры по обеспечению их безопасности
                </div>
            </div>
        </div>
    </div>
    <div class="container term-container">
        <div class="terms-text">Владелец сайта rtp.ru (далее Администрация) обязуется сохранять Вашу конфиденциальность в сети Интернет. Настоящая Политика Конфиденциальности, рассказывает о том, как собираются, обрабатываются и хранятся Ваши личные данные. Администрация уделяет большое внимание защите личной информации пользователей. Пользуюсь сайтом РТП, пользователь тем самым дает согласие на применение правил сбора и использования данных, изложенных в настоящем документе.</div>
        <br>
        <div class="terms-text">
            <strong><i>Если Вы не согласны с условиями нашей политики конфиденциальности, пожалуйста, не используйте сайт РТП.</i></strong>
        </div>
        <br>
        <div class="term-ol">Собираемая информация</div>
        <div class="terms-text">Администрация сайта может собирать следующую информацию о пользователях сайта:</div>
        <div class="term-sublist">
            <div class="term-sublist-item" data-num="1">Фамилия, Имя или Отчество</div>
            <div class="term-sublist-item" data-num="2">Электронная почта</div>
            <div class="term-sublist-item" data-num="2">Номер телефона</div>
        </div>
        <div class="term-ol">Использование информации</div>
        <div class="terms-text">Ниже описаны некоторые способы использования личной информации пользователя:</div>
        <ul>
            <li>для внутреннего отчета,</li>
            <li>для предоставления информации и услуг, которые запрашивает пользователь,</li>
            <li>для улучшения качества продуктов сайта,</li>
            <li>для улучшения качества предоставления услуг,</li>
            <li>для решения различного рода споров,</li>
            <li>для формирования статистических данных.</li>
        </ul>
        <div class="term-ol">Раскрытие информации</div>
        <div class="terms-text">Администрация не продает личные данные пользователя и не передает их третьим лицам без согласия на то пользователя. <br>
            Далее описаны некоторые случаи передачи личной информации пользователя:</div>
        <ul>
            <li>в случаях, если это требуется органам спецслужб или если это требует законодательство</li>
        </ul>
        <div class="term-ol">Прочая информация</div>
        <div class="terms-text">Дети любых возрастов могут беспрепятственно пользоваться данным сайтом.</div>
    </div>
  </main>
</template>

<script>
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs.vue'

export default {
    components: {
        BreadCrumbs,
    },
    mounted(){
        window.scrollTo(0, 0);
    },
}
</script>

<style scoped lang="sass">
.breadcrumbs
    margin-top: 5px
.terms-baner
    width: 100%
    background: url('@/assets/terms-of-use/baner.jpg') no-repeat
    background-size: cover
    background-position-x: center
    margin-top: 42px
    margin-bottom: 55px
    &__hero
        padding: 63px 0 86px
        color: #fff
    &__title
        font-weight: 700
        font-size: 40px
        line-height: 121%
        margin-bottom: 32px
        max-width: 700px
    &__text
        font-weight: 500
        font-size: 16px
        line-height: 1.5
        max-width: 650px
.terms-text
    font-size: 16px
    line-height: 1.56
    color: #828D99
    margin-bottom: 12px
.term-container
    margin-bottom: 87px
    & ul
        color: #828D99
        margin-bottom: 12px
        line-height: 1.56
        font-size: 18px
        font-weight: 500
        padding-left: 13px
        list-style: inside
        & li
            position: relative
            font-size: 16px
            color: #828D99
            line-height: 1.56
            margin-bottom: 6px
            font-weight: 400
.term-ol
    color: #828D99
    margin-bottom: 12px
    margin-top: 18px
    line-height: 1.56
    font-size: 18px
    font-weight: 500
.term-sublist
    padding-left: 36px
.term-sublist-item
    position: relative
    font-size: 16px
    color: #828D99
    line-height: 1.56
    margin-bottom: 6px
    &::before
        content: attr(data-num)
        position: absolute
        left: -25px
        top: 0
    & a
        color: #828D99


@media screen and (max-width: 1200px)
    .terms-baner
        margin-top: 32px
        margin-bottom: 20px
        &__hero
            padding: 30px 0
        &__title
            font-size: 20px
            margin-bottom: 14px
        &__text
            font-size: 9px
            max-width: 375px
    .terms-text
        font-size: 9px
    .term-container
        margin-bottom: 34px
    .term-ol
        margin-bottom: 6px
        font-size: 12px
    .term-sublist
        padding-left: 24px
    .term-sublist-item
        font-size: 9px
        margin-bottom: 6px
        &::before
            left: -25px
    .terms-text
        font-size: 9px
        margin-bottom: 8px
    .term-container
        margin-bottom: 34px
</style>