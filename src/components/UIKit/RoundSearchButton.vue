<template>
  <div class="search">{{search}}
      <input v-model="search" type="text" class="search__input" placeholder="Поиск" @keyup.enter="searchEvent" @click.stop>
      <svg @click="searchEvent" class="search__icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12C7.33123 11.9997 8.6241 11.5541 9.67275 10.734L12.9697 14.031L14.0303 12.9705L10.7333 9.6735C11.5538 8.62475 11.9997 7.33158 12 6C12 2.69175 9.30825 0 6 0C2.69175 0 0 2.69175 0 6C0 9.30825 2.69175 12 6 12ZM6 1.5C8.48175 1.5 10.5 3.51825 10.5 6C10.5 8.48175 8.48175 10.5 6 10.5C3.51825 10.5 1.5 8.48175 1.5 6C1.5 3.51825 3.51825 1.5 6 1.5Z" fill="#224386"/>
      </svg>
      <div class="search__hint" :class="{'active': isHindShow && search && search.length < 3 }">
          <div class="search__item">Поиск осуществляется от 3-х символов</div>
      </div>
      <div class="search__hint" :class="{'active': isHindShow && search && search.length > 2 && !hintArr.length}">
          <div class="search__item">Результатов не найдено</div>
      </div>
      <div class="search__hint" :class="{'active': isHindShow && search && search.length > 2 && hintArr.length}">
          <div 
            v-for="(item, index) in hintArr" :key="index" 
            :id="`search-item-${index}`"
            class="search__item"
            @click="acceptHint(index)"
            v-html="item.arFields.PREVIEW_TEXT"
        ></div>
      </div>
  </div>
</template>

<script>
import { hintSearchProducts } from '@/use/middleware.js'

export default {
    data() {
        return {
            search: '',
            hintArr: [],
            isHindShow: false,
            isUsedHint: false
        }
    },
    methods: {
        hintSearchProducts,
        searchEvent() {
            if (this.search.length > 2)
                this.$router.push({ name: 'search', query: { search: this.search } })
        },
        acceptHint(index) {
            this.isUsedHint = true
            const text = document.getElementById(`search-item-${index}`).innerText
            this.search = text
            this.searchEvent()
            this.isHindShow = false
            this.hintArr = []
            setTimeout(() => {
                this.isUsedHint = false
            }, 500);
        }
    },
    watch: {
        async search() {
            if (this.search.length) {
                this.isHindShow = true
                this.$showHint.value = true
            } else {
                this.isHindShow = false
                this.$showHint.value = false
            }

            if (this.search.length > 2 && !this.isUsedHint) {
                const hintArr = await this.hintSearchProducts(this.search)
                if (hintArr?.length) {
                    this.hintArr = hintArr.slice(0, 5)
                }
                else {
                    // this.isHindShow = false
                    this.hintArr = []
                }
            }
            if (this.search.length < 3) {
                // this.isHindShow = false
                // this.$showHint.value = false
                this.hintArr = []
            }
        },
        '$showHint.value': {
            handler: function() {
                this.isHindShow = this.$showHint.value
            },
            deep: true
        },
        '$route': {
            handler: function() {
                if (this.$route.name !== 'search')
                    this.search = ''
            },
            deep: true
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
        cursor: pointer
    &__hint
        width: 100%
        position: absolute
        top: calc( 100% + 10px )
        left: 0
        right: 0
        background: #fff
        z-index: 12
        border: 1px solid transparent
        border-radius: 12px
        overflow: hidden
        transform: translateY(-10px)
        transition: transform .3s ease, opacity .2s ease, border .3s ease
        opacity: 0
        pointer-events: none
        &.active
            filter: drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.15))
            opacity: 1
            transform: translateY(0px)
            pointer-events: all
    &__item
        color: #6C7689
        font-weight: 500
        padding: 5px 8px
        font-size: 10px
        cursor: pointer
        transition: background .3s ease, color .3s ease
        &:hover
            color: #fff
            background: lighten(#224386, 20%)

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