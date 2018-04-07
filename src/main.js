import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'

import Icon from 'vue-svg-icon/Icon.vue'
Vue.component('icon', Icon);

import VueResource from 'vue-resource'
Vue.use(VueResource);

// import VueAwesomeSwiper from 'vue-awesome-swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.component('swiper',swiper)
Vue.component('swiperSlide',swiperSlide)

import menuSlider from './components/menu_slider.vue'
Vue.component('menuSlider', menuSlider);
// Vue.use(VueAwesomeSwiper)

Vue.config.debug = true;

new Vue({
    router,
    el: '#appIndex',
    render: h => h(App)
})