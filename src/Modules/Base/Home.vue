<template>
  <div class="container">
    <div class="form">
      <Info></Info>
      <Products></Products>
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
import Info from 'Modules/Base/Info.vue'
import Products from 'Modules/Base/Products.vue'
export default {
  components: {
    Info,
    Products,
  },
}
</script>

<style lang="sass" type="text/sass"></style>