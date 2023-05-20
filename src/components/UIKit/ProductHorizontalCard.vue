<template>
  <div class="card" :class="{'has-shadow': hasShadow}">
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
            <p class="card__description" v-html="description"></p>
            <div class="card__content">
                <div class="card__details">
                    <div v-for="(item, index) in infoList" :key="index" class="card__info">{{ item.description }}: <span>{{ item.value }}</span></div>
                </div>
                <div class="card__controls" @click.stop>
                    <div class="card__price">
                        {{ price }}
                        <svg class="rub-symb" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.16 18V0.863999H7.632C9.84 0.863999 11.448 1.312 12.456 2.208C13.48 3.104 13.992 4.336 13.992 5.904C13.992 6.832 13.784 7.704 13.368 8.52C12.952 9.336 12.256 9.992 11.28 10.488C10.32 10.984 9.008 11.232 7.344 11.232H5.784V18H2.16ZM0.24 15.432V13.104H9.48V15.432H0.24ZM0.24 11.232V8.256H7.272V11.232H0.24ZM6.984 8.256C7.672 8.256 8.264 8.184 8.76 8.04C9.256 7.88 9.64 7.632 9.912 7.296C10.184 6.96 10.32 6.536 10.32 6.024C10.32 5.288 10.088 4.744 9.624 4.392C9.16 4.024 8.432 3.84 7.44 3.84H5.784V8.256H6.984Z" fill="#42474D"/>
                        </svg>
                    </div>
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
// import DarkRectButton from './DarkRectButton.vue';
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
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        price: {
            type: String,
            default: '0'
        },
        infoList: { //[{ description, value }]
            type: Array,
            default: []
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
            if (this.productCount > 1) {
                this.$emit('update:count', this.productCount - 1)
                if (this.isInCart) {
                    this.$emit('updateCountInCart', { delta: -1, id: this.id })
                }
            }
            if (this.productCount === 1 && this.isInCart)
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
            this.$router.push({ name: 'card', params: { name: this.$route.params.name || 'alpha' } })
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
        }
    },
    computed: {
        btnText() {
            return this.isInCart ? 'В корзине' : 'В корзину'
        }
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
    padding: 16px
    width: 100%
    background: #fff
    display: flex
    &.has-shadow
        box-shadow: 0px 5px 50px rgba(0, 67, 101, 0.08), 0px 2px 6px rgba(130, 169, 188, 0.08)
    &__carousel
        position: relative
        max-width: 274px
        margin-right: 30px
    &__slide
        width: 100%
        max-height: 216px
    &__img
        width: 100%
        height: 100%
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
        padding-bottom: 16px
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
    margin-bottom: 16px
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
        &__slide
            max-height: 200px
        &__carousel
            margin-right: 18px
</style>