<template>
    <button class="controls__btn" :class="{'arrow-left': isLeftBtn, 'arrow-right': !isLeftBtn}">
        <svg v-if="isLeftBtn" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6.03516L7 12.0352V7.03516H13V5.03516H7V0.0351562L0 6.03516Z" fill="#42474D"/>
        </svg>
        <svg v-else width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 6.03516L6 0.0351562V5.03516H0V7.03516H6V12.0352L13 6.03516Z" fill="#42474D"/>
        </svg>
    </button>
</template>

<script>
export default {
    props: {
        isLeftBtn: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped lang="sass">
.controls
    &__btn
        position: absolute
        top: 50%
        width: 92px
        height: 92px
        border-radius: 50%
        border: 8px solid #fff
        background: #F3F9FB
        display: flex
        align-items: center
        justify-content: center
.arrow-left
    transform: translate(-50%, -50%)
    left: 0
.arrow-right
    transform: translate(50%, -50%)
    right: 0

@media screen and (max-width: 1600px)
    .controls
        &__btn
            width: 56px
            height: 56px
</style>