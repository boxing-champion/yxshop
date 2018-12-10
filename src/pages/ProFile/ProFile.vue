<template>
  <section class="profile">
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
              <a href="/" class="logo"></a>
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
    <div class="wrap">
      <div class="login">
        <div class="up">
          <div class="tree">
            <span class="ava"></span>
            <div class="info">
              <div>
                <span class="user" v-if="!user._id">请登陆/注册</span>
                <span class="user" v-if="user.name">用户名: {{user.name}}</span>
                <span class="user" v-if="user.phone">{{user.phone}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="down">
          <ul>
            <li class="item">
              <span class="count">666</span>
              <p class="txt">收藏</p>
            </li>
            <li class="item">
              <span class="count">6</span>
              <p class="txt">收藏店铺</p>
            </li>
            <li class="item">
              <span class="count">88</span>
              <p class="txt">红包卡券 </p>
            </li>
            <li class="item">
              <span class="count">125</span>
              <p class="txt">我的足迹</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="middle">
        <div class="bord">
          <div class="m-order">
            <span style="position: relative;left: 0.3rem;">我的订单</span>
            <span style="position: relative;right: 0.5rem;">查看全部订单&gt;</span>
          </div>
          <div class="cart">
            <ul>
              <li class="cartlist">
                <i class="iconfont c-icon icon-find"></i>
                <span class="list">待付款</span>
              </li>
              <li class="cartlist">
                <i class="iconfont c-icon icon-fenleigongnengleimu"></i>
                <span class="list">待发货</span>
              </li>
              <li class="cartlist">
                <i class="iconfont c-icon icon-gouwuchekong"></i>
                <span class="list">待收货</span>
              </li>
              <li class="cartlist">
                <i class="iconfont c-icon icon-geren"></i>
                <span class="list">评价</span>
              </li>
              <li class="cartlist">
                <i class="iconfont c-icon icon-1212"></i>
                <span class="list">退货售后</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="logout">
        <div class="logout-middle">
          <div class="bt" @click="logout">退出登录</div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  import {mapState} from "vuex"
  import {MessageBox} from 'mint-ui'

  export default {
    name: "profile",
    computed: {
      ...mapState(["user"])
    }, methods: {
      logout() {
        MessageBox.confirm("确定要退出吗?").then(
          action => {
            this.$store.dispatch("getLogout")
            this.$router.replace("/login")
          },
          action => {
            console.log("baga");
          }
        )
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .profile
    width 100%
    height 100%
    overflow hidden
    .m-hwrapper
      width: 100%
      position: relative;
      height: 1.17333rem;
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
              left: 50%;
              top: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-left: -1.6rem;
              .logo
                width: 2rem;
                height: .6rem;
                background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
                background-size: 100% 100%;
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

    .wrap
      width 100%
      height 350px
      background: linear-gradient(to top right, #ff1493, #dc143c);
      .login
        width: 100%
        height 100%
        .up
          width: 100%
          height 50%
          padding .5rem
          .tree
            width: 100%
            height 100%
            display flex
            .ava
              width: 100px
              height: 100px
              border-radius 50%
              background url("./images/timg.jpg") no-repeat
              background-size: 100% 100%;
              display block
            .info
              margin-left .6rem
              display flex
              align-items: center;
              height 100%
              > div
                zoom: 1
                display flex
                flex-direction: column;
                .user
                  color #fff
                  font-size 34px

        .down
          width 100%
          height 50%
          > ul
            display flex
            width: 100%
            height 100%
            .item
              width 25%
              height 100%
              display flex
              flex-direction: column;
              justify-content: center;
              align-items: center;
              color: #fff
              font-size 30px
              .count
                font-size 26px
                display block
                margin-bottom: 0.4rem
    .content
      width 100%;
      height 1000px
      background-color #ddd
      .middle
        width 100%
        height 220px
        padding 0 0.5rem;
        .bord
          width 100%
          height 100%
          font-size 28px
          position relative
          left: 0
          bottom: 30px
          border-radius 20px
          background-color white
          .m-order
            bottom-border-1px(#ddd)
            width 100%
            justify-content: space-between
            align-items: center
            display flex
            flex-wrap: nowrap
            height 60px
          .cart
            width: 100%
            height 160px
            > ul
              height 100%
              display flex
              align-items center
              .cartlist
                display flex
                text-align center
                flex-direction column
                align-items center
                width 20%
                .list
                  margin-top: .5rem;
                  display block
                .c-icon
                  font-size .65rem

      .logout
        width 100%
        height 80px
        padding 0 .5rem
        .logout-middle
          width 100%
          height 100%
          .bt
            width 100%
            color white
            background-color #dc143c
            height 100%
            text-align center
            line-height 80px
            font-size 35px
            border-radius .8rem
</style>

