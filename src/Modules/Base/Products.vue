<template>
  <div class="products">
    <h3>服務項目</h3>

    <ProductItem v-for="product, index in products"
      @updateProduct="updateProduct"
      :key="index"
      :index="index"
      :product="product"></ProductItem>
  </div>
</template>

<script lang="babel" type="text/babel">
import localStorage from 'Libs/Storage/localStorage.js'
import ProductItem from 'Modules/Base/ProductItem.vue'
export default {
  data() {
    return {
      products: [],
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      const storageProducts = localStorage.get('quotation_products')
      if(storageProducts) {
        this.products = storageProducts
      }

      else if(!storageProducts) {
        this.products = _cloneDeep(this.storeProducts)
      }

      if(this.productQuantity == 0) this.createDefaultProduct()
    },
    createDefaultProduct() {
      this.products.push(this.getDefaultProduct())
    },
    getDefaultProduct() {
      return {
        name: null,
        unit: null,
        quantity: 1,
        price: 0,
        sum: 0,
      }
    },
    updateProduct(data) {
      this.$set(this.products, data.index, data.product)
    },
  },
  computed: {
    storeProducts() {
      return this.$store.getters['Quotation/products']
    },
    productQuantity() {
      return this.$store.getters['Quotation/productQuantity']
    },
  },
  watch: {
    products: {
      deep: true,
      handler() {
        if(_isEqual(this.products, this.storeProducts)) return
        this.$store.dispatch('Quotation/setProducts', _cloneDeep(this.products))
        localStorage.set('quotation_products', this.info)
      },
    }
  },
  components: {
    ProductItem,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>