<template>
    <div class="wrap">
      <div class="middle">
        <header class="header">
          <span class="title">购物车</span>
          <span class="right">
          <a href="javascript:;">领券</a>
        </span>
        </header>
      </div>
      <div class="content">
        <ul class="m-servicePolicy">
          <li>
            <i class="iconfont u-icon icon-yuanquanweixuanfuben"></i>
            <span class="txt">30天无忧退货</span>
          </li>
          <li>
            <i class="iconfont u-icon icon-yuanquanweixuanfuben"></i>
            <span class="txt">48小时快速退款</span>
          </li>
          <li>
            <i class="iconfont u-icon icon-yuanquanweixuanfuben"></i>
            <span class="txt">满88元免邮费</span>
          </li>
        </ul>
        <div class="m-defaultPage">
          <div class="container">
            <div class="img">
              <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
            </div>
            <div class="down">
              <span class="one">去添加点什么吧</span>
              <span class="two" @click="$router.push(`/login`)">登陆</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "ShopCart"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .wrap
    width: 100%
    height 100%
    overflow hidden
    .middle
      height: 1.17333rem;
      bottom-border-1px(#ddd)
      padding: 0 .4rem;
      line-height: 1.17333rem;
      text-align: center;
      background-color: #fff;
      .header
        position: relative;
        .title
          font-size: .48rem;
        .right
          display: block;
          position: absolute;
          color: #B4282D;
          font-size: .4rem;
          right: .35rem;
          top: 0;
          > a
            color: #B4282D;

    .content
      background: #f4f4f4;
      width: 100%;
      .m-servicePolicy
        position: relative;
        z-index: 1;
        height: .93333rem;
        display flex
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 0 .4rem;
        >li
          line-height .93333rem;
          .u-icon
            font-size 12px
          .txt
            color #666


      .m-defaultPage
        width: 100%
        .container
          width 100%
          height 1100px
          position relative
          .img
            width: 248px
            height: 248px
            position absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            margin auto
          .down
            position absolute
            left: 140px
            bottom: 270px
            zoom: 1
            .one
              display block
              margin-bottom: .66667rem;
              line-height: 1;
              font-size: .37333rem;
              text-align center
              color: #999;
            .two
              display block
              margin: auto;
              width: 6.4rem;
              height: 1.22667rem;
              font-size: .4rem;
              line-height: 1.22667rem;
              text-align center
              color: #fff;
              background-color: #b4282d;
              border-radius: .04rem;
</style>
