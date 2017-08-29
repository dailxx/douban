// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import 'normalize.css'
import 'common/css/base.css'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.filter('imageUrlFilter', function(value) {
  if (value.length) {
    return value.replace(/http\w{0,1}:\/\//g, 'https://images.weserv.nl/?url=')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
