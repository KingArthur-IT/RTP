<template>
  <div class="carousel-wrapper">
        <Carousel
            ref="banerSlider" 
            :items-to-show="1" 
            :wrap-around="true" 
            :snapAlign="'start'" 
            :mouseDrag="true"
            @slide-start="onSlideChange"
        >
            <slide v-for="(slide, index) in systemList" :key="index">
                <div class="slide" :class="slide.name">
                    <img :src="getImageUrl('baner-bg', slide.name)" :alt="slide.name" class="slide__bg">
                    <div class="slide__hero">
                        <div class="slide__label">
                            <img :src="getImageUrl('logos', slide.name)" :alt="slide.name" class="slide__logo">
                            <span>{{ slide.title }}</span>
                        </div>
                        <h2 class="slide__title" v-html="doFirstLetterUppercase(slide.descriptionBanerHtml)"></h2>
                        <div class="slide__btn">
                            <CustomRectButton :text="'Подробнее'" @click="slideDetailClick(slide.name)"/>
                        </div>
                        <button class="slide__btn"></button>
                    </div>
                </div>
            </slide>
        </Carousel>
        <SliderControlBtn @click="prevClick" />
        <SliderControlBtn :isLeftBtn="false" @click="nextClick" />
        <div class="dots">
            <div 
                v-for="(slide, index) in systemList" :key="index" 
                class="dot" 
                :class="{'active': index + 1 === slideIndex}"
                @click="slideTo(index)"
            ></div>
        </div>
  </div>
</template>

<script>
import { systemList } from '@/data/data.js'
import { getImageUrl, doFirstLetterUppercase } from '@/use/helpers.js'
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import CustomRectButton from '../UIKit/LightRectButton.vue';
import SliderControlBtn from '../UIKit/SliderControlBtn.vue';

export default {
    components: {
        Carousel,
        Slide,
        CustomRectButton,
        SliderControlBtn
    },
    data() {
        return {
            systemList,
            slideIndex: 1,
        }
    },
    methods: {
        getImageUrl,
        doFirstLetterUppercase,
        prevClick() {
            this.$refs.banerSlider.prev();
            this.$refs.banerSlider.updateSlideWidth();
        },
        nextClick(){
            this.$refs.banerSlider.next();
            this.$refs.banerSlider.updateSlideWidth();
        },
        slideTo(index) {
            this.$refs.banerSlider.slideTo(index)
            this.slideIndex = index + 1
        },
        onSlideChange(data){
            this.slideIndex = data.slidingToIndex + 1
            if (this.slideIndex > this.systemList.length)
                this.slideIndex =  1
            if (this.slideIndex < 1)
                this.slideIndex = this.systemList.length
        },
        slideDetailClick(name) {
            if (name === 'alpha')
                this.$router.push({ name: 'alpha-system' })
            else this.$router.push({ name: 'catalog' })
        },
    },
}
</script>

<style scoped lang="sass">
.carousel-wrapper
    width: 100%
.slide
    width: 100%
    height: 100%
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
        z-index: 10
        pointer-events: none
    &.alpha::after
        background: linear-gradient(100deg, #2598D2 27.02%, rgba(148, 204, 232, 0.8) 54.87%, rgba(170, 214, 236, 0) 75.9%)
    &.sigma::after
        background: linear-gradient(100deg, #003C47 18.31%, rgba(0, 60, 71, 0.8) 45.93%, rgba(0, 60, 71, 0.138423) 83.43%, rgba(0, 60, 71, 0) 97.77%)
    &.omega::after
        background: linear-gradient(100deg, #B92F2C -0.54%, rgba(185, 47, 44, 0.8) 24.06%, rgba(185, 47, 44, 0) 82.68%)
    &.beta-orange::after
        background: linear-gradient(100deg, #EE741D 18.31%, rgba(238, 116, 29, 0.8) 50.6%, rgba(238, 116, 29, 0) 83.44%)
    &.delta::after
        background: linear-gradient(100deg, #00949F 18.31%, rgba(0, 148, 159, 0.8) 44.23%, rgba(0, 148, 159, 0) 83.44%)
    &.beta::after
        background: linear-gradient(100deg, #7E8E97 18.31%, rgba(126, 142, 151, 0.8) 47.63%, rgba(126, 142, 151, 0) 83.44%)
    &.beta-elite::after
        background: linear-gradient(100deg, #80C2EC 18.31%, rgba(128, 194, 236, 0.8) 53.15%, rgba(128, 194, 236, 0) 83.44%)
    &.gamma::after
        background: linear-gradient(100deg, #224386 18.31%, rgba(34, 67, 134, 0.8) 42.96%, rgba(34, 67, 134, 0) 79.5%)
    &__bg
        position: absolute
        top: 0
        bottom: 0
        right: 0
        height: 100%
        object-fit: cover
    &__hero
        padding: 60px 135px 115px
        z-index: 12
        display: flex
        flex-direction: column
        justify-content: flex-start
    &__label
        width: fit-content
        border-radius: 40px
        padding: 12px 35px
        background: #fff
        display: flex
        align-items: center
        margin-bottom: 40px
        & span
            text-transform: uppercase
            font-size: 40px
            font-weight: bold
    &__logo
        width: 55px
        margin-right: 23px
    &__title
        font-weight: 700
        font-size: 55px
        color: #fff
        margin-bottom: 40px
        text-align: left
        // max-width: 620px
    &__btn
        max-width: 230px

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
        &__label
            margin-bottom: 20px
            & span
                font-size: 35px
        &__logo
            width: 32px
        &__title
            font-size: 35px
            margin-bottom: 30px
        &__btn
            max-width: 140px
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