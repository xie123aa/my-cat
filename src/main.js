import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import global from './Global';
import axios from 'axios';


Vue.prototype.axios = axios;


Vue.use(Vant);
Vue.prototype.global = global;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
