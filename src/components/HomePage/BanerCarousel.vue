<template>
  <div class="carousel-wrapper">
        <Carousel :items-to-show="1" ref="banerSlider" :wrap-around="true" :snapAlign="'start'" :mouseDrag="true">
            <slide v-for="(slide, index) in sliderList" :key="index">
                <div class="slide">
                    <img :src="getImageUrl(index + 1, 'bg')" :alt="slide.imgName" class="slide__bg">
                    <div class="slide__hero">
                        <img :src="getImageUrl(index + 1, 'logo')" :alt="slide.imgName" class="slide__logo">
                        <h2 class="slide__title" v-html="slide.title"></h2>
                        <button class="slide__btn">Подробнее</button>
                    </div>
                </div>
            </slide>
        </Carousel>
        <button class="controls__btn arrow-left" @click="prevClick">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6.03516L7 12.0352V7.03516H13V5.03516H7V0.0351562L0 6.03516Z" fill="#42474D"/>
            </svg>
        </button>
        <button class="controls__btn arrow-right" @click="nextClick">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6.03516L6 0.0351562V5.03516H0V7.03516H6V12.0352L13 6.03516Z" fill="#42474D"/>
            </svg>
        </button>
        <div class="dots">
            <div class="dot" v-for="(slide, index) in sliderList" :key="index" :class="{'active': index + 1 === slideIndex}"></div>
        </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
    components: {
        Carousel,
        Slide,
    },
    data() {
        return {
            slideIndex: 1,
            sliderList: [
                { title: 'Полипропиленовые <br> трубы и фитинги PP-R' },
                { title: 'Полипропиленовые <br> трубы и фитинги PP-R' },
                { title: 'Полипропиленовые <br> трубы и фитинги PP-R' },
            ]
        }
    },
    methods: {
        getImageUrl(index, imgName){
            return new URL(`../../assets/baner/${index}/${imgName}.png`, import.meta.url).href
        },
        prevClick() {
            this.$refs.banerSlider.prev();
            this.$refs.banerSlider.updateSlideWidth();
            this.slideIndex --
            if (this.slideIndex < 1)
                this.slideIndex = this.sliderList.length
        },
        nextClick(){
            this.$refs.banerSlider.next();
            this.$refs.banerSlider.updateSlideWidth();
            this.slideIndex ++
            if (this.slideIndex > this.sliderList.length)
                this.slideIndex = 0
        },
    }
}
</script>

<style scoped lang="sass">
.carousel-wrapper
    width: 100%
.slide
    width: 100%
    border-radius: 16px
    position: relative
    overflow: hidden
    &::after
        content: ''
        position: absolute
        width: 100%
        height: 100%
        left: 0
        right: 0
        bottom: 0
        right: 0
        background: linear-gradient(100deg, #2598D2 27.02%, rgba(148, 204, 232, 0.8) 54.87%, rgba(170, 214, 236, 0) 75.9%)
        z-index: 10
        pointer-events: none
    &__bg
        width: 100%
        position: absolute
        top: 0
        bottom: 0
        left: 0
        right: 0
        height: 100%
        width: 100%
    &__hero
        padding: 60px 135px 115px
        z-index: 12
        display: flex
        flex-direction: column
        justify-content: flex-start
    &__logo
        width: 280px
        margin-bottom: 40px
    &__title
        font-weight: 700
        font-size: 55px
        color: #fff
        margin-bottom: 40px
        text-align: left
    &__btn
        width: fit-content
        border-radius: 3px
        background: transparent
        border: 2px solid #fff
        color: #fff
        font-size: 17px
        font-weight: 700
        display: flex
        align-items: center
        justify-content: center
        padding: 12px 67px
        transition: color .3s ease, background .3s ease, border .3s ease
        &:hover
            background: #F5F5F5
            border-color: var(--primary-color)
            color: var(--primary-color)
            box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.35)
.controls
    &__btn
        position: absolute
        top: 50%
        width: 92px
        height: 92px
        border-radius: 50%
        border: 8px solid #fff
        background: #F3F9FB
        display: flex
        align-items: center
        justify-content: center

.arrow-left
    transform: translate(-50%, -50%)
    left: 0
.arrow-right
    transform: translate(50%, -50%)
    right: 0

.dots
    position: absolute
    left: 135px
    bottom: 40px
    display: flex
.dot
    width: 11px
    height: 11px
    margin-right: 10px
    background: #fff
    border-radius: 50%
    transition: width .3s ease, border-radius .3s ease
    cursor: pointer
    &.active
      width: 33px  
      border-radius: 7px

@media screen and (max-width: 1600px)
    .slide
        &__hero
            padding: 36px 80px 66px
        &__logo
            width: 170px
            margin-bottom: 20px
        &__title
            font-size: 35px
            margin-bottom: 30px
        &__btn
            border: 1px solid #fff
            font-size: 14px
            padding: 6px 30px
    .controls
        &__btn
            width: 56px
            height: 56px
    .dots
        left: 80px
        bottom: 25px
    .dot
        width: 7px
        height: 7px
        margin-right: 6px
        &.active
            width: 20px  
</style>