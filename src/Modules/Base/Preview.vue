<template>
  <div>
    <table class="table">
      <tbody>
        <tr>
          <td colspan="6">
            <h1>{{storeInfo.companyName}}</h1>
            <div>電話: {{storeInfo.companyTel}}</div>
            <div>地址: {{storeInfo.companyAddress}}</div>
          </td>
        </tr>

        <tr>
          <td colspan="6">
            <div>客戶名稱: {{storeInfo.customerName}}</div>
          </td>
        </tr>

        <tr>
          <td colspan="6">
            <div>服務項目地點: {{storeInfo.workPlace}}</div>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th class="index">#</th>
          <th class="name">名稱</th>
          <th class="unit">單位</th>
          <th class="quantity">數量</th>
          <th class="price">單價</th>
          <th class="sum">複價</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product, index in storeProducts">
          <td class="index">
            <strong>{{index+1}}</strong>
          </td>

          <td class="name">
            {{product.name}}
          </td>

          <td class="unit">
            {{product.unit}}
          </td>

          <td class="quantity">
            {{product.quantity}}
          </td>

          <td class="price">
            {{product.price}}
          </td>

          <td class="sum">
            {{product.quantity*product.price}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  computed: {
    storeInfo() {
      return this.$store.getters['Quotation/info']
    },
    storeProducts() {
      return this.$store.getters['Quotation/products']
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
.table
  .data-head
    td
      font-weight: bolder
  .index
    width: 10px
  .name
  .unit
    width: 80px
  .quantity
    width: 80px
  .price
    width: 80px
  .sum
    width: 80px
</style>