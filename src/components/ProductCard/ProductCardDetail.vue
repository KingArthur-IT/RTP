<template>
  <div class="product-detail">
      <div v-for="(item, index) in list" :key="index">
        <div v-if="item.values.length">
            <div class="product-detail__title">{{ item.title }}:</div>
            <div class="product-detail__list">
                <div v-for="(val, i) in item.values" :key="i" class="product-detail__item-wrap">
                    <div 
                      class="product-detail__item" 
                      :class="{'active': i === item.selectedValueIndex}"
                      @click="$router.push({ name: 'card', params: { name: this.$route.params.name || 'alpha' }, query: { id: val.id } })"
                    >{{ val.value }}</div>
                </div>
            </div>
        </div>
      </div>
      <!-- @click="$emit('updateSelectedIndex', { arrIndex: index, newSelected: i })" -->
      <div v-if="colors.length">
        <div class="product-detail__title-wrap">
            <div class="product-detail__title">Цвет:</div>
            <span>{{ selectedColor }}</span>
        </div>
        <div class="product-detail__list">
            <div v-for="(color, index) in colors" :key="index" class="product-detail__item-wrap">
                <div 
                    class="product-detail__color" 
                    :style="`background: ${color.color}`"
                    @click="$router.push({ name: 'card', params: { name: this.$route.params.name || 'alpha' }, query: { id: color.id } })"
                ></div>
                <!-- @click="$emit('updateSelectedColor', color.value)" -->
            </div>
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
    computed: {
        selectedColor() {
            const currColor = this.colors.find(c => c.isSelected)
            if (currColor)
                return currColor.value
            else return ''
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