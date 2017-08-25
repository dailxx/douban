<template lang="html">
  <div style="overflow:hidden">
    <movie-header type="影院热映"></movie-header>
    <div class="content">
      <ul>
        <li v-for="movie in movies" class="item">
          <movie-item
            :title="movie.title"
            :image-url="movie.cover.url | imageUrlFilter"
            key="movie.id">
            </movie-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import MovieItem from './movie-item'
  import MovieHeader from './movie-header'

  export default {
    props: {
      movies: {
        type: Array,
        default: []
      }
    },
    components: {
      MovieItem,
      MovieHeader
    }
  }
</script>

<style lang="css" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .content {
    margin-bottom: -18px;
  }
  ul {
    list-style: none;
    white-space: nowrap;
    overflow-x: auto;
    font-size: 0;
    padding: 15px 0 43px 0;
  }
  .item {
    display: inline-block;
    margin-left: 7.5px;
    width: 100px;
    text-align: center;
    vertical-align: top;
  }
  .item:first-child {
    margin-left: 18px;
  }
  .item:last-child {
    margin-right: 18px;
  }
</style>
