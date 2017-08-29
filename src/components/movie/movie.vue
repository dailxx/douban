<template lang="html">
  <div>
    <movie-section :items="showingList" type="影院热映" style="paddingTop: 10px;"/>
    <movie-section :items="freeList" type="免费在线观影"/>
    <movie-section :items="latestList" type="新片速递"/>
    <movie-section-find :topics="findList"></movie-section-find>
    <movie-section-category></movie-section-category>
  </div>
</template>

<script>
  import { getShowingMoives, getFreeMoives, getLatestMoives, getFindTopics } from 'api/movie'
  import MovieSection from 'base/section/section'
  import MovieSectionFind from 'base/section/section-find'
  import MovieSectionCategory from 'base/section/section-category'

  export default {
    data() {
      return {
        showingList: [],
        freeList: [],
        latestList: [],
        findList: []
      }
    },
    mounted() {
      this.findList = getFindTopics()
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
      MovieSection,
      MovieSectionFind,
      MovieSectionCategory
    }
  }
</script>

<style lang="css" scoped>

</style>
