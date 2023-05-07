<template>
  <button class="rect-btn" @click="$emit('clickEvent')">{{ text }}</button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped lang="sass">
    .rect-btn
        width: 100%
        height: 100%
        border-radius: 4px
        background: var(--primary-color)
        color: #fff
        font-size: 16px
        font-weight: 700
        display: flex
        align-items: center
        justify-content: center
        padding: 13px
        transition: box-shadow .3s ease
        &:hover
            box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.35)

    @media screen and (max-width: 1600px)
        .rect-btn
            font-size: 12px
            padding: 6px
</style>