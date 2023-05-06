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
        border-radius: 3px
        background: transparent
        border: 2px solid #fff
        color: #fff
        font-size: 17px
        font-weight: 700
        display: flex
        align-items: center
        justify-content: center
        padding: 12px
        transition: color .3s ease, background .3s ease, border .3s ease
        &:hover
            background: #F5F5F5
            border-color: var(--primary-color)
            color: var(--primary-color)
            box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.35)

    @media screen and (max-width: 1600px)
        .rect-btn
            border: 1px solid #fff
            font-size: 14px
            padding: 6px
</style>