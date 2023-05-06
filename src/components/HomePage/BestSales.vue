<template>
  <div class="best">
      <div class="section-title best__title">
          <div class="section-title-text">Получите лучшее <span>предложение на</span></div>
      </div>
      <div style="display: flex">
          <ProductCard :id="1" />
          <ProductCard :id="2" />
      </div>
  </div>
</template>

<script>
import ProductCard from '../UIKit/ProductCard.vue'

export default {
    components: {
        ProductCard
    }
}
</script>

<style scoped lang="sass">
.best
    &__title
        margin-bottom: 70px
</style>