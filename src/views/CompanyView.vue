<template>
  <main class="company">
    <div class="container">
      <BreadCrumbs />
      <div class="section-title-simple company__title">Компания РТП</div>
      <div class="company__subtitle">Лидер в производстве полимерных труб</div>
    </div>
    <CompanyHistory />

    <div class="container about">
      <p class="about__text">
        <span>Компания ООО «РосТурПласт» (ООО «РТП»)</span> была основана в 2005 году, как производственная компания по выпуску полимерных труб и фитингов для нужд Российского и зарубежных рынков. Завод компании находится в Московской области, Егорьевском районе, д.Лелечи д. 47, где в 2005 году был построен первый цех и установлена первая очередь современного европейского оборудования для производства полимерных труб и фитингов. Все технические специалисты завода ООО «РосТурПласт» (ООО «РТП») прошли подготовительные и обучающие курсы в Европе на заводах поставщиков оборудования и получили соответствующие сертификаты качества, также были приглашены зарубежные специалисты в данной области для работы на заводе. В производстве нашей продукции используются только лучшие исходные материалы, соблюдаются высочайшие стандарты производства и контроля качества продукции.
      </p>
      <div class="about__title">
        <div>Мощная производственная база на территории России</div>
      </div>
      <div class="about__list-title">На сегодняшний день ООО «РосТурПласт» (ООО «РТП»):</div>
      <ul class="about__list">
        <li>Имеет современное европейское оборудование: 25 экструзионных линий и 60 термопластавтоматов</li>
        <li>Использует высококачественное сырье и комплектующие</li>
        <li>Производит более 1200 видов продукции</li>
        <li>Добилась существенного положения на рынке полимерных труб и фитингов;</li>
        <li>Увеличило объемы производства в 15 раз</li>
        <li>Ведет работу с проектными и строительными организациями</li>
        <li>Работает с сетевыми компаниями</li>
      </ul>
      <div class="about__list-title">Вся продукция «РосТурПласт» (ООО «РТП»):</div>
      <ul class="about__list">
        <li>Имеет код EAN 13</li>
        <li>Сертифицирована</li>
        <li>Застрахована компанией ОАО "АльфаСтрахование"</li>
      </ul>
      <p class="about__text">
        Производитель канализационных труб «РосТурПласт» (OOO «РТП»), обеспечивает потребности в качественном продукте как отечественных, так и зарубежных предприятий отрасли: строительных организаций, подрядчиков, ремонтных компаний и других. Отдельное внимание уделяется маркетинговой политике, партнерскому сотрудничеству, поиску новых направлений развития.
        Как завод, имеющий крупное производство труб для канализации, отопления и водоснабжения, фитингов, монтажных элементов, ООО «РосТурПласт» (OOO «РТП»), принимает участие в специализированных выставках. В результате этой деятельности значительно повысилась узнаваемость бренда, были подписаны новые контракты с российскими и иностранными партнерами.
        Помимо производства пластиковых канализационных труб компания ведет проектную деятельность, разрабатывая для своих клиентов планы инженерных коммуникаций различных сооружений. Такая схема работы позволяет наиболее полно применять потенциал выпускаемой продукции на практике. Завод по производству труб и фитингов для канализационных систем и систем водоснабжения «РосТурПласт» (OOO «РТП»), выступает как эксперт в вопросах рынка и предлагает профессиональную помощь в подборе оборудования.
      </p>
    </div>

    <div class="container">
      <GrovingGeography />

      <div class="company-action">
        <div class="company-action__item company-action__form">
          <CompanyActionForm />
        </div>
        <div class="company-action__item company-action__card">
          <WhatsUpCard />
        </div>
        <div class="company-action__item company-action__card">
          <MailCard />
        </div>
      </div>

    </div>
  </main>
</template>

<script>
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs.vue'
import CompanyActionForm from '../components/Company/CompanyActionForm.vue'
import CompanyHistory from '../components/Company/CompanyHistory.vue'
import GrovingGeography from '../components/HomePage/GrovingGeography.vue'
import WhatsUpCard from '../components/Company/WhatsUpCard.vue'
import MailCard from '../components/Company/MailCard.vue'

export default {
  components: {
    BreadCrumbs,
    CompanyHistory,
    GrovingGeography,
    CompanyActionForm,
    WhatsUpCard,
    MailCard
  }
}
</script>

<style scoped lang="sass">
.company
  &__title
    margin-top: 60px
    margin-bottom: 11px
  &__subtitle
    font-weight: 700
    font-size: 24px
    color: #42474D
    margin-bottom: 50px
  

.about
  margin-top: 76px
  margin-bottom: 70px
  &__text
    font-size: 14px
    line-height: 167%
    color: #42474D
    & span
      font-size: 17px
      font-weight: 700
  &__title
    font-weight: 700
    font-size: 32px
    color: var(--primary-color)
    margin-top: 42px
    margin-bottom: 32px
    position: relative
    &::before
      content: ''
      left: 0
      bottom: -10px
      position: absolute
      height: 1px
      width: 100%
      background-color: #EDEDED
    & div
      width: fit-content
      &::after
        content: ''
        left: 0
        bottom: -11px
        position: absolute
        height: 3px
        width: 100%
        background-color: #224386
  &__list-title
    font-weight: 700
    font-size: 24px
    line-height: 150%
    color: #42474D
    margin-bottom: 30px
  &__list
    padding-left: 24px
    margin-bottom: 30px
    & li
      font-size: 16px
      line-height: 150%
      color: #42474D
      position: relative
      &::before
        content: ''
        position: absolute
        border-radius: 50%
        background-color: #42474D
        width: 4px
        height: 4px
        left: -18px
        top: 13px
  
.company-action
    padding: 114px 0 76px
    display: flex
    justify-content: space-between
    align-items: stretch
    width: calc( 100% + 20px )
    transform: translateX(-10px)
    &__item
      padding: 0 10px
    &__form
      max-width: 840px
    &__card
      flex-grow: 1

@media screen and (max-width: 1600px)
  .company
    &__title
      margin-top: 22px
      margin-bottom: 9px
    &__subtitle
      font-size: 14px
      margin-bottom: 30px
  .about
    margin-top: 21px
    margin-bottom: 30px
    &__title
      font-size: 20px
      margin-top: 20px
      margin-bottom: 40px
    &__list-title
      font-size: 17px
      margin-bottom: 25px
    &__list
      padding-left: 20px
      margin-bottom: 22px
      & li
        font-size: 14px
        &::before
          left: -13px
          top: 8px
  .company-action
      padding: 40px 0 35px
      width: calc( 100% + 32px )
      transform: translateX(-16px)
      flex-wrap: wrap
      &__item
        padding: 0 16px
      &__form
        max-width: 100%
        flex-basis: 100%
        margin-bottom: 18px
      &__card
        flex-grow: 1
        flex-basis: 50%
</style>