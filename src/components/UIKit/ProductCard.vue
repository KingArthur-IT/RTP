<template>
  <div class="card">
      <div class="card__hero">
          <Carousel 
            :items-to-show="1" 
            :ref="`prodCard${id}`" 
            :wrap-around="true" 
            :snapAlign="'start'" 
            :mouseDrag="true"
            @slide-start="onSlideChange"
          >
            <slide v-for="(slide, index) in slideCount" :key="index">
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
          <p class="card__description">
              Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.
          </p>
          <div class="card__price">
              <div class="current">189 ₽</div>
              <div class="old">262 ₽</div>
          </div>
          <div class="card__benefit">
              Выгода <span>62</span> ₽
          </div>
          <div class="card__controls">
              <div class="count-btns">
                  <button>
                    <svg width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H17V3H0V0Z" fill="#42474D"/>
                    </svg>
                  </button>
                  <span>{{ productCount }}</span>
                  <button>
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
        }
    },
    data() {
        return {
            slideIndex: 1,
            slideCount: 6,
            productCount: 999
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
        }
    },
}
</script>

<style scoped lang="sass">
.card
    filter: drop-shadow(0px 0px 22px rgba(0, 0, 0, 0.15))
    padding: 16px 16px 19px 16px
    width: 300px
    background: #fff
    &__description
        font-weight: 700
        font-size: 16px
        color: #A6ACB3
        margin-bottom: 20px
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
        padding: 12px 0
        border-bottom: 1px solid #EDEDED
    &__controls
        display: flex
        align-items: center
        justify-content: space-between
        margin-top: 35px
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

</style>