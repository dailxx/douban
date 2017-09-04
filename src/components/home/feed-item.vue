<template lang="html">
  <div class="item">
    <div class="content" :style="contentStyle">
      <slot></slot>
    </div>
    <div class="other">
      <span>by {{ author }}</span>
      <span>{{ source }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      contentStyle() {
        if (this.direction === 'column') {
          return { flexDirection: 'column' }
        } else {
          return { alignItems: 'flex-start' }
        }
      }
    },
    props: {
      author: String,
      source: String,
      direction: {
        type: String,
        default: 'row'
      }
    }
  }
</script>

<style lang="css">
  h3, p {
    margin: 0;
  }
  .item {
    display: flex;
    flex-direction: column;
    padding: 25px 18px 25px 0;
    margin-left: 18px;
    color: #494949;
    border-bottom: 1px solid #e3e3e3;
    box-sizing: border-box;
    cursor: pointer;
  }
  .content {
    display: flex;
    margin-bottom: 10px;
    overflow: hidden;
  }
  .other {
    display: flex;
    justify-content: space-between;
  }
  .other span {
    font-size: 12px;
    color: #ccc;
  }
</style>
