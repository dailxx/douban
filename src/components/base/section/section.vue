<template lang="html">
  <div style="overflow:hidden">
    <section-header :type="type" @clickMore="handleClickMore"></section-header>
    <slot></slot>
    <div class="content">
      <ul>
        <li v-for="item in items" class="item">
          <section-item
            :title="item.title"
            :image-url="item.cover.url | imageUrlFilter"
            :score="item.rating ? item.rating.value : 0"
            :maxScore="item.rating ? item.rating.max: 0"
            :key="item.id">
          </section-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import SectionItem from './section-item'
  import SectionHeader from './section-header'

  export default {
    props: {
      items: {
        type: Array,
        default: null
      },
      type: String
    },
    methods: {
      handleClickMore() {
        this.$emit('clickMore')
      }
    },
    components: {
      SectionItem,
      SectionHeader
    }
  }
</script>

<style lang="css" scoped>
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
