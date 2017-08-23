<template lang="html">
  <a href="#" class="item">
    <div class="content">
      <div class="desc">
        <h3>{{ feed.title }}</h3>
        <p>{{ feed.target.desc }}</p>
      </div>
      <!-- <img :src="feed.target.cover_url"> -->
    </div>
    <div class="other">
      <span>by {{ feed.target.author.name }}</span>
      <span>{{ feed.source_cn }}</span>
    </div>
  </a>
</template>

<script>
  export default {
    props: {
      feed: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="css" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  .item {
    display: flex;
    flex-direction: column;
    padding: 25px 18px 25px 0;
    margin-left: 18px;
    color: #494949;
    border-bottom: 1px solid #e3e3e3;
    box-sizing: border-box;
  }
  .content {
    display: flex;
    margin-bottom: 10px;
    overflow: hidden;
  }
  .content .desc {
    display: flex;
    flex-direction: column;
    flex: 1
  }
  .content .desc h3 {
    text-align: justify;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.41;
    margin-bottom: 6px;
  }
  .content .desc p {
    text-align: justify;
    color: #aaa;
    font-size: 12px;
    line-height: 1.5;
  }
  .content img {
    width: 25.6%;
    height: 86.78px;
    float: right;
    margin-left: 25px;
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
