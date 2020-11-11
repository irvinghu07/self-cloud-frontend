import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import global from './Global'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.prototype.global = global
new Vue({
  render: h => h(App),
}).$mount('#app')
