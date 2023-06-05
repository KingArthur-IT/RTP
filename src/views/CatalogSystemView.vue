<template>
  <main>
    <div class="container">
      <div class="breadcrumbs">
        <BreadCrumbsSecondLevel />
      </div>
      <div class="catalog-system">
        <div class="catalog-system__filters">
          <SystemFilters 
            :categoriesList="categories"
            :typesList="typesForFilter"
            :rangeMaximum="maxPrice" 
            @applyFilters="applyFilters"
            @updateMaximum="updateMaximum"
          />
        </div>
        <div class="catalog-system__hero">
          <SystemCatalogHero :isLoaded="isLoaded" :cardsList="filteredProducts" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import BreadCrumbsSecondLevel from '../components/BreadCrumbs/BreadCrumbsSecondLevel.vue';
import SystemCatalogHero from '../components/SystemCatalog/SystemCatalogHero.vue';
import SystemFilters from '../components/SystemCatalog/SystemFilters.vue';
import { getAllCategoriesCount, getCatalog, getProductsOfSelectedSystem } from '@/use/middleware.js'
import { isSelectedSystem } from '@/use/helpers.js'

export default {
  components: {
    BreadCrumbsSecondLevel,
    SystemFilters,
    SystemCatalogHero
  },
  data() {
    return {
      categories: [],
      typesForFilter: [],
      allProducts: [],
      filteredProducts: [],
      maxPrice: 100,
      isLoaded: false,
      categoriesList: {},
    }
  },
  async mounted() {
    window.scrollTo(0, 0);

    const activeCatId = this.$route.query.ID

    const catalog = await this.getCatalog() //Получить системы и категории 
    const catalogCount = await this.getAllCategoriesCount()

    //выбрать из них выбранную систему с категориями
    this.categoriesList = catalog.find(c => this.isSelectedSystem(this.$route.params.name, c.NAME))

    //все продукты из категорий этой системы
    if (activeCatId)
      this.allProducts = await this.getProductsOfSelectedSystem([activeCatId])
    else this.allProducts = await this.getProductsOfSelectedSystem(this.categoriesList.list.map(el => el.ID))

    //если в категории есть товары, то добавить ее и сделать активной выбранную если кликали по ней в каталоге
    this.categoriesList.list.forEach(element => {
      if (catalogCount[element.ID])
        this.categories.push({ isSelected: activeCatId === element.ID, ...element })
    });

    //посчитать мах цену
    this.allProducts.forEach(el => {
      if (el.arPrice.PRICE > this.maxPrice)
        this.maxPrice = Math.ceil(el.arPrice.PRICE)
    })

    //сформировать массив типов для секции фильтров с галочками
    const typesPropsList = ['VID_FITINGA', 'TIP_FITINGA', 'DIAMETR', 'TSVET', 'TIP_SOEDINENIYA_IZDELIY', 'VID_REZBY', 'RAZMER_REZBY']
    this.typesForFilter = []
    this.allProducts.forEach(product => {
      typesPropsList.forEach(prop => {
        if (product.arProps[prop].VALUE) { //если значение такого пропа у продукта есть
          const propInTypes = this.typesForFilter.find(t => t.name === product.arProps[prop].NAME) //если он есть уже в типах фильтров
          if (propInTypes) { //если уже есть такой тип
            const findVal = propInTypes.list.find(v => v.value === product.arProps[prop].VALUE) //добавлено ли в него такое значение?
            if (findVal) 
              findVal.count += 1
            else propInTypes.list.push({ value: product.arProps[prop].VALUE, count: 1, isChecked: true})
          } else
            this.typesForFilter.push({ name: product.arProps[prop].NAME, propName: prop, list: [ { value: product.arProps[prop].VALUE, count: 1, isChecked: true} ] })
        }
      })
    })

    //трансформировать данные из массива продуктов
    const propsArray = ['DIAMETR', 'TOLSHCHINA_STENKI', 'TSVET']
    this.allProducts = this.allProducts.map(pr => {
      const infoList = []
      const hiddenList = []
      propsArray.forEach((propName) => {
        if (pr.arProps[propName].VALUE)
          infoList.push({ description: pr.arProps[propName].NAME, value: pr.arProps[propName].VALUE })
      })
      typesPropsList.forEach((propName) => {
        hiddenList.push({ name: propName, value: pr.arProps[propName].VALUE })
      })

      return {
        ID: pr.arFields.ID,
        IBLOCK_SECTION_ID: pr.arFields.IBLOCK_SECTION_ID,
        NAME: pr.arFields.NAME,
        PREVIEW_PICTURE: pr.arFields.PREVIEW_PICTURE,
        PREVIEW_TEXT: pr.arFields.PREVIEW_TEXT,
        CREATED_DATE: pr.arFields.DATE_CREATE_UNIX,
        PRICE: pr.arPrice.PRICE,
        info: infoList,
        hidden: hiddenList,
        photoes: pr.arPhotoPrew
      }
    })

    //применить фильтр категорий если есть активная 
    this.filteredProducts = this.allProducts
    setTimeout(() => {
      this.isLoaded = true
    }, 1000);
    // if (activeCatId) {
    //   this.filteredProducts = this.allProducts.filter(p => p.IBLOCK_SECTION_ID === activeCatId)
    //   this.isLoaded = true
    // }
    // else {
    //   this.filteredProducts = this.allProducts
    //   this.isLoaded = true
    // }
  },
  methods: {
    getAllCategoriesCount, 
    getCatalog, 
    getProductsOfSelectedSystem,
    isSelectedSystem,
    async applyFilters({ selectedCategories, minPrice, maxPrice, selectedTypes }) {
      //получить продукты по выбранным категориям
      if (selectedCategories.length)
        this.allProducts = await this.getProductsOfSelectedSystem(selectedCategories.map(el => el.ID))
      else this.allProducts = await this.getProductsOfSelectedSystem(this.categoriesList.list.map(el => el.ID))

      //сформировать массив типов для секции фильтров с галочками
      const typesPropsList = ['VID_FITINGA', 'TIP_FITINGA', 'DIAMETR', 'TSVET', 'TIP_SOEDINENIYA_IZDELIY', 'VID_REZBY', 'RAZMER_REZBY']
      this.typesForFilter = []
      this.allProducts.forEach(product => {
        typesPropsList.forEach(prop => {
          if (product.arProps[prop].VALUE) { //если значение такого пропа у продукта есть
            const propInTypes = this.typesForFilter.find(t => t.name === product.arProps[prop].NAME) //если он есть уже в типах фильтров
            if (propInTypes) { //если уже есть такой тип
              const findVal = propInTypes.list.find(v => v.value === product.arProps[prop].VALUE) //добавлено ли в него такое значение?
              if (findVal) 
                findVal.count += 1
              else propInTypes.list.push({ value: product.arProps[prop].VALUE, count: 1, isChecked: true})
            } else
              this.typesForFilter.push({ name: product.arProps[prop].NAME, propName: prop, list: [ { value: product.arProps[prop].VALUE, count: 1, isChecked: true} ] })
          }
        })
      })

      //перезаписать isChecked
      selectedTypes.forEach(el => {
        el.list.forEach(l => {
          const type = this.typesForFilter.find(t => t.propName === el.propName)
          if (type) {
            const listEl = type.list.find(p => p.value === l.value)
            if (listEl)
              listEl.isChecked = l.isChecked
          }
        })
      })

      this.maxPrice = 0
      //посчитать мах цену
      this.allProducts.forEach(el => {
        if (el.arPrice.PRICE > this.maxPrice)
          this.maxPrice = Math.ceil(el.arPrice.PRICE)
      })

      //трансформировать данные из массива продуктов
      const propsArray = ['DIAMETR', 'TOLSHCHINA_STENKI', 'TSVET']
      this.allProducts = this.allProducts.map(pr => {
        const infoList = []
        const hiddenList = []
        propsArray.forEach((propName) => {
          if (pr.arProps[propName].VALUE)
            infoList.push({ description: pr.arProps[propName].NAME, value: pr.arProps[propName].VALUE })
        })
        typesPropsList.forEach((propName) => {
          hiddenList.push({ name: propName, value: pr.arProps[propName].VALUE })
        })

        return {
          ID: pr.arFields.ID,
          IBLOCK_SECTION_ID: pr.arFields.IBLOCK_SECTION_ID,
          NAME: pr.arFields.NAME,
          PREVIEW_PICTURE: pr.arFields.PREVIEW_PICTURE,
          PREVIEW_TEXT: pr.arFields.PREVIEW_TEXT,
          CREATED_DATE: pr.arFields.DATE_CREATE_UNIX,
          PRICE: pr.arPrice.PRICE,
          info: infoList,
          hidden: hiddenList,
          photoes: pr.arPhotoPrew
        }
      })

      console.log('this.allProducts', this.allProducts, selectedTypes);
      //ост фильры
      this.filteredProducts = []
      this.filteredProducts = this.allProducts 
        .filter(p => Number(p.PRICE) >= minPrice && Number(p.PRICE) <= Math.max(maxPrice, this.maxPrice))

      console.log(selectedTypes.some(t => t.list.some(l => !l.isChecked)))
      if (selectedTypes.some(t => t.list.some(l => !l.isChecked))) {
        this.filteredProducts = this.filteredProducts
          .filter(p => {
            let isSelected = false
            selectedTypes
              .filter(el => el.list.some(ch => ch.isChecked))
              .forEach(prop => { //фикс цвет
                const productPropValue = p.hidden.find(el => el.name === prop.propName).value //какой цвет у продукта
                isSelected = prop.list.some(el => el.value === productPropValue && el.isChecked)
              })
            return isSelected
          })
      }
    },
    updateMaximum(max) {
      this.maxPrice = max
    }
  },
}
</script>

<style scoped lang="sass">
.breadcrumbs
  margin-top: 10px
.catalog-system
    margin-top: 50px
    display: flex
    justify-content: space-between
    margin-bottom: 114px
    &__filters
      width: 320px
      margin-right: 44px
    &__hero
      flex-grow: 1

@media screen and (max-width: 1600px)
  .catalog-system
      &__filters
        width: 220px
        margin-right: 30px
</style>