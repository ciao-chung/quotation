<template>
  <div class="toolbar no-print">
    <div class="form-group">
      <button class="btn btn-warning" @click="toggleInfo" v-if="!preview">
        <i class="fa fa-info-circle"></i>
      </button>
    </div>

    <div class="form-group">
      <button class="btn btn-info" @click="setPreview">
        <i class="fa fa-image"></i>
      </button>
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
import localStorage from 'Libs/Storage/localStorage.js'
export default {
  created() {
    const storagePreview = localStorage.get('quotation_preview')
    if(storagePreview != null) {
      this.$store.dispatch('Quotation/setPreview', storagePreview)
    }
  },
  methods: {
    toggleInfo() {
      this.$root.$emit('toggleInfo')
    },
    setPreview() {
      this.$store.dispatch('Quotation/setPreview', !this.preview)
    },
  },
  computed: {
    preview() {
      return this.$store.getters['Quotation/preview']
    },
  },
  watch: {
    preview() {
      localStorage.set('quotation_preview', this.preview)
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
.toolbar
  position: fixed
  top: 45%
  right: 0
  .form-group
    text-align: right
</style>