<template>
  <div class="examples">
      <div class="section-title examples__title">
          <div class="section-title-text">Примеры реализации нашей системы</div>
      </div>
      <div class="examples__carousel">
            <Carousel
                ref="examplesSlider" 
                :items-to-show="1" 
                :wrap-around="true" 
                :snapAlign="'start'" 
                :mouseDrag="true"
            >
                <slide v-for="(slide, index) in sliderList" :key="index">
                    <div class="slide">
                        <div class="slide__card">
                            <div class="slide__img">
                                <img :src="getImageUrl('alpha-examples', slide.imgName, 'jpg')" alt="example">
                            </div>
                            <div class="slide__hero">
                                <div class="slide__title">{{ slide.title }}</div>
                                <div class="list">
                                    <div class="list__item" v-for="(item, i) in slide.list" :key="i">{{ item }}</div>
                                </div>
                                <div class="slide__row">
                                    <div class="slide__svg">
                                        <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M26.3734 10.4883H3.43555V28.001H26.3734V10.4883Z" fill="#6C7689"/>
                                            <path d="M14.9064 3.86719L26.3733 10.4878H14.9064H3.43945L14.9064 3.86719Z" fill="#6C7689"/>
                                            <path d="M15.0124 0.00166035L0.00195312 8.66797L0.927313 10.2707L15.9378 1.60443L15.0124 0.00166035Z" fill="#6C7689"/>
                                            <path d="M15.0113 0.00269841L14.0859 1.60547L29.0964 10.2718L30.0218 8.66901L15.0113 0.00269841Z" fill="#6C7689"/>
                                            <path d="M22.1677 19.0781H17.0488V28.0021H22.1677V19.0781Z" fill="white"/>
                                            <path d="M13.7309 19.0781H8.01953V23.6125H13.7309V19.0781Z" fill="white"/>
                                            <path d="M13.7309 11.6797H8.01953V16.214H13.7309V11.6797Z" fill="white"/>
                                            <path d="M22.6508 11.6797H16.9395V16.214H22.6508V11.6797Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <span>
                                        Дом - {{ slide.square }} м<sup>2</sup>
                                    </span>
                                </div>
                                <div class="slide__row">
                                    <div class="slide__svg">
                                            <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.9522 13.9297H12.4961V14.278H12.9522V13.9297Z" fill="#6C7689"/>
                                                <path d="M12.7241 13.8008L12.9522 13.9324H12.7241H12.4961L12.7241 13.8008Z" fill="#6C7689"/>
                                                <path d="M12.7262 13.7222L12.4277 13.8945L12.4461 13.9264L12.7446 13.7541L12.7262 13.7222Z" fill="#6C7689"/>
                                                <path d="M12.7254 13.722L12.707 13.7539L13.0055 13.9262L13.0239 13.8944L12.7254 13.722Z" fill="#6C7689"/>
                                                <path d="M12.8694 14.1055H12.7676V14.2829H12.8694V14.1055Z" fill="white"/>
                                                <path d="M12.6995 14.1055H12.5859V14.1956H12.6995V14.1055Z" fill="white"/>
                                                <path d="M12.6995 13.9531H12.5859V14.0433H12.6995V13.9531Z" fill="white"/>
                                                <path d="M12.8772 13.9531H12.7637V14.0433H12.8772V13.9531Z" fill="white"/>
                                                <g clip-path="url(#clip0_738_15598)">
                                                    <path d="M20.7434 8.69034C20.7434 7.36458 20.3126 6.29072 19.4508 5.46875C18.5891 4.64678 17.4556 4.2358 16.0502 4.2358H9.68661V13.1449H16.0502C17.4556 13.1449 18.5891 12.7339 19.4508 11.9119C20.3126 11.09 20.7434 10.0161 20.7434 8.69034ZM25.4565 8.69034C25.4565 11.2491 24.618 13.3371 22.9409 14.9545C21.2638 16.572 19.0995 17.3807 16.448 17.3807H9.68661V19.7273H19.7292C19.9148 19.7273 20.0673 19.7869 20.1866 19.9062C20.3059 20.0256 20.3656 20.178 20.3656 20.3636V22.9091C20.3656 23.0947 20.3059 23.2472 20.1866 23.3665C20.0673 23.4858 19.9148 23.5455 19.7292 23.5455H9.68661V27.3636C9.68661 27.5492 9.62364 27.7017 9.49769 27.821C9.37174 27.9403 9.2226 28 9.05025 28H5.72923C5.54362 28 5.39116 27.9403 5.27184 27.821C5.15252 27.7017 5.09286 27.5492 5.09286 27.3636V23.5455H0.638317C0.452711 23.5455 0.300249 23.4858 0.18093 23.3665C0.0616122 23.2472 0.00195312 23.0947 0.00195312 22.9091V20.3636C0.00195312 20.178 0.0616122 20.0256 0.18093 19.9062C0.300249 19.7869 0.452711 19.7273 0.638317 19.7273H5.09286V17.3807H0.638317C0.452711 17.3807 0.300249 17.321 0.18093 17.2017C0.0616122 17.0824 0.00195312 16.9299 0.00195312 16.7443V13.7812C0.00195312 13.6089 0.0616122 13.4598 0.18093 13.3338C0.300249 13.2079 0.452711 13.1449 0.638317 13.1449H5.09286V0.636364C5.09286 0.450758 5.15252 0.298295 5.27184 0.178977C5.39116 0.0596591 5.54362 0 5.72923 0H16.448C19.0995 0 21.2638 0.808712 22.9409 2.42614C24.618 4.04356 25.4565 6.13163 25.4565 8.69034Z" fill="#6C7689"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_738_15598">
                                                        <rect width="25.4545" height="28" fill="white" transform="translate(0.00195312)"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                    </div>
                                    <span>
                                        Материал - {{ slide.material }} руб.
                                    </span>
                                </div>
                                <div class="slide__row">
                                    <div class="slide__svg">
                                            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.002 2H19.002V1C19.002 0.734784 18.8966 0.48043 18.7091 0.292893C18.5215 0.105357 18.2672 0 18.002 0C17.7367 0 17.4824 0.105357 17.2948 0.292893C17.1073 0.48043 17.002 0.734784 17.002 1V2H7.00195V1C7.00195 0.734784 6.8966 0.48043 6.70906 0.292893C6.52152 0.105357 6.26717 0 6.00195 0C5.73674 0 5.48238 0.105357 5.29485 0.292893C5.10731 0.48043 5.00195 0.734784 5.00195 1V2H2.00195C1.47152 2 0.962812 2.21071 0.587739 2.58579C0.212667 2.96086 0.00195313 3.46957 0.00195312 4V24C0.00195313 24.5304 0.212667 25.0391 0.587739 25.4142C0.962812 25.7893 1.47152 26 2.00195 26H22.002C22.5324 26 23.0411 25.7893 23.4162 25.4142C23.7912 25.0391 24.002 24.5304 24.002 24V4C24.002 3.46957 23.7912 2.96086 23.4162 2.58579C23.0411 2.21071 22.5324 2 22.002 2ZM17.2095 14.7075L11.2095 20.7075C11.1166 20.8005 11.0063 20.8742 10.8849 20.9246C10.7635 20.9749 10.6334 21.0008 10.502 21.0008C10.3705 21.0008 10.2404 20.9749 10.119 20.9246C9.99761 20.8742 9.88733 20.8005 9.79445 20.7075L6.79445 17.7075C6.60681 17.5199 6.5014 17.2654 6.5014 17C6.5014 16.7346 6.60681 16.4801 6.79445 16.2925C6.98209 16.1049 7.23659 15.9994 7.50195 15.9994C7.76732 15.9994 8.02181 16.1049 8.20945 16.2925L10.502 18.5863L15.7945 13.2925C15.8874 13.1996 15.9977 13.1259 16.1191 13.0756C16.2404 13.0253 16.3706 12.9994 16.502 12.9994C16.6333 12.9994 16.7635 13.0253 16.8848 13.0756C17.0062 13.1259 17.1165 13.1996 17.2095 13.2925C17.3024 13.3854 17.3761 13.4957 17.4263 13.6171C17.4766 13.7385 17.5025 13.8686 17.5025 14C17.5025 14.1314 17.4766 14.2615 17.4263 14.3829C17.3761 14.5043 17.3024 14.6146 17.2095 14.7075ZM2.00195 8V4H5.00195V5C5.00195 5.26522 5.10731 5.51957 5.29485 5.70711C5.48238 5.89464 5.73674 6 6.00195 6C6.26717 6 6.52152 5.89464 6.70906 5.70711C6.8966 5.51957 7.00195 5.26522 7.00195 5V4H17.002V5C17.002 5.26522 17.1073 5.51957 17.2948 5.70711C17.4824 5.89464 17.7367 6 18.002 6C18.2672 6 18.5215 5.89464 18.7091 5.70711C18.8966 5.51957 19.002 5.26522 19.002 5V4H22.002V8H2.00195Z" fill="#6C7689"/>
                                            </svg>
                                    </div>
                                    <span>
                                        Срок - {{ slide.term }}
                                    </span>
                                </div>
                                <div class="slide__btn">
                                    <DarkRectButton :text="'Хочу смету'" />
                                </div>
                            </div>
                        </div>
                    </div>
                </slide>
            </Carousel>
            <SliderControlBtn @click="prevClick" />
            <SliderControlBtn :isLeftBtn="false" @click="nextClick" />
      </div>
  </div>
  <Modal 
      v-model:open="isModalShow"
      :title="'Посчитайте мой объект'"
      :descriptionHtml="'Подбор оборудования, консультация и расчет сметы для Вас - БЕСПЛАТНО! <br> Пожалуйста, заполните обязательные поля, и мы с Вами свяжемся. '"
  />
