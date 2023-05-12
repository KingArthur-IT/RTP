<template>
  <div class="product-detail">
      <div v-for="(item, index) in list" :key="index">
          <div class="product-detail__title">{{ item.title }}:</div>
          <div class="product-detail__list">
              <div v-for="(val, i) in item.values" :key="i" class="product-detail__item-wrap">
                  <div 
                    class="product-detail__item" 
                    :class="{'active': i === item.selectedValueIndex}"
                    @click="$emit('updateSelectedIndex', { arrIndex: index, newSelected: i })"
                  >{{ val }}</div>
              </div>
          </div>
      </div>
      <div class="product-detail__title-wrap">
          <div class="product-detail__title">Цвет:</div>
          <span>{{ selectedColor }}</span>
      </div>
      <div class="product-detail__list">
          <div v-for="(color, index) in colors" :key="index" class="product-detail__item-wrap">
              <div 
                class="product-detail__color" 
                :style="`background: ${color.color}`"
                @click="$emit('updateSelectedColor', color.value)"
              ></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array, //[{ title, values[], selectedValueIndex }]
            default: []
        },
        colors: {
            type: Array, //[{ value, isSelected, color }]
            default: []
        }
    },
    data() {
        return {
            diametrList: ['20/1,9', '25/2,3', '32/2,9', '40/3,7', '50/4,5', '63/5,8', '75/6,8', '90/8,2', '110/10', '125/11,4', '140/12,7', '160/14,6'],
            counts: ['100/25', '50/25']
        }
    },
    computed: {
        selectedColor() {
            return this.colors.find(c => c.isSelected).value
        }
    }
}
</script>

<style scoped lang="sass">
.product-detail
    padding: 0 33px
    &__title-wrap
        display: flex
        align-items: flex-start
        margin-top: 16px
        & span
            font-size: 20px
            color: #42474D
            margin-left: 4px
    &__title
        font-size: 20px
        text-decoration-line: underline
        color: #A6ACB3
        margin-bottom: 9px
    &__list
        display: flex
        align-items: center
        flex-wrap: wrap
        width: calc( 100% + 12px )
        transform: translateX(-6px)
        margin-bottom: 2px
    &__item-wrap
        padding: 6px
    &__item
        min-width: 119px
        padding: 10px
        font-weight: 700
        font-size: 24px
        color: #A6ACB3
        cursor: pointer
        transition: color .3s ease, background .3s ease
        border-radius: 4px
        text-align: center
        &.active
            background: var(--primary-color)
            color: #fff
    &__color
        width: 119px
        height: 48px
        cursor: pointer
        border-radius: 4px
        border: 1px solid #C3D3E5
        &.white
            background: #fff
        &.grey
            background: #C3D3E5

@media screen and (max-width: 1600px)
    .product-detail
        padding: 0 33px 0 22px
        &__title-wrap
            & span
                font-size: 13px
        &__title
            font-size: 14px
            margin-bottom: 3px
        &__list
            display: flex
            align-items: center
            flex-wrap: wrap
            width: calc( 100% + 12px )
            transform: translateX(-6px)
            margin-bottom: 8px
        &__item-wrap
            padding: 6px
        &__item
            min-width: 76px
            font-size: 14px
        &__color
            width: 87px
            height: 36px
</style>