<template lang="html">
  <div class="">
    <section-header type="分类浏览" :showMore="false"></section-header>
    <div>
      <ul>
        <li v-for="category in categories">{{ category }}<span></span></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import SectionHeader from './section-header'

  export default {
    props: {
      categories: Array
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
    margin-left: 18px;
    padding: 18px 0 30px 0;
    font-size: 0;
  }
  li {
    box-sizing: border-box;
    display: inline-block;
    color: #42bd56;
    font-size: 14px;
    width: 50%;
    height: 42px;
    line-height: 42px;
    border-top: 1px solid #eee;
    padding-right: 18px;
  }
  li:nth-of-type(odd) {
    border-right: 1px solid #eee;
  }
  li:nth-of-type(even) {
    padding-left: 18px;
  }
  li:nth-last-child(2),
  li:last-child {
    border-bottom: 1px solid #eee;
  }
  span {
    font-weight: bold;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    transform: rotate(-45deg);
    float: right;
    margin-top: 16px;
  }
</style>
