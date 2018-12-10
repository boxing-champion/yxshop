<template>
  <div>
    <div class="m-hwrapper">
      <header class="psc-g-hd">
        <div class="psc-m-topbar">
          <div class="psc-row">
            <div class="psc-m-hamburger">
              <a href="/" class="psc-u-nav-link">
                <i class="iconfont u-icon icon-jia"></i>
              </a>
            </div>
            <div class="m-head-tab">
              <a href="javascript:;" class="item active">发现</a>
              <a href="javascript:;" class="item">甄选家</a>
            </div>
            <div class="psc-m-right">
              <a href="javascript:;" class="psc-u-nav-link psc-u-link-cart">
                <i class="iconfont c-icon icon-gouwuchekong"></i>
              </a>
              <a href="javascript:;" class="psc-u-nav-link psc-u-link-search">
                <i class="iconfont s-icon icon-sousuo"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div class="m-main-tab">
      <div class="u-scroll-wrapper">
        <a :href="`/#/identifying?tab=${tab.tabId}`" class="item" v-for="(tab,index) of tabs" :class="{active:$refs.indent.currentIndex === tab.tabId}"
           :key="index">{{tab.tabName}}</a>
      </div>
    </div>
    <Split/>
    <indentMain ref="indent"/>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  import indentMain from "../../components/indentMain/indentMain"

  export default {
    name: "identifying",
    data() {
      return {

      }
    },
    computed: {
      ...mapState(["tabs"]),
    },
    mounted() {
      this.$store.dispatch("getTabs")

    },
    components: {
      indentMain
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .m-hwrapper
    width: 100%
    position: relative;
    height: 100px
    .psc-g-hd
      position: fixed !important;
      left: 0;
      top: 0;
      z-index: 99;
      width: 100%;
      height 100px
      .psc-m-topbar
        border-bottom: .01rem solid #d9d9d9;
        position: relative;
        height: 100px;
        background-color: #fafafa;
        .psc-row
          max-width: 768px;
          height: 100px;
          margin: auto;
          overflow: hidden;
          padding: 0 .26rem 0 .24rem;
          position: relative;
          .psc-m-hamburger
            display: block;
            float: left;
            .psc-u-nav-link
              display: block;
              height: 1rem;
              .u-icon
                display block
                margin-top: 25px
                font-size 50px
          .m-head-tab
            position: absolute;
            width: 3.2rem;
            height: 100%;
            line-height: 100px;
            text-align: center;
            left: 50%;
            top: 0;
            margin-left: -1.6rem;
            font-size: 28px;
            color: #7F7F7F;
            z-index: 1;
            .item
              padding: 0 .16rem;
              vertical-align: middle;
              &.active
                font-size: 40px;
                color: #b4282d;
                font-weight: bold;
          .psc-m-right
            display: block;
            float: right;
            height: 100px;
            .psc-u-nav-link
              display block
              &.psc-u-link-cart
                float: right;
                .c-icon
                  display block
                  margin-top: 25px
                  font-size 50px
              &.psc-u-link-search
                float: right;
                margin-right: .3rem;
                .s-icon
                  display block
                  margin-top: 25px
                  font-size 50px

  .m-main-tab
    border-bottom: .01rem solid #d9d9d9;
    width 100%;
    height: 72px;
    background: #fafafa;
    .u-scroll-wrapper
      width 100%;
      height: 72px;
      position: absolute;
      left: 0;
      z-index: 20;
      top: 100px
      zoom: 1
      .item
        display: inline-block;
        width 19%;
        height: 72px;
        line-height: 72px;
        color: #7F7F7F;
        font-size: 28px;
        text-align center;
        vertical-align: middle;
        &.active
          color: #B4282D;
          border-bottom: .04rem solid #B4282D;

</style>
