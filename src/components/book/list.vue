<template lang="html">
  <div class="book-list-wrapper">
    <scroll ref="scroll"
            class="scroll"
            :data="bookList"
            :bounce="false"
            :pullUpLoad="pullUpLoadObj"
            @pullingUp="onPullingUp">
      <h1>{{ headerTitle }}</h1>
      <div class="book-wrapper" v-for="book in bookList">
        <div class="cover">
          <img :src="book.cover.url | imageUrlFilter" alt="book.title">
        </div>
        <div class="info">
          <h3>{{ book.title }}</h3>
          <rate :value="book.rating.value" :max="book.rating.max" v-if="book.rating"></rate>
          <span class="meta">{{ book.info }}</span>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'base/scroll/scroll'
  import Rate from 'base/rate/rate'
  import { getFictionBooks, getNonfictionBooks, getStoreBooks } from 'api/book'

  const FetchCount = 18;

  export default {
    data() {
      return {
        bookList: []
      }
    },
    created() {
      this.start = 0
    },
    mounted() {
      this.fetchData(this.start, FetchCount).then((res) => {
        this.bookList = this.bookList.concat(res.subject_collection_items)
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

        if (params.type === 'hotfiction') {
          return '最受关注图书｜虚构类'
        } else if (params.type === 'hotnofiction') {
          return '最受关注图书｜非虚构类'
        } else if (params.type === 'mobilestore') {
          return '豆瓣书店'
        }
      }
    },
    methods: {
      fetchData(start, count) {
        const { params } = this.$route

        let proxy = getFictionBooks
        if (params.type === 'hotnofiction') {
          proxy = getNonfictionBooks
        } else if (params.type === 'mobilestore') {
          proxy = getStoreBooks
        }

        return proxy(start, count).then((res) => {
          this.start = start + count
          return res
        })
      },
      onPullingUp() {
        // 加载数据
        this.fetchData(this.start, FetchCount).then((res) => {
          this.bookList = this.bookList.concat(res.subject_collection_items)
          this.$refs.scroll.forceUpdate(true)
        })
      }
    },
    components: {
      Scroll,
      Rate
    }
  }
</script>

<style lang="css">
  .book-list-wrapper {
    padding-left: 2%;
    padding-right: 2%;
    margin: 0 auto;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }
  .book-list-wrapper h1 {
    font-size: 24px;
    font-weight: normal;
    box-sizing: border-box;
    max-width: 660px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 6px;
    padding-left: 4%;
    color: #494949;
  }
  .book-list-wrapper .scroll {
    height: 100%;
  }
  .book-wrapper {
    display: flex;
    padding: 20px 4%;
    overflow: hidden;
    position: relative;
  }
  .book-wrapper::after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    content: '';
    position: absolute;
    background-color: #ccc;
    transform: scaleY(0.5);
    transform-origin: 0 bottom;
  }
  .book-wrapper .cover {
    margin-right: 15px;
    width: 100px;
    min-height: 100px;
    min-width: 100px;
  }
  .book-wrapper .cover img {
    width: 100%;
  }
  .book-wrapper .info {

  }
  .book-wrapper .info h3 {
    margin: 0;
    font-size: 17px;
    padding: 0 0 5px;
    color: #494949;
  }
  .book-wrapper .info .rating {

  }
  .book-wrapper .info .meta {
    font-size: 12px;
    padding-top: 5px;
    color: #9b9b9b;
  }
</style>
