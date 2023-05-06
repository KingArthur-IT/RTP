<template>
  <div class="search">
      <input type="text" class="search__input" placeholder="Поиск">
      <svg class="search__icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12C7.33123 11.9997 8.6241 11.5541 9.67275 10.734L12.9697 14.031L14.0303 12.9705L10.7333 9.6735C11.5538 8.62475 11.9997 7.33158 12 6C12 2.69175 9.30825 0 6 0C2.69175 0 0 2.69175 0 6C0 9.30825 2.69175 12 6 12ZM6 1.5C8.48175 1.5 10.5 3.51825 10.5 6C10.5 8.48175 8.48175 10.5 6 10.5C3.51825 10.5 1.5 8.48175 1.5 6C1.5 3.51825 3.51825 1.5 6 1.5Z" fill="#224386"/>
      </svg>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped lang="sass">
.search
    position: relative
    width: 100%
    &__input
        width: 100%
        border: 2px solid var(--primary-color)
        border-radius: 29px
        font-size: 16px
        padding: 10px 50px 10px 17px
        caret-color: var(--primary-color)
        outline: none
        transition: filter .3s ease, border .3s ease
        &::placeholder
            color: var(--primary-color)
        &:focus
            filter: drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.15))
            border-color: #fff
    &__icon
        position: absolute
        top: 50%
        right: 35px
        transform: translateY(-50%)

@media screen and (max-width: 1600px)
    .search
        &__input
            border: 1px solid var(--primary-color)
            padding: 8px 36px 8px 12px
            font-size: 10px
        &__icon
            width: 11px
            height: 11px
            right: 25px
</style>