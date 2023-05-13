<template>
    <div class="input-wrap" :class="{'light': isLight}">
        <label 
            v-if="label" 
            class="label"
            :class="{'blue': isLabelBlue}"
        >{{ label }}<span v-if="isRequired">*</span></label>
        <input 
            v-if="!isTextArea"
            class="input" 
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
            :class="{'main-form': additionalClass === 'main-form' }"
            v-model="inputValue"
            @input="onInput"
            :placeholder="placeholder"
        ></textarea>
        <div v-if="!isValid" class="input-error">
            <div class="input-error__icon">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.125 10H7.5V7.5H6.875M7.5 5H7.50625M13.125 7.5C13.125 8.23869 12.9795 8.97014 12.6968 9.65259C12.4141 10.3351 11.9998 10.9551 11.4775 11.4775C10.9551 11.9998 10.3351 12.4141 9.65259 12.6968C8.97014 12.9795 8.23869 13.125 7.5 13.125C6.76131 13.125 6.02986 12.9795 5.34741 12.6968C4.66495 12.4141 4.04485 11.9998 3.52252 11.4775C3.00019 10.9551 2.58586 10.3351 2.30318 9.65259C2.02049 8.97014 1.875 8.23869 1.875 7.5C1.875 6.00816 2.46763 4.57742 3.52252 3.52252C4.57742 2.46763 6.00816 1.875 7.5 1.875C8.99184 1.875 10.4226 2.46763 11.4775 3.52252C12.5324 4.57742 13.125 6.00816 13.125 7.5Z" stroke="#F27272" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="input-error__text">{{ noValidText }}</div>
        </div>
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
        noValidText: {
            type: String,
            default: 'Не валидное значение'
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
        isLabelBlue: {
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
    mounted() {
        this.inputValue = this.value
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
                const value = this.inputValue.replace(/\D+/g, "");
                const numberLength = 11;

                let result = '+';

                for (let i = 0; i < value.length && i < numberLength; i++) {
                    switch (i) {
                    case 0:
                        result += '7 ('
                        continue;
                    case 4:
                        result += ") ";
                        break;
                    case 7:
                        result += "-";
                        break;
                    case 9:
                        result += "-";
                        break;
                    default:
                        break;
                    }
                    result += value[i];
                }

                this.inputValue = result;
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
        &.blue
            color: #8CA7DD
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
        max-height: 243px
        &.main-form
            max-height: 204px
    
    .light
        & .label
            color: #A6ACB3
        & .input
            font-weight: 400

    .input-error
        display: flex
        align-items: center
        padding: 4px
        &__icon
            margin-right: 3px
            height: 15px
            width: 15px
        &__text
            font-weight: 500
            font-size: 10px
            color: #F27272

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