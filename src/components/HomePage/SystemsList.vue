<template>
  <div class="list">
      <div class="list__item" v-for="(item, index) in systemList" :key="index">
          <div class="card" @click="goToPage(item.name)" :class="item.name">
              <img :src="getImageUrl('systems-bg', item.name)" :alt="item.name" class="card__bg">
              <div class="card__label">
                  <img :src="getImageUrl('logos', item.name)" :alt="item.name" class="card__logo" loading="lazy">
                  <span>{{ item.title }}</span>
              </div>
              <p class="card__description">Система {{ item.title.toUpperCase() }} {{ item.description }}</p>
          </div>
      </div>
  </div>
</template>

<script>
import { systemList } from '@/data/data.js'
import { getImageUrl } from '@/use/helpers.js'

export default {
    data() {
        return {
            systemList
        }
    },
    methods: {
        getImageUrl,
        goToPage(name) {
            if (name === 'alpha')
                this.$router.push({ name: 'alpha-system' })
            else this.$router.push({ name: 'catalog-system', params: { name: name } })
        }
    }
}
</script>

<style scoped lang="sass">
.list
    width: calc( 100% + 40px )
    display: flex
    flex-wrap: wrap
    transform: translateX(-20px)
    &__item
        padding: 20px
        flex-basis: 33.33%
        width: 33.33%
.card
    position: relative
    padding: 35px 30px
    min-height: 510px
    cursor: pointer
    border-radius: 23px
    overflow: hidden
    &::after
        content: ''
        position: absolute
        top: 0
        bottom: 0
        left: 0
        right: 0
        z-index: 0
        pointer-events: none
        opacity: 0
        transition: opacity .3s ease
        border-radius: 23px
    &:hover
        & .card__description
            color: #fff
    &.alpha:hover
        &::after
            opacity: 1
            background: linear-gradient(178.5deg, #2598D2 13.97%, rgba(37, 152, 210, 0.8) 46.47%, rgba(37, 152, 210, 0) 76.93%)
    &.sigma:hover
        &::after
            opacity: 1
            background: linear-gradient(178.5deg, #003C47 24.51%, rgba(0, 60, 71, 0.8) 50.89%, rgba(0, 60, 71, 0) 76.93%)
    &.omega:hover
        &::after
            opacity: 1
            background: linear-gradient(178.5deg, #B92F2C 24.51%, rgba(185, 47, 44, 0.8) 50.89%, rgba(185, 47, 44, 0) 76.93%)
    &.beta-orange:hover
        &::after
            opacity: 1
            background: linear-gradient(178.5deg, #EE741D 13.97%, rgba(238, 116, 29, 0.8) 46.47%, rgba(238, 116, 29, 0) 76.93%)
    &.delta:hover
        &::after
            opacity: 1
            background: linear-gradient(178.5deg, #00949F 13.97%, rgba(0, 148, 159, 0.8) 46.47%, rgba(0, 148, 159, 0) 76.93%)
    &.beta:hover
        &::after
            opacity: 1
            background: linear-gradient(178.5deg, #7E8E97 13.97%, rgba(126, 142, 151, 0.8) 46.47%, rgba(126, 142, 151, 0) 76.93%)
    &.beta-elite:hover
        &::after
            opacity: 1
            background: linear-gradient(178.5deg, #80C2EC 13.97%, rgba(128, 194, 236, 0.8) 46.47%, rgba(128, 194, 236, 0) 76.93%)
    &.gamma:hover
        &::after
            opacity: 1
            background: linear-gradient(178.5deg, #224386 13.97%, rgba(34, 67, 134, 0.8) 46.47%, rgba(34, 67, 134, 0) 76.93%)
    &__bg
        position: absolute
        top: 0
        bottom: 0
        left: 0
        right: 0
        width: 100%
        height: 100%
    &__label
        display: flex
        align-items: center
        background: #fff
        padding: 8px 25px
        border-radius: 39px
        margin-bottom: 24px
        width: fit-content
        z-index: 2
        & span
            text-transform: uppercase
            color: #333333
            font-weight: 700
            font-size: 25px
    &__logo
        width: 37px
        height: 37px
        margin-right: 16px
    &__description
        font-weight: 500
        font-size: 32px
        color: #333333
        line-height: 1.21
        z-index: 2
        transition: color .3s ease

@media screen and (max-width: 1600px)
    .list
        width: calc( 100% + 26px )
        transform: translateX(-13px)
        &__item
            padding: 13px
    .card
        padding: 20px 40px 20px 17px
        min-height: 309px
        &__label
            padding: 5px 15px
            margin-bottom: 15px
            & span
                font-size: 15px
        &__logo
            width: 22px
            height: 22px
            margin-right: 10px
        &__description
            font-size: 20px
</style>