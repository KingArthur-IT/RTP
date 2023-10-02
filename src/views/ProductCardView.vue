<template>
  <main>
    <div class="container product-card">
        <div v-if="!isLoading">
            <BreadCrumbsSecondLevel :isEnableGoToSystem="true" :systemName="pageName" /> 
            <div class="product-head">
                <div class="product-head__head">
                    <h1 class="product-head__title" v-html="productCardInfo?.arFields?.PREVIEW_TEXT"></h1>
                    <div class="product-head__icons">
                        <div class="product-head__icon">
                            <CopyLink />
                        </div>
                        <div class="product-head__icon">
                            <ShareBtn />
                        </div>
                        <div class="product-head__icon" @click="printDoc">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5801 7.41406H18.5801V2.41406H6.58008V7.41406H5.58008C3.92608 7.41406 2.58008 8.76006 2.58008 10.4141V17.4141C2.58008 18.5171 3.47708 19.4141 4.58008 19.4141H6.58008V22.4141H18.5801V19.4141H20.5801C21.6831 19.4141 22.5801 18.5171 22.5801 17.4141V10.4141C22.5801 8.76006 21.2341 7.41406 19.5801 7.41406ZM8.58008 4.41406H16.5801V7.41406H8.58008V4.41406ZM16.5801 20.4141H8.58008V16.4141H16.5801V20.4141ZM20.5801 17.4141H18.5801V14.4141H6.58008V17.4141H4.58008V10.4141C4.58008 9.86306 5.02908 9.41406 5.58008 9.41406H19.5801C20.1321 9.41406 20.5801 9.86306 20.5801 10.4141V17.4141Z" fill="#828D99"/>
                                <path d="M14.5801 10.4141H18.5801V12.4141H14.5801V10.4141Z" fill="#828D99"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="subhead">
                    <div class="subhead__hero">
                        <!-- <div class="subhead__item stars">
                            <div v-for="i in 5" :key="i" class="subhead__star" :class="{'active': i <= starsCount}">
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.97047 12.2464L11.0769 13.5131C11.8347 13.9688 12.7675 13.2891 12.5659 12.4282L12.0083 10.0464L13.8621 8.44631C14.5325 7.86765 14.1754 6.76744 13.2929 6.69285L10.8507 6.48641L9.89068 4.22961C9.54551 3.4182 8.39544 3.4182 8.05027 4.22961L7.09025 6.48641L4.64801 6.69285C3.76555 6.76744 3.40842 7.86765 4.07884 8.44631L5.93268 10.0464L5.37501 12.4282C5.17343 13.2891 6.10629 13.9688 6.86402 13.5131L8.97047 12.2464Z" fill="#A6ACB3"/>
                                    <mask id="mask0_1201_13047" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="3" width="12" height="11">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.97047 12.2464L11.0769 13.5131C11.8347 13.9688 12.7675 13.2891 12.5659 12.4282L12.0083 10.0464L13.8621 8.44631C14.5325 7.86765 14.1754 6.76744 13.2929 6.69285L10.8507 6.48641L9.89068 4.22961C9.54551 3.4182 8.39544 3.4182 8.05027 4.22961L7.09025 6.48641L4.64801 6.69285C3.76555 6.76744 3.40842 7.86765 4.07884 8.44631L5.93268 10.0464L5.37501 12.4282C5.17343 13.2891 6.10629 13.9688 6.86402 13.5131L8.97047 12.2464Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_1201_13047)">
                                        <rect x="0.941406" y="0.0664062" width="16.0588" height="16" fill="#C3D3E5"/>
                                    </g>
                                </svg>
                            </div>
                        </div> -->
                        <!-- <div class="subhead__item">19 отзывов</div>
                        <div class="subhead__item">23 вопроса</div> -->
                        <div class="subhead__item"><span class="fw-normal">Остаток на складе:</span> <span class="count">Много</span> </div>
                    </div>
                    <div class="subhead__info">
                        <div>Артикул {{ productCardInfo?.arProps?.CML2_ARTICLE.VALUE }}</div>
                        <!-- <div>Код {{ code }}</div> -->
                    </div>
                </div>
            </div>
            <div class="product-hero">
                <div class="product-hero__about">
                    <div class="product-hero__preview">
                        <ProductCardPreview :photoes="productCardInfo?.arPhoto" />
                    </div>
                    <div class="product-hero__detail">
                        <ProductCardDetail 
                            :list="description" 
                            :colors="colors" 
                            @updateSelectedIndex="updateSelectedInDetails"
                            @updateSelectedColor="updateSelectedColor"
                        />
                        <div class="product-hero__characteristics desctop">
                            <div class="product-hero__title">Характеристики:</div>
                            <ProductCharacteristics :list="characteristics"/>
                            <a v-if="mainDescription" href="#description" class="product-hero__go-to-details">Перейти к описанию</a>
                        </div>
                    </div>
                    <div class="product-hero__characteristics mobile">
                        <div class="product-hero__title">Характеристики:</div>
                        <ProductCharacteristics :list="characteristics" />
                        <a v-if="mainDescription" href="#description" class="product-hero__go-to-details">Перейти к описанию</a>
                    </div>
                </div>
                <div class="product-hero__card">
                    <PriceCard 
                        :prodCode="$route.params.id"
                        :prodId="productId"
                        :price="Number(productCardInfo?.arPrice?.PRICE) || 0" 
                        v-model:productCount="productCount" 
                    />
                </div>
            </div>
        </div>
        <div v-else class="product-card__loader">
            <Loader />
        </div>
        <!-- <div class="often-buy">
            <div class="section-title often-buy__title">
                <div class="section-title-text">С этим часто покупают</div>
            </div>
            <div class="often-buy__list">
                <div v-for="i in 5" :key="i" class="often-buy__item">
                    <ProductCard 
                        :id="String(i)" 
                        :description="'Труба из полипропилена PN SDR 11 для холодной воды, проекта сантехники для дома ALPHA, 4 метра - 20*1.9мм.'"
                        :newPrice="'189'"
                        :oldPrice="'262'"
                        :isBenefitShown="false"
                        :hasShadow="false"
                    />
                </div>
            </div>
        </div> -->
        <div v-if="mainDescription" id="description" class="description">
            <div class="section-title description__title">
                <div class="section-title-text">Описание</div>
            </div>
            <div class="description__text" v-html="mainDescription"></div>
        </div>
        <!-- <div class="characteristic-section">
            <div class="section-title characteristic-section__title">
                <div class="section-title-text">Характеристики</div>
            </div>
            <div class="characteristic-section__list">
                <div class="characteristic-section__block">
                    <div class="characteristic-section__name">Блок характеристик</div>
                    <ProductCharacteristics :list="characteristics" :hasTwoColumns="true" />
                </div>
                <div class="characteristic-section__block">
                    <div class="characteristic-section__name">Блок характеристик</div>
                    <ProductCharacteristics :list="characteristics.slice(0,5)" :hasTwoColumns="true" />
                </div>
            </div>
        </div> -->
    </div>
  </main>
