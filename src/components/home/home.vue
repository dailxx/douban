<template lang="html">
  <div>
    <m-nav></m-nav>
    <div class="page">
      <div class="card">
        <ul class="quick-nav">
          <li><a href="#">影院热映</a></li>
          <li><a href="#">最受关注图书</a></li>
          <li><a href="#">豆瓣时间</a></li>
          <li><a href="#">使用豆瓣App</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MNav from '@/components/home/nav/nav'

export default {
  components: {
    MNav
  }
}
</script>

<style lang="css">
  a {
    text-decoration: none;
    text-align: center;
  }
  .page {
    padding-top: 47px;
    max-width: 650px;
    background-color: #fff;
    margin: 0 auto;
    overflow-x: hidden;
    height: 200px;
  }
  .card {
    margin: 0 18px;
    height: 200px;
  }
  .quick-nav {
    overflow: hidden;
    display: block;
    list-style: none;
    padding: 6px 0 0 0;
    margin: 20px 0 0 0;
  }
  .quick-nav li {
    float: left;
    width: 50%;
    padding: 3px;
    box-sizing: border-box;
    font-size: 15px;
  }
  .quick-nav li a {
    background-color: #f6f6f6;
    color: #494949;
    display: block;
    text-align: center;
    padding: 12px 0;
    border-radius: 2px;
  }
</style>
