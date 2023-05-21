<template>
  <div class="card" :class="{'has-shadow': hasShadow}">
      <div class="card__hero">
          <div>
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
              </div>
              <div v-if="isBenefitShown" class="card__discount-label">-{{ discountPercent }}%</div>
              <div class="dots">
                  <div class="dot" 
                    v-for="(slide, index) in slideCount" :key="index"
                    :class="{'active': index + 1 === slideIndex}" 
                    @click="slideTo(index)"
                ></div>
              </div>
              <div class="card__content" @click="goToCard">
                  <p class="card__description" :class="{'no-benefit': !isBenefitShown}" v-html="description"></p>
              </div>
          </div>
          <div>
                <div class="card__price">
                    <div class="current">
                        {{ newPrice }}
                        <svg class="rub-symb" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.16 18V0.863999H7.632C9.84 0.863999 11.448 1.312 12.456 2.208C13.48 3.104 13.992 4.336 13.992 5.904C13.992 6.832 13.784 7.704 13.368 8.52C12.952 9.336 12.256 9.992 11.28 10.488C10.32 10.984 9.008 11.232 7.344 11.232H5.784V18H2.16ZM0.24 15.432V13.104H9.48V15.432H0.24ZM0.24 11.232V8.256H7.272V11.232H0.24ZM6.984 8.256C7.672 8.256 8.264 8.184 8.76 8.04C9.256 7.88 9.64 7.632 9.912 7.296C10.184 6.96 10.32 6.536 10.32 6.024C10.32 5.288 10.088 4.744 9.624 4.392C9.16 4.024 8.432 3.84 7.44 3.84H5.784V8.256H6.984Z" fill="#42474D"/>
                        </svg>
                    </div>
                    <div v-if="oldPrice !== '0'" class="old">
                        {{ oldPrice }}
                        <svg class="rub-symb" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.649 13V0.861999H4.845C6.32967 0.861999 7.429 1.16233 8.143 1.763C8.86833 2.36367 9.231 3.23633 9.231 4.381C9.231 5.15167 9.05533 5.81467 8.704 6.37C8.35267 6.914 7.83133 7.33333 7.14 7.628C6.46 7.92267 5.61567 8.07 4.607 8.07H3.179V13H1.649ZM0.17 10.688V9.583H5.984V10.688H0.17ZM0.17 8.07V6.778H4.063V8.07H0.17ZM4.386 6.778C5.07733 6.778 5.661 6.70433 6.137 6.557C6.62433 6.40967 6.99833 6.166 7.259 5.826C7.51967 5.486 7.65 5.02133 7.65 4.432C7.65 3.66133 7.412 3.089 6.936 2.715C6.46 2.341 5.71767 2.154 4.709 2.154H3.179V6.778H4.386Z" fill="#7E8791"/>
                            <path d="M0 7.526H9.894V8.376H0V7.526Z" fill="#7E8791"/>
                        </svg>
                    </div>
                </div>
                <div v-if="isBenefitShown" class="card__benefit">
                    Выгода <span>{{ oldPrice - newPrice }}</span>
                    <svg class="rub-symb" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.16 18V0.863999H7.632C9.84 0.863999 11.448 1.312 12.456 2.208C13.48 3.104 13.992 4.336 13.992 5.904C13.992 6.832 13.784 7.704 13.368 8.52C12.952 9.336 12.256 9.992 11.28 10.488C10.32 10.984 9.008 11.232 7.344 11.232H5.784V18H2.16ZM0.24 15.432V13.104H9.48V15.432H0.24ZM0.24 11.232V8.256H7.272V11.232H0.24ZM6.984 8.256C7.672 8.256 8.264 8.184 8.76 8.04C9.256 7.88 9.64 7.632 9.912 7.296C10.184 6.96 10.32 6.536 10.32 6.024C10.32 5.288 10.088 4.744 9.624 4.392C9.16 4.024 8.432 3.84 7.44 3.84H5.784V8.256H6.984Z" fill="#1DBE40"/>
                    </svg>
                </div>
                <div class="card__controls" :class="{'no-benefit': !isBenefitShown}">
                    <div class="count-btns">
                        <button @click="decrementProductCount">
                        <svg width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H17V3H0V0Z" fill="#42474D"/>
                        </svg>
                        </button>
                        <input type="text" v-model="productCount" @input="onCountInput">
                        <button @click="incrementProductCount">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 7H7V0H10V7H17V10H10V17H7V10H0V7Z" fill="#42474D"/>
                        </svg>
                        </button>
                    </div>
                    <div class="card__order">
                        <AddToCartButtonVue 
                            @click="addToBasket" 
                            :text="btnText" 
                            :disabled="isInCart"
                        />
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { addProductToBacket } from '@/use/middleware.js'
import AddToCartButtonVue from './AddToCartButton.vue';

