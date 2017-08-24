<template lang="html">
  <div>
    <scroll :data="list" style="height: 200px; overflow:hidden;">
      <div>
        <p v-for="(n, idx) in list" style="color: #000">{{ idx }}</p>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'base/scroll/scroll'
  import BScroll from 'better-scroll'
  import jsonp from 'common/js/jsonp'

  export default {
    data() {
      return {
        showingList: [],
        freeList: [],
        comingList: []
      }
    },
    mounted() {
      jsonp('api/v2/subject_collection/movie_showing/items?os=ios&start=0&count=8')
        .then((data) => {
          console.log(data)
        })
      // axios.get('/v2/movie/in_theaters').then((response) => {
      //   console.log(response.data)
      // })
    },
    components: {
      Scroll
    }
  }
</script>

<style lang="css" scoped>
  * {
    margin: 0;
    padding: 0;
  }
</style>
