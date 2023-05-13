<template>
  <div class="basket-card">
      <div class="basket-card__img">
          <img src="@/assets/basket-no-img.jpg" alt="img">
      </div>
      <div class="basket-card__hero">
          <div class="basket-card__title">{{ title }}</div>
          <div class="basket-card__text">{{ description }}</div>
      </div>
      <div class="basket-card__controls">
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
                <input type="text" v-model="productCount" @input="onCountInput">
                <button @click="incrementProductCount">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 7H7V0H10V7H17V10H10V17H7V10H0V7Z" fill="#42474D"/>
                    </svg>
                </button>
          </div>
          <div class="basket-card__price">{{ numberWithSpaces(price) }} ₽</div>
      </div>
  </div>
</template>

<script>
import { numberWithSpaces } from '@/use/helpers.js'

export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
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
            productCount: 0
        }
    },
    methods: {
        numberWithSpaces,
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
    },
    watch: {
        productCount() {
            this.$emit('update:count', this.productCount)
        }
    }
}
</script>

<style scoped lang="sass">
.basket-card
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.05))
    background: #fff
    padding: 16px
    display: flex
    max-height: 181px
    &__img
        height: 100%
        margin-right: 26px
        & img
            width: 100%
            height: 100%
    &__title
        font-weight: 700
        font-size: 18px
        color: #42474D
        max-width: 290px
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
        &__btns
            & button
                width: 25px
                height: 25px
                & svg
                    width: 11px
                    height: 11px
            & input
                font-size: 14px
                width: 30px
</style>