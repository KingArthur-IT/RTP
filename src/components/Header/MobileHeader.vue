<template>
    <div class="header__hero">
        <div class="header__burger">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="22" height="2" rx="1" fill="white"/>
                <rect y="7" width="22" height="2" rx="1" fill="white"/>
                <rect y="14" width="22" height="2" rx="1" fill="white"/>
            </svg>
        </div>
        <a href="tel:+84955405262" class="header__contact">8 (495) 540-52-62</a>
        <div class="header__logo">
            <img src="@/assets/logo.png" alt="RTP">
        </div>
        <a href="mailto:sales@rtp.ru" class="header__contact">sales@rtp.ru</a>
        <div class="header__call">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9904 13.4161C16.9498 13.1654 16.7927 12.9512 16.5574 12.8239L13.076 10.7721L13.0473 10.7561C12.9014 10.683 12.7402 10.6455 12.5769 10.6468C12.2852 10.6468 12.0067 10.7573 11.8134 10.9511L10.7858 11.9795C10.7419 12.0212 10.5986 12.0817 10.5551 12.0839C10.5432 12.0829 9.35954 11.9977 7.18038 9.81765C5.0051 7.64224 4.91208 6.45457 4.91208 6.45457C4.9133 6.39384 4.97304 6.251 5.01554 6.20678L5.89177 5.33055C6.20044 5.02106 6.29297 4.508 6.10986 4.11057L4.17477 0.468363C4.03415 0.178794 3.76094 0 3.45785 0C3.24341 0 3.03649 0.0889113 2.87475 0.250458L0.486242 2.6343C0.257227 2.86217 0.0600263 3.26057 0.0170405 3.58123C-0.00384531 3.73452 -0.427632 7.39348 4.58738 12.4107C8.84492 16.6689 12.1648 16.9998 13.0816 16.9998C13.1932 17.0012 13.3048 16.9955 13.4158 16.9825C13.7354 16.9398 14.1332 16.743 14.3607 16.5149L16.7473 14.1279C16.942 13.9321 17.0309 13.6734 16.9904 13.4161Z" fill="white"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped lang="sass">
.header
    &__hero
        display: flex
        justify-content: space-between
        align-items: center
    // &__burger
    &__logo 
        & img
            width: 63px
    &__contact
        display: block
        font-weight: 700
        font-size: 12px
        color: #FFFFFF
    // &__call

@media screen and (max-width: 525px)
    .header
        &__contact
            display: none
        
</style>