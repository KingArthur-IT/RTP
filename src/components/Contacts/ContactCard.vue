<template>
  <div class="card">
      <div class="card__hero">
          <div class="card__title">{{ title }}</div>
          <div class="card__adress" v-html="adress"></div>
          <div class="card__contact">
              <a :href="`tel:${phoneLink}`">{{ phone }}</a>
              <span>{{ additional }}</span>
          </div>
      </div>
      <div class="card__img" :class="[imgName]"></div>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        adress: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        additional: {
            type: String,
            default: ''
        },
        imgName: {
            type: String,
            required: true
        }
    },
    computed: {
        phoneLink() {
            return this.phone.replace(/\s/g, '').replace('(', '').replace(')', '')
        }
    }
}
</script>

<style scoped lang="sass">
.card
    position: relative
    background: #EDEDED
    display: flex
    align-items: center
    overflow: hidden
    &__hero
        align-self: flex-end
        padding: 37px 42px 47px 30px
        margin-left: auto
    &__title
        text-align: right
        font-weight: 700
        font-size: 16px
        color: var(--primary-color)
        margin-bottom: 12px
    &__adress
        font-weight: 500
        font-size: 16px
        text-align: right
        color: #42474D
        margin-bottom: 12px
    &__contact
        font-weight: 700
        font-size: 16px
        text-align: right
        color: #42474D
        & span
            font-weight: 400
        & a
            color: #42474D
    &__img
        position: absolute
        top: 0
        bottom: 0
        left: 0
        height: 100%
        width: 400px
        &.moscow
            background: url('@/assets/contacts/moscow.png') no-repeat
            background-size: cover
        &.novosibirsk
            background: url('@/assets/contacts/novosibirsk.png') no-repeat
            background-size: cover
        &.krasnodar
            background: url('@/assets/contacts/krasnodar.png') no-repeat
            background-size: cover

@media screen and (max-width: 1600px)
    .card
        &__hero
            padding: 27px 14px 23px 10px
        &__title
            font-size: 14px
            margin-bottom: 14px
        &__adress
            font-size: 14px
            margin-bottom: 16px
        &__contact
            font-size: 14px
        &__img
            width: 42%
            &.moscow
                background: url('@/assets/contacts/moscow-md.png') no-repeat
                background-size: cover
            &.novosibirsk
                background: url('@/assets/contacts/novosibirsk-md.png') no-repeat
                background-size: cover
            &.krasnodar
                background: url('@/assets/contacts/krasnodar-md.png') no-repeat
</style>