</template>

<script>
import BreadCrumbsSecondLevel from '../components/BreadCrumbs/BreadCrumbsSecondLevel.vue';
import PriceCard from '../components/ProductCard/PriceCard.vue';
import ProductCardDetail from '../components/ProductCard/ProductCardDetail.vue';
import ProductCardPreview from '../components/ProductCard/ProductCardPreview.vue';
import ProductCharacteristics from '../components/ProductCard/ProductCharacteristics.vue';
import ProductCard from '../components/UIKit/ProductCard.vue';
import { getProductByCode, getCatalog } from '@/use/middleware.js'
import { getPageName } from '@/use/helpers.js'
import ShareBtn from '../components/UIKit/ShareBtn.vue';
import CopyLink from '../components/UIKit/CopyLink.vue';
import Loader from '../components/UIKit/Loader.vue';
import { toggleStopper } from '@/use/helpers.js'

export default {
    components: {
        BreadCrumbsSecondLevel,
        ProductCardPreview,
        PriceCard,
        ProductCardDetail,
        ProductCharacteristics,
        ProductCard,
        ShareBtn,
        CopyLink,
        Loader
    },
    data() {
        return {
            isLoading: true,
            pageName: '',
            productCardInfo: null,
            productId: '',
            starsCount: 4,
            description: [
                { 
                    title: 'Диаметр/толщина стенок, мм',
                    values: [],
                    selectedValueIndex: 0
                },
                { 
                    title: 'Длина, м',
                    values: [],
                    selectedValueIndex: 0
                },
            ],
            colors: [],
            characteristics: [],
            productCount: 1,
        }
    },
    async mounted(){
        await this.mountedEvent()
    },
    methods: {
        getProductByCode,
        getCatalog,
        getPageName,
        toggleStopper,
        updateSelectedInDetails({ arrIndex, newSelected, id }) {
            const oldSelectedId = this.description[arrIndex].values[this.description[arrIndex].selectedValueIndex].id
            
            this.description[arrIndex].selectedValueIndex = newSelected

            if (oldSelectedId !== id){
                this.updateCard(id);
            }
        },
        updateSelectedColor({ value, id }) {
            const oldSelectedId = this.$route.params.id;

            //изменить выбранный цвет в фильтре
            this.colors.forEach(c => {
                if (c.value !== value)
                    c.isSelected = false
                else c.isSelected = true
            })

            //после выбора нового цвета нужно проверить есть ли выбранный диаметр в выбранном цвете
            const podobByColor = this.productCardInfo.arPodobnie.color;
            const podobByDiam = this.productCardInfo.arPodobnie.diametr;
            const selectedDiametrValue = this.description[0].values[this.description[0].selectedValueIndex].value;

            // console.log('selectedDiametrValue', selectedDiametrValue);
            // console.log('value', value);
            // console.log('podobByColor', podobByColor);
            // console.log('podobByDiam', podobByDiam);

            const allPodobWithSelectedColorValue = podobByColor.filter(item => String(item.prop_val).includes(value) );
            const allPodobWithCurrentDiamValue =  podobByDiam.filter(item => item.prop_val === selectedDiametrValue);

            // console.log('allPodobWithSelectedColorValue', allPodobWithSelectedColorValue);
            // console.log('allPodobWithCurrentDiamValue', allPodobWithCurrentDiamValue);

            const prodItemWithColorAndSelectedDiam = allPodobWithCurrentDiamValue.find(item => {
                return allPodobWithSelectedColorValue.some(pr => pr.prod_id === item.prod_id);
            });
            
            if (prodItemWithColorAndSelectedDiam){ //если нашли товар в уже выбранном диаметре с новым цветом, то переходим на него
                if(oldSelectedId !== prodItemWithColorAndSelectedDiam.prod_code){
                    this.updateCard(prodItemWithColorAndSelectedDiam.prod_code);
                }
            } else { //если нет такого товара, то выбираем другой диаметр
                const newProdCode = this.colors.find(item => item.isSelected).id;
                this.updateCard(newProdCode);

                //обвновляем выбранный диаметр
                const filterIndex = this.description[0].values.findIndex(item => item.id === newProdCode);
                if (filterIndex !== -1){
                    this.description[0].selectedValueIndex = filterIndex;
                }
            };
        },
        printDoc() {
            window.print()
        },
        async mountedEvent() {
            if (!this.isLoading) return

            window.scrollTo(0, 0);
            
            this.productCardInfo = await this.getProductByCode(this.$route.params.id)
            this.productId = this.productCardInfo.arFields.ID

            if (this.$route.params.name === 'all') {
                this.catalogList = await this.getCatalog()
                const parentSectName = this.catalogList.find(el => el.list.some(sect => sect.ID === this.productCardInfo.arFields.IBLOCK_SECTION_ID)).NAME
                this.pageName = this.getPageName(parentSectName)
            } else {
                this.pageName = this.getPageName(this.$route.params.name)
            }

            this.characteristics = Object.values(this.productCardInfo.arPropsNoNull)
                .filter(el => !el.NAME.includes('Адрес') && !el.NAME.includes('Артикул') && !el.NAME.includes('Реквизиты') && !el.NAME.includes('налогов') &&
                        !el.NAME.includes('Alpha') && !el.NAME.includes('Betta') && !el.NAME.includes('Gamma') && !el.NAME.includes('Delta') && !el.NAME.includes('Sigma')
                )

            //текущие хар-ки товара
            this.colors = []
            this.description[0].values = []
            this.description[1].values = []

            const currColorVal = this.productCardInfo.arPropsNoNull?.TSVET?.VALUE
            if (currColorVal)
                this.colors.push({ value: currColorVal, isSelected: true, color: this.getColorHex(currColorVal.trim()), id: this.$route.params.id})
            const currDiametr = this.productCardInfo.arPropsNoNull?.DIAMETR?.VALUE
            if (currDiametr) {
                const val = this.productCardInfo.arPropsNoNull?.TOLSHCHINA_STENKI?.VALUE ? `${String(currDiametr).replace(/\D/g, "")}/${this.productCardInfo.arPropsNoNull?.TOLSHCHINA_STENKI?.VALUE}` : currDiametr
                this.description[0].values.push({ value: val, id: this.$route.params.id })
            }
            const currDlina = this.productCardInfo.arPropsNoNull?.DLINA?.VALUE
            if (currDlina)
                this.description[1].values.push({ value: currDlina, id: this.$route.params.id })

            const elWithColors = this.productCardInfo.arPodobnie?.color //[] arr
            const elWithDiametr = this.productCardInfo.arPodobnie?.diametr
            const elWithDlina = this.productCardInfo.arPodobnie?.dlina

            if (!!elWithColors)
                elWithColors.forEach(color => {
                    if (!this.colors.some(c => c.value === color.prop_val)) {
                        this.colors.push({ value: color.prop_val, isSelected: true, color: this.getColorHex(color.prop_val.trim()), id: color.prod_code})
                    }
                })

            if (!!elWithDiametr)
                elWithDiametr.forEach(diam => {
                    const val = diam.prop_val_2 ? `${String(diam.prop_val).replace(/\D/g, "")}/${diam.prop_val_2}` : diam.prop_val
                    if (!this.description[0].values.some(c => c.value === val)) {
                        this.description[0].values.push({ value: val, id: diam.prod_code })
                    }
                })

            if (!!elWithDlina)
                elWithDlina.forEach(dlina => {
                    if (!this.description[1].values.some(c => c.value === dlina.prop_val)) {
                        this.description[1].values.push({ value: dlina.prop_val, id: dlina.prod_code })
                    }
                })

            setTimeout(() => {
                this.isLoading = false
            }, 500);
        },
        async updateCard(id) {
            this.productCount = 1
            this.$router.replace({ params: { id: id } });
            this.toggleStopper(true)

            this.productCardInfo = await this.getProductByCode(id)
            this.productId = this.productCardInfo.arFields.ID
        
            if (this.$route.params.name === 'all') {
                this.catalogList = await this.getCatalog()
                const parentSectName = this.catalogList.find(el => el.list.some(sect => sect.ID === this.productCardInfo.arFields.IBLOCK_SECTION_ID)).NAME
    
                this.pageName = this.getPageName(parentSectName)
            } else {
                this.pageName = this.getPageName(this.$route.params.name)
            }

            this.characteristics = Object.values(this.productCardInfo.arPropsNoNull)
                .filter(el => !el.NAME.includes('Адрес') && !el.NAME.includes('Артикул') && !el.NAME.includes('Реквизиты') && !el.NAME.includes('налогов') &&
                        !el.NAME.includes('Alpha') && !el.NAME.includes('Betta') && !el.NAME.includes('Gamma') && !el.NAME.includes('Delta') && !el.NAME.includes('Sigma')
                )

            //хар-ки товара
            // this.colors = []
            // this.description[0].values = []
            // this.description[1].values = []

            const elWithColors = this.productCardInfo.arPodobnie?.color //[] arr
            const elWithDiametr = this.productCardInfo.arPodobnie?.diametr
            const elWithDlina = this.productCardInfo.arPodobnie?.dlina

            if (!!elWithColors) {
                let currentColor = '';
                if (this.productCardInfo && this.productCardInfo.arProps && this.productCardInfo.arProps.TSVET && this.productCardInfo.arProps.TSVET.VALUE){
                    currentColor = this.productCardInfo.arProps.TSVET.VALUE;
                }
                this.colors.forEach(c => c.isSelected = false);
                elWithColors.forEach(color => {
                    if (!this.colors.some(c => c.value === color.prop_val)) {
                        this.colors.push({ value: color.prop_val, isSelected: true, color: this.getColorHex(color.prop_val.trim()), id: color.prod_code})
                    }
                })
                if (currentColor){
                    this.colors.forEach(c => {
                        if (c.value === currentColor){
                            c.isSelected = true;
                        }
                    });
                }
            }

            if (!!elWithDiametr)
                elWithDiametr.forEach(diam => {
                    const val = diam.prop_val_2 ? `${String(diam.prop_val).replace(/\D/g, "")}/${diam.prop_val_2}` : diam.prop_val
                    if (!this.description[0].values.some(c => c.value === val)) {
                        this.description[0].values.push({ value: val, id: diam.prod_code })
                    }
                })

            if (!!elWithDlina)
                elWithDlina.forEach(dlina => {
                    if (!this.description[1].values.some(c => c.value === dlina.prop_val)) {
                        this.description[1].values.push({ value: dlina.prop_val, id: dlina.prod_code })
                    }
                })

            setTimeout(() => {
                this.toggleStopper(false)
            }, 500);
        },
        getColorHex(text) {
            switch (text) {
                case 'Белый':
                    return '#fff'
                case 'Серый':
                    return '#C3D3E5'
                case 'Зелёный':
                    return '#00ff00'
                case 'Зеленый':
                    return '#00ff00'
                case 'Синий':
                    return '#0000ff'
                case 'Красный':
                    return '#ff0000'
                case 'Оранжевый':
                    return '#EE741D'
                case 'Фиолетовый':
                    return '#e41093'
                case 'Серый металлик':
                    return '#C0C0C0'
                default:
                    return '#fff'
            }
        },
    },
    computed: {
        code() {
            const val = this.productCardInfo?.arProps?.CML2_TRAITS.VALUE
            if (val && val.length > 2)
                return val[2]
            else return ''
        },
        mainDescription() {
            return this.productCardInfo?.arFields?.DETAIL_TEXT
        }
    },
    // watch: {
    //     '$route.params.id': {
    //         handler() {
    //             this.mountedEvent()
    //         },
    //         deep: true
    //     }
    // }
}
</script>

