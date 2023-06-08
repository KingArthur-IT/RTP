<template>
  <div class="copy" @click="copyCurrentLink">
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.8018 20.1937C5.26567 20.6583 5.81676 21.0266 6.42341 21.2775C7.03006 21.5284 7.68031 21.6569 8.3368 21.6557C8.99342 21.6569 9.64381 21.5283 10.2506 21.2774C10.8574 21.0265 11.4087 20.6583 11.8728 20.1937L14.7008 17.3647L13.2868 15.9507L10.4588 18.7797C9.89527 19.3407 9.13247 19.6557 8.3373 19.6557C7.54212 19.6557 6.77933 19.3407 6.2158 18.7797C5.6543 18.2165 5.339 17.4536 5.339 16.6582C5.339 15.8629 5.6543 15.1 6.2158 14.5367L9.0448 11.7087L7.6308 10.2947L4.8018 13.1227C3.8656 14.0612 3.33984 15.3327 3.33984 16.6582C3.33984 17.9838 3.8656 19.2553 4.8018 20.1937ZM20.3578 11.7087C21.2935 10.77 21.8189 9.49865 21.8189 8.17323C21.8189 6.84782 21.2935 5.57645 20.3578 4.63773C19.4193 3.70154 18.1479 3.17578 16.8223 3.17578C15.4967 3.17578 14.2253 3.70154 13.2868 4.63773L10.4588 7.46673L11.8728 8.88073L14.7008 6.05173C15.2643 5.49072 16.0271 5.17576 16.8223 5.17576C17.6175 5.17576 18.3803 5.49072 18.9438 6.05173C19.5053 6.61501 19.8206 7.3779 19.8206 8.17323C19.8206 8.96857 19.5053 9.73146 18.9438 10.2947L16.1148 13.1227L17.5288 14.5367L20.3578 11.7087Z" fill="#828D99"/>
        <path d="M9.04391 17.3648L7.62891 15.9508L16.1159 7.46484L17.5299 8.87984L9.04391 17.3648Z" fill="#828D99"/>
    </svg>
    <div class="copy__hint" :class="{'open': open}">Ссылка скопирована</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            open: false
        }
    },
    methods: {
        copyCurrentLink() {
            navigator.clipboard.writeText(window.location.href);
            this.open = true
            setTimeout(() => {
                this.open = false
            }, 3000);
        },
    }
}
</script>

<style scoped lang="sass">
.copy
    position: relative
    &__hint
        position: absolute
        top: 125%
        right: -50px
        padding: 8px
        background: #fff
        z-index: 2
        border-radius: 8px
        transform: translateY(-10px)
        opacity: 0
        pointer-events: none
        transition: transform .5s ease, opacity .5s ease
        filter: drop-shadow(0px 2px 10px rgba(130, 169, 188, 0.06)) drop-shadow(0px 5px 10px rgba(0, 67, 101, 0.08))
        font-size: 12px
        color: #224386
        font-weight: 500
        width: 140px
        &.open
            opacity: 1
            pointer-events: all
            transform: translateY(0)
</style>