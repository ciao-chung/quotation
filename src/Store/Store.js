import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Base from 'Store/Modules/Base'
import Quotation from 'Store/Modules/Quotation.js'

export default new Vuex.Store({
  modules: {
    Base,
    Quotation,
  }
})
