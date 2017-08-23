<template lang="html">
  <div>
    <scroll :data="list" style="height: 200px; overflow:hidden;">
      <div>
        <p v-for="(n, idx) in list" style="color: #000">{{ idx }}</p>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from '../base/scroll/scroll'
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        list: []
      }
    },
    mounted() {
      setTimeout(() => {
        this.list = new Array(100).fill(1);
      }, 1500);
    },
    components: {
      Scroll
    }
  }
</script>

<style lang="css" scoped>
  * {
    margin: 0;
    padding: 0;
  }
</style>
