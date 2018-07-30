<template lang="html">
    <scroll :data="feedlist" class="scroll">
      <quick-nav></quick-nav>
      <div v-if="feedlist.length">
        <div v-for="feed in feedlist" :key="feed.id">
          <feed-item-grid :feed="feed" v-if="feed.layout === 5"></feed-item-grid>
          <feed-item-general :feed="feed" v-else></feed-item-general>
        </div>
      </div>
      <div class="loadingContainer" v-else>
        <loading></loading>
      </div>
    </scroll>
</template>

<script>
  import QuickNav from './quick-nav'
  import Loading from 'base/loading/loading'
  import Scroll from 'base/scroll/scroll'
  import FeedItemGeneral from './feed-item-general'
  import FeedItemGrid from './feed-item-grid'
  import { getRecommend } from 'api/home'

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
      FeedItemGeneral,
      FeedItemGrid
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
