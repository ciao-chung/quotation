export default {
  namespaced: true,
  state: {
    taxRate: 0.05,
    info: {
      companyName: null,
      companyAddress: null,
      companyTel: null,
      customerName: null,
      workPlace: null,
    },
    products: [],
    preview: false,
  },
  mutations: {
    set(state, data) {
      state[data.key] = data.value
    },
    setInfo(state, data) {
      state.info = data
    },
    setProducts(state, data) {
      state.products = data
    },
    setPreview(state, preview) {
      state.preview = preview
    },
  },
  actions: {
    set(context, data) {
      context.commit('set', data)
    },
    setInfo(context, data) {
      context.commit('setInfo', data)
    },
    setProducts(context, data) {
      context.commit('setProducts', data)
    },
    setPreview(context, data) {
      context.commit('setPreview', data)
    },
  },
  getters: {
    info(state) {
      return state.info
    },
    products(state) {
      return state.products
    },
    productQuantity(state) {
      return state.products.length
    },
    preview(state) {
      return state.preview
    },
    // 合計
    productsPriceSum(state) {
      let result = 0
      for(const product of state.products) {
        result += parseInt(product.price)
      }
      return result
    },
    // 營業稅
    tax(state) {
      let productsPriceSum = 0
      for(const product of state.products) {
        productsPriceSum += parseInt(product.price)
      }
      return productsPriceSum*state.taxRate
    },
  },
}
