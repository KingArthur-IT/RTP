<template>
  <div class="filters">
      <div class="filters__range">
          <PriceRange
            ref="filterPriceRange"
            :max="rangeMaximum"
            :step="1"
            v-model:min-value="rangeMinValue"
            v-model:max-value="rangeMaxValue"
            @clearFilter="clearFilters"
          />
      </div>
      <div class="filters__categories">
          <div 
            v-for="(cat, index) in categoriesList" :key="index" 
            class="filters__cat-item"
            :class="{'active': cat.isSelected}"
            @click="cat.isSelected = !cat.isSelected"
          >{{ cat.NAME }}</div>
      </div>
      <div class="filters__accordeon">
          <FilterCategoryAccordeon :id="'1'" :dataList="fiting" />
      </div>
      <div class="filters__accordeon">
          <FilterCategoryAccordeon :id="'2'" :dataList="fitingTypes" />
      </div>
      <div class="filters__accordeon">
          <FilterCategoryAccordeon :id="'3'" :dataList="connectionTypes" />
      </div>
      <div class="filters__accordeon">
          <FilterCategoryAccordeon :id="'4'" :dataList="threadTypes" />
      </div>
      <div class="filters__accordeon">
          <FilterCategoryAccordeon :id="'5'" :dataList="threadSize" />
      </div>
      <div class="filters__accordeon">
          <FilterCategoryAccordeon :id="'6'" :dataList="diametr" />
      </div>
      <div class="filters__accordeon">
          <FilterCategoryAccordeon :id="'7'" :dataList="color" />
      </div>
      <div class="filters__btn" @click="applyCategories">
          <DarkRectButton :text="'Применить'" />
      </div>
  </div>
</template>

<script>
import DarkRectButton from '../UIKit/DarkRectButton.vue'
import PriceRange from '../UIKit/PriceRange.vue'
import FilterCategoryAccordeon from './FilterCategoryAccordeon.vue'

export default {
    components: {
        PriceRange,
        FilterCategoryAccordeon,
        DarkRectButton
    },
    props: {
        categoriesList: {
            type: Array,
        }
    },
    data() {
        return {
            fiting: [
                { isChecked: true, name: 'Муфта', count: 21 },
                { isChecked: true, name: 'Отводы и угольники', count: 60 },
                { isChecked: true, name: 'Тройники и крестовины', count: 1 },
                { isChecked: true, name: 'Запорная арматура', count: 1 },
                { isChecked: true, name: 'Другое', count: 1 },
                { isChecked: true, name: 'Муфта', count: 1 },
                { isChecked: true, name: 'Муфта', count: 1 },
            ],
            fitingTypes: [
                { isChecked: true, name: 'Переходной', count: 21 },
            ],
            connectionTypes: [
                { isChecked: true, name: 'Разъемный', count: 1 },
                { isChecked: true, name: 'Пайка', count: 1 },
            ],
            threadTypes: [
                { isChecked: true, name: 'Внутренняя', count: 21 },
                { isChecked: true, name: 'Наружная', count: 60 },
                { isChecked: true, name: 'Без резьбы', count: 1 },
            ],
            threadSize: [
                { isChecked: true, name: '1/2', count: 1 },
                { isChecked: true, name: '3/4', count: 1 },
                { isChecked: true, name: '1', count: 1 },
                { isChecked: true, name: '1,25', count: 1 },
                { isChecked: true, name: '1,5', count: 1 },
                { isChecked: true, name: '2', count: 1 },
                { isChecked: true, name: '3', count: 1 },
                { isChecked: true, name: '4', count: 1 },
            ],
            diametr: [
                { isChecked: true, name: '20 мм', count: 60 },
                { isChecked: true, name: '25 мм', count: 1 },
                { isChecked: true, name: '32 мм', count: 1 },
                { isChecked: true, name: '40 мм', count: 1 },
                { isChecked: true, name: '50 мм', count: 1 },
                { isChecked: true, name: '63 мм', count: 1 },
                { isChecked: true, name: '75 мм', count: 1 },
                { isChecked: true, name: '90 мм', count: 1 },
                { isChecked: true, name: '110 мм', count: 1 },
                { isChecked: true, name: '125 мм', count: 1 },
                { isChecked: true, name: '140 мм', count: 1 },
                { isChecked: true, name: '160 мм', count: 1 },
            ],
            color: [
                { isChecked: true, name: 'Белый', count: 21 },
                { isChecked: true, name: 'Серый', count: 60 },
                { isChecked: true, name: 'Зелёный', count: 1 },
            ],
            rangeMinValue: 0,
            rangeMaxValue: 500,
            rangeMaximum: 1000,
        }
    },
    methods: {
        clearFilters() {
            this.categoriesList.forEach(c => c.isSelected = false)
            this.fiting.forEach(c => c.isChecked = true)
            this.fitingTypes.forEach(c => c.isChecked = true)
            this.connectionTypes.forEach(c => c.isChecked = true)
            this.threadTypes.forEach(c => c.isChecked = true)
            this.threadSize.forEach(c => c.isChecked = true)
            this.diametr.forEach(c => c.isChecked = true)
            this.color.forEach(c => c.isChecked = true)

            this.applyCategories()
        },
        applyCategories() {
            this.$emit('applyFilters', {
                selectedCategories: this.categoriesList.filter(c => c.isSelected),
                minPrice: this.rangeMinValue,
                maxPrice: this.rangeMaxValue
            })
        }
    }
}
</script>

<style scoped lang="sass">
.filters
    width: 100%
    margin-top: 15px
    &__range
        margin-bottom: 22px
    &__categories
        margin-bottom: 45px
    &__cat-item
        width: fit-content
        font-weight: 700
        font-size: 14px
        text-transform: uppercase
        color: #42474D
        margin-bottom: 8px
        cursor: pointer
        padding: 7px 10px
        border-radius: 20px
        background: transparent
        transition: color .3s ease, background .3s ease
        &.active
            background: var(--primary-color)
            color: #fff
    &__accordeon
        margin-bottom: 34px
    &__btn
        width: 100%
        height: 41px

@media screen and (max-width: 1600px)
    .filters
        &__cat-item
            font-size: 12px
</style>