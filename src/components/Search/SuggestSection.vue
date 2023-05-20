<template>
    <div class="suggest">
        <div class="suggest__title">Вам это понравится</div>
        <div class="suggest__list">
            <div v-for="item in list" :key="item.id" class="suggest__item">
                <ProductCard 
                    :id="item.id" 
                    :description="item.description"
                    :newPrice="item.newPrice"
                    :oldPrice="item.oldPrice"
                    :isBenefitShown="false"
                    :hasShadow="false"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from '../UIKit/ProductCard.vue'

export default {
    components: {
        ProductCard
    },
    props: {
        list: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped lang="sass">
.suggest
    margin-top: 70px
    &__title
        font-weight: 500
        font-size: 32px
        color: #42474D
        margin-bottom: 27px
    &__list
        display: flex
        width: calc( 100% + 30px )
        transform: translateX(-15px)
    &__item
        flex-basis: 20%
        padding: 0 15px
</style>