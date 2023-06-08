<template>
  <div 
    class="modal-wrapper" 
    :class="{'show': isShown, 'visible': isVisible}"
    @click="closeModal"
  >
      <div ref="modalHero" class="modal" @click.stop>
          <iframe width="560" height="315" :src="dynamicUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="loader__wrapper" :class="{'show': isLoading}">
          <div class="loader">
              <Loader />
          </div>
      </div>
  </div>
</template>

<script>
import Loader from '../UIKit/Loader.vue'

export default {
    components: {
        Loader
    },
    props: {
        open: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isShown: false,
            isVisible: false,
            isLoading: true,
            videoUrl: 'https://www.youtube.com/embed/_DLxACb4P7I',
            dynamicUrl: ''
        }
    },
    mounted() {
        document.querySelector('body').addEventListener('click', () => {
            if (this.open)
                this.closeModal()
        })

    },
    methods: {
        closeModal() {
            this.$emit('update:open', false)
        },
    },
    watch: {
        open() {
            if (this.open) {
                this.isShown = true
                this.dynamicUrl = this.videoUrl
                setTimeout(() => {
                    this.isVisible = true
                }, 100);
                setTimeout(() => {
                    this.isLoading = false
                }, 1000);
            } else {
                const src = this.$refs.modalHero.querySelector('iframe').getAttribute('src')
                this.$refs.modalHero.querySelector('iframe').setAttribute('src', src)
                this.isVisible = false
                setTimeout(() => {
                    this.isShown = false
                }, 300);
            }
        },
    }
}
</script>

<style scoped lang="sass">
.loader
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-30px, -30px)
    z-index: 5
    &__wrapper
        position: absolute
        width: 100%
        height: 100%
        pointer-events: none
        // backdrop-filter: blur(2px)
        // -webkit-backdrop-filter: blur(2px)
        // background: rgba(255, 255, 255, 0.1)
        opacity: 0
        &.show
            transition: opacity .5s ease
            opacity: 1
.modal-wrapper
    padding: 0 30px
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    // background: linear-gradient(30deg, rgba(255, 255, 255, 0.5) -19.85%, rgba(235, 235, 235, 0.367354) 4.2%, rgba(224, 224, 224, 0.287504) 13.88%, rgba(212, 212, 212, 0.21131) 27.98%, rgba(207, 207, 207, 0.175584) 37.8%, rgba(202, 202, 202, 0.143432) 44.38%, rgba(200, 200, 200, 0.126299) 50.54%, rgba(196, 196, 196, 0.1) 60.21%)
    // backdrop-filter: blur(15px)
    // -webkit-backdrop-filter: blur(15px)
    z-index: 20
    display: flex
    justify-content: center
    align-items: center
    display: none
    opacity: 0
    transition: opacity .3s ease
    &.show
        display: flex
    &.visible
        opacity: 1
.modal
    & iframe
        display: block
        margin: 0 auto
        width: 1254px
        height: 642px

@media screen and (max-width: 1600px)
    .modal
        & iframe
            width: 1000px
            height: 450px
</style>