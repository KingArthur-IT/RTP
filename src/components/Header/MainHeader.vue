<template>
    <div class="header-wrapper">
        <header class="header" :class="{'shadow': isMobileMenuShown}">
            <div class="container">
                <FullHeader />
                <!-- <MobileHeader /> -->
            </div>
        </header>
        <MobileMenu :isShown="isMobileMenuShown" />
    </div>
    <CatalogSection />
</template>

<script>
import FullHeader from './FullHeader.vue'
import MobileHeader from './MobileHeader.vue'
import MobileMenu from './MobileMenu.vue'
import CatalogSection from './CatalogSection.vue'

export default {
    components: {
        FullHeader,
        MobileHeader,
        MobileMenu,
        CatalogSection,
    },
    data() {
        return {
            isMobileMenuShown: false
        }
    },
}
</script>

<style scoped lang="sass">
.header
    position: relative
    width: 100%
    background-color: var(--primary-color)
    border-radius: 92px
    padding: 22px 0 37px
    z-index: 20
    &.shadow
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)

@media screen and (max-width: 1600px)
    .header
        padding: 16px 0 25px

@media screen and (max-width: 1155px)
    .header
        padding: 18px 0

@media screen and (max-width: 525px)
    .header
        padding: 18px 20px

@media screen and (max-width: 475px)
    .header
        padding: 18px 32px
</style>