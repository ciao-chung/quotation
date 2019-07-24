<template>
  <div class="container">
    <div class="form" v-show="!preview">
      <Info></Info>
      <Products></Products>
    </div>

    <Preview  v-show="preview"></Preview>
  </div>
</template>

<script lang="babel" type="text/babel">
import Info from 'Modules/Base/Info.vue'
import Products from 'Modules/Base/Products.vue'
import Preview from 'Modules/Base/Preview.vue'
export default {
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