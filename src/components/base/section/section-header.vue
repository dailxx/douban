<template lang="html">
  <div>
    <h2>{{ type }}</h2>
    <span v-show="showMore" @click="handleClickMore">更多</span>
  </div>
</template>

<script>
  export default {
    props: {
      type: String,
      showMore: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      handleClickMore() {
        this.$emit('clickMore')
      }
    }
  }
</script>

<style lang="css" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  div {
    display: flex;
    padding: 0 18px;
    justify-content: space-between;
  }
  h2 {
    display: inline-block;
    min-width: 64px;
    margin-bottom: 0;
    color: #111;
    padding-left: 0;
    padding-bottom: 0;
    font-size: 17px;
    font-weight: normal;
    line-height: 24px;
  }
  span {
    font-size: 15px;
    line-height: 24px;
    color: #42bd56;
  }
</style>