<style scoped lang="sass">
.product-card
    margin-top: 10px
    &__loader
        margin-top: 50px
.product-head
    margin-top: 40px
    &__head
        display: flex
        justify-content: space-between
        align-items: flex-start
        margin-bottom: 9px
    &__title
        font-weight: 500
        font-size: 32px
        color: var(--primary-color)
    &__icons
        display: flex
        align-items: center
    &__icon
        margin-left: 12px
        margin-top: 8px
        cursor: pointer
        & svg path
            transition: all .3s ease
        &:hover
            & svg path
                fill: var(--primary-color)
    & .subhead
        display: flex
        align-items: center
        justify-content: space-between
        margin-bottom: 2px
        &__hero
            display: flex
            align-items: center
        &__item
            margin-right: 21px
            font-weight: 500
            font-size: 14px
            color: #A6ACB3
            & span.fw-normal
                font-weight: 400
            & span.count
                color: #8CA7DD
            &.stars
                display: flex
                align-items: center
        &__star
            margin-right: 2px
            &.active
                & svg path
                    fill: var(--primary-color)
        &__info
            font-weight: 700
            font-size: 14px
            color: #A6ACB3
            text-align: right
            & div
                margin-top: 3px
                margin-bottom: 6px
.product-hero
    display: flex
    margin-bottom: 33px
    &__card
        min-width: 332px
        max-width: 332px
    &__preview
        max-width: 592px
        min-width: 592px
    &__about
        display: flex
    &__go-to-details
        font-size: 14px
        color: #224386
        cursor: pointer
    &__title
        font-size: 20px
        text-decoration-line: underline
        color: #A6ACB3
        margin-bottom: 12px
    &__detail
        margin-top: -8px
    &__characteristics
        padding: 12px 33px
        &.mobile
            display: none