</template>

<script>
import { getImageUrl } from '@/use/helpers.js'
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import DarkRectButton from '../UIKit/DarkRectButton.vue'
import SliderControlBtn from '../UIKit/SliderControlBtn.vue';
import Modal from '../Modals.vue/Modal.vue'

export default {
    components: {
        Carousel,
        Slide,
        DarkRectButton,
        SliderControlBtn,
        Modal
    },
    data() {
        return {
            sliderList: [
                { 
                    imgName: '1', 
                    title: 'Монтаж системы', 
                    square: '160', 
                    material: '85 000', 
                    term: '5 дней',
                    list: ['отопление', 'водоснабжение', 'водоотведение'] 
                },
                { 
                    imgName: '2', 
                    title: 'Монтаж системы', 
                    square: '180', 
                    material: '145 000', 
                    term: '5 дней',
                    list: ['отопление', 'водоснабжение', 'водоотведение'] 
                },
                { 
                    imgName: '3', 
                    title: 'Монтаж системы', 
                    square: '156', 
                    material: '125 000', 
                    term: '5 дней',
                    list: ['отопление', 'водоснабжение', 'водоотведение'] 
                },
            ],
            isModalShow: false
        }
    },
    methods: {
        getImageUrl,
        prevClick() {
            this.$refs.examplesSlider.prev();
            this.$refs.examplesSlider.updateSlideWidth();
        },
        nextClick(){
            this.$refs.examplesSlider.next();
            this.$refs.examplesSlider.updateSlideWidth();
        },
    }
}
</script>

