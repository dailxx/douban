<template lang="html">
  <feed-item :author="author" :source="source">
    <div class="desc">
      <h3>{{ title }}</h3>
      <p>{{ desc }}</p>
    </div>
    <div class="cover" :style="coverStyle" v-show="imageUrl.length">
      <div style="paddingTop:100%"></div>
    </div>
  </feed-item>
</template>

<script>
  import Vue from 'vue'
  import FeedItem from './feed-item'

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
    },
    components: {
      FeedItem
    }
  }
</script>

<style lang="css">
  .desc {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .desc h3 {
    text-align: justify;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.41;
    margin-bottom: 6px;
  }
  .desc p {
    text-align: justify;
    color: #aaa;
    font-size: 12px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
  }
  .cover {
    width: 25.6%;
    margin-left: 25px;
  }
</style>
