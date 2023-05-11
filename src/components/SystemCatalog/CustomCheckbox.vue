<template>
  <div class="wrapper" @click="changeEvent(modelValue)">
    <div class="checkbox-wrapper">
      <input  type="checkbox"
              class="custom-checkbox"  
              :class="{'checked': modelValue}"
              :value="modelValue"
      >
      <svg v-if="modelValue"  width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  align-items: center
  padding: 7px 0
  margin-top: 6px
.checkbox-wrapper
  position: relative
  width: 16px
  height: 16px
  margin-right: 10px
  & svg
    position: absolute
    top: 4px
    bottom: 0
    left: 3px
    right: 0
.custom-checkbox 
  position: relative
  appearance: none
  background-color: transparent
  margin: 0
  font: inherit
  width: 16px
  height: 16px
  border: 2px solid var(--primary-color)
  cursor: pointer
  border-radius: 4px
  transition: border .3s ease
  &.checked
    background-color: var(--primary-color)
</style>

