<template>
  <div class="quotation-product-item" v-if="localProduct">
    <div class="control">
      <i class="fa fa-bars sortable"></i>
      <i class="fa fa-trash remove" @click="remove"></i>
    </div>

    <div class="form-group">
      <label>名稱</label>
      <!--<textarea class="form-control" v-model="localProduct.name"></textarea>-->
      <input type="text" class="form-control" v-model="localProduct.name">
    </div>

    <div class="form-group inline">
      <div class="form-group">
        <label>單位</label>
        <input type="text" class="form-control" v-model="localProduct.unit">
      </div>

      <div class="form-group">
        <label>數量</label>
        <input type="number" class="form-control" v-model="localProduct.quantity">
      </div>

      <div class="form-group">
        <label>單價</label>
        <input type="number" class="form-control" v-model="localProduct.price">
      </div>

      <div class="form-group">
        <label>複價</label>
        <input type="number" class="form-control" :value="sum" disabled="disabled">
      </div>
    </div>

  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  props: {
    product: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      localProduct: null,
    }
  },
  created() {
    this.localProduct = _cloneDeep(this.product)
  },
  methods: {
    remove() {
      this.$emit('removeProduct', this.index)
    }
  },
  computed: {
    sum() {
      return this.localProduct.price*this.localProduct.quantity
    },
  },
  watch: {
    localProduct: {
      deep: true,
      handler() {
        if(_isEqual(this.localProduct, this.product)) return
        this.$emit('updateProduct', {
          index: this.index,
          product: _cloneDeep(this.localProduct),
        })
      },
    },
    product: {
      deep: true,
      handler() {
        this.localProduct = _cloneDeep(this.product)
      },
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
@import '~assets/sass/variable.sass'
.quotation-product-item
  border: 1px $light-gray solid
  border-radius: 10px
  padding: 0 10px
  padding-top: 15px
  margin-bottom: 20px
  background-color: $white
  .control
    margin-bottom: 10px
    font-size: 16px
    &>*
      margin-right: 15px
      cursor: pointer
    .sortable
      color: $orange
    .remove
      color: $red
  textarea
    min-height: 100px
  .inline
    display: flex
    .form-group
      width: calc(25% - 10px)
      margin-right: 10px
</style>