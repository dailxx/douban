<template lang="html">
  <div style="height:100%">
    <scroll class="scroll">
      <div>
        <h1>影院热映</h1>
        <ul>
          <li v-for="n in 10">
            <section-item
              title="你的名字"
              :image-url="'https://qnmob2.doubanio.com/view/movie_poster_cover/lpst/public/p2492869476.jpg?imageView2/0/q/80/w/9999/h/400/format/jpg' | imageUrlFilter"
              :score="5"
              :maxScore="10">
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

  export default {
    data() {
      return {
        list: []
      }
    },
    mounted() {
      this.list = 
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
