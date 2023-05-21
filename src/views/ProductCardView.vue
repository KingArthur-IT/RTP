<template>
  <main>
    <div class="container product-card">
        <BreadCrumbsSecondLevel :thirdLevel="productCardInfo?.arFields?.NAME" />
        <div class="product-head">
            <div class="product-head__head">
                <h1 class="product-head__title">{{ productCardInfo?.arFields?.NAME }}</h1>
                <div class="product-head__icons">
                    <div class="product-head__icon" @click="copyCurrentLink">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.8018 20.1937C5.26567 20.6583 5.81676 21.0266 6.42341 21.2775C7.03006 21.5284 7.68031 21.6569 8.3368 21.6557C8.99342 21.6569 9.64381 21.5283 10.2506 21.2774C10.8574 21.0265 11.4087 20.6583 11.8728 20.1937L14.7008 17.3647L13.2868 15.9507L10.4588 18.7797C9.89527 19.3407 9.13247 19.6557 8.3373 19.6557C7.54212 19.6557 6.77933 19.3407 6.2158 18.7797C5.6543 18.2165 5.339 17.4536 5.339 16.6582C5.339 15.8629 5.6543 15.1 6.2158 14.5367L9.0448 11.7087L7.6308 10.2947L4.8018 13.1227C3.8656 14.0612 3.33984 15.3327 3.33984 16.6582C3.33984 17.9838 3.8656 19.2553 4.8018 20.1937ZM20.3578 11.7087C21.2935 10.77 21.8189 9.49865 21.8189 8.17323C21.8189 6.84782 21.2935 5.57645 20.3578 4.63773C19.4193 3.70154 18.1479 3.17578 16.8223 3.17578C15.4967 3.17578 14.2253 3.70154 13.2868 4.63773L10.4588 7.46673L11.8728 8.88073L14.7008 6.05173C15.2643 5.49072 16.0271 5.17576 16.8223 5.17576C17.6175 5.17576 18.3803 5.49072 18.9438 6.05173C19.5053 6.61501 19.8206 7.3779 19.8206 8.17323C19.8206 8.96857 19.5053 9.73146 18.9438 10.2947L16.1148 13.1227L17.5288 14.5367L20.3578 11.7087Z" fill="#828D99"/>
                            <path d="M9.04391 17.3648L7.62891 15.9508L16.1159 7.46484L17.5299 8.87984L9.04391 17.3648Z" fill="#828D99"/>
                        </svg>
                    </div>
                    <div class="product-head__icon">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.07969 15.4156C6.95479 15.4106 7.79646 15.079 8.43969 14.4856L14.6997 18.0656C14.62 18.3419 14.5796 18.628 14.5797 18.9156C14.5733 19.7271 14.8467 20.5161 15.3539 21.1497C15.8611 21.7832 16.5711 22.2227 17.3644 22.394C18.1576 22.5653 18.9857 22.4581 19.7092 22.0903C20.4327 21.7226 21.0073 21.1168 21.3364 20.3749C21.6654 19.633 21.7288 18.8004 21.5159 18.0173C21.3029 17.2342 20.8267 16.5483 20.1672 16.0753C19.5078 15.6022 18.7055 15.3708 17.8954 15.4201C17.0853 15.4693 16.317 15.7962 15.7197 16.3456L9.45969 12.7656C9.53524 12.5192 9.57564 12.2633 9.57969 12.0056L15.7297 8.48561C16.3238 9.02245 17.0843 9.33869 17.8839 9.38131C18.6834 9.42392 19.4733 9.19031 20.1211 8.71966C20.7689 8.249 21.2351 7.56993 21.4416 6.79633C21.6481 6.02272 21.5823 5.20164 21.2553 4.47079C20.9282 3.73993 20.3598 3.14375 19.6454 2.78224C18.931 2.42072 18.1139 2.31586 17.3314 2.48523C16.5488 2.65461 15.8483 3.08792 15.3473 3.7125C14.8463 4.33707 14.5753 5.11493 14.5797 5.91561C14.5831 6.20291 14.6234 6.48859 14.6997 6.76561L9.00969 10.0156C8.68 9.50556 8.22326 9.09009 7.68438 8.81001C7.14549 8.52994 6.54299 8.39491 5.93612 8.41819C5.32924 8.44148 4.73887 8.62228 4.22302 8.94282C3.70718 9.26337 3.28362 9.71262 2.99398 10.2464C2.70434 10.7802 2.55859 11.3802 2.57105 11.9874C2.58351 12.5946 2.75375 13.1881 3.06504 13.7096C3.37633 14.2311 3.81796 14.6626 4.34652 14.9617C4.87508 15.2608 5.47237 15.4172 6.07969 15.4156ZM18.0797 17.4156C18.3764 17.4156 18.6664 17.5036 18.913 17.6684C19.1597 17.8332 19.352 18.0675 19.4655 18.3416C19.579 18.6157 19.6087 18.9173 19.5509 19.2082C19.493 19.4992 19.3501 19.7665 19.1404 19.9763C18.9306 20.186 18.6633 20.3289 18.3723 20.3868C18.0814 20.4447 17.7798 20.415 17.5057 20.3014C17.2316 20.1879 16.9973 19.9956 16.8325 19.749C16.6677 19.5023 16.5797 19.2123 16.5797 18.9156C16.5797 18.5178 16.7377 18.1363 17.019 17.8549C17.3003 17.5736 17.6819 17.4156 18.0797 17.4156ZM18.0797 4.41561C18.3764 4.41561 18.6664 4.50358 18.913 4.6684C19.1597 4.83323 19.352 5.06749 19.4655 5.34158C19.579 5.61567 19.6087 5.91727 19.5509 6.20824C19.493 6.49922 19.3501 6.76649 19.1404 6.97627C18.9306 7.18605 18.6633 7.32891 18.3723 7.38679C18.0814 7.44466 17.7798 7.41496 17.5057 7.30143C17.2316 7.1879 16.9973 6.99564 16.8325 6.74896C16.6677 6.50229 16.5797 6.21228 16.5797 5.91561C16.5797 5.51778 16.7377 5.13625 17.019 4.85495C17.3003 4.57364 17.6819 4.41561 18.0797 4.41561ZM6.07969 10.4156C6.37636 10.4156 6.66637 10.5036 6.91305 10.6684C7.15972 10.8332 7.35198 11.0675 7.46551 11.3416C7.57904 11.6157 7.60875 11.9173 7.55087 12.2082C7.49299 12.4992 7.35013 12.7665 7.14035 12.9763C6.93057 13.186 6.6633 13.3289 6.37233 13.3868C6.08136 13.4447 5.77976 13.415 5.50567 13.3014C5.23158 13.1879 4.99731 12.9956 4.83249 12.749C4.66767 12.5023 4.57969 12.2123 4.57969 11.9156C4.57969 11.5178 4.73773 11.1363 5.01903 10.8549C5.30034 10.5736 5.68187 10.4156 6.07969 10.4156Z" fill="#828D99"/>
                        </svg>
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
                    <div class="subhead__item stars">
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
                    </div>
                    <!-- <div class="subhead__item">19 отзывов</div>
                    <div class="subhead__item">23 вопроса</div> -->
                    <div class="subhead__item"><span class="fw-normal">Остаток на складе:</span> <span class="count">Много</span> </div>
                </div>
                <div class="subhead__info">
                    <div>Артикул {{ productCardInfo?.arProps?.ARKTIKUL_POSTAVSHCHIKA.VALUE }}</div>
                    <div>Код {{ productCardInfo?.arProps?.CML2_BAR_CODE.VALUE }}</div>
                </div>
            </div>
        </div>
        <div class="product-hero">
            <div class="product-hero__about">
                <div class="product-hero__preview">
                    <ProductCardPreview />
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
                        <div class="product-hero__go-to-details">Перейти к описанию</div>
                    </div>
                </div>
                <div class="product-hero__characteristics mobile">
                    <div class="product-hero__title">Характеристики:</div>
                    <ProductCharacteristics :list="characteristics" />
                    <a href="#description" class="product-hero__go-to-details">Перейти к описанию</a>
                </div>
            </div>
            <div class="product-hero__card">
                <PriceCard 
                    :prodId="$route.query.id"
                    :price="Number(productCardInfo?.arPrice?.PRICE) || 0" 
                    v-model:productCount="productCount" 
                />
            </div>
        </div>
        <div class="often-buy">
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
        </div>
        <div id="description" class="description">
            <div class="section-title description__title">
                <div class="section-title-text">Описание</div>
            </div>
            <div class="description__text">
                {{ productCardInfo?.arProps?.OPISANIE.VALUE }}
            </div>
        </div>
        <div class="characteristic-section">
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
        </div>
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
import { getProductById } from '@/use/middleware.js'

