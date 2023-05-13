<template>
  <div class="video-section">
      <div class="video-section__hero">
          <div class="video-section__icon" @click="isModalOpened = true">
              <svg width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="52.5" cy="52.5" r="52.5" fill="white"/>
                <path d="M43 69.3691V34L72.2034 52.8635L43 69.3691Z" fill="#224386" stroke="#224386" stroke-width="5"/>
              </svg>
          </div>
          <h3 class="video-section__title">Узнайте, как работает наш завод. <br> Это займет не более 10 минут.</h3>
          <div class="video-section__btn">
              <LightRectButton :text="'Смотреть видео'" @click="isModalOpened = true"/>
          </div>
      </div>
      <img src="@/assets/video/RTP.png" alt="RTP" class="video-section__logo">
  </div>
  <VideoModal v-model:open="isModalOpened" />
</template>

<script>
import VideoModal from '../Modals/VideoModal.vue'
import LightRectButton from '../UIKit/LightRectButton.vue'

export default {
    components: {
        LightRectButton,
        VideoModal
    },
    data() {
        return {
            isModalOpened: false
        }
    }
}
</script>

<style scoped lang="sass">
.video-section
    position: relative
    width: 100%
    background: url('@/assets/video/video-bg.jpg') no-repeat
    background-size: cover
    background-position-x: center
    position: relative
    padding: 164px 30px 100px
    &__hero
        margin: auto
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
    &__icon
        margin-bottom: 40px
        cursor: pointer
    &__title
        font-weight: 700
        font-size: 40px
        text-align: center
        color: #fff
        margin-bottom: 73px
        line-height: 1.3
    &__btn
        width: 230px
    &__logo
        position: absolute
        width: 490px
        right: 64px
        bottom: 0

@media screen and (max-width: 1600px)
    .video-section
        padding: 154px 30px 60px
        &__icon
            margin-bottom: 25px
            & svg
                width: 73px
                height: 73px
        &__title
            font-size: 35px
            margin-bottom: 26px
            line-height: 1.15
        &__btn
            width: 160px
        &__logo
            width: 340px
            right: -35px
            bottom: 0
</style>