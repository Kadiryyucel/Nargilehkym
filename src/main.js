import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import AllComponent from './components/install'
import VueResource from 'vue-resource';


Vue.config.productionTip = false
Vue.use(AllComponent);
Vue.use(VueResource);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
