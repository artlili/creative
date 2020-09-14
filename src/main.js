import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FontAwesome from '@/components/shared/FontAwesome.vue'
import Likes from '@/components/shared/Likes.vue'

import clickOutsideDirective from '@/directives/click-outside.directive'

import './assets/sass/main.sass'

Vue.component('default-layout', DefaultLayout)
Vue.component('font-awesome', FontAwesome)
Vue.component('v-likes', Likes)

Vue.directive('click-outside', clickOutsideDirective)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
