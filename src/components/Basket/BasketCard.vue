<template>
    <router-link :to="`/card/${system}/${code}`">
        <div class="basket-card">
            <div v-if="photoUrl" class="basket-card__img">
                <img :src="photoUrl" alt="img">
            </div>
            <div v-else class="basket-card__img">
                <img src="@/assets/basket-no-img.jpg" alt="img">
            </div>
            <div class="basket-card__hero">
                <div class="basket-card__title" v-html="title"></div>
                <div class="basket-card__text" v-html="description"></div>
            </div>
            <div class="basket-card__controls" @click.prevent>
                <div class="basket-card__delete" @click="$emit('delete')">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 7H5V20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V7H6ZM16.618 4L15 2H9L7.382 4H3V6H21V4H16.618Z" fill="#828D99"/>
                    </svg>
                </div>
                <div class="basket-card__btns">
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
                <div class="basket-card__price">
                        {{ numberWithSpaces(Number(price * productCount).toFixed(2)) }}
                        <svg class="rub-symb" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.16 18V0.863999H7.632C9.84 0.863999 11.448 1.312 12.456 2.208C13.48 3.104 13.992 4.336 13.992 5.904C13.992 6.832 13.784 7.704 13.368 8.52C12.952 9.336 12.256 9.992 11.28 10.488C10.32 10.984 9.008 11.232 7.344 11.232H5.784V18H2.16ZM0.24 15.432V13.104H9.48V15.432H0.24ZM0.24 11.232V8.256H7.272V11.232H0.24ZM6.984 8.256C7.672 8.256 8.264 8.184 8.76 8.04C9.256 7.88 9.64 7.632 9.912 7.296C10.184 6.96 10.32 6.536 10.32 6.024C10.32 5.288 10.088 4.744 9.624 4.392C9.16 4.024 8.432 3.84 7.44 3.84H5.784V8.256H6.984Z" fill="#42474D"/>
                        </svg>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
import { numberWithSpaces } from '@/use/helpers.js'

export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        code: {
            type: String,
            default: ''
        },
        system: {
            type: String,
            default: ''
        },
        photoUrl: {
            type: String,
            default: ''
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
            default: 0
        },
        count: {
            type: Number,
            required: true
        },
    },
    mounted() {
        this.productCount = this.count
    },
    data() {
        return {
            productCount: 1,
        }
    },
    methods: {
        numberWithSpaces,
        decrementProductCount() {
            if (this.productCount > 1) {
                this.$emit('updateCount', { delta: -1, id: this.id })
                this.$emit('update:count', this.productCount - 1)
            }
        },
        incrementProductCount() {
            this.$emit('updateCount', { delta: 1, id: this.id })
            this.$emit('update:count', this.productCount + 1)
        },
        onCountInput() {
            const newCount = Number(String(this.productCount).replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1'))
            if (newCount) {
                this.$emit('updateCount', { delta: newCount - this.count, id: this.id })
                this.$emit('update:count', newCount)
            }
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
.basket-card
    background: #fff
    padding: 16px
    display: flex
    max-height: 181px
    cursor: pointer
    &__img
        margin-right: 26px
        max-width: 149px
        & img
            width: 100%
            height: 100%
    &__title
        font-weight: 700
        font-size: 18px
        color: #42474D
        max-width: 293px
        margin-bottom: 12px
    &__text
        font-size: 12px
        line-height: 171%
        color: #42474D
        max-width: 265px
    &__controls
        margin-left: auto
        display: flex
        flex-direction: column
    &__delete
        margin: 9px 0
        cursor: pointer
        & svg
            margin-left: auto
            display: block
    &__price
        font-weight: 700
        font-size: 24px
        color: #42474D
        text-align: right
    &__btns
        display: flex
        align-items: center
        margin-top: auto
        margin-bottom: 8px
        margin-left: auto
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
            &::-webkit-outer-spin-button
                -webkit-appearance: none
                margin: 0
            &::-webkit-inner-spin-button 
                -webkit-appearance: none
                margin: 0

@media screen and (max-width: 1600px)
    .basket-card
        &__img
            margin-right: 22px
        &__title
            font-size: 16px
            margin-bottom: 6px
        &__text
            font-size: 12px
            line-height: 160%
        &__delete
            margin: 9px 0
            cursor: pointer
        &__price
            font-size: 22px
            & .rub-symb
                height: 17px
        &__btns
            & button
                width: 25px
                height: 25px
                & svg
                    width: 11px
                    height: 11px
            & input
                font-size: 14px
                width: 31px
</style>