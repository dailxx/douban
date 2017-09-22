<template lang="html">
  <div class="more-wrapper">
    <scroll ref="scroll"
            class="scroll"
            :data="itemList"
            :bounce="false"
            :pullUpLoad="pullUpLoadObj"
            @pullingUp="onPullingUp">
      <h1>{{ headerTitle }}</h1>
      <ul>
        <li v-for="item in itemList">
          <section-item
            :title="item.title"
            :image-url="item.cover.url | imageUrlFilter"
            :score="item.rating ? item.rating.value : 0"
            :maxScore="item.rating ? item.rating.max: 0"
            :action="item.actions[0]"
            :smallFont="true"
            :key="item.id">
            </section-item>
        </li>
      </ul>
      <div slot="pullup"></div>
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
    props: {
      type: String
    },
    created() {
      this.start = 0
      this.total = 0
    },
    mounted() {
      this.fetchData(0, FetchCount).then((res) => {
        this.itemList = this.itemList.concat(res.subject_collection_items)
        this.total = res.total
      })
    },
    computed: {
      pullUpLoadObj() {
        return {
          threshold: 10
        }
      },
      headerTitle() {
        const { params } = this.$route;

        if (params.type === 'nowintheater') {
          return '影院热映'
        } else if (params.type === 'watchonline') {
          return '免费在线观影'
        } else if (params.type === 'latest') {
          return '新片速递'
        }
      }
    },
    methods: {
      fetchData(start, count) {
        const { params } = this.$route;

        let proxy = getShowingMoives
        if (params.type === 'watchonline') {
          proxy = getFreeMoives
        } else if (params.type === 'latest') {
          proxy = getLatestMoives
        }

        return proxy(start, count).then((res) => {
          this.start = start + count
          return res
        })
      },
      onPullingUp() {
        if (this.itemList.length < this.total) {
          // 加载数据
          this.fetchData(this.start, FetchCount).then((res) => {
            let items = res.subject_collection_items
            for (let item of items) {
              if (this.itemList.length < this.total) {
                this.itemList.push(item)
              }
            }
            this.$refs.scroll.forceUpdate(true)
          })
        }
      }
    },
    components: {
      Scroll,
      SectionItem
    }
  }
</script>

<style lang="css" scoped>
  .more-wrapper {
    height: 100%;
    padding: 0 2%;
    -webkit-font-smoothing: antialiased;
  }
  h1 {
    color: #494949;
    font-size: 24px;
    font-weight: normal;
    margin: 0;
    padding: 0.67em 4% 6px;
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
