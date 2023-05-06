<template>
    <div class="input-wrap">
        <label v-if="label" class="label">{{ label }}<span v-if="isRequired">*</span> </label>
        <input 
            v-if="!isTextArea"
            class="input" 
            :type="type" 
            v-model="value"
            @input="onInput"
            :placeholder="placeholder"
        />
        <textarea 
            v-else
            cols="30" 
            :rows="rowsCount" 
            class="input textarea"
            v-model="value"
            @input="onInput"
            :placeholder="placeholder"
        ></textarea>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
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
        }
    },
    emits: ['update:modelValue' , 'saveEvent'],
    data() {
        return {
            value: '',
        }
    },
    methods: {
        onInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    },
    watch: {
        modelValue() {
            this.value = this.modelValue
        },
        value() {
            if (this.isNumber) {
                this.value = this.value.replace(/[^0-9+]/g, '').replace(/(\..*?)\..*/g, '$1')
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
    .textarea
        padding: 8px 11px
        font-size: 13px
        font-weight: 400

@media screen and (max-width: 1600px)
    .label
        font-size: 10px
        margin-bottom: 4px
    .input
        font-size: 12px
        padding: 10px 6px
    .textarea
        max-height: 125px
</style>