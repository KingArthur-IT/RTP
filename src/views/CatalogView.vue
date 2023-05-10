<template>
  <main>
    <div class="container">
      <div class="catalog">
        <div class="catalog__card">
          <GeneralCatalogCard
            :title="'Система ALPHA - Полипропиленовые трубы и фитинги PP-R'"
            :data="alphaData"
          />
        </div>
        <div class="catalog__card">
          <GeneralCatalogCard
            :title="'Система SIGMA - Запорная арматура и латунные резьбовые фитинги'"
            :data="sigmaData"
          />
        </div>
        <div class="catalog__card">
          <GeneralCatalogCard
            :title="'Система DELTA - Трубы PE-Xa / EVOH и аксиальные фитинги'"
            :data="deltaData"
          />
        </div>
        <div class="catalog__card">
          <GeneralCatalogCard
            :title="'Система OMEGA - Трубы и комплектующие для теплого пола PE-RT и PE-Xa'"
            :data="omegaData"
          />
        </div>
        <div class="catalog__card">
          <GeneralCatalogCard
            :title="'Система BETA ELITE - Малошумная канализация'"
            :data="betaEliteData"
          />
        </div>
        <div class="catalog__card">
          <GeneralCatalogCard
            :title="'Система BETA ORANGE - Наружная канализация'"
            :data="betaOrangeData"
          />
        </div>
        <div class="catalog__card">
          <GeneralCatalogCard
            :title="'Система BETA - Внутренняя канализация'"
            :data="betaData"
          />
        </div>
        <div class="catalog__card">
          <GeneralCatalogCard
            :title="'Система GAMMA - Трубы ПНД и компрессионные фитинги'"
            :data="gammaData"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import GeneralCatalogCard from '../components/Catalog/GeneralCatalogCard.vue'

export default {
  components: {
    GeneralCatalogCard
  },
  data() {
    return {
      alphaData: [
        { name: 'Фитинги', count: 12 },
        { name: 'Запорная арматура', count: 34 },
        { name: 'Коллекторы', count: 2 },
        { name: 'Труба армированная', count: 17 },
        { name: 'Труба не армированная', count: 12 },
        { name: 'Оборудование для монтажа', count: 5 },
        { name: 'Материалы для монтажа', count: 7 },
        { name: 'Другое', count: 16 },
      ],
      sigmaData: [
        { name: 'Фитинги', count: 12 },
        { name: 'Запорная арматура', count: 34 },
        { name: 'Коллекторы', count: 2 },
        { name: 'Труба армированная', count: 17 },
      ],
      deltaData: [
        { name: 'Фитинги', count: 12 },
        { name: 'Запорная арматура', count: 34 },
        { name: 'Коллекторы', count: 2 },
        { name: 'Труба армированная', count: 17 },
        { name: 'Другое', count: 16 },
      ],
      omegaData: [
        { name: 'Фитинги', count: 12 },
        { name: 'Запорная арматура', count: 34 },
        { name: 'Коллекторы', count: 2 },
      ],
      betaEliteData: [
        { name: 'Фитинги', count: 12 },
        { name: 'Запорная арматура', count: 34 },
        { name: 'Коллекторы', count: 2 },
        { name: 'Труба армированная', count: 17 },
      ],
      betaOrangeData: [
        { name: 'Фитинги', count: 12 },
        { name: 'Запорная арматура', count: 34 },
        { name: 'Коллекторы', count: 2 },
        { name: 'Труба армированная', count: 17 },
      ],
      betaData: [
        { name: 'Фитинги', count: 12 },
        { name: 'Запорная арматура', count: 34 },
        { name: 'Коллекторы', count: 2 },
        { name: 'Труба армированная', count: 17 },
      ],
      gammaData: [
        { name: 'Фитинги', count: 12 },
        { name: 'Запорная арматура', count: 34 },
        { name: 'Коллекторы', count: 2 },
        { name: 'Труба армированная', count: 17 },
      ],
    }
  },
  mounted(){
    window.scrollTo(0, 0);
  },
}
</script>

<style scoped lang="sass">
.catalog
  margin: 33px 0 74px
  width: calc( 100% + 20px )
  transform: translateX(-10px)
  display: grid
  grid-template-columns: repeat(6, 1fr)
  grid-template-rows: repeat(4, auto 1fr auto)
  grid-column-gap: 0px
  grid-row-gap: 0px
  &__card
    padding: 10px
    height: 100%
    &:nth-child(1)
      grid-area: 1 / 1 / 3 / 3
    &:nth-child(2)
      grid-area: 1 / 3 / 2 / 5
    &:nth-child(3)
      grid-area: 1 / 5 / 2 / 7
    &:nth-child(4)
      grid-area: 2 / 3 / 3 / 7
    &:nth-child(5)
      grid-area: 3 / 1 / 4 / 4
    &:nth-child(6)
      grid-area: 3 / 4 / 4 / 7
    &:nth-child(7)
      grid-area: 4 / 1 / 5 / 4
    &:nth-child(8)
      grid-area: 4 / 4 / 5 / 7

@media screen and (max-width: 1600px)
  .catalog
    margin: 13px 0 84px
</style>