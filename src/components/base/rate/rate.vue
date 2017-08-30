<template lang="html">
  <div class="rank">
    <template v-if="value">
      <span class="rating-stars">
        <span class="rating-star rating-star-small-full" v-for="n in stars"></span>
        <span class="rating-star rating-star-small-gray" v-for="n in unstars"></span>
      </span>
      <span>{{ value | decimalFilter }}</span>
    </template>
    <template v-else>
      <span>暂无评分</span>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      value: Number,
      max: {
        type: Number,
        default: 10
      }
    },
    computed: {
      stars() {
        return Math.round(this.value * 5 / this.max)
      },
      unstars() {
        return 5 - this.stars
      }
    },
    filters: {
      decimalFilter(value) {
        return value.toFixed(1)
      }
    }
  }
</script>

<style lang="css" scoped>
  .rank {
    font-size: 12px;
    color: #aaa;
    vertical-align: middle;
    text-align: center;
  }
  .rating-stars {
    display: inline-block;
    font-size: 0;
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
    background-image: url('../../../assets/image/rating_star_full.png');
  }
  .rating-star-small-gray {
    background-image: url('../../../assets/image/rating_star_gray.png');
  }
</style>
