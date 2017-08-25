<template lang="html">
  <div>
    <movie-section :movies="showingList" class="section"></movie-section>
    <movie-section :movies="freeList"></movie-section>
    <movie-section :movies="latestList"></movie-section>
  </div>
</template>

<script>
  import Scroll from 'base/scroll/scroll'
  import BScroll from 'better-scroll'
  import { getShowingMoives, getFreeMoives, getLatestMoives } from 'api/movie'
  import MovieItem from './movie-item'
  import MovieHeader from './movie-header'
  import MovieSection from './movie-section'

  export default {
    data() {
      return {
        showingList: [],
        freeList: [],
        latestList: []
      }
    },
    mounted() {
      getShowingMoives().then((res) => {
        this.showingList = res.subject_collection_items
      })
      getFreeMoives().then((res) => {
        this.freeList = res.subject_collection_items
      })
      getLatestMoives().then((res) => {
        this.latestList = res.subject_collection_items
      })
    },
    components: {
      Scroll,
      MovieSection
    }
  }
</script>

<style lang="css" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .section {
    padding-top: 10px;
  }
</style>
