import Vue from 'vue'
import Vuex from 'vuex'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  Vuex,
  render: h => h(App)
}).$mount('#app')
