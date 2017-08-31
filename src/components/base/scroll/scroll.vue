<template lang="html">
  <div ref="wrapper">
    <div>
      <slot></slot>

      <slot name="pullup"
            :pullUpLoad="pullUpLoad"
            :isPullUpLoad="isPullUpLoad">
        <div class="pullup-wrapper" v-if="pullUpLoad">
          <div class="before-trigger" v-if="!isPullUpLoad">
            <span>{{ pullUpTxt }}</span>
          </div>
          <div class="after-trigger" v-else>
            <loading></loading>
          </div>
        </div>
      </slot>
    </div>

    <slot name="pulldown"
          :pullDownRefresh="pullDownRefresh"
          :pullDownStyle="pullDownStyle"
          :beforePullDown="beforePullDown"
          :pulling="pulling">
      <div class="pulldown-wrapper" :style="pullDownStyle" v-if="pullDownRefresh">
        <div class="before-trigger" v-if="beforePullDown">
          <span>下拉即可刷新</span>
        </div>
        <div class="after-trigger" v-else>
          <div v-if="pulling">
            <loading></loading>
          </div>
          <div v-else>
            <span>{{ refreshTxt }}</span>
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Loading from './loading'

  const DIRECTION_H = 'horizontal'
  const DIRECTION_V = 'vertical'
  const DEFAULT_LOAD_TXT_MORE = '加载更多'
  const DEFAULT_LOAD_TXT_NO_MORE = '没有更多数据了'
  const DEFAULT_REFRESH_TXT = '刷新成功'

  export default {
    props: {
      data: {
        type: Array,
        default: null
      },
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      bounce: {
        type: Boolean,
        default: true
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      listenBeforeScroll: {
        type: Boolean,
        default: false
      },
      direction: {
        type: String,
        default: DIRECTION_V
      },
      scrollbar: {
        type: null,
        default: false
      },
      pullDownRefresh: {
        type: null,
        default: false
      },
      pullUpLoad: {
        type: null,
        default: false
      },
      startY: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        beforePullDown: true,
        isRebounding: false,
        isPullingDown: false,
        pulling: false,
        isPullUpLoad: false,
        pullUpDirty: true,
        pullDownStyle: '',
      }
    },
    created() {
      this.pullDownInitTop = -50
    },
    mounted() {
      setTimeout(() => {
        this._initScroll()
      }, 20);
    },
    computed: {
      pullUpTxt() {
        const moreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.more || DEFAULT_LOAD_TXT_MORE
        const noMoreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.noMore || DEFAULT_LOAD_TXT_NO_MORE
        return this.pullUpDirty ? moreTxt : noMoreTxt
      },
      refreshTxt() {
        return this.pullDownRefresh && this.pullDownRefresh.txt || DEFAULT_REFRESH_TXT
      }
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }

        let options = {
          probeType: this.probeType,
          click: this.click,
          bounce: this.bounce,
          scrollY: this.direction === DIRECTION_V,
          scrollX: this.direction === DIRECTION_H,
          scrollbar: this.scrollbar,
          pullDownRefresh: this.pullDownRefresh,
          pullUpLoad: this.pullUpLoad,
          startY: this.startY
        }

        this.scroll = new BScroll(this.$refs.wrapper, options)

        if (this.listenScroll) {
          this.scroll.on('scroll', (pos) => {
            this.$emit('scroll', pos)
          })
        }

        if (this.listenBeforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScrollStart')
          })
        }

        if (this.pullDownRefresh) {
          this._initPullDownRefresh()
        }

        if (this.pullUpLoad) {
          this._initPullUpLoad()
        }
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      },
      destory() {
        this.scroll && this.scroll.destory()
      },
      forceUpdate(dirty) {
        if (this.pullDownRefresh && this.isPullingDown) {
          this.pulling = false
          this._reboundPullDown().then(() => {
            this._afterPullDown()
          })
        } else if (this.pullUpLoad && this.isPullUpLoad) {
          this.isPullUpLoad = false
          this.scroll.finishPullUp()
          this.pullUpDirty = dirty
          this.refresh()
        } else {
          this.refresh()
        }
      },
      _initPullDownRefresh() {
        this.scroll.on('pullingDown', () => {
          this.beforePullDown = false
          this.isPullingDown = true
          this.pulling = true
          this.$emit('pullingDown')
        })

        this.scroll.on('scroll', (pos) => {
          console.log(pos);
          if (this.beforePullDown) {
            this.pullDownStyle = `top:${ Math.min(pos.y + this.pullDownInitTop, 10) }px`
          } else {

          }

          if (this.isRebounding) {
            this.pullDownStyle = `top:${ 10 - (this.pullDownRefresh.stop - pos.y) }px`
          }
        })
      },
      _initPullUpLoad() {
        this.scroll.on('pullingUp', () => {
          this.isPullUpLoad = true
          this.$emit('pullingUp')
        })
      },
      _reboundPullDown() {
        const { stopTime = 600 } = this.pullDownRefresh
        return new Promise((resolve) => {
          setTimeout(() => {
            this.isRebounding = true
            this.scroll.finishPullDown()
            this.isPullingDown = false
            resolve()
          }, stopTime)
        })
      },
      _afterPullDown() {
        setTimeout(() => {
          this.pullDownStyle = `top:${ this.pullDownInitTop }px`
          this.beforePullDown = true
          this.isRebounding = false
          this.refresh()
        }, this.scroll.options.bounceTime)
      }
    },
    watch: {
      data() {
        setTimeout(() => {
          this.refresh()
        }, 20)
      }
    },
    components: {
      Loading
    }
  }
</script>

<style lang="css" scoped>
  .pulldown-wrapper {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all;
  }
  .pulldown-wrapper .after-trigger {
    margin-top: 10px;
  }
  .pullup-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
  }
</style>
