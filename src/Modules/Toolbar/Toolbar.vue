<template>
  <div class="toolbar">
    <button class="btn btn-warning" @click="toggleInfo">
      <i class="fa fa-info-circle"></i>
    </button>
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
</style>