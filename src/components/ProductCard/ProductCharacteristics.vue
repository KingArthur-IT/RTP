<template>
    <div>
        <div v-if="!hasTwoColumns" class="features">
            <div v-for="(item, index) in list" :key="index" class="features__row">
                <div class="features__name">{{ item.NAME }}:</div>
                <div class="features__empty"></div>
                <div class="features__value">{{ item.VALUE.replace(/\s/g, '') }}</div>
            </div>
        </div>
        <div v-else class="features d-flex">
            <div class="features__col">
                <div v-for="(item, index) in firstColList" :key="index" class="features__row">
                    <div class="features__name">{{ item.NAME }}:</div>
                    <div class="features__empty"></div>
                    <div class="features__value">{{ item.VALUE.replace(/\s/g, '') }}</div>
                </div>
            </div>
            <div v-if="hasTwoCols" class="features__col">
                <div v-for="(item, index) in secondColList" :key="index" class="features__row">
                    <div class="features__name">{{ item.NAME }}:</div>
                    <div class="features__empty"></div>
                    <div class="features__value">{{ item.VALUE.replace(/\s/g, '') }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array, //[{ name, value }]
            default: []
        },
        hasTwoColumns: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            maxRowsOneCol: 5
        }
    },
    computed: {
        hasTwoCols() {
            return this.list.length > this.maxRowsOneCol
        },
        rowsInCol() {
            return Math.round(this.list.length / 2)
        },
        firstColList() {
            if (this.hasTwoCols)
                return this.list.slice(0, this.rowsInCol)
            else return this.list
        },
        secondColList() {
            return this.list.slice(this.rowsInCol, this.list.length)
        },
    }
}
</script>

<style scoped lang="sass">
.features
    margin-bottom: 18px
    &.d-flex
        display: flex
    &__col
        min-width: 600px
        margin-right: 80px
    &__row
        display: flex
        justify-content: space-between
        font-weight: 500
        font-size: 14px
        color: #828D99
        margin-bottom: 6px
    &__empty
        border-bottom: 1px dashed #A6ACB3
        flex-grow: 1
        margin: 0 4px



@media screen and (max-width: 1600px)
    .features
        &__row
            font-size: 13px
        &__col
            min-width: 394px
            margin-right: 66px
</style>