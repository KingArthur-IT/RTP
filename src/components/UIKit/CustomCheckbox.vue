<template>
  <div class="wrapper" @click="changeEvent(modelValue)">
    <div class="checkbox-wrapper" :class="{'error': !isValid, 'search': isSearchPage}">
      <input  type="checkbox"
              class="custom-checkbox"  
              :class="{'checked': modelValue, 'error': !isValid}"
              :value="modelValue"
              @input="(event) => $emit('update:modelValue', event.target.checked)"
      >
      <svg v-if="modelValue && !isSearchPage" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 4.42857L5.69565 10L13 1" stroke="white" stroke-width="2"/>
      </svg>
      <svg v-if="modelValue && isSearchPage" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 4L3.66667 7L9 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    isValid: {
      type: Boolean,
      default: true
    },
    isSearchPage: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {emit}){
    const changeEvent = (oldValue) => {
      emit('update:modelValue', !oldValue)
    }

    return {
      changeEvent
    }
  }
}
</script>

<style scoped lang="sass">
.wrapper
  display: flex
  cursor: pointer
  align-items: flex-start
.checkbox-wrapper
  position: relative
  width: 17px
  height: 17px
  border: 1px solid #fff
  border-radius: 3px
  &.search
    border-radius: 4px
    width: 16px
    height: 16px
    & svg
      transform: translate(0px, 2px)
      width: 10px
      height: 10px
  &.error
    border: 2px solid #F27272
  & svg
    position: absolute
    top: 0
    bottom: 0
    left: 2px
    right: 0
.custom-checkbox 
  opacity: 0
  position: relative
  appearance: none
  background-color: transparent
  margin: 0
  font: inherit
  width: 17px
  height: 17px
  border: 2px solid #fff
  cursor: pointer
  border-radius: 3px
  transition: border .3s ease
  &.error
    border: 2px solid #F27272
  &.checked
    background-color: var(--primary-color)
    border-color: var(--primary-color)

@media screen and (max-width: 1600px)
  .checkbox-wrapper
    width: 10px
    height: 10px
    transform: translateY(2px)
    & svg
      transform: translate(-1px, -1px)
      width: 8px
      height: 8px
    &.search
      width: 16px
      height: 16px
      & svg
        transform: translate(0px, 2px)
        width: 10px
        height: 10px
  .custom-checkbox 
    transform: translate(0px, -6px)
    width: 10px
    height: 10px
    border: 1px solid #fff
</style>