<style scoped lang="sass">
.examples
    &__title
        margin-bottom: 100px
    &__carousel
        position: relative
.slide
    padding: 20px
    &__card
        box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.2)
        border-radius: 20px
        display: flex
        align-items: stretch
        justify-content: space-between
        overflow: hidden
    &__img
        width: 100%
        & img
            width: 100%
            height: 100%
    &__hero
        margin: 0 56px 51px 52px
        position: relative
        min-width: 275px
        &::before
            content: ''
            position: absolute
            top: 0
            left: 0
            right: 0
            background: linear-gradient(90deg, #224386 0%, #2598D2 100%) 
            height: 26px 
    &__title
        font-weight: 700
        font-size: 32px
        line-height: 140%
        color: #224386
        padding: 60px 0 29px
        text-align: center
    &__row
        font-weight: 700
        font-size: 20px
        color: #6C7689
        display: flex
        align-items: center
        padding: 15px 0 23px
        border-bottom: 1px solid #DBDBDB
        text-align: left
    &__svg
        width: 30px
        margin-right: 11px
    &__btn
        margin-top: 31px
.list
    padding: 16px 0 5px 35px
    border-bottom: 1px solid #DBDBDB
    border-top: 1px solid #DBDBDB
    &__item
        font-weight: 500
        font-size: 20px
        color: #6C7689
        position: relative
        margin-bottom: 16px
        text-align: left
        &::before
            content: ''
            position: absolute
            width: 15px
            height: 15px
            background: #2598D2
            left: -28px
            top: 6px

@media screen and (max-width: 1600px)
    .examples
        &__title
            margin-bottom: 17px
    .slide
        padding: 45px
        &__hero
            margin: 0 35px 20px 33px
            min-width: 180px
            &::before
                height: 17px 
        &__title
            font-size: 20px
            padding: 40px 0 20px
        &__row
            font-size: 14px
            padding: 10px 0 15px
        &__svg
            width: 16px
            margin-right: 7px
            & svg
                width: 16px
        &__btn
            margin-top: 20px
    .list
        padding: 16px 0 2px 25px
        border-bottom: 1px solid #DBDBDB
        border-top: 1px solid #DBDBDB
        &__item
            font-size: 14px
            margin-bottom: 13px
            &::before
                width: 10px
                height: 10px
                left: -18px
                top: 4px
</style>