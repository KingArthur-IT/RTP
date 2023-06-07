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
          <SystemCatalogHero 
            :isLoaded="isLoaded" 
            :cardsList="filteredProducts" 
            :hasMoreProducts="hasMoreProducts"
            @showMoreProducts="showMoreProducts"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import BreadCrumbsSecondLevel from '../components/BreadCrumbs/BreadCrumbsSecondLevel.vue';
import SystemCatalogHero from '../components/SystemCatalog/SystemCatalogHero.vue';
import SystemFilters from '../components/SystemCatalog/SystemFilters.vue';
import { getAllCategoriesCount, getCatalog, getIdsOfSelectedSystem, getProductsOfSelectedSystem, getProductsByIdArr } from '@/use/middleware.js'
import { isSelectedSystem } from '@/use/helpers.js'

export default {
  components: {
    BreadCrumbsSecondLevel,
    SystemFilters,
    SystemCatalogHero
  },
  data() {
    return {
      activeCatId: '',
      categories: [],
      allProductsIds: [],
      allProducts: [],
      currentPage: 0,
      productsPerPage: 10,
      filteredProducts: [],
      maxPrice: 100,
      isLoaded: false,
      typesForFilter: [],
      categoriesList: {},
      typesPropsList: ['VID_FITINGA', 'TIP_FITINGA', 'DIAMETR', 'TSVET', 'TIP_SOEDINENIYA_IZDELIY', 'VID_REZBY', 'RAZMER_REZBY'],
      propsArray: ['DIAMETR', 'TOLSHCHINA_STENKI', 'TSVET'],
    }
  },
  async mounted() {
    window.scrollTo(0, 0);

    await this.findAndApplyCategory()
    await this.getProductsIds()

    await this.addProductsFromIds()

    this.countMaxPtice()
    this.createTypesForFilter()
    
    //применить фильтр категорий если есть активная 
    this.filteredProducts = this.allProducts
    setTimeout(() => {
      this.isLoaded = true
    }, 1000);
  },
  methods: {
    getAllCategoriesCount, 
    getCatalog, 
    getProductsOfSelectedSystem,
    getIdsOfSelectedSystem,
    isSelectedSystem,
    getProductsByIdArr,

    //определить выбранную кагорию и добавить в фильтры вместе с неактивными
    async findAndApplyCategory() { 
      this.activeCatId = this.$route.query.ID //выбранная система

      const catalog = await this.getCatalog() //Получить системы и категории 
      const catalogCount = await this.getAllCategoriesCount()

      //выбрать из них выбранную систему с категориями
      this.categoriesList = catalog.find(c => this.isSelectedSystem(this.$route.params.name, c.NAME))

      //если в категории есть товары, то добавить ее и сделать активной выбранную если кликали по ней в каталоге
      this.categoriesList.list.forEach(element => {
        if (catalogCount[element.ID])
          this.categories.push({ isSelected: this.activeCatId === element.ID, ...element })
      });
    },

    async getProductsIds() {
      //все id продуктов из категорий этой системы
      if (this.activeCatId)
        this.allProductsIds = await this.getIdsOfSelectedSystem([this.activeCatId])
      else this.allProductsIds = await this.getIdsOfSelectedSystem(this.categoriesList.list.map(el => el.ID))
    },

    //получить currentProductsCount товаров по их id
    async addProductsFromIds() {
      const start = this.currentPage * this.productsPerPage
      const end = (this.currentPage + 1) * this.productsPerPage
      console.log(start, end, this.allProductsIds.length, this.allProductsIds.slice(start, end));
      const newProducts = await this.getProductsByIdArr(this.allProductsIds.slice(start, end))
      console.log(newProducts);
      if (newProducts) {
        const transformed = this.transformProductData(newProducts)
        this.allProducts.push(...transformed)
      }
    },

     //посчитать мах цену
    countMaxPtice() {
      this.allProducts.forEach(el => {
        if (el.PRICE > this.maxPrice)
          this.maxPrice = Math.ceil(el.PRICE)
      })
    },

    //сформировать массив типов для секции фильтров с галочками
    createTypesForFilter() {
      this.typesForFilter = []
      this.allProducts.forEach(product => {
        this.typesPropsList.forEach(prop => {
          const findProp = product.hidden.find(p => p.name === prop)
          if (findProp && findProp.value) { //если значение такого пропа у продукта есть
            const propInTypes = this.typesForFilter.find(t => t.name === findProp.name) //если он есть уже в типах фильтров
            if (propInTypes) { //если уже есть такой тип
              const findVal = propInTypes.list.find(v => v.value === findProp.value) //добавлено ли в него такое значение?
              if (findVal) 
                findVal.count += 1
              else propInTypes.list.push({ value: findProp.value, count: 1, isChecked: true})
            } else {
              this.typesForFilter.push({ name: findProp.name, description: findProp.description, propName: prop, list: [ { value: findProp.value, count: 1, isChecked: true} ] })
            }
          }
        })
      })
    },

    //трансформировать данные из массива продуктов
    transformProductData(data) {
      return data.map(pr => {
        const infoList = []
        const hiddenList = []
        this.propsArray.forEach((propName) => {
          if (pr.arProps[propName].VALUE)
            infoList.push({ description: pr.arProps[propName].NAME, value: pr.arProps[propName].VALUE })
        })
        this.typesPropsList.forEach((propName) => {
          hiddenList.push({ name: propName, description: pr.arProps[propName].NAME, value: pr.arProps[propName].VALUE })
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
    },

    async applyFilters({ selectedCategories, minPrice, maxPrice, selectedTypes }) {
      //получить продукты по выбранным категориям
      if (selectedCategories.length)
        this.allProducts = await this.getProductsOfSelectedSystem(selectedCategories.map(el => el.ID))
      else this.allProducts = await this.getProductsOfSelectedSystem(this.categoriesList.list.map(el => el.ID))

      //сформировать массив типов для секции фильтров с галочками
      this.typesForFilter = []
      this.allProducts.forEach(product => {
        this.typesPropsList.forEach(prop => {
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
      this.allProducts = this.allProducts.map(pr => {
        const infoList = []
        const hiddenList = []
        this.propsArray.forEach((propName) => {
          if (pr.arProps[propName].VALUE)
            infoList.push({ description: pr.arProps[propName].NAME, value: pr.arProps[propName].VALUE })
        })
        this.typesPropsList.forEach((propName) => {
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
    },
    async showMoreProducts() {
      this.currentPage ++
      await this.addProductsFromIds()
      this.countMaxPtice()
      this.createTypesForFilter()
      
      this.filteredProducts = []
      this.filteredProducts = this.allProducts
    }
  },
  computed: {
    hasMoreProducts() {
      const max = (this.currentPage + 1) * this.productsPerPage
      return this.allProductsIds.length > max
      // return this.allProductsIds.length !== this.filteredProducts.length
    }
  }
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