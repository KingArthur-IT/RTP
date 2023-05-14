<template>
  <div class="mounting">
      <div class="section-title best__title">
          <div class="section-title-text">Услуги по монтажу</div>
      </div>
      <div class="mounting__images">
          <div v-for="loop in loopsCount" :key="loop">
              <div class="mounting__img-wrapper" :class="{'six': sectionCount(loop) === 6, 'nine': sectionCount(loop) === 9}">
                  <div class="mounting__item" v-for="index in sectionCount(loop)" :key="index">
                      <div class="mounting__img">
                          <img :src="getImageUrl('mounting', (loop - 1) * 9 + index, 'jpg')" :alt="index">
                      </div>
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
            imageCount: 6,
            maxImageCount: 15
        }
    },
    computed: {
        loopsCount() {
            return Math.floor(this.imageCount / 10) + 1
        },
        hasMoreImages() {
            return this.imageCount < this.maxImageCount
        }
    },
    methods: {
        getImageUrl,
        sectionCount(loop) {
            if (loop < this.loopsCount)
                return 9
            else {
                const remainder = this.imageCount % 9
                return remainder === 0 ? 9 : 6
            }
        },
        showMore() {
            if (this.imageCount % 9 === 6)
                this.imageCount += 3
            else this.imageCount += 6
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
        display: grid
        grid-column-gap: 0px
        grid-row-gap: 0px
        &.six
            grid-template-columns: repeat(3, 1fr)
            grid-template-rows: repeat(5, auto)
            & .mounting__item
                &:nth-child(1)
                    grid-area: 1 / 1 / 3 / 2
                &:nth-child(2)
                    grid-area: 3 / 1 / 6 / 2
                &:nth-child(3)
                    grid-area: 1 / 2 / 4 / 3
                &:nth-child(4)
                    grid-area: 4 / 2 / 6 / 3
                &:nth-child(5)
                    grid-area: 1 / 3 / 3 / 4
                &:nth-child(6)
                    grid-area: 3 / 3 / 6 / 4
        &.nine
            grid-template-columns: repeat(12, 1fr)
            grid-template-rows: repeat(7, 1fr)
            & .mounting__item
                &:nth-child(1)
                    grid-area: 1 / 1 / 3 / 5
                &:nth-child(2)
                    grid-area: 3 / 1 / 6 / 5
                &:nth-child(3)
                    grid-area: 1 / 5 / 4 / 9
                &:nth-child(4)
                    grid-area: 4 / 5 / 6 / 9
                &:nth-child(5)
                    grid-area: 1 / 9 / 3 / 13
                &:nth-child(6)
                    grid-area: 3 / 9 / 6 / 13
                &:nth-child(7)
                    grid-area: 6 / 1 / 8 / 4
                &:nth-child(8)
                    grid-area: 6 / 4 / 8 / 7
                &:nth-child(9)
                    grid-area: 6 / 7 / 8 / 13
    &__item
        padding: 24px
        width: 100%
        height: 100%
    &__img
        width: 100%
        height: 100%
        border-radius: 8px
        overflow: hidden
        filter: grayscale(1)
        transition: filter .3s ease
        & img
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