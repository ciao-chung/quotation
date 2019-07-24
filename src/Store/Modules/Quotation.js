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
    productsPriceSum() {

    },
    // 營業稅
    tax() {

    },
    // 總計
    total() {

    },
  },
}
