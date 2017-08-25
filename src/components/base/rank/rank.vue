<template lang="html">
  <div>
    <span class="rating-stars">
      <span class="rating-star rating-star-small-full"></span>
      <span class="rating-star rating-star-small-full"></span>
      <span class="rating-star rating-star-small-full"></span>
      <span class="rating-star rating-star-small-gray"></span>
      <span class="rating-star rating-star-small-gray"></span>
    </span>
    <span>6.8</span>
  </div>
</template>

<script>
  export default {
    props: {
      star: Number
    }
  }
</script>

<style lang="css" scoped>
  .rating-stars {
    display: inline-block;
    vertical-align: middle;
  }
  .rating-stars .rating-star {
    display: inline-block;
    margin-right: 1px;
    background-color: #0000;
    background-repeat: no-repeat;
  }
  .rating-star-small-full,
  .rating-star-small-gray {
    width: 10px;
    height: 10px;
    background-size: 10px 10px;
  }
  .rating-star-small-full {
    background-image: url('../../assets/image/rating_star_full.png');
  }
  .rating-star-small-gray {
    background-image: url('../../assets/image/rating_star_gray.png');
  }
</style>
