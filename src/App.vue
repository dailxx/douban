<template>
  <div id="app">
    <m-nav></m-nav>
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import MNav from 'base/nav/nav'

  export default {
    name: 'app',
    components: {
      MNav
    }
  }
</script>

<style style="text/css" scoped>
  #app {
    height: 100%;
  }
  .page {
    height: 100%;
    padding-top: 47px;
    max-width: 650px;
    background-color: #fff;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
