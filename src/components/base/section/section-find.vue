<template lang="html">
  <div style="overflow:hidden">
    <section-header type="发现好电影" :showMore="false"></section-header>
    <div style="marginBottom:-18px">
      <ul>
        <li v-for="topic in firstHalfTopics" :style="border()">
          <a href="#" :style="color()">{{ topic }}</a>
        </li>
        <li class="line"></li>
        <li v-for="topic in secondHalfTopics" :style="border()">
          <a href="#" :style="color()">{{ topic }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import SectionHeader from './section-header'

  export default {
    data() {
      return {
        count: 0,
        currentColor: ''
      }
    },
    props: {
      topics: {
        type: Array,
        default: null
      }
    },
    methods: {
      randomColor() {
        this.count++
        if (this.count %  2 === 0) {
          return this.currentColor
        } else {
          let colors = ['#42BD56', '#CC3344', '#FFC46C', '#4F9DED']
          let idx = Math.floor((Math.random() * (colors.length - 1)) + 1)
          this.currentColor = colors[idx]
          return colors[idx]
        }
      },
      border() {
        return `borderColor:${ this.randomColor() }`
      },
      color() {
        return `color:${ this.randomColor() }`
      }
    },
    computed: {
      firstHalfTopics() {
        return this.topics.slice(0, 4)
      },
      secondHalfTopics() {
        return this.topics.slice(4)
      },
    },
    components: {
      SectionHeader
    }
  }
</script>

<style lang="css" scoped>
  ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  ul {
    white-space: nowrap;
    overflow-x: auto;
    padding: 15px 0 43px 10px;
  }
  li {
    display: inline-block;
    border: 1px solid #2384E8;
    border-radius: 4px;
    margin: 0 0 8px 8px;
  }
  a {
    display: block;
    height: 50px;
    line-height: 50px;
    color: #2384E8;
    text-decoration: none;
    padding: 0 25px;
    letter-spacing: 1.5px;
  }
  .line {
    width: 100%;
    display: block;
    height: 1px;
    border: 0;
    margin: 0;
  }
</style>
