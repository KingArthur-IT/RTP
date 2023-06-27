<template>
  <div class="system-list">
      <div v-for="system in systemList" :key="system.name" class="system-list__wrapper">
          <div v-if="counts[system.name]" class="system-list__item-wrapper">
              <div 
                class="system-list__item" 
                :class="{ [system.name]: true, 'selected': selectedSystems[system.name] }"
                @click="selectedSystems[system.name] = !selectedSystems[system.name]"
              >
                  <div class="system-list__checkbox">
                      <CustomCheckboxVue :isSearchPage="true" v-model:model-value="selectedSystems[system.name]" />
                  </div>
                  <div class="system-list__img">
                      <img :src="getImageUrl('search-icons', system.name)" alt="alpha">
                  </div>
                  <div class="system-list__name">Система {{ String(system.title).toUpperCase() }} {{ system.description }}</div>
                  <div class="system-list__count">{{ counts[system.name] }}</div>
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
                alpha: true,
                sigma: false,
                omega: false,
                'beta-orange': true,
                delta: true,
                beta: true,
                'beta-elite': true,
                gamma: true,
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
    }
}
</script>

<style scoped lang="sass">
.system-list
    display: flex
    flex-wrap: wrap
    width: calc( 100% + 40px )
    transform: translateX(-20px)
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
            &.sigma
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
            &.sigma
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