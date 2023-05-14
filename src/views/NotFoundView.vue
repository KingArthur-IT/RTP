<template>
  <div>
      <div class="container">
          <div class="breadcrumbs">
              <BreadCrumbs />
          </div>
          <div class="not-found">
              <svg width="579" height="356" viewBox="0 0 579 356" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.944 289.008H106.096V352H159.664V289.008H185.456V239.408H159.664V4.79998H100.144L0.944 239.408V289.008ZM51.04 239.408L106.096 108.96V239.408H51.04ZM260.592 84.656C260.592 59.856 271.504 50.432 288.864 50.432C306.224 50.432 317.136 59.856 317.136 84.656V272.144C317.136 296.944 306.224 306.368 288.864 306.368C271.504 306.368 260.592 296.944 260.592 272.144V84.656ZM206.032 268.672C206.032 324.224 235.296 355.968 288.864 355.968C342.432 355.968 371.696 324.224 371.696 268.672V88.128C371.696 32.576 342.432 0.831998 288.864 0.831998C235.296 0.831998 206.032 32.576 206.032 88.128V268.672ZM394.257 289.008H499.409V352H552.977V289.008H578.769V239.408H552.977V4.79998H493.457L394.257 239.408V289.008ZM444.353 239.408L499.409 108.96V239.408H444.353Z" fill="#224386"/>
              </svg>
          </div>
      </div>
      <div class="not-found-baner">
          <div class="container">
              <div class="not-found-baner__text">
                Ошибка! <br>
                К сожалению, запрашиваемая <br>
                Вами страница не найдена...
            </div>
            <div class="not-found-baner__btn">
                <button @click="$router.push({ name: 'home' })">Перейти на главную</button>
            </div>
          </div>
      </div>
  </div>
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
.not-found
    margin-top: 60px
.not-found-baner
    margin-top: -22px
    background: var(--primary-color)
    color: #fff
    padding-top: 83px
    padding-bottom: 27px
    &__text
        font-weight: 700
        font-size: 40px
        line-height: 124%
        margin-bottom: 29px
    &__btn
        width: 243px
        height: 41px
        & button
            width: 100%
            height: 100%
            appearance: none
            background: transparent
            border: 1px solid #fff
            color: #fff
            display: flex
            align-items: center
            justify-content: center
            border-radius: 5px
            font-size: 17px
            transition: color .3s ease, background .3s ease, border .3s ease, box-shadow .3s ease
            &:hover
                background: #F5F5F5
                border-color: var(--primary-color)
                color: var(--primary-color)
                box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.35)

@media screen and (max-width: 1600px)
    .not-found
        margin-top: 70px
        & svg
            width: 330px
            height: 202px
    .not-found-baner
        margin-top: -9px
        padding-top: 39px
        padding-bottom: 40px
        &__text
            font-size: 35px
</style>