export default {
    components: {
        Carousel,
        Slide,
        AddToCartButtonVue
    },
    props: {
        id: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: ''
        },
        newPrice: {
            type: String,
            default: '0'
        },
        oldPrice: {
            type: String,
            required: true
        },
        isBenefitShown: {
            type: Boolean,
            default: true
        },
        isInCart: {
            type: Boolean,
            default: false
        },
        count: {
            type: Number, 
            default: 1
        },
        hasShadow: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            slideIndex: 1,
            slideCount: 6,
            productCount: 1,
        }
    },
    mounted() {
        this.productCount = this.count
    },
    methods: {
        addProductToBacket,
        slideTo(index) {
            this.$refs[`prodCard${this.id}`].slideTo(index)
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
            if (this.productCount > 1) {
                this.$emit('update:count', this.productCount - 1)
                if (this.isInCart) {
                    this.$emit('updateCountInCart', { delta: -1, id: this.id })
                }
            } else if (this.productCount === 1 && this.isInCart)
                this.$emit('deleteFromCart', this.id)
        },
        incrementProductCount() {
            this.$emit('update:count', this.productCount + 1)
            if (this.isInCart) {
                this.$emit('updateCountInCart', { delta: 1, id: this.id })
            }
        },
        onCountInput() {
            const newCount = Number(String(this.productCount).replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1'))
            if (newCount) {
                this.$emit('update:count', newCount)
                if (this.isInCart)
                    this.$emit('updateCountInCart', { delta: newCount - this.count, id: this.id })
            }
        },
        goToCard() {
            this.$router.push({ name: 'card', params: { name: this.$route.params.name || 'alpha' }, query: { id: this.id } })
        },
        async addToBasket() {
            if (this.isInCart) return

            const createdCartId = localStorage.getItem('cartId') || 0
            const newCartId = await addProductToBacket(this.id, this.productCount, createdCartId)
            if (newCartId) {
                const cartCount = localStorage.getItem('cartCount')
                this.$cartCount.value = Number(cartCount) + 1
                this.$cartId.value = newCartId
                localStorage.setItem('cartId', this.$cartId.value)
                localStorage.setItem('cartCount', this.$cartCount.value)
                this.$emit('addedToCart', { id: this.id, count: this.productCount })
            }
        },
    },
    computed: {
        discountPercent() {
            return Math.round(100.0 - 100.0 * this.newPrice / this.oldPrice)
        },
        btnText() {
            return this.isInCart ? 'В корзине' : 'В корзину'
        },
    },
    watch: {
        count() {
            this.productCount = this.count
        }
    }
}
</script>

<style scoped lang="sass">
.card
    padding: 16px 16px 19px 16px
    width: 100%
    height: 100%
    background: #fff
    display: flex
    flex-direction: column
    &.has-shadow
        filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.15))
    &__hero
        height: 100%
        display: flex
        flex-direction: column
        justify-content: space-between
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
        z-index: 5
        transform: translateZ(10px)
    &__content
        cursor: pointer
    &__description
        font-weight: 700
        font-size: 16px
        color: #A6ACB3
        margin-bottom: 14px
        text-align: left
        overflow-wrap: anywhere
        &.no-benefit
            margin-bottom: 38px
    &__price
        display: flex
        align-items: flex-end
        padding-bottom: 12px
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
            & .rub-symb
                height: 14px
    &__benefit
        font-weight: 700
        font-size: 16px
        color: #1DBE40
        padding: 15px 0
        border-bottom: 1px solid #EDEDED
        border-top: 1px solid #EDEDED
        text-align: left
        & .rub-symb
            height: 13px
            margin-left: 2px
    &__controls
        display: flex
        align-items: center
        justify-content: space-between
        margin-top: 20px
        &.no-benefit
            margin-top: 32px
    &__order
        margin-left: 15px
        width: 100%
        height: 41px
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
        &.has-shadow
            filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.15))
        &__discount-label
            width: 41px
            height: 43px
            font-size: 14px
        &__description
            font-size: 12px
            margin-bottom: 5px
            &.no-benefit
                margin-bottom: 24px
        &__price
            padding-bottom: 5px
            & .current
                font-size: 16px
                margin-right: 13px
                & .rub-symb
                    height: 12px
                    margin-left: -2px
            & .old
                font-size: 16px
                transform: translateY(4px)
                & .rub-symb
                    height: 12px
        &__benefit
            font-weight: 700
            padding: 6px 0 5px
            & .rub-symb
                height: 12px
        &__controls
            margin-top: 13px
            &.no-benefit
                margin-top: 30px
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