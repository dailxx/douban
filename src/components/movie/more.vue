<template lang="html">
  <div style="height:100%">
    <scroll class="scroll" :data="itemList" :bounce="false">
      <div>
        <h1>影院热映</h1>
        <ul>
          <li v-for="item in itemList">
            <section-item
              :title="item.title"
              :image-url="item.cover.url | imageUrlFilter"
              :score="item.rating ? item.rating.value : 0"
              :maxScore="item.rating ? item.rating.max: 0"
              :key="item.id">
              </section-item>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'base/scroll/scroll'
  import SectionItem from 'base/section/section-item'
  import { getShowingMoives, getFreeMoives, getLatestMoives } from 'api/movie'

  const FetchCount = 18;
  export default {
    data() {
      return {
        itemList: []
      }
    },
    mounted() {
      this.fetchData(0, FetchCount).then((res) => {
        this.itemList = this.itemList.concat(res.subject_collection_items)
      })
    },
    methods: {
      fetchData(start, count) {
        return getShowingMoives(start, count)
      }
    },
    components: {
      Scroll,
      SectionItem
    }
  }
</script>

<style lang="css" scoped>
  h1 {
    color: #494949;
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 6px;
    padding: 0 4%;
    box-sizing: border-box
  }
  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 0;
  }
  ul {
    padding: 20px 0;
  }
  li {
    display: inline-block;
    box-sizing: border-box;
    width: 33.33%;
    padding-left: 4%;
    padding-right: 4%;
    margin-bottom: 20px;
  }
  .scroll {
    height: 100%;
  }
</style>
