<template lang="html">
  <div class="loading">
    <div class="smile"></div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="css" scoped>
  .loading {
    height: 300px;
    display: flex;
    background-color: #fff;
    justify-content: center;
    align-items: center;
  }
  .smile {
    background-repeat: no-repeat;
    background-image: url('../../../assets/image/loading_green.gif');
    background-size: contain;
    width: 40px;
    height: 40px;
  }
</style>
