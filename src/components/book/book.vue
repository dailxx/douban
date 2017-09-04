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
            <p class="name">自由与爱之地</p>
            <span class="price">¥ 49</span>
          </div>
          <p class="infoWithoutReviewer">应许之地的爱与自由，一场31天以色列非典型旅行</p>
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

  const Fiction = '最受关注图书｜虚构类'
  const Nofiction = '最受关注图书｜非虚构类'
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

        fiction: Fiction,
        nofiction: Nofiction,
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
  .name {
    display: inline;
    font-size: 19px;
    color: #494949;
  }
</style>
