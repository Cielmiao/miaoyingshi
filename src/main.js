// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//BootstrapVue
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

//引入fastclick ，这个插件可以解决移动端点击事件延迟300毫秒的问题
import FastClick from 'fastclick'
FastClick.attach(document.body);

//引用swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//引入jquery
import $ from 'jquery'
//引入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


//引入字体图标
import './assets/css/iconfont.css'
//引入重置文件
import './assets/css/reset.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
