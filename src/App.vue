<template>
  <div id="app">
    <router-view/>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import footGuide from "./components/footGuide/footGuide"
export default {
  name: 'App',
  components: {
    footGuide
  },
  async mounted(){
    this.$store.dispatch("getUser")
  }


}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
