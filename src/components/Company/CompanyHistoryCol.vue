<template>
  <div class="list">
      <div class="list__item" v-for="(item, index) in years" :key="index">
          <div class="list__year">{{ item }}</div>
          <div class="list__description">
              <div class="list__text" v-html="description[index]"></div>
              <svg v-if="index + 1 < years.length" class="list__arrow" width="12" height="157" viewBox="0 0 12 157" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.99999 157L11.7735 147L0.226491 147L5.99999 157ZM5 -4.37114e-08L4.99999 148L6.99999 148L7 4.37114e-08L5 -4.37114e-08Z" fill="white"/>
              </svg>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        years: {
            type: Array,
            required: true
        },
        description: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped lang="sass">
.list
    display: flex
    flex-direction: column
    padding-left: 30px
    &__year
        position: relative
        font-weight: 700
        font-size: 35px
        color: #FFFFFF
        &::after
            content: ''
            position: absolute
            width: 12px
            height: 12px
            background: #FECC00
            left: -30px
            top: 14px
    &__description
        min-height: 170px
        position: relative
    &__text
        padding-top: 10px
        font-size: 18px
        line-height: 130%
        color: #FFFFFF
    &__arrow
        top: 0
        bottom: 0
        height: 100%
        position: absolute
        left: -30px

@media screen and (max-width: 1600px)
    .list
        &__year
            font-size: 25px
            margin-bottom: 10px
            &::after
                left: -30px
                top: 10px
        &__description
            min-height: 105px
        &__text
            padding-top: 5px
            font-size: 14px
        &__arrow
            left: -30px
</style>