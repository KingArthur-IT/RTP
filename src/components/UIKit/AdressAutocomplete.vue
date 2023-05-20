<template>
  <div class="suggesting">
    <input type="text" v-model="searchQuery" ref="searchInput" placeholder="Введите адрес" />
  </div>
</template>

<script>
export default {
  props: {
      adress: {
          type: String,
          default: ''
      }
  },
  data() {
    return {
      searchQuery: '',
      suggestView: null
    };
  },
  mounted() {
    this.searchQuery = this.adress
    const self = this;
    ymaps.ready(() => {
      self.suggestView = new ymaps.SuggestView(self.$refs.searchInput);
      self.suggestView.events.add('select', self.onSuggestSelect);
    });
  },
  methods: {
    onSuggestSelect(e) {
      this.searchQuery = e.get('item').value;
      this.$emit('update:adress', this.searchQuery)
    },
  },
  watch: {
      adress() {
          this.searchQuery = this.adress
      }
  }
};
</script>

<style scoped lang="sass">
.suggesting
    position: relative
    width: 100%
    color: #42474D
    & input
        font-family: 'Ubuntu'
        font-size: 16px
        margin-top: 5px
        width: 100%
        font-family: 'Ubuntu'
        height: 44px
        background: #FFFFFF
        border: 1px solid #BDBDBD
        border-radius: 11px
        padding: 12px 14px 11px
        outline: none
        &::placeholder
            font-size: 16px
            color: #42474D
            font-weight: 500

@media screen and (max-width: 1600px)
    .suggesting
        & input
            font-size: 14px
            &::placeholder
                font-size: 14px
</style>
