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
      activeCatIdsArr: [],
      categories: [],
      allProductsIds: [],
      allProducts: [],
      currentPage: 0,
      productsPerPage: 12,
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

    // this.countMaxPrice()
    
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
      if (this.$route.query.ID)
        this.activeCatIdsArr = [this.$route.query.ID] //выбранная система

      const catalog = await this.getCatalog() //Получить системы и категории 
      const catalogCount = await this.getAllCategoriesCount()

      //выбрать из них выбранную систему с категориями
      this.categoriesList = catalog.find(c => this.isSelectedSystem(this.$route.params.name, c.NAME))

      //если в категории есть товары, то добавить ее и сделать активной выбранную если кликали по ней в каталоге
      this.categoriesList.list.forEach(element => {
        if (catalogCount[element.ID])
          this.categories.push({ isSelected: this.activeCatIdsArr[0] === element.ID, ...element })
      });
    },

    async getProductsIds(selectedTypes = null, isCategoriesChanged = true) {
      let filters = {}
      let inx = 0
      if (selectedTypes) {
        selectedTypes.forEach(item => {
          const checkedVals = item.list.filter(i => i.isChecked).map(i => i.value).join(';')
          if (checkedVals) {
            inx ++
            filters[`filter_prop_${inx}`] = item.propName
            filters[`filter_prop_${inx}_val`] = checkedVals
          }
        })
      }
      //все id продуктов из категорий этой системы
      //если массив заполнен, то берем его, если нет берем все категории секции
      const activeCatalogArray = this.activeCatIdsArr.length ? this.activeCatIdsArr : this.categoriesList.list.map(el => el.ID)
      const getIdsResult = await this.getIdsOfSelectedSystem(activeCatalogArray, filters)

      if (getIdsResult && getIdsResult.data && getIdsResult.props) {
        this.allProductsIds = getIdsResult.data
        this.maxPrice = Math.ceil(getIdsResult.max_price)
        if (isCategoriesChanged)
          this.createTypesForFilter(getIdsResult.props, null)
      }
    },

    //получить currentProductsCount товаров по их id
    async addProductsFromIds() {
      const start = this.currentPage * this.productsPerPage
      const end = (this.currentPage + 1) * this.productsPerPage
      const newProducts = await this.getProductsByIdArr(this.allProductsIds.slice(start, end))
      if (newProducts) {
        const transformed = this.transformProductData(newProducts)
        this.allProducts.push(...transformed)
      }
    },

     //посчитать мах цену
    countMaxPrice() {
      this.allProducts.forEach(el => {
        if (el.PRICE > this.maxPrice)
          this.maxPrice = Math.ceil(el.PRICE)
      })
    },

    //сформировать массив типов для секции фильтров с галочками
    createTypesForFilter(data, selectedTypes) {
      this.typesForFilter = []
      const allProducts = Object.values(data)
      allProducts.forEach(product => {
        this.typesPropsList.forEach(prop => {
          const findProp = product[prop] //product.hidden.find(p => p.name === prop)
          if (findProp && findProp.VALUE) { //если значение такого пропа у продукта есть
            const propInTypes = this.typesForFilter.find(t => t.name === prop) //если он есть уже в типах фильтров
            if (propInTypes) { //если уже есть такой тип
              const findVal = propInTypes.list.find(v => v.value === findProp.VALUE) //добавлено ли в него такое значение?
              if (findVal) 
                findVal.count += 1
              else propInTypes.list.push({ value: findProp.VALUE, count: 1, isChecked: true})
            } else {
              this.typesForFilter.push({ name: prop, description: findProp.NAME, propName: prop, list: [ { value: findProp.VALUE, count: 1, isChecked: true} ] })
            }
          }
        })
      })

      if (selectedTypes) {
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
      }
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
      window.scrollTo({ top: 250, behavior: 'smooth' })

      const isCategoriesChanged = this.activeCatIdsArr.join(';') !== selectedCategories.filter(c => c.isSelected).map(c => c.ID).join(';') ||
            !(!this.activeCatIdsArr.length && selectedCategories.every(c => !c.isSelected))

      console.log('isCategoriesChanged', isCategoriesChanged);
      this.isLoaded = false
      this.activeCatIdsArr = []
      this.activeCatIdsArr = selectedCategories.filter(cat => cat.isSelected).map(cat => cat.ID)
      this.filteredProducts = []
      this.currentPage = 0
      this.maxPrice = 0
      this.allProducts = []

      //никаких галок не выбрано
      if (selectedTypes.every(t => t.list.every(l => !l.isChecked))) {
        this.filteredProducts = []
        this.isLoaded = true
        return
      }

      //хотя бы одна отменена иначе не фильтруем
      if (selectedTypes.some(t => t.list.some(l => !l.isChecked)))
        await this.getProductsIds(selectedTypes, isCategoriesChanged)
      else
        await this.getProductsIds()

      await this.addProductsFromIds()

      //ост фильтры
      this.filteredProducts = this.allProducts 
        .filter(p => Number(p.PRICE) >= minPrice && Number(p.PRICE) <= Math.max(maxPrice, this.maxPrice))

      
      this.filteredProducts = this.allProducts

      setTimeout(() => {
        this.isLoaded = true
      }, 1000);
    },
    updateMaximum(max) {
      this.maxPrice = max
    },
    async showMoreProducts() {
      this.currentPage ++
      await this.addProductsFromIds()
      // this.countMaxPrice()
      
      this.filteredProducts = []
      this.filteredProducts = this.allProducts
    }
  },
  computed: {
    hasMoreProducts() {
      const max = (this.currentPage + 1) * this.productsPerPage
      // return this.filteredProducts.length > max
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