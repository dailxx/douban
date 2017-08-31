<template lang="html">
    <scroll :data="feedlist" class="scroll">
      <quick-nav></quick-nav>
      <template v-if="feedlist.length">
        <div>
          <feed-item v-for="feed in feedlist" :feed="feed" :key="feed.id"/>
        </div>
      </template>
      <template v-else>
        <div class="loadingContainer">
          <loading></loading>
        </div>
      </template>
    </scroll>
</template>

<script>
  import QuickNav from './quick-nav'
  import Loading from 'base/loading/loading'
  import Scroll from 'base/scroll/scroll'
  import { getRecommend } from 'api/home'
  import FeedItem from './feed-item'

  export default {
    data() {
      return {
        feedlist: []
      }
    },
    mounted() {
      this.fetchData()
    },
    methods: {
      // 获取列表数据内容
      fetchData() {
        getRecommend().then((data) => {
          this.feedlist = data.recommend_feeds;
        }).catch((error) => {
          console.log(error);
        })
      }
    },
    components: {
      QuickNav,
      Loading,
      Scroll,
      FeedItem
    }
  }
</script>

<style lang="css" scoped>

  .scroll {
    height: 100%;
  }
  .loadingContainer {
    position: absolute;
    top: 175px;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    padding-top: 40px;
    display: flex;
    justify-content: center;
  }
</style>
