<template>
  <div :ref="`accordeon${id}`" class="accordeon">
      <div class="accordeon__head" @click="showHideAccordeon">
          <div class="accordeon__title">{{ typeName }}</div>
          <div class="accordeon__shevron" :class="{'rotate': !isBodyShown}">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 10L8 6L4 10" stroke="#42474D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
          </div>
      </div>
      <div class="accordeon__body">
          <div v-for="(item, index) in list.slice(0, currentCount)" :key="index" class="accordeon__row">
              <div class="accordeon__checkbox">
                  <CustomCheckbox v-model="item.isChecked">
                    <div class="accordeon__check-text">{{ item.value }} ({{ item.count }})</div>
                  </CustomCheckbox>
              </div>
          </div>
          <div v-if="dataList.length > 3" class="accordeon__more" @click="showHideClick">
              <span v-if="currentCount === dataList.length">скрыть часть</span>
              <span v-else>показать больше</span>
          </div>
      </div>
  </div>
</template>

<script>
import CustomCheckbox from './CustomCheckbox.vue'

export default {
    components: {
        CustomCheckbox
    },
    props: {
        id: {
            type: String,
            required: true
        },
        dataList: {
            type: Object,
            required: true
        },
    },
    mounted() {
        this.currentCount = this.dataList.length
        this.typeName = this.dataList.name
        this.list = this.dataList.list
    },
    data() {
        return {
            maxCount: 5,
            currentCount: 0,
            isBodyShown: true,
            typeName: '',
            list: []
        }
    },
    methods: {
        showHideClick() {
            if (this.currentCount === this.dataList.length)
                this.currentCount = this.maxCount
            else {
                this.currentCount = this.dataList.length
                setTimeout(() => {
                    const bodyWrapper = this.$refs[`accordeon${this.id}`].querySelector('.accordeon__body')
                    bodyWrapper.style.maxHeight = bodyWrapper.scrollHeight + "px";
                }, 100);
            }
        },
        showHideAccordeon() {
            this.isBodyShown = !this.isBodyShown
            const bodyWrapper = this.$refs[`accordeon${this.id}`].querySelector('.accordeon__body')
            if (!bodyWrapper.style.maxHeight) {
                bodyWrapper.style.maxHeight = bodyWrapper.scrollHeight + "px";
                setTimeout(() => {
                    if (bodyWrapper.style.maxHeight !== '0px')
                        bodyWrapper.style.maxHeight = 0;
                    else
                        bodyWrapper.style.maxHeight = bodyWrapper.scrollHeight + "px";
                }, 100);
            } else 
                if (bodyWrapper.style.maxHeight !== '0px') {
                    bodyWrapper.style.maxHeight = 0;
                } else {
                    bodyWrapper.style.maxHeight = bodyWrapper.scrollHeight + "px";
                };
        }
    },
    watch: {
        list: {
            handler() {
                this.$emit('updateList', { propName: this.dataList.propName, newList: this.list })
            },
            deep: true
        },
        dataList() {
            this.list = this.dataList.list
        }
    }
}
</script>

<style scoped lang="sass">
.accordeon
    &__head
        cursor: pointer
        display: flex
        align-items: center
        justify-content: space-between
        margin-bottom: 11px
    &__title
        font-size: 14px
        color: var(--primary-color)
    &__shevron
        transform: rotate(0)
        transition: transform .3s ease
        &.rotate
            transform: rotate(180deg)
    &__body
        overflow: hidden
        transition: max-height 0.2s ease-out
    &__check-text
        font-size: 14px
        line-height: 171%
        color: #42474D
    &__more
        font-size: 14px
        color: var(--primary-color)
        padding: 7px 0
        cursor: pointer
</style>