<template lang="html">
  <div class="quick-nav">
    <div>
      <a href="javascript:void(0)">影院热映</a>
      <a href="javascript:void(0)">最受关注图书</a>
    </div>
    <div>
      <a href="javascript:void(0)">豆瓣时间</a>
      <a href="javascript:void(0)">使用豆瓣App</a>
    </div>
  </div>
</template>

<style lang="css" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .quick-nav {
    display: flex;
    flex-direction: column;
    margin: 0 18px;
    padding-top: 26px;
  }
  .quick-nav div {
    display: flex;
  }
  .quick-nav div a {
    flex: 1;
    padding: 12px 0px;
    margin: 3px;
    text-align: center;
    text-decoration: none;

    background-color: #f6f6f6;
    color: #494949;
    border-radius: 2px;
    font-size: 15px;
  }
</style>
