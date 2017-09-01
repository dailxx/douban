<template lang="html">
  <div>
    <div class="cover">
      <img :src="imageUrl">
      <span class="action-tag" v-show="action.length">{{ action }}</span>
    </div>
    <div class="info">
      <span class="title" :class="titleFontCls">{{ title }}</span>
      <div class="rating">
        <rate :value="score" :max="maxScore"></rate>
      </div>
    </div>
  </div>
</template>

<script>
  import Rate from 'base/rate/rate'

  export default {
    props: {
      imageUrl: String,
      title: String,
      score: Number,
      maxScore: Number,
      action: {
        type: String,
        default: ''
      },
      smallFont: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      titleFontCls() {
        return this.smallFont ? 'small' : 'normal'
      }
    },
    components: {
      Rate
    }
  }
</script>

<style lang="css" scoped>
  .cover {
    position: relative;
  }
  img {
    width: 100%;
    height: 142px;
  }
  .action-tag {
    position: absolute;
    right: 5px;
    bottom: 5px;

    line-height: 16px;
    font-size: 9px;
    color: #fff;
    border-radius: 3px;
    border: 1px solid #eee;
    background-color: #f5a623;
    padding: 1px 5px;
  }
  .title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    max-width: 100%;
    text-align: center;
  }
  .normal {
    margin-top: 9.5px;
    font-size: 15px;
    line-height: 15px;
    color: #111;
  }
  .small {
    margin-top: 7px;
    font-size: 13px;
    line-height: 13px;
    color: #494949;
  }
  .rating {
    margin-top: 5px;
  }
</style>
