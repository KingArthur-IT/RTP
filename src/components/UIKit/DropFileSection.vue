<template>
    <div class="dropdown">
        <div 
            v-if="!file" 
            class="dropdown__empty"
            :class="{'over': dragging}" 
            @dragenter="dragging = true" 
            @dragleave="dragging = false"
        >
            <div class="dropdown__info" @drag="onChange">
                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_617_17654" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="-2" y="-2" width="36" height="36">
                        <path d="M0.347656 0H32.3477V32H0.347656V0Z" fill="white" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </mask>
                    <g mask="url(#mask0_617_17654)">
                        <path d="M4.34766 16.0055V28H28.3477V16" stroke="#224386" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22.3477 15.332L16.3477 21.332L10.3477 15.332" stroke="#224386" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.3438 21.3333V4" stroke="#224386" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
                <span class="dropdown__title">Загрузка файлов</span>
                <span class="dropdown__text">Перетащите ваши файлы в эту область!</span>
            </div>
            <input type="file" @change="onChange">
        </div>
        <div v-else class="dropdown__uploaded">
          <div class="dropdown__info">
            <span class="dropdown__title">Файл загружен</span>
            <div class="dropdown__filename">
                <span class="dropdown__text">{{ file.name }}</span> 
                <svg @click="removeFile" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 20.5L10.5 13L3 20.5L0.499999 18L8 10.5L0.499999 3L3 0.500001L10.5 8L18 0.500001L20.5 3L13 10.5L20.5 18L18 20.5Z" fill="white"/>
                </svg>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: Object,
            default: null
        },
    },
    data() {
        return {
            file: '',
            dragging: false
        }
    },
    methods: {
        onChange(e) {
            const files = e.target.files || e.dataTransfer.files;
            
            if (!files.length) {
                this.dragging = false;
                return;
            }
            
            this.createFile(files[0]);
        },
        createFile(file) {
            this.file = file;
            this.dragging = false;
            this.$emit('update:modelValue', this.file)
        },
        removeFile() {
            this.file = '';
        }
    },
}
</script>

<style scoped lang="sass">
.dropdown
    width: 100%
    border: 2px dashed #224386
    border-radius: 19px
    display: flex
    justify-content: center
    overflow: hidden
    cursor: pointer
    &__empty
        width: 100%
        background: transparent
        transition: background .3s ease
        & input
            position: absolute
            cursor: pointer
            top: 0
            right: 0
            bottom: 0
            left: 0
            width: 100%
            height: 100%
            opacity: 0
        &.over
            background: var(--primary-color)
            & .dropdown__title
                color: #fff
            & .dropdown__text
                color: #fff
            & svg path
                stroke: #fff
    &__info
        padding: 11px 30px 18px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        width: 100%
        height: 100%
    &__title
        margin-top: 3px
        margin-bottom: 3px
        font-weight: 700
        font-size: 16px
        color: #224386
        transition: color .3s ease
    &__text
        font-size: 14px
        text-align: center
        color: #A6ACB3
        transition: color .3s ease
    &__filename
        display: flex
        align-items: center
        justify-content: center
        & span
            margin-right: 10px
        & svg
            width: 13px
            height: 13px
            cursor: pointer
            & path
                fill: var(--primary-color)

@media screen and (max-width: 1600px)
    .dropdown
        &__info
            & svg
                width: 20px
                height: 20px
        &__title
            font-size: 12px
        &__text
            font-size: 10px
        &__filename
            & span
                margin-right: 10px
            & svg
                width: 10px
                height: 10px
</style>