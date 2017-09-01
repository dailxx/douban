<template lang="html">
  <div class="item">
    <div class="content">
      <div class="desc">
        <h3>{{ title}}</h3>
        <p>{{ desc }}</p>
      </div>
      <div class="cover" :style="coverStyle" v-show="imageUrl.length">
        <div style="paddingTop:100%">
        </div>
      </div>
      <!-- <img :src="imageUrl | imageUrlFilter" v-show="imageUrl.length"> -->
    </div>
    <div class="other">
      <span>by {{ author }}</span>
      <span>{{ source }}</span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    computed: {
      title() {
        return this.feed.title
      },
      desc() {
        return this.feed.target.desc
      },
      imageUrl() {
        return this.feed.target.cover_url
      },
      author() {
        return this.feed.target.author.name
      },
      source() {
        return this.feed.source_cn
      },
      coverStyle() {
        let filter = Vue.filter('imageUrlFilter')

        return {
          backgroundColor: 'rgb(250, 250, 250)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: `url('${ filter(this.imageUrl) }')`
        }
      }
    },
    props: {
      feed: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="css" scoped>
  h3, p {
    margin: 0;
  }
  .item {
    display: flex;
    flex-direction: column;
    padding: 25px 18px 25px 0;
    margin-left: 18px;
    color: #494949;
    border-bottom: 1px solid #e3e3e3;
    box-sizing: border-box;
  }
  .content {
    display: flex;
    margin-bottom: 10px;
    overflow: hidden;
    align-items: flex-start;
  }
  .content .desc {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .content .desc h3 {
    text-align: justify;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.41;
    margin-bottom: 6px;
  }
  .content .desc p {
    text-align: justify;
    color: #aaa;
    font-size: 12px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
  }
  .content .cover {
    width: 25.6%;
    margin-left: 25px;
  }
  .other {
    display: flex;
    justify-content: space-between;
  }
  .other span {
    font-size: 12px;
    color: #ccc;
  }
</style>
