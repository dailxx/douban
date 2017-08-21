<template lang="html">
  <scroll class="listview" :data="data">
    <slot>

    </slot>
  </scroll>
</template>

<script>
  import Scroll from '@/components/base/scroll/scroll'

  export default {
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style lang="css">
</style>
