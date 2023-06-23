<template>
  <main>
    <div class="container">
      <div class="breadcrumbs">
        <BreadCrumbsSecondLevel 
          :thirdLevel="catalogBreadcrumbName" 
          @backToSystem="backToFullSystem"
        />
      </div>
      <div class="catalog-system">
        <div class="catalog-system__filters">
          <SystemFilters 
            :categoriesList="categories"
            :typesList="typesForFilter"
            :rangeMaximum="maxPrice" 
            @updateSelectedCategory="updateSelectedCategory"
            @applyFilters="applyFilters"
            @updateMaximum="updateMaximum"
          />
        </div>
        <div class="catalog-system__hero">
          <SystemCatalogHero 
            v-model:isMoreBtnLoaderShown="isMoreBtnLoaderShown"
            :isLoaded="isLoaded" 
            :cardsList="filteredProducts" 
            :hasMoreProducts="hasMoreProducts"
            :banerTitle="catalogBreadcrumbName"
            @showMoreProducts="showMoreProducts"
            @updateSortVal="updateSortVal"
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
import { isSelectedSystem, toggleStopper } from '@/use/helpers.js'
import { typesPropsList } from '@/data/data'

export default {
  components: {
    BreadCrumbsSecondLevel,
    SystemFilters,
    SystemCatalogHero
  },
  data() {
    return {
      systemName: '',
      activeCatIdsArr: [],
      categories: [],
      allProductsIds: [],
      allProducts: [],
      filteredProducts: [],
      currentPage: 0,
      productsPerPage: 12,
      maxPrice: 100,
      isLoaded: false,
      typesForFilter: [],
      categoriesList: {},
      typesPropsList,
      propsArray: ['DIAMETR', 'TOLSHCHINA_STENKI', 'TSVET'],
      sortVal: {},
      isMoreBtnLoaderShown: false,
      lastAppliedFilters: []
    }
  },
  async mounted() {
    window.scrollTo(0, 0);
    this.toggleStopper(true)

    this.systemName = this.$route.params.name
    await this.findAndApplyCategory()

    await this.getCatalogFromFile()

    await this.addProductsFromIds()

    this.filteredProducts = this.allProducts
    setTimeout(() => {
      this.isLoaded = true
      this.toggleStopper(false)
    }, 500);

    //Scroll animation
    let previousY = 0
    let previousRatio = 0
    const suggestionBlock = document.querySelector('.empty-block');
    const showMoreObserver = new IntersectionObserver(entries => {
        const currentY = entries[0].boundingClientRect.y
        const currentRatio = entries[0].intersectionRatio
        const isIntersecting = entries[0].isIntersecting

        if (currentY < previousY)
            if (currentRatio > previousRatio && isIntersecting) {
                entries.forEach(entry => {
                  if (this.hasMoreProducts) {
                    this.isMoreBtnLoaderShown = true
                    this.showMoreProducts()
                  }
                })
            }

        previousY = currentY
        previousRatio = currentRatio
    }, {
        rootMargin: '0px',
    });

    if (suggestionBlock)
        showMoreObserver.observe(suggestionBlock);
  },
  methods: {
    toggleStopper,
    getAllCategoriesCount, 
    getCatalog, 
    getProductsOfSelectedSystem,
    getIdsOfSelectedSystem,
    isSelectedSystem,
    getProductsByIdArr,

    //определить выбранную кагорию и добавить в фильтры вместе с неактивными - вызывается в mounted
    async findAndApplyCategory() { 
      const catalog = await this.getCatalog() //Получить системы и категории 
      const catalogCount = await this.getAllCategoriesCount()

      //выбрать из них выбранную систему с категориями
      this.categoriesList = catalog.find(c => this.isSelectedSystem(this.$route.params.name, c.NAME))

      if (this.$route.params.category) {
        this.activeCatIdsArr = [this.categoriesList.list.find(cat => cat.CODE === this.$route.params.category).ID] //выбранная система
      }

      //если в категории есть товары, то добавить ее и сделать активной выбранную если кликали по ней в каталоге
      this.categoriesList.list.forEach(element => {
        if (catalogCount[element.ID])
          this.categories.push({ isSelected: this.activeCatIdsArr[0] === element.ID, ...element })
      });
    },

    async getProductsIds(selectedTypes = null, minPrice = null, maxPrice = null) {
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
      if (minPrice)
        filters[`min_price`] = String(minPrice)
      if (maxPrice)
        filters[`max_price`] = String(maxPrice)
      if (Object.keys(this.sortVal).length)
        filters['sort'] = String(this.sortVal.sort).toUpperCase()

      //все id продуктов из категорий этой системы
      //если массив заполнен, то берем его, если нет берем все категории секции
      const activeCatalogArray = this.activeCatIdsArr.length ? this.activeCatIdsArr : this.categoriesList.list.map(el => el.ID)
      const getIdsResult = await this.getIdsOfSelectedSystem(activeCatalogArray, filters)

      if (getIdsResult && getIdsResult.data && getIdsResult.props) {
        this.allProductsIds = getIdsResult.data
        this.maxPrice = Math.ceil(getIdsResult.max_price)
        if (!selectedTypes)
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

    getFiltersPropArray() {
      //подготовить массив св-в которые должны быть в фильтрах
      let combinedPropsArray = [] 
      if (this.categories.every(cat => !cat.isSelected))
        this.categories.forEach(cat => {
          const catName = String(cat.NAME).trim().toLowerCase()
          const arr = this.typesPropsList[this.systemName][catName]
          combinedPropsArray = Array.from(new Set(combinedPropsArray.concat(arr)));
        })
      else {
        const activeCat = this.categories.find(cat => cat.isSelected).NAME
        const catName = String(activeCat).trim().toLowerCase()
        const arr = this.typesPropsList[this.systemName][catName]
        combinedPropsArray = Array.from(new Set(combinedPropsArray.concat(arr)));
      }

      return combinedPropsArray
    },

    //сформировать массив типов для секции фильтров с галочками
    createTypesForFilter(data, selectedTypes) {
      this.typesForFilter = []
      const allProducts = Object.values(data)

      //подготовить массив св-в которые должны быть в фильтрах
      const combinedPropsArray = this.getFiltersPropArray()

      allProducts.forEach(product => {
        combinedPropsArray.forEach(prop => {
          const findProp = product[prop] //product.hidden.find(p => p.name === prop)
          if (findProp && findProp.VALUE) { //если значение такого пропа у продукта есть
            const propInTypes = this.typesForFilter.find(t => t.name === prop) //если он есть уже в типах фильтров
            if (propInTypes) { //если уже есть такой тип
              const findVal = propInTypes.list.find(v => v.value === findProp.VALUE) //добавлено ли в него такое значение?
              if (findVal) 
                findVal.count += 1
              else propInTypes.list.push({ value: findProp.VALUE, count: 1, isChecked: false})
            } else {
              this.typesForFilter.push({ name: prop, description: findProp.NAME, propName: prop, list: [ { value: findProp.VALUE, count: 1, isChecked: false} ] })
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
      const combinedPropsArray = this.getFiltersPropArray()

      return data.map(pr => {
        const infoList = []
        const hiddenList = []
        this.propsArray.forEach((propName) => {
          if (pr.arProps[propName].VALUE)
            infoList.push({ description: pr.arProps[propName].NAME, value: pr.arProps[propName].VALUE })
        })

        //подготовить массив св-в которые должны быть в фильтрах
        combinedPropsArray.forEach((propName) => {
          if (pr.arProps[propName] && pr.arProps[propName].NAME && pr.arProps[propName].VALUE)
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

    //смена категории
    async updateSelectedCategory(id) {
      let catCode = ''
      this.toggleStopper(true)

      this.categories.forEach(cat => {
        if (cat.ID !== id)
          cat.isSelected = false
        else {
          this.$router.push({ name: 'catalog-system', params: { name: this.systemName, category: cat.CODE } })
          cat.isSelected = true
          catCode = cat.CODE
        }
      })

      this.activeCatIdsArr = [id]

      this.isLoaded = false
      this.filteredProducts = []
      this.filteredProducts = []
      this.allProducts = []
      this.currentPage = 0

      await this.getCatalogFromFile(catCode)

      await this.addProductsFromIds()
      this.filteredProducts = this.allProducts

      setTimeout(() => {
        this.isLoaded = true
        this.toggleStopper(false)
      }, 500);
    },

    //вернуться на систему, сбросить выбранные категории
    async backToFullSystem() {
      this.toggleStopper(true)
      this.categories.forEach(cat => {
        cat.isSelected = false
        this.$router.push({ name: 'catalog-system', params: { name: this.systemName } })
      })

      this.activeCatIdsArr = []

      this.isLoaded = false
      this.filteredProducts = []
      this.allProducts = []
      
      await this.getCatalogFromFile()
      // if (this.systemName === 'alpha' && (!this.$route.params.category || this.$route.params.category === 'fitingi')) {
      //   await this.getCatalogFromFile()
      // }
      // else
      //   await this.getProductsIds()

      await this.addProductsFromIds()
      this.filteredProducts = this.allProducts

      setTimeout(() => {
        this.isLoaded = true
        this.toggleStopper(false)
      }, 500);
    },

    async applyFilters({ minPrice, maxPrice, selectedTypes }) {
      window.scrollTo({ top: 250, behavior: 'smooth' })
      this.toggleStopper(true)

      this.isLoaded = false
      this.filteredProducts = []
      this.allProducts = []
      this.currentPage = 0
      // this.maxPrice = 0
      console.log(selectedTypes);
      this.lastAppliedFilters = selectedTypes


      //никаких галок не выбрано
      if (selectedTypes.every(t => t.list.every(l => !l.isChecked))) {
        this.filteredProducts = []
        this.isLoaded = true
        return
      }

      //все галки
      if (selectedTypes.every(t => t.list.every(l => l.isChecked))) {
        await this.getProductsIds(null, minPrice, maxPrice)
        await this.addProductsFromIds()
      } else {
        await this.getProductsIds(selectedTypes, minPrice, maxPrice)
        await this.addProductsFromIds()
      }

      // this.maxPrice = maxPrice //Math.min(this.maxPrice, maxPrice)

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

      // this.filteredProducts = this.allProducts
      this.filteredProducts = this.allProducts 
        // .filter(p => Number(p.PRICE) >= Number(minPrice) && Number(p.PRICE) <= Number(maxPrice))

      setTimeout(() => {
        this.isLoaded = true
        this.toggleStopper(false)
      }, 1000);
    },

    updateMaximum(max) {
      this.maxPrice = max
    },

    async showMoreProducts() {
      if (!this.isLoaded) return

      this.toggleStopper(false)
      this.currentPage ++
      await this.addProductsFromIds()
      
      this.filteredProducts = []
      this.filteredProducts = this.allProducts

      this.toggleStopper(false)
    },

    async updateSortVal(data) {
      this.sortVal = data

      if (this.typesForFilter.some(t => t.list.some(l => l.isChecked))) {
        this.applyFilters({ maxPrice: this.maxPrice, minPrice: 0, selectedTypes: this.lastAppliedFilters })
      } else {
        this.isLoaded = false
        this.toggleStopper(true)
  
        this.allProducts = []
        this.filteredProducts = []
        this.currentPage = 0
  
        await this.getCatalogFromFile()
        await this.addProductsFromIds()
  
        // //никаких галок не выбрано
        // if (this.typesForFilter.every(t => t.list.every(l => !l.isChecked))) {
        //   this.filteredProducts = []
        //   this.isLoaded = true
        //   return
        // }
  
        // //хотя бы одна отменена иначе не фильтруем
        // if (this.typesForFilter.some(t => t.list.some(l => !l.isChecked)))
        //   await this.getProductsIds(this.typesForFilter, false)
        // else
        //   await this.getProductsIds()
  
        // await this.addProductsFromIds()    
  
        this.filteredProducts = this.allProducts
        setTimeout(() => {
          this.isLoaded = true
          this.toggleStopper(false)
        }, 500);
      }
    },

    async getCatalogFromFile(catCode = null) {
      let catParam = !this.$route.params.category ? '' : `_${this.$route.params.category}`
      if (catCode)
        catParam = `_${catCode}`
      let sortIndex = ''
      if (this.sortVal && this.sortVal.sort)
        sortIndex = `_sort${this.sortVal.sort}`
      const fileName = `${this.$route.params.name}${catParam}${sortIndex}`
      console.log('filename', fileName);
      
      await fetch(`https://bitrix.rtp-test.swforge.ru:8080/api-static/get_catalog_prod_id_${fileName}.txt`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Ошибка при загрузке файла: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          if (!data) {
            console.log(`getCatalogFromFile - file data is ${data}`);
            return
          }
          const getIdsResult = JSON.parse(data)

          if (getIdsResult && getIdsResult.get_catalog_prod_id && getIdsResult.get_catalog_prod_id.data) {
            this.allProductsIds = getIdsResult.get_catalog_prod_id.data
            this.maxPrice = Math.ceil(getIdsResult.get_catalog_prod_id.data_price_max)
            this.createTypesForFilter(getIdsResult.get_catalog_prod_id.data_prop)
          }
        })
        .catch(error => {
          console.error('Произошла ошибка:', error);
        });
    }
  },
  computed: {
    hasMoreProducts() {
      const max = (this.currentPage + 1) * this.productsPerPage
      return this.allProductsIds.length > max
    },
    catalogBreadcrumbName() {
      if (this.categories.some(cat => cat.isSelected)) {
        return this.categories.find(cat => cat.isSelected).NAME
      } else return ''
    },
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
    &__hero
      width: calc(100% - 364px)
    &__filters
      width: 320px
      margin-right: 44px
    &__hero
      flex-grow: 1

@media screen and (max-width: 1600px)
  .catalog-system
      &__hero
        width: calc(100% - 250px)
      &__filters
        width: 220px
        margin-right: 30px
</style>