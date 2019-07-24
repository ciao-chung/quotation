<template>
  <div>
    <div class="export-zone">
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

        <tr>
          <td colspan="4"></td>
          <td>
            <strong>合計</strong>
          </td>
          <td class="text-danger">
            <strong>{{productsPriceSum}}</strong>
          </td>
        </tr>

        <tr>
          <td colspan="4"></td>
          <td>
            <strong>營業稅</strong>
          </td>
          <td class="text-danger">
            <strong>{{tax}}</strong>
          </td>
        </tr>

        <tr>
          <td colspan="4"></td>
          <td>
            <strong>總計</strong>
          </td>
          <td class="text-danger">
            <strong>{{result}}</strong>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="form-group action no-print">
      <button class="btn btn-info" @click="downloadImage">
        匯出為圖片
      </button>

      <button class="btn btn-info" @click="print">
        列印
      </button>
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
import html2canvas from 'html2canvas'
import downloadjs from 'downloadjs'
import moment from 'moment'
export default {
  methods: {
    async downloadImage() {
      const now = moment().format('YYYY/MM/DD_HH:mm:ss')
      const $element = $('.export-zone')[0]
      try {
        const canvas = await html2canvas($element)
        const base64Url = canvas.toDataURL('image/jpeg', 1.0)
        downloadjs(base64Url, `${this.storeInfo.companyName}報價單_${now}.jpg`, 'image/jpeg')
        this.$notify('匯出成功!')
      } catch (error) {
        console.warn(error)
        this.$notify({
          style: 'error',
          title: '匯出失敗',
          text: '請重新整理網頁後再操作一次',
        })
      }
    },
    print() {
      window.print()
    },
  },
  computed: {
    storeInfo() {
      return this.$store.getters['Quotation/info']
    },
    storeProducts() {
      return this.$store.getters['Quotation/products']
    },
    productsPriceSum() {
      return this.$store.getters['Quotation/productsPriceSum']
    },
    tax() {
      return this.$store.getters['Quotation/tax']
    },
    result() {
      return this.productsPriceSum + this.tax
    }
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
.action
  &>*
    margin-right: 20px
</style>