<template>
  <div class="preview">
      <div class="preview__sidebar">
          <div 
            v-for="(img, index) in imagesList" :key="index" 
            class="preview__small" 
            :class="{'active': currentActiveImage === index}" 
            @click="smallPreviewClick(index)"
          >
              <img :src="getImageUrl('product-card', img, 'jpg')" alt="img">
          </div>
          <div class="preview__small" @click="isPreviewImage = false">
              <img src="@/assets/product-card/preview-icon.png" alt="preview">
              <div class="video-wrap">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 6.29297V18.293L17 12.293L7 6.29297Z" fill="white"/>
                  </svg>
              </div>
          </div>
      </div>
      <div class="preview__wrapper">
          <div class="preview__sale">
                <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.45205 0.964844L0.800781 12.0503H5.23496V18.7016L11.8862 7.61611H7.45205V0.964844Z" fill="white"/>
                </svg>
                <span>Распродажа</span>
          </div>
          <img v-if="isPreviewImage" :src="getImageUrl('product-card', previewImgName, 'jpg')" alt="preview">
          <video v-else src="@/assets/product-card/video.mp4" controls></video>
      </div>
  </div>
</template>

<script>
import { getImageUrl } from '@/use/helpers.js'
export default {
    data() {
        return {
            isPreviewImage: true,
            currentActiveImage: 0,
            activeSrc: '',
            imagesList: ['1', '2', '3'],
            previewImgName: '1'
        }
    },
    mounted() {

    },
    methods: {
        getImageUrl,
        smallPreviewClick(index) {
            this.isPreviewImage = true
            this.currentActiveImage = index
            this.previewImgName = this.imagesList[index]
        }
    }
}
</script>

<style scoped lang="sass">
.preview
    width: 100%
    display: flex
    &__sidebar
        margin-right: 18px
        display: flex
        flex-direction: column
    &__small
        position: relative
        width: 65px
        height: 65px
        margin-bottom: 15px
        border: 1px solid #A6ACB3
        cursor: pointer
        transition: border .3s ease
        &.active
            border: 3px solid var(--primary-color)
        & img
            width: 100%
            height: 100%
        & .video-wrap
            & svg
                width: 16px
    &__wrapper
        position: relative
        border: 1px solid #A6ACB3
        border-radius: 2px
        position: relative
        overflow: hidden
        width: 100%
        & img
            width: 100%
            height: 100%
        & video
            height: 100%
            width: 100%
            transform: scale(1.01)
    &__sale
        position: absolute
        top: 10px
        right: 19px
        display: flex
        align-items: center
        padding: 7px 8px
        background: #DC1818
        border-radius: 6px
        color: #fff
        font-size: 14px
        width: fit-content
        z-index: 1
        & svg
            margin-right: 5px

@media screen and (max-width: 1600px)
    .preview
        &__sidebar
            margin-right: 10px
        &__small
            width: 39px
            height: 39px
            margin-bottom: 9px
            &.active
                border-width: 2px
            & .video-wrap
                background: rgba(34, 67, 134, 0.65)
                position: absolute
                top: 0
                bottom: 0
                left: 0
                right: 0
                display: flex
                align-items: center
                justify-content: center
        &__sale
            right: 12px
            padding: 4px 10px
            font-size: 10px
            & svg
                width: 9px
                margin-right: 4px
</style>