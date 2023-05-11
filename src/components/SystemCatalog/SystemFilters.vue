<template>
  <div class="filters">
      <div class="filters__head">
          <p>Фильтры</p>
          <div class="filters__clear">очистить</div>
      </div>
      <div class="filters__range">
          <PriceRange
            :max="10000"
            :step="100"
            v-model:min-value="rangeMin"
            v-model:max-value="rangeMax"
          />
      </div>
      <div class="filters__categories">
          <div class="filters__cat-item">ФИТИНГИ</div>
          <div class="filters__cat-item">Запорная арматура </div>
          <div class="filters__cat-item">Коллекторы</div>
          <div class="filters__cat-item">Труба армированная </div>
          <div class="filters__cat-item">Труба не армированная </div>
          <div class="filters__cat-item">Оборудование для монтажа </div>
          <div class="filters__cat-item">Материалы для монтажа </div>
          <div class="filters__cat-item">Другое </div>
      </div>
      <div class="filters__accordeon">
          <FilterCategoryAccordeon :id="'1'" :dataList="fiting" />
      </div>
      <div class="filters__accordeon">
          <FilterCategoryAccordeon :id="'2'" :dataList="fitingTypes" />
      </div>
      <div class="filters__accordeon">
          <FilterCategoryAccordeon :id="'3'" :dataList="connectionTypes" />
      </div>
      <div class="filters__accordeon">
          <FilterCategoryAccordeon :id="'4'" :dataList="threadTypes" />
      </div>
      <div class="filters__accordeon">
          <FilterCategoryAccordeon :id="'5'" :dataList="threadSize" />
      </div>
      <div class="filters__accordeon">
          <FilterCategoryAccordeon :id="'6'" :dataList="diametr" />
      </div>
      <div class="filters__accordeon">
          <FilterCategoryAccordeon :id="'7'" :dataList="color" />
      </div>
      <div class="filters__btn">
          <DarkRectButton :text="'Применить'" />
      </div>
  </div>
</template>

<script>
import DarkRectButton from '../UIKit/DarkRectButton.vue'
import PriceRange from '../UIKit/PriceRange.vue'
import FilterCategoryAccordeon from './FilterCategoryAccordeon.vue'

export default {
    components: {
        PriceRange,
        FilterCategoryAccordeon,
        DarkRectButton
    },
    data() {
        return {
            fiting: [
                { isChecked: true, name: 'Муфта', count: 21 },
                { isChecked: true, name: 'Отводы и угольники', count: 60 },
                { isChecked: true, name: 'Тройники и крестовины', count: 1 },
                { isChecked: true, name: 'Запорная арматура', count: 1 },
                { isChecked: true, name: 'Другое', count: 1 },
                { isChecked: true, name: 'Муфта', count: 1 },
                { isChecked: true, name: 'Муфта', count: 1 },
            ],
            fitingTypes: [
                { isChecked: true, name: 'Переходной', count: 21 },
            ],
            connectionTypes: [
                { isChecked: true, name: 'Разъемный', count: 1 },
                { isChecked: true, name: 'Пайка', count: 1 },
            ],
            threadTypes: [
                { isChecked: true, name: 'Внутренняя', count: 21 },
                { isChecked: true, name: 'Наружная', count: 60 },
                { isChecked: true, name: 'Без резьбы', count: 1 },
            ],
            threadSize: [
                { isChecked: true, name: '1/2', count: 1 },
                { isChecked: true, name: '3/4', count: 1 },
                { isChecked: true, name: '1', count: 1 },
                { isChecked: true, name: '1,25', count: 1 },
                { isChecked: true, name: '1,5', count: 1 },
                { isChecked: true, name: '2', count: 1 },
                { isChecked: true, name: '3', count: 1 },
                { isChecked: true, name: '4', count: 1 },
            ],
            diametr: [
                { isChecked: true, name: '20 мм', count: 60 },
                { isChecked: true, name: '25 мм', count: 1 },
                { isChecked: true, name: '32 мм', count: 1 },
                { isChecked: true, name: '40 мм', count: 1 },
                { isChecked: true, name: '50 мм', count: 1 },
                { isChecked: true, name: '63 мм', count: 1 },
                { isChecked: true, name: '75 мм', count: 1 },
                { isChecked: true, name: '90 мм', count: 1 },
                { isChecked: true, name: '110 мм', count: 1 },
                { isChecked: true, name: '125 мм', count: 1 },
                { isChecked: true, name: '140 мм', count: 1 },
                { isChecked: true, name: '160 мм', count: 1 },
            ],
            color: [
                { isChecked: true, name: 'Белый', count: 21 },
                { isChecked: true, name: 'Серый', count: 60 },
                { isChecked: true, name: 'Зелёный', count: 1 },
            ],
            rangeMin: 0,
            rangeMax: 5000,
        }
    },
}
</script>

<style scoped lang="sass">
.filters
    width: 100%
    &__head
        display: flex
        align-items: flex-end
        justify-content: space-between
        margin-bottom: 20px
        & p
            font-weight: 700
            font-size: 18px
            color: #42474D
    &__clear
        cursor: pointer
        font-size: 14px
        line-height: 171%
        color: #A6ACB3
        margin-right: 56px
    &__dash
        padding: 0 8px
        display: flex
        align-items: center
    &__range
        margin-bottom: 22px
    &__categories
        margin-bottom: 33px
    &__cat-item
        font-weight: 700
        font-size: 14px
        text-transform: uppercase
        color: #42474D
        margin-bottom: 18px
    &__accordeon
        margin-bottom: 34px
    &__btn
        width: 100%
        height: 41px
</style>