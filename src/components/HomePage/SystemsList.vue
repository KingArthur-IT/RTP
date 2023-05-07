<template>
  <div class="list">
      <div class="list__item" v-for="(item, index) in systemList" :key="index">
          <div class="card">
              <img :src="getImageUrl('systems-bg', item.name)" :alt="item.name" class="card__bg">
              <div class="card__label">
                  <img :src="getImageUrl('logos', item.name)" :alt="item.name" class="card__logo">
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