// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/VantUI'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'
import './assets/css/font_1048614_mi5i5ba1uag.css'
import './css/reset.css'
import 'vant/lib/index.css'
import 'vant/lib/index.less'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.prototype.axios = axios
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
