<template>
  <div class="card">
      <router-link :to="`/catalog-system/${pageName}`">
        <div class="card__head" :class="{'min-h': pageName === 'delta'}">
            <p>{{ title }}</p>
            <div class="card__icon">
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.6387 6L6.63867 0V5H0.638672V7H6.63867V12L13.6387 6Z" fill="#42474D"/>
                </svg>
            </div>
        </div>
      </router-link>
      <div class="card__body">
          <div v-for="item in data" :key="item.ID" >
              <router-link :to="`/catalog-system/${pageName}/${item.CODE}`">
                  <div v-if="item.count" class="card__row">
                        <div class="card__name">{{ item.NAME }}</div>
                        <div class="card__count">{{ item.count }}</div>
                  </div>
              </router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        data: {
            type: Array,
            default: []
        },
        pageName: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped lang="sass">
.card
    width: 100%
    height: 100%
    background: #FFFFFF
    border-radius: 26px
    overflow: hidden
    filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.05))
    &__head
        background: #D5E0F5
        display: flex
        align-items: center
        justify-content: space-between
        font-weight: 700
        font-size: 20px
        color: #42474D
        padding: 16px 15px 16px 30px
        cursor: pointer
        & p
            padding-right: 20px
    &__icon
        width: 14px
    &__body
        padding: 23px 30px
        background: #fff
    &__row
        display: flex
        align-items: center
        justify-content: space-between
        padding: 7px 0
        cursor: pointer
    &__name
        font-size: 20px
        color: #42474D
    &__count
        font-weight: 500
        font-size: 18px
        color: #BDBDBD

@media screen and (max-width: 1600px)
    .card
        &__head
            font-size: 16px
            min-height: 70px
            &.min-h
                min-height: 87px
        &__body
            padding: 30px
        &__name
            font-size: 14px
        &__count
            font-size: 14px
</style>
