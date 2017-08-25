<template lang="html">
  <div>
    <img :src="imageUrl">
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
  export default {
    props: {
      imageUrl: String,
      title: String,
      rank: String
    }
  }
</script>

<style lang="css" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  img {
    width: 100%;
    height: 142px;
  }
  .title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    max-width: 100%;
    margin-top: 9.5px;
    line-height: 15px;
    font-size: 15px;
    text-align: center;
    color: #111;
  }
</style>