.often-buy
    margin-bottom: 92px
    &__title
        margin-bottom: 50px
    &__list
        display: flex
        width: calc( 100% + 36px )
        transform: translateX(-18px)
    &__item
        flex-basis: 20%
        padding: 0 17px
.description
    margin-bottom: 32px
    &__title
        margin-bottom: 42px
    &__text
        font-size: 16px
        line-height: 24px
        color: #42474D
.characteristic-section
    margin-bottom: 201px
    &__title
        margin-bottom: 41px
    &__block
        margin-bottom: 36px
    &__name
        font-weight: 700
        font-size: 18px
        color: #42474D
        margin-bottom: 16px

@media screen and (max-width: 1600px)
    .product-head
        margin-top: 27px
        &__title
            font-size: 20px
        &__icon
            margin-top: 0px
        & .subhead
            margin-bottom: 0px
            &__item
                font-size: 13px
            &__info
                font-size: 12px
    .product-hero
        margin-bottom: 54px
        &__about
            flex-wrap: wrap
        &__preview
            max-width: 355px
            min-width: 355px
        &__title
            font-size: 14px
            margin-bottom: 9px
        &__detail
            flex-basis: 50%
            margin-top: 18px
        &__characteristics
            padding: 26px 42px 0 50px
            flex-basis: 100%
            &.mobile
                display: block
            &.desctop
                display: none
        &__card
            min-width: 287px
            margin-top: 24px
    .description
        margin-bottom: 43px
        &__text
            font-size: 13px
    .characteristic-section
        margin-bottom: 76px
        &__title
            margin-bottom: 47px
        &__block
            margin-bottom: 22px
</style>