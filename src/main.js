import Vue from 'vue'
import App from 'App'
import router from 'router'
import store from 'Store/Store'

Vue.config.productionTip = false

import $ from 'jquery'
window.self.$ = $

import VueMoment from 'vue-moment'
Vue.use(VueMoment)

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  metaInfo() {
    return {
      title: '報價單產生器',
      link: [
        { rel: 'favicon', href: 'static/favicon.ico' },
        { rel: 'shortcut icon', href: 'static/favicon.ico' },
      ],
      meta: [],
    }
  },
})
