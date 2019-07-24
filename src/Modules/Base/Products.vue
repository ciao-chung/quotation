<template>
  <div class="products">
    <h3>服務項目</h3>

    <div class="form-group">
      <button class="btn btn-info" @click="createDefaultProduct(true)">新增服務</button>
    </div>

    <VueDraggable v-model="products" :options="draggableOptions">
      <ProductItem v-for="product, index in products"
        @updateProduct="updateProduct"
        @removeProduct="removeProduct"
        :key="index"
        :index="index"
        :product="product"></ProductItem>
    </VueDraggable>
  </div>
</template>

<script lang="babel" type="text/babel">
import localStorage from 'Libs/Storage/localStorage.js'
import ProductItem from 'Modules/Base/ProductItem.vue'
import VueDraggable from 'vuedraggable'
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
      this.products = _cloneDeep(this.storeProducts)
      this.$nextTick(() => {
        if(this.productQuantity == 0) this.createDefaultProduct()
      })
    },
    createDefaultProduct(notify = false) {
      this.products.push(this.getDefaultProduct())
      if(notify) this.$notify('新增成功')
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
    removeProduct(index) {
      this.$delete(this.products, index)
      this.$notify({
        style: 'success',
        title: '刪除成功',
      })
    },
  },
  computed: {
    storeProducts() {
      return this.$store.getters['Quotation/products']
    },
    productQuantity() {
      return this.$store.getters['Quotation/productQuantity']
    },
    draggableOptions() {
      return {
        handle: '.sortable',
      }
    },
  },
  watch: {
    products: {
      deep: true,
      handler() {
        if(_isEqual(this.products, this.storeProducts)) return
        this.$store.dispatch('Quotation/setProducts', _cloneDeep(this.products))
        localStorage.set('quotation_products', this.products)
      },
    }
  },
  components: {
    VueDraggable,
    ProductItem,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>