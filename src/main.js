import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import './mock/mockServer' // 加载mockServer即可
import loading from './common/imgs/loading.gif'
import './fiters' // 加载过滤器

Vue.config.productionTip = false

Vue.component(Button.name, Button)
/* eslint-disable no-new */
Vue.use(VueLazyload, {
  loading
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store // 使用上vuex
})
