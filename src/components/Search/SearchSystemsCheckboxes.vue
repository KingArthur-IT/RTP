<template>
  <div class="system-list">
      <div v-for="system in list" :key="system" class="system-list__wrapper">
          <div class="system-list__item-wrapper">
              <div 
                class="system-list__item" 
                :class="{ [system[0]]: true, 'selected': selectedSystems[system[0]] }"
                @click="selectedSystems[system[0]] = !selectedSystems[system[0]]"
              >
                  <div class="system-list__checkbox">
                      <CustomCheckboxVue :isSearchPage="true" v-model:model-value="selectedSystems[system[0]]" />
                  </div>
                  <div class="system-list__img">
                      <img :src="getImageUrl('search-icons', system[0])" alt="alpha">
                  </div>
                  <div class="system-list__name">Система {{ String(systemList.find(el => el.name === system[0]).title).toUpperCase() }} {{ systemList.find(el => el.name === system[0]).description }}</div>
                  <div class="system-list__count">{{ system[1] }}</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import CustomCheckboxVue from '../UIKit/CustomCheckbox.vue'
import { systemList } from '@/data/data.js'
import { getImageUrl } from '@/use/helpers.js'

export default {
    components: {
        CustomCheckboxVue
    },
    props: {
        counts: {
            type: Object,
        }
    },
    data() {
        return {
            systemList,
            selectedSystems: {
                alpha: false,
                sigma: false,
                omega: false,
                'beta-orange': false,
                delta: false,
                beta: false,
                'beta-elite': false,
                gamma: false,
            }
        }
    },
    methods: {
        getImageUrl
    },
    watch: {
        selectedSystems: {
            handler() {
                this.$emit('updateFilteredSystems', this.selectedSystems)
            },
            deep: true
        }
    },
    computed: {
        list() {
            return Object.entries(this.counts).filter(item => !!item[1])
        }
    }
}
</script>

<style scoped lang="sass">
.system-list
    display: flex
    flex-wrap: wrap
    width: calc( 100% + 40px )
    transform: translateX(-20px)
    margin-bottom: 40px
    &__wrapper
        flex-basis: 50%
    &__item-wrapper
        padding: 0 20px
        margin-bottom: 23px
    &__item
        border-radius: 5px
        background: #224386
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25)
        display: flex
        align-items: center
        padding: 10px 30px 13px 20px
        color: #fff
        font-size: 16px
        font-weight: 700
        transition: background .3s ease
        cursor: pointer
        &:hover
            &.alpha
                background: #349ED4
            &.sigma
                background: #003C47
            &.delta
                background: #23A2AB
            &.beta-orange
                background: #EE741D
            &.beta
                background: #7E8E97
            &.beta-elite
                background: #80C2EC
            &.gamma
                background: #2A4A8A
            &.omega
                background: #B92F2C
        &.selected
            &.alpha
                background: #349ED4
            &.sigma
                background: #003C47
            &.delta
                background: #23A2AB
            &.beta-orange
                background: #EE741D
            &.beta
                background: #7E8E97
            &.beta-elite
                background: #80C2EC
            &.gamma
                background: #2A4A8A
            &.omega
                background: #B92F2C
    &__checkbox
        margin-right: 17px
    &__img
        border-radius: 50%
        border: 2px solid #fff
        overflow: hidden
        display: flex
        align-items: center
        justify-content: center
        margin-right: 10px
        min-width: 42px
        max-width: 42px
        & img
            width: 102%
            height: 102%
    &__count
        margin-left: auto
        padding-left: 14px
</style>