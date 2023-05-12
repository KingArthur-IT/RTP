<template>
  <div class="card">
        <div class="card__carousel">
            <Carousel 
                :items-to-show="1" 
                :ref="`horizProdCard${id}`" 
                :wrap-around="true" 
                :snapAlign="'start'" 
                :mouseDrag="true"
                @slide-start="onSlideChange"
            >
                <slide v-for="(slide, index) in slideCount" :key="index" class="card__slide">
                    <img src="@/assets/no-photo.jpg" alt="img" class="card__img">
                </slide>
            </Carousel>
            <div class="dots">
                <div class="dot" 
                    v-for="(slide, index) in slideCount" :key="index"
                    :class="{'active': index + 1 === slideIndex}" 
                    @click="slideTo(index)"
                ></div>
            </div>
        </div>
        <div class="card__hero" @click="goToCard">
            <div class="card__title">{{ title }}</div>
            <p class="card__description">{{ description }}</p>
            <div class="card__content">
                <div class="card__details">
                    <div v-for="(item, index) in infoList" :key="index" class="card__info">{{ item.description }}:<span>{{ item.value }}</span></div>
                </div>
                <div class="card__controls" @click.stop>
                    <div class="card__price">{{ price }} ₽</div>
                    <div class="count-btns">
                        <button @click="decrementProductCount">
                            <svg width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H17V3H0V0Z" fill="#42474D"/>
                            </svg>
                        </button>
                        <input type="number" v-model="productCount" @input="onCountInput">
                        <button @click="incrementProductCount">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 7H7V0H10V7H17V10H10V17H7V10H0V7Z" fill="#42474D"/>
                            </svg>
                        </button>
                    </div>
                    <div class="card__order">
                        <DarkRectButton :text="'В корзину'" />
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import DarkRectButton from './DarkRectButton.vue';

export default {
    components: {
        Carousel,
        Slide,
        DarkRectButton
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        price: {
            type: Number,
            required: true
        },
        infoList: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            slideIndex: 1,
            slideCount: 6,
            productCount: 0
        }
    },
    methods: {
        slideTo(index) {
            this.$refs[`horizProdCard${this.id}`].slideTo(index)
            this.slideIndex = index + 1
        },
        onSlideChange(data) {
            this.slideIndex = data.slidingToIndex + 1
            if (this.slideIndex > this.slideCount)
                this.slideIndex =  1
            if (this.slideIndex < 1)
                this.slideIndex = this.slideCount
        },
        decrementProductCount() {
            if (this.productCount > 0)
                this.productCount --
        },
        incrementProductCount() {
            this.productCount ++
        },
        onCountInput() {
            this.productCount = this.productCount.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1')
        },
        goToCard() {
            this.$router.push({ name: 'card', params: this.$route.params })
        }
    },
}
</script>

<style scoped lang="sass">
.card
    box-shadow: 0px 5px 50px rgba(0, 67, 101, 0.08), 0px 2px 6px rgba(130, 169, 188, 0.08)
    padding: 16px
    width: 100%
    background: #fff
    display: flex
    &__carousel
        position: relative
        max-width: 274px
        margin-right: 30px
    &__slide
        width: 100%
    &__img
        width: 100%
    &__hero
        width: 100%
        display: flex
        flex-direction: column
        cursor: pointer
    &__title
        font-weight: 700
        font-size: 18px
        color: #42474D
        margin-bottom: 8px
    &__description
        font-size: 14px
        color: #42474D
        margin-bottom: 16px
        text-align: left
    &__content
        display: flex
        justify-content: space-between
        flex-grow: 1
    &__info
        font-weight: 500
        font-size: 14px
        color: #828D99
        margin-bottom: 4px
        & span
            color: #42474D
    &__controls
        max-width: 150px
        align-self: end
    &__price
        text-align: right
        padding-bottom: 22px
        font-weight: 700
        font-size: 24px
        color: #42474D
    &__order
        width: 100%
        height: 42px
.dots
    padding: 14px 0
    display: flex
    justify-content: center
    align-items: center
.dot
    width: 5px
    height: 5px
    background: #F0F0F0
    margin: 0 2px
    cursor: pointer
    border-radius: 50%
    &.active
        background: var(--primary-color)

.count-btns
    display: flex
    align-items: center
    margin-bottom: 10px
    & button
        width: 35px
        height: 35px
        background: #EDEDED
        border-radius: 4px
        display: flex
        align-items: center
        justify-content: center
    & input
        border: none
        appearance: none
        outline: none
        font-weight: 700
        font-size: 16px
        color: #42474D
        padding: 0 8px
        width: 45px
        text-align: center

@media screen and (max-width: 1600px)
    .card
        padding: 10px 10px 13px 10px
        filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.15))
        &__description
            font-size: 12px
            margin-bottom: 5px
        &__price
            padding-bottom: 5px
            font-size: 16px
            margin-right: 13px
        &__controls
            margin-top: 13px
        &__order
            margin-left: 6px
            height: 30px
    .dots
        padding: 14px 0 8px
        display: flex
        justify-content: center
        align-items: center

    .count-btns
        & button
            width: 25px
            height: 25px
            & svg
                width: 11px
                height: 11px
        & input
            font-size: 10px
            padding: 0 5px
            width: 30px
</style>