<template>
    <div class="input-wrap" :class="{'light': isLight}">
        <label v-if="label" class="label">{{ label }}<span v-if="isRequired">*</span></label>
        <input 
            v-if="!isTextArea"
            class="input" 
            :class="{'error': !isValid}"
            :type="type" 
            v-model="inputValue"
            @input="onInput"
            :placeholder="placeholder"
        />
        <textarea 
            v-else
            cols="30" 
            :rows="rowsCount" 
            class="input textarea"
            :class="{'error': !isValid, 'main-form': additionalClass === 'main-form' }"
            v-model="inputValue"
            @input="onInput"
            :placeholder="placeholder"
        ></textarea>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        isRequired: {
            type: Boolean,
            default: false,
        },
        isNumber: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: ''
        },
        isValid: {
            type: Boolean,
            default: true
        },
        isTextArea: {
            type: Boolean,
            default: false
        },
        rowsCount: {
            type: Number,
            default: 10
        },
        isLight: {
            type: Boolean,
            default: false
        },
        additionalClass: {
            type: String,
            default: ''
        }
    },
    emits: ['update:value' , 'saveEvent'],
    data() {
        return {
            inputValue: '',
        }
    },
    methods: {
        onInput(event) {
            this.$emit('update:value', event.target.value)
        }
    },
    watch: {
        value() {
            this.inputValue = this.value
        },
        inputValue() {
            if (this.isNumber) {
                this.inputValue = this.inputValue.replace(/[^0-9+]/g, '').replace(/(\..*?)\..*/g, '$1')
            }
        }
    }
}
</script>

<style scoped lang="sass">
    .label
        display: block
        color: #fff
        margin-bottom: 12px
        font-weight: 500
    .input-wrap
        width: 100%
        position: relative
    .input
        font-family: 'Ubuntu'
        width: 100%
        background: #fff
        border: 1px solid #BDBDBD
        padding: 16px 6px
        outline: none
        caret-color: var(--primary-color)
        color: var(--primary-color)
        font-size: 16px
        font-weight: 600
        resize: none
        &::placeholder
            color: var(--primary-color)
        &.error
            border-color: #DC1818
    .textarea
        padding: 8px 11px
        font-size: 13px
        font-weight: 400
        &.main-form
            max-height: 204px
    
    .light
        & .label
            color: #A6ACB3
        & .input
            font-weight: 400

@media screen and (max-width: 1600px)
    .label
        font-size: 10px
        margin-bottom: 4px
    .input
        font-size: 12px
        padding: 10px 6px
    .textarea
        max-height: 150px
        &.main-form
            max-height: 125px
</style>