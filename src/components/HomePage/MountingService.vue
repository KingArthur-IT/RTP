<template>
  <div class="mounting">
      <div class="section-title best__title">
          <div class="section-title-text">{{ title }}</div>
      </div>
      <div class="mounting__images">
          <div v-for="row in curRows" :key="row" class="mounting__img-wrapper" :class="{'long': row === 1 || row === 4}">
              <div v-for="i in 3" :key="i" class="mounting__item">
                  <div class="mounting__img">
                      <img :src="getImageUrl('mounting', i + (row - 1) * 3, 'jpg')" :alt="i">
                  </div>
              </div>
          </div>
      </div>
      <div v-if="hasMoreImages" class="mounting__more-btn">
          <LightRectButton :text="'Показать еще'" :isGrayBtn="true" @click="showMore"/>
      </div>
  </div>
</template>

<script>
import { getImageUrl } from '@/use/helpers.js'
import LightRectButton from '../UIKit/LightRectButton.vue'

export default {
    components: {
        LightRectButton
    },
    data() {
        return {
            curImagesCount: 6,
            maxImageCount: 12
        }
    },
    props: {
        title: {
            type: String,
            default: 'Услуги монтажа'
        }
    },
    computed: {
        curRows() {
            return Math.round(this.curImagesCount / 3)
        },
        hasMoreImages() {
            return this.curImagesCount < this.maxImageCount
        }
    },
    methods: {
        getImageUrl,
        showMore() {
            this.curImagesCount += 3
        }
    }
}
</script>

<style scoped lang="sass">
.mounting
    &__images
        margin-top: 66px
        width: calc( 100% + 48px )
        transform: translateX(-24px)
    &__img-wrapper
        display: flex
        align-items: stretch
        &.long
            & .mounting__item
                &:nth-child(1)
                    flex-basis: 26%
                &:nth-child(2)
                    flex-basis: 48%
                &:nth-child(3)
                    flex-basis: 26%
    &__item
        padding: 24px
        width: 100%
        height: auto
        &:nth-child(1)
            flex-basis: 30%
        &:nth-child(2)
            flex-basis: 30%
        &:nth-child(3)
            flex-basis: 40%
    &__img
        width: 100%
        height: 100%
        border-radius: 8px
        overflow: hidden
        filter: grayscale(1)
        transition: filter .3s ease
        & img
            border-radius: 8px
            width: 100%
            height: 100%
        &:hover
            filter: grayscale(0)
    &__more-btn
        max-width: 230px
        margin: auto
        margin-top: 77px

@media screen and (max-width: 1600px)
    .mounting
        &__images
            margin-top: 60px
            width: calc( 100% + 30px )
            transform: translateX(-15px)
        &__item
            padding: 15px
        &__more-btn
            max-width: 140px
            margin-top: 36px
</style>