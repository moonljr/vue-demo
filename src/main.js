import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 自动注册全局组件
import './components'
//  自动注册全局filter
import './filter'
import globalMixins from "@/mixins";
import '@/assets/styles/index.scss'

Vue.use(ElementUI);
Vue.config.productionTip = false;
// 注册全局mixin
Vue.mixin(globalMixins)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
