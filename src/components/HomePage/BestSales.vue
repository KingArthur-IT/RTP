<template>
  <div class="best">
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
                <slide v-for="(slide, index) in count" :key="index">
                    <div class="best__card">
                        <ProductCard 
                            :id="index" 
                            :description="'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.'"
                            :newPrice="189"
                            :oldPrice="262"
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
        }
    },
    methods: {
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