export default {
    components: {
        BreadCrumbsSecondLevel,
        ProductCardPreview,
        PriceCard,
        ProductCardDetail,
        ProductCharacteristics,
        ProductCard
    },
    data() {
        return {
            productCardInfo: null,
            starsCount: 4,
            description: [
                { 
                    title: 'Диаметр/толщина стенок, мм',
                    values: ['20/1,9', '25/2,3', '32/2,9', '40/3,7', '50/4,5', '63/5,8', '75/6,8', '90/8,2', '110/10', '125/11,4', '140/12,7', '160/14,6'],
                    selectedValueIndex: 0
                },
                { 
                    title: 'Количество в упаковке, м/шт',
                    values: ['100/25', '50/25'],
                    selectedValueIndex: 0
                },
            ],
            colors: [
                { value: 'Белый', isSelected: true, color: '#fff' },
                { value: 'Серый', isSelected: false, color: '#C3D3E5' },
            ],
            characteristics: [
                { name: 'Тип', value: 'Труба из полипропилена' },
                { name: 'Материал', value: 'Полипропилен' },
                { name: 'Длинна, м', value: '4' },
                { name: 'DN номинальный диаметр, мм', value: '20' },
                { name: 'Толщина стенок, мм', value: '1,9' },
                { name: 'Макс. давление, бар', value: '10' },
                { name: 'Кол-во в упаковке м/шт', value: '100/25' },
                { name: 'Макс. раб. температура 0С', value: '60' },
                { name: 'Цвет', value: 'Белый' },
            ],
            productCount: 1
        }
    },
    async mounted(){
        window.scrollTo(0, 0);
        this.productCardInfo = await this.getProductById(this.$route.query.id)
        console.log('productCardInfo', this.productCardInfo);
    },
    methods: {
        getProductById,
        updateSelectedInDetails(data) {
            this.description[data.arrIndex].selectedValueIndex = data.newSelected
        },
        updateSelectedColor(val) {
            this.colors.forEach(c => {
                if (c.value !== val)
                    c.isSelected = false
                else c.isSelected = true
            })
        },
        printDoc() {
            window.print()
        },
        copyCurrentLink() {
            navigator.clipboard.writeText(window.location.href);
        }
    }
}
</script>

<style scoped lang="sass">
.product-card
    margin-top: 10px
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