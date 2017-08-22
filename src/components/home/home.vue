<template lang="html">
  <div>
    <m-header></m-header>
    <div class="page">
      <quick-nav></quick-nav>
      <template v-if="feedlist.length">
        <scroll ref="scroll" :data="feedlist">
          <div v-for="feed in feedlist">
            <feed-item
              :title="feed.title"
              :desc="feed.target.desc"
              :source="feed.source_cn"
              :image-url="feed.target.cover_url"
              :author="feed.target.author.name"
              :key="feed.id"/>
          </div>
        </scroll>
      </template>
      <template v-else>
        <loading></loading>
      </template>
    </div>
  </div>
</template>

<script>
  import MHeader from './nav'
  import QuickNav from './quick-nav'
  import Loading from '../base/loading/loading'
  import * as api from '@/api/api'
  import Scroll from '../base/scroll/scroll'
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
        api.getRecommendFeedList().then((data) => {
          this.feedlist = data.recommend_feeds;
        }).catch((error) => {
          console.log(error);
        })
      }
    },
    watch: {

    },
    components: {
      MHeader,
      QuickNav,
      Loading,
      Scroll,
      FeedItem
    }
  }
</script>

<style lang="css" scoped>
  .page {
    padding-top: 47px;
    max-width: 650px;
    background-color: #fff;
    margin: 0 auto;
    overflow-x: hidden;
  }
</style>
