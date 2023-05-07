<template>
  <div class="card">
      <div class="card__hero">
          <div class="card__carousel">
              <Carousel 
                :items-to-show="1" 
                :ref="`prodCard${id}`" 
                :wrap-around="true" 
                :snapAlign="'start'" 
                :mouseDrag="true"
                @slide-start="onSlideChange"
              >
                <slide v-for="(slide, index) in slideCount" :key="index" class="card__slide">
                    <img src="@/assets/no-photo.jpg" alt="img" class="card__img">
                </slide>
              </Carousel>
              <div class="card__discount-label">-{{ discountPercent }}%</div>
          </div>
          <div class="dots">
              <div class="dot" 
                v-for="(slide, index) in slideCount" :key="index"
                :class="{'active': index + 1 === slideIndex}" 
                @click="slideTo(index)"
            ></div>
          </div>
          <p class="card__description">
              {{ description }}
          </p>
          <div class="card__price">
              <div class="current">{{ newPrice }} ₽</div>
              <div class="old">{{ oldPrice }} ₽</div>
          </div>
          <div class="card__benefit">
              Выгода <span>{{ oldPrice - newPrice }}</span> ₽
          </div>
          <div class="card__controls">
              <div class="count-btns">
                  <button @click="decrementProductCount">
                    <svg width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H17V3H0V0Z" fill="#42474D"/>
                    </svg>
                  </button>
                  <span>{{ productCount }}</span>
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
        description: {
            type: String,
            default: ''
        },
        newPrice: {
            type: Number,
            required: true
        },
        oldPrice: {
            type: Number,
            required: true
        },
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
            this.$refs[`prodCard${this.id}`].slideTo(index)
            this.slideIndex = index + 1
        },
        onSlideChange(data){
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
        }
    },
    computed: {
        discountPercent() {
            return Math.round(100.0 - 100.0 * this.newPrice / this.oldPrice)
        }
    }
}
</script>

<style scoped lang="sass">
.card
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.15))
    padding: 16px 16px 19px 16px
    width: 100%
    background: #fff
    &__carousel
        position: relative
    &__slide
        width: 100%
    &__img
        width: 100%
    &__discount-label
        position: absolute
        top: 0
        right: 0
        width: 63px
        height: 65px
        background: var(--primary-color)
        border-radius: 0px 0px 0px 16px
        color: #fff
        font-weight: 700
        font-size: 18px
        display: flex
        align-items: center
        justify-content: center
    &__description
        font-weight: 700
        font-size: 16px
        color: #A6ACB3
        margin-bottom: 14px
    &__price
        display: flex
        align-items: flex-end
        padding-bottom: 12px
        border-bottom: 1px solid #EDEDED
        & .current
            font-weight: 700
            font-size: 24px
            line-height: 75%
            color: #42474D
            margin-right: 17px
        & .old
            font-size: 17px
            line-height: 106%
            text-decoration-line: line-through
            color: #7E8791
            transform: translateY(4px)
    &__benefit
        font-weight: 700
        font-size: 16px
        color: #1DBE40
        padding: 15px 0
        border-bottom: 1px solid #EDEDED
        text-align: left
    &__controls
        display: flex
        align-items: center
        justify-content: space-between
        margin-top: 20px
    &__order
        margin-left: 15px
        width: 100%
        height: 45px
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
    & button
        width: 35px
        height: 35px
        background: #EDEDED
        border-radius: 4px
        display: flex
        align-items: center
        justify-content: center
    & span
        font-weight: 700
        font-size: 16px
        color: #42474D
        padding: 0 8px

@media screen and (max-width: 1600px)
    .card
        padding: 10px 10px 13px 10px
        filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.15))
        &__discount-label
            width: 41px
            height: 43px
            font-size: 14px
        &__description
            font-size: 12px
            margin-bottom: 5px
        &__price
            padding-bottom: 5px
            & .current
                font-size: 16px
                margin-right: 13px
            & .old
                font-size: 16px
                transform: translateY(4px)
        &__benefit
            font-weight: 700
            padding: 6px 0 5px
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
        & span
            font-size: 10px
            padding: 0 5px
</style>