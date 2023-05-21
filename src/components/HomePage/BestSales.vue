<template>
  <div v-if="productsList.length" class="best">
      <div class="section-title best__title">
          <div class="section-title-text">Получите лучшее <span>предложение на</span></div>
      </div>
      <div class="best__carousel">
          <Carousel
                ref="bestSalesSlider" 
                :items-to-show="4" 
                :mouseDrag="false"
                :wrap-around="true" 
                :snapAlign="'start'" 
            >
                <slide v-for="item in productsList" :key="item.ID">
                    <div class="best__card">
                        <ProductCard 
                            v-model:count="item.count"
                            :id="item.ID" 
                            :description="item.PREVIEW_TEXT"
                            :newPrice="item.PRICE"
                            :oldPrice="item.PRICE"
                            :isBenefitShown="true"
                            :isInCart="item.isInCart"
                            @addedToCart="addedToCart"
                            @updateCountInCart="updateCountInCart"
                            @deleteFromCart="deleteFromCart"
                        />
                    </div>
                </slide>
            </Carousel>
            <SliderControlBtn @click="prevClick" />
            <SliderControlBtn :isLeftBtn="false" @click="nextClick" />
      </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import ProductCard from '../UIKit/ProductCard.vue'
import SliderControlBtn from '../UIKit/SliderControlBtn.vue';
import { getBestPropositions, getBacketProducts, addProductToBacket, deleteCartItem } from '@/use/middleware.js'

export default {
    components: {
        Carousel,
        Slide,
        ProductCard,
        SliderControlBtn
    },
    data() {
        return {
            count: 8,
            slideIndex: 1,
            cartId: 0,
            productsInCart: [],
            productsList: []
        }
    },
    async mounted() {
        const cardsList = await this.getBestPropositions()

        this.cartId = localStorage.getItem('cartId') || 0
        //получить товары из корзины
        const cartPrd = await this.getBacketProducts(this.cartId)
        this.productsInCart = cartPrd.map(p => { return { id: p.prod_id, count: p.count} })

        //трансформировать данные из массива продуктов
        this.productsList = cardsList.map(el => { 
            const isInCart = this.productsInCart.some(pr => pr.id == el.arFields.ID)
            const count = isInCart ? this.productsInCart.find(pr => pr.id == el.arFields.ID).count : 1
            return {
                isInCart: isInCart, 
                count: count,
                ID: el.arFields.ID,
                IBLOCK_SECTION_ID: el.arFields.IBLOCK_SECTION_ID,
                NAME: el.arFields.NAME,
                PREVIEW_PICTURE: el.arFields.PREVIEW_PICTURE,
                PREVIEW_TEXT: el.arFields.PREVIEW_TEXT,
                PRICE: el.arPrice.PRICE,
            }
        })
    },
    methods: {
        getBestPropositions, getBacketProducts, addProductToBacket, deleteCartItem,
        prevClick() {
            this.$refs.bestSalesSlider.prev();
            this.$refs.bestSalesSlider.updateSlideWidth();
            this.slideIndex --
            if (this.slideIndex < 1)
                this.slideIndex = this.count
        },
        nextClick(){
            this.$refs.bestSalesSlider.next();
            this.$refs.bestSalesSlider.updateSlideWidth();
            this.slideIndex ++
            if (this.slideIndex > this.count)
                this.slideIndex = 1
        },
        addedToCart({ id, count }) { //нажата кнопка добавить в корзину
            const product = this.productsList.find(el => el.ID == id)
            product.isInCart = true
            product.count = count
        },
        async updateCountInCart({ delta, id }) {
            const cartId = localStorage.getItem('cartId') || 0
            console.log('add');
            await this.addProductToBacket(id, delta, cartId)
        },
        async deleteFromCart(id) {
            const cartId = localStorage.getItem('cartId')
            const rez = await deleteCartItem(id, cartId)
            if (rez) {
                this.productsList.find(p => p.ID == id).isInCart = false

                const cartCount = localStorage.getItem('cartCount')
                this.$cartCount.value = Number(cartCount) - 1
                localStorage.setItem('cartCount', cartCount - 1)
            }
        }
    }
}
</script>

<style scoped lang="sass">
.best
    &__title
        margin-bottom: 70px
    &__carousel
        padding: 0 75px
        position: relative
    &__card
        width: 100%
        padding: 20px

@media screen and (max-width: 1600px)
    .best
        &__title
            margin-bottom: 46px
        &__carousel
            padding: 0 30px
        &__card
            padding: 10px 6px
</style>