<template>
  <main class="contacts">
    <div class="container">
      <BreadCrumbs />
      <div class="section-title-simple contacts__title">Контакты</div>
      <div class="contacts__wrapper">
        <div class="contacts__card">
          <ContactCard 
            :title="'Производство в Московской области'"
            :adress="'140326, Московская область, <br> г.о. Егорьевск, c.Лелечи, стр.61Б'"
            :phone="'+7 (495) 540 52 62'"
            :additional="' (центральный офис)'"
            :imgName="'moscow'"
          />
        </div>
        <div class="contacts__card">
          <ContactCard 
            :title="'Производство в Новосибирске'"
            :adress="'630071, Новосибирская область <br> Новосибирск, ул. Станционная, д. 60/9'"
            :phone="'+7 (383) 383 04 14'"
            :additional="''"
            :imgName="'novosibirsk'"
          />
        </div>
        <div class="contacts__card">
          <ContactCard 
            :title="'Производство в Краснодаре'"
            :adress="'350039, Краснодарский край,<br> Краснодар, Майский проезд, 16/2;'"
            :phone="'+7 (861) 202-52-32'"
            :additional="''"
            :imgName="'krasnodar'"
          />
        </div>
        <div class="contacts__card">
          <div class="contacts__socials">
            <div class="contacts__social">
              <WhatsUpCard />
            </div>
            <div class="contacts__social">
              <MailCard />
            </div>
          </div>
        </div>
      </div>
      <div class="section-title-simple contacts__title">Реквизиты</div>
      <Requisites />
    </div>
  </main>
</template>

<script>
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs.vue'
import ContactCard from '../components/Contacts/ContactCard.vue'
import WhatsUpCard from '../components/Contacts/WhatsUpCard.vue'
import MailCard from '../components/Contacts/MailCard.vue'
import Requisites from '../components/Contacts/Requisites.vue'

export default {
  components: {
    BreadCrumbs,
    ContactCard,
    WhatsUpCard,
    MailCard,
    Requisites
  },
  mounted(){
    window.scrollTo(0, 0);
  },
}
</script>

<style scoped lang="sass">
.contacts
  padding-bottom: 85px
  &__title
    margin: 64px 0 40px
  &__wrapper
    display: flex
    align-items: stretch
    justify-content: space-between
    flex-wrap: wrap
    width: calc( 100% + 72px )
    transform: translateX(-36px)
  &__card
    padding: 36px
    flex-basis: 50%
  &__socials
    display: flex
    align-items: stretch
    justify-content: space-between
    width: calc(100% + 62px)
    transform: translateX(-31px)
    height: 100%
  &__social
    width: 100%
    height: 100%
    padding: 0 31px

@media screen and (max-width: 1600px)
  .contacts
    padding-bottom: 77px
    &__title
      margin: 32px 0 36px
    &__wrapper
      width: calc( 100% + 40px )
      transform: translateX(-20px)
    &__card
      padding: 20px
    &__socials
      width: calc(100% + 44px)
      transform: translateX(-22px)
    &__social
      padding: 0 22px
</style>