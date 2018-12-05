<template>
  <footer class="footer_guide border-1px" v-show="$route.meta.isShow">
    <!--图标亮起看class   on-->
    <a href="javascript:;" class="guide_item" @click="goTo(`/homepage`)" :class="{on:isEvent(`/homepage`)}">
      <span class="item_icon">
        <i class="iconfont icon-1212"></i>
      </span>
      <span>首页</span>
    </a>

    <a href="javascript:;" class="guide_item" @click="goTo(`/classification`)" :class="{on:isEvent(`/classification`)}">
      <span class="item_icon">
        <i class="iconfont icon-fenleigongnengleimu"></i>
      </span>
      <span>分类</span>
    </a>

    <a href="javascript:;" class="guide_item" @click="goTo(`/identifying`)" :class="{on:isEvent(`/identifying`)}">
      <span class="item_icon">
        <i class="iconfont icon-find"></i>
      </span>
      <span>识物</span>
    </a>

    <a href="javascript:;" class="guide_item" @click="goTo(`/shopcart`)" :class="{on:isEvent(`/shopcart`)}">
      <span class="item_icon">
        <i class="iconfont icon-gouwuchekong"></i>
      </span>
      <span>购物车</span>
    </a>

    <a href="javascript:;" class="guide_item" @click="goTo(`/profile`)" :class="{on:isEvent(`/profile`)}">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>

</template>

<script>
  export default {
    name: "foot-guide",
    methods: {
      goTo(url) {
        this.$router.replace(url)
      },
      isEvent(path) {
        return this.$route.path === path
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 99999
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 1.30667rem
    display flex
    text-align center
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 0.066667rem
      color #999999
      .item_icon
        color #E43929
      &.on
        color #E43929
      span
        display: block;
        margin-top: .09333rem;
        font-size: .32rem;
        line-height: 1
        .iconfont
          font-size .65rem
</style>
