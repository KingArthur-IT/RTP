<template>
  <button 
    class="rect-btn" 
    :class="{'agree': isAgreeBtn, 'gray': isGrayBtn}"
    @click="$emit('clickEvent')"
  >{{ text }}</button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        },
        isAgreeBtn: {
            type: Boolean,
            default: false
        },
        isGrayBtn: {
            type: Boolean,
            default: false
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
        &.agree
            border-color: #C3D3E5
            color: #C3D3E5
            &:hover
                border-color: var(--primary-color)
                color: var(--primary-color)
        &.gray
            border-color: #828D99
            color: #828D99
            &:hover
                border-color: var(--primary-color)
                color: var(--primary-color)

    @media screen and (max-width: 1600px)
        .rect-btn
            border-width: 1px
            font-size: 14px
            padding: 6px
</style>