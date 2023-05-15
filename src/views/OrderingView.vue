<template>
  <main>
      <div class="container">
          <div class="breadcrumbs">
              <BreadCrumbs />
          </div>
          <div class="ordering">
              <div class="ordering__title">Оформление заказа</div>
              <div class="ordering__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem, accusamus provident quibusdam libero suscipit debitis nisi amet maxime excepturi iure rem similique nobis autem nemo aut impedit? Perspiciatis quas aperiam omnis amet nobis alias incidunt, eos quo reiciendis nostrum beatae fugit reprehenderit suscipit quisquam, magnam harum nesciunt modi odio obcaecati. Quia ratione, cupiditate qui quibusdam error dicta laborum illo accusamus excepturi a, maxime mollitia quo reiciendis architecto impedit recusandae voluptas. Adipisci expedita maiores hic voluptatibus magni ut quam, quos tenetur, ducimus id, nulla fuga molestias odit cumque quae officiis quo? Est debitis voluptatem autem ipsum exercitationem eum sint nostrum.
              </div>
          </div>
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
.ordering
    margin: 60px 0
    &__title
        font-weight: 700
        font-size: 36px
        color: var(--primary-color)
        margin-bottom: 37px
    &__subtitle
        font-weight: 500
        font-size: 32px
        color: #42474D
        margin-bottom: 20px
    &__text
        font-size: 18px
        line-height: 130%
        color: #42474D
        margin-bottom: 20px
    & ul
        padding-left: 25px
        & li
            font-size: 18px
            position: relative
            margin-bottom: 18px
            color: #42474D
            &:before
                content: ''
                position: absolute
                width: 3px
                height: 3px
                background: #42474D
                left: -15px
                top: 7px
                border-radius: 50%

@media screen and (max-width: 1600px)
    .ordering
        margin: 40px 0 60px
        &__title
            font-size: 30px
            margin-bottom: 37px
        &__subtitle
            font-size: 22px
            margin-bottom: 10px
        &__text
            font-size: 14px
            margin-bottom: 20px
        & ul
            margin-top: -10px
            padding-left: 25px
            & li
                font-size: 14px
                margin-bottom: 10px
                &:before
                    content: ''
                    position: absolute
                    width: 3px
                    height: 3px
                    background: #42474D
                    left: -15px
                    top: 7px
                    border-radius: 50%
</style>