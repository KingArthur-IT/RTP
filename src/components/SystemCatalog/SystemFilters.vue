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
            v-for="cat in categoriesList" :key="cat.ID" 
            class="filters__cat-item"
            :class="{'active': cat.isSelected}"
            @click="updateCategory(cat.ID)"
          >{{ cat.NAME }}</div>
      </div>
      <div v-for="(type, index) in typesArray" :key="type.NAME" class="filters__accordeon">
          <FilterCategoryAccordeon 
            :id="String(index)" 
            :dataList="type" 
            @updateList="updateTypesArray"
          />
      </div>
      <div v-if="typesArray.length" class="filters__btn" @click="applyCategories">
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

        if (this.$route.params.name === 'alpha' && (!this.$route.params.category || this.$route.params.category === 'fitingi')) {
            let priorityNames = ['VID_FITINGA', 'DIAMETR', 'TSVET', 'RAZMER_REZBY']; 
            
            let filteredObjects = []
            priorityNames.forEach(name => {
                const type = this.typesList.find(obj => obj.name === name)
                if (type)
                    filteredObjects.push(type)
            })
            let remainingObjects = this.typesList.filter(obj => !priorityNames.includes(obj.name));

            this.typesArray = filteredObjects.concat(remainingObjects);
        } else this.typesArray = this.typesList
    },
    methods: {
        updateCategory(id) {
            this.$emit('updateSelectedCategory', id)
        },
        clearFilters() {
            this.typesArray.forEach(t => {
                t.list.forEach(el => el.isChecked = true)
            })
            this.applyCategories()
        },
        applyCategories() {
            this.$emit('applyFilters', {
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
        rangeMaxValue() {
            if (this.rangeMaxValue > this.rangeMaximum)
                this.$emit('updateMaximum', this.rangeMaxValue)
        },
        typesList() {
            // this.typesArray = JSON.parse(JSON.stringify(this.typesList))

            if (this.$route.params.name === 'alpha' && (!this.$route.params.category || this.$route.params.category === 'fitingi')) {
                let priorityNames = ['VID_FITINGA', 'DIAMETR', 'TSVET', 'RAZMER_REZBY']; 
                let filteredObjects = []
                priorityNames.forEach(name => {
                    const type = this.typesList.find(obj => obj.name === name)
                    if (type)
                        filteredObjects.push(type)
                })
                let remainingObjects = this.typesList.filter(obj => !priorityNames.includes(obj.name));

                this.typesArray = filteredObjects.concat(remainingObjects);
            } else this.typesArray = JSON.parse(JSON.stringify(this.typesList))
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