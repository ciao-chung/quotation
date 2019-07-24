<template>
  <div class="toolbar">
    <div class="form-group">
      <button class="btn btn-warning" @click="toggleInfo">
        <i class="fa fa-info-circle"></i>
        <span>主要資料</span>
      </button>
    </div>

    <div class="form-group">
      <button class="btn btn-info">
        <i class="fa fa-image"></i>
        <span>預覽</span>
      </button>
    </div>
  </div>
</template>

<script lang="babel" type="text/babel">
export default {
  methods: {
    toggleInfo() {
      this.$root.$emit('toggleInfo')
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