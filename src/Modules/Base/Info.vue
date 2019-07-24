<template>
  <div class="quotation-info" v-if="info">
    <h3>主要資料</h3>

    <div class="form" v-show="show">
      <div class="form-group">
        <label>公司名稱</label>
        <input type="text" class="form-control" v-model="info.companyName">
      </div>

      <div class="form-group">
        <label>公司地址</label>
        <input type="text" class="form-control" v-model="info.companyAddress">
      </div>

      <div class="form-group">
        <label>公司電話</label>
        <input type="text" class="form-control" v-model="info.companyTel">
      </div>

      <div class="form-group">
        <label>客戶名稱</label>
        <input type="text" class="form-control" v-model="info.customerName">
      </div>

      <div class="form-group">
        <label>服務項目地點</label>
        <input type="text" class="form-control" v-model="info.workPlace">
      </div>
    </div>

    <div class="alert alert-info" v-show="!show">
      點選右邊 <i class="fa fa-info-circle"></i> 資訊按鈕可展開主要資料設定
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  data() {
    return {
      show: false,
      info: null,
    }
  },
  beforeDestroy() {
    this.$root.$off('toggleInfo')
  },
  created() {
    this.$root.$on('toggleInfo', this.toggleInfo)
    this.init()
  },
  methods: {
    init() {
      if(this.hasAnyInfoEmpty) this.show = true
      this.info = _cloneDeep(this.storeInfo)
    },
    toggleInfo() {
      this.show = !this.show
    },
  },
  computed: {
    storeInfo() {
      return this.$store.getters['Quotation/info']
    },
    hasAnyInfoEmpty() {
      if(!this.storeInfo.companyName) return true
      if(!this.storeInfo.companyAddress) return true
      if(!this.storeInfo.companyTel) return true
      if(!this.storeInfo.customerName) return true
      if(!this.storeInfo.workPlace) return true
      return false
    }
  },
  watch: {
    info: {
      deep: true,
      handler() {
        if(_isEqual(this.info, this.storeInfo)) return
        this.$store.dispatch('Quotation/setInfo', _cloneDeep(this.info))
      },
    }
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>