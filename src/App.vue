<template>
  <div id="app">
    <router-view/>

    <transition name="transition-loading">
      <AppLoading v-if="loading"/>
    </transition>

    <Toolbar></Toolbar>
    <VuePNotify :options="notifyOptions"></VuePNotify>
  </div>
</template>

<script lang="babel" type="text/babel">
import Vue from 'vue'
import VuePNotify from 'vue-pnotify'
Vue.use(VuePNotify)
import AppLoading from 'Components/Loading/DoubleBounce.vue'
import Toolbar from 'Modules/Toolbar/Toolbar.vue'
export default {
  name: 'App',
  data() {
    return {
      notifyOptions: {
        defaultStyle: 'success',
        zIndex: 99000,
      },
    }
  },
  computed: {
    loading: function () {
      return this.$store.getters['Base/loading']
    },
  },
  components: {
    AppLoading,
    Toolbar,
  },
}
</script>

<style src="vue-pnotify/dist/vue-pnotify.css"></style>
<style src="bootstrap/dist/css/bootstrap.min.css"></style>
<style src="font-awesome/css/font-awesome.min.css"></style>
<style lang="sass" type="text/sass">
.transition-loading
  &-enter-active, &-leave-active
    transition: all 0.5s ease
  &-enter, &-leave-active
    opacity: 0
</style>