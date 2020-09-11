import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import maskotComponent from './components/install'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import BootstrapVue from "bootstrap-vue"

Vue.config.productionTip = false
Vue.use(maskotComponent);
Vue.use(BootstrapVue);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
