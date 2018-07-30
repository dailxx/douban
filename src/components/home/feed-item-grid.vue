<template lang="html">
  <feed-item :author="author" :source="source" direction="column">
    <div class="photos">
      <div class="main" :style="imageStyle(imageUrl)">
      </div>
      <div class="aside">
        <div class="aside-pic">
          <div :style="imageStyle(moreImageUrl[0])">
            <div style="paddingTop:100%"></div>
          </div>
        </div>
        <div class="aside-pic">
          <div :style="imageStyle(moreImageUrl[1])">
            <div style="paddingTop:100%"></div>
          </div>
          <div class="more-pic">
            <span class="count">{{ photoCount }}+</span>
          </div>
        </div>
      </div>
    </div>
    <h3 style="marginBottom:6px">{{ title }}</h3>
  </feed-item>
</template>

<script>
  import Vue from 'vue'
  import FeedItem from './feed-item'

  export default {
    methods: {
      imageStyle(url) {
        let filter = Vue.filter('imageUrlFilter')

        return {
          backgroundColor: 'rgb(250, 250, 250)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: `url('${ filter(url) }')`
        }
      }
    },
    computed: {
      title() {
        return this.feed.title
      },
      author() {
        return this.feed.target.author.name
      },
      source() {
        return this.feed.source_cn
      },
      photoCount() {
        return this.feed.target.photos_count - 3
      },
      imageUrl() {
        return this.feed.target.cover_url
      },
      moreImageUrl() {
        return this.feed.target.more_pic_urls
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
  .photos {
    display: flex;
    margin-bottom: 10px;
  }
  .photos .main {
    display: flex;
    flex: 3.2;
    margin-right: 4px;
  }
  .photos .aside {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .aside-pic:last-child {
    margin-top: 4px;
    position: relative;
  }
  .more-pic {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    text-align: center;
    display: flex;
    align-items: center;
  }
  .count {
    display: block;
    width: 100%;
    font-size: 12px;
  }
</style>
