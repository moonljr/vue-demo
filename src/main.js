import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 自动注册全局组件
import './components'
//  自动注册全局filter
import './filter'
import globalMixins from "@/mixins";
Vue.config.productionTip = false
Vue.mixin(globalMixins)
new Vue({
  // mixins: [globalMixins],
  router,
  store,
  render: h => h(App)
}).$mount('#app')
