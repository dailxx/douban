<template lang="html">
  <div>
    <movie-section
      :items="showingList"
      :type="nowintheater"
      @clickMore="handleClickMore(nowintheater)"
      style="paddingTop: 10px;"/>
    <movie-section
      :items="freeList"
      :type="watchonline"
      @clickMore="handleClickMore(watchonline)"/>
    <movie-section
      :items="latestList"
      :type="latest"
      @clickMore="handleClickMore(latest)"/>
    <movie-section-find :topics="findList"></movie-section-find>
    <movie-section-category :categories="categoryList"></movie-section-category>
  </div>
</template>

<script>
  import { getShowingMoives, getFreeMoives, getLatestMoives, getFindTopics, getCategories } from 'api/movie'
  import MovieSection from 'base/section/section'
  import MovieSectionFind from 'base/section/section-find'
  import MovieSectionCategory from 'base/section/section-category'

  const NowInTheater = '影院热映'
  const WatchOnline = '免费在线观影'
  const Latest = '新片速递'

  export default {
    data() {
      return {
        showingList: [],
        freeList: [],
        latestList: [],
        findList: [],
        categoryList: [],

        nowintheater: NowInTheater,
        watchonline: WatchOnline,
        latest: Latest
      }
    },
    mounted() {
      this.findList = getFindTopics()
      this.categoryList = getCategories()
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
    methods: {
      handleClickMore(type) {
        if (type === NowInTheater) {
          this.$router.push({ path: '/movie/nowintheater' })
        } else if (type === WatchOnline) {
          this.$router.push({ path: '/movie/watchonline' })
        } else {
          this.$router.push({ path: '/movie/latest' })
        }
      }
    },
    components: {
      MovieSection,
      MovieSectionFind,
      MovieSectionCategory
    }
  }
</script>

<style lang="css">

</style>
