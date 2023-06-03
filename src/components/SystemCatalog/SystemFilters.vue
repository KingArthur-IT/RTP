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
      <div v-for="(type, index) in typesArray" :key="index" class="filters__accordeon">
          <FilterCategoryAccordeon 
            :id="String(index)" 
            :dataList="type" 
            @updateList="updateTypesArray"
          />
      </div>
      <!-- <div class="filters__accordeon">
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
      </div> -->
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
        rangeMaximum: {
            type: Number,
            default: 500
        },
        categoriesList: {
            type: Array,
            default: []
        },
        typesList: {
            type: Array,
            default: []
        },
    },
    data() {
        return {
            typesArray: [],
            rangeMinValue: 0,
            rangeMaxValue: 10,
        }
    },
    mounted() {
        this.rangeMaxValue = this.rangeMaximum
        this.typesArray = this.typesList
    },
    methods: {
        clearFilters() {
            this.categoriesList.forEach(c => c.isSelected = false )
            this.typesArray.forEach(t => {
                t.list.forEach(el => el.isChecked = true)
            })
            // this.fiting.forEach(c => c.isChecked = true)
            // this.fitingTypes.forEach(c => c.isChecked = true)
            // this.connectionTypes.forEach(c => c.isChecked = true)
            // this.threadTypes.forEach(c => c.isChecked = true)
            // this.threadSize.forEach(c => c.isChecked = true)
            // this.diametr.forEach(c => c.isChecked = true)
            // this.color.forEach(c => c.isChecked = true)

            this.applyCategories()
        },
        applyCategories() {
            this.$emit('applyFilters', {
                selectedCategories: this.categoriesList.filter(c => c.isSelected),
                minPrice: this.rangeMinValue,
                maxPrice: this.rangeMaxValue,
                selectedTypes: this.typesArray
            })
        },
        updateTypesArray({ propName, newList }) {
            this.typesArray.find(t => t.propName === propName).list = newList
        }
    },
    watch: {
        rangeMaximum() {
            this.rangeMaxValue = this.rangeMaximum
        },
        typesList() {
            this.typesArray = JSON.parse(JSON.stringify(this.typesList))
        },
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