<template lang="html">
  <div>
    <book-section
      :items="fictionList"
      :type="fiction"
      @clickMore="handleClickMore(fiction)"
      style="paddingTop: 10px;"/>
    <book-section
      :items="nonfictionList"
      :type="nofiction"
      @clickMore="handleClickMore(nofiction)"/>
    <book-section
      :items="storeList"
      :type="mobileStore"
      @clickMore="handleClickMore(mobileStore)">
      <div class="promBook">
        <img class="cover"
          :src="storeHeader.cover.url | imageUrlFilter"
          :alt="storeHeader.title"/>
        <div class="content">
          <div class="title">
            <span class="name">{{ storeHeader.title }}&nbsp;</span>
            <span class="price">¥ {{ storeHeader.price }}</span>
          </div>
          <p class="infoWithoutReviewer">{{ storeHeader.info }}</p>
        </div>
      </div>
    </book-section>
    <book-section-find :topics="findList"></book-section-find>
    <book-section-category :categories="categoryList"></book-section-category>
  </div>
</template>

<script>
  import { getFictionBooks, getNonfictionBooks, getStoreBooks, getFindTopics, getCategories } from 'api/book'
  import BookSection from 'base/section/section'
  import BookSectionFind from 'base/section/section-find'
  import BookSectionCategory from 'base/section/section-category'

  const HotFiction = '最受关注图书｜虚构类'
  const HotNofiction = '最受关注图书｜非虚构类'
  const MobileStore = '豆瓣书店'

  export default {
    data() {
      return {
        fictionList: [],
        nonfictionList: [],
        storeList: [],
        findList: [],
        categoryList: [],
        storeHeader: null,

        fiction: HotFiction,
        nofiction: HotNofiction,
        mobileStore: MobileStore
      }
    },
    mounted() {
      this.findList = getFindTopics()
      this.categoryList = getCategories()
      getFictionBooks().then((res) => {
        this.fictionList = res.subject_collection_items
      })
      getNonfictionBooks().then((res) => {
        this.nonfictionList = res.subject_collection_items
      })
      getStoreBooks().then((res) => {
        this.storeList = res.subject_collection_items
        this.storeHeader = res.header
      })
    },
    methods: {
      handleClickMore(type) {
        if (type === HotFiction) {
          this.$router.push({ path: '/book/hotfiction' })
        } else if (type === HotNofiction) {
          this.$router.push({ path: '/book/hotnofiction' })
        } else {
          this.$router.push({ path: '/book/mobilestore' })
        }
      }
    },
    components: {
      BookSection,
      BookSectionFind,
      BookSectionCategory
    }
  }
</script>

<style lang="css" scoped>
  .promBook {
    overflow: hidden;
    margin: 15px 18px 0;
    display: flex;
    align-items: flex-start;
  }
  .cover {
    width: 100px;
    margin-right: 15px;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
  .title {
    display: flex;
    margin: 10px 0;
    justify-content: space-between;
  }
  .name {
    font-size: 19px;
    color: #494949;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
  .price {
    color: #e76648;
    font-size: 16px;
    line-height: 22px;
  }
  .infoWithoutReviewer {
    margin: 0;
    font-size: 13px;
    font-weight: 300;
    line-height: 1.5;
    color: #9b9b9b;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
</style>
