<template>
  <div class="container" v-if="hasDataReady">
    <div class="form" v-if="!preview">
      <Info></Info>
      <Products></Products>
    </div>

    <Preview  v-if="preview"></Preview>
  </div>
</template>

<script lang="babel" type="text/babel">
import localStorage from 'Libs/Storage/localStorage.js'
import Info from 'Modules/Base/Info.vue'
import Products from 'Modules/Base/Products.vue'
import Preview from 'Modules/Base/Preview.vue'
export default {
  data() {
    return {
      hasDataReady: false,
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.hasDataReady = false
      const storageInfo = localStorage.get('quotation_info')
      const storageProducts = localStorage.get('quotation_products')
      if(storageInfo) this.$store.dispatch('Quotation/setInfo', storageInfo)
      if(storageProducts) this.$store.dispatch('Quotation/setProducts', storageProducts)
      this.$nextTick(() => {
        this.hasDataReady = true
      })
    },
    toggleInfo() {
      this.show = !this.show
    },
  },
  computed: {
    preview() {
      return this.$store.getters['Quotation/preview']
    },
  },
  components: {
    Info,
    Products,
    Preview,
  },
}
</script>

<style lang="sass" type="text/sass"></style>