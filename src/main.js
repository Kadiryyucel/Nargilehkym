import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import AllComponent from './components/install'
import VueResource from 'vue-resource';
import flexbox from "flexboxgrid"


Vue.config.productionTip = false
Vue.use(AllComponent);
Vue.use(VueResource);
Vue.use(flexbox);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
