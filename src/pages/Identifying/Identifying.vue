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
        <a href="javascript:;" class="item active">推荐</a>
        <a href="javascript:;" class="item">达人</a>
        <a href="javascript:;" class="item">上新</a>
        <a href="javascript:;" class="item">晒单</a>
        <a href="javascript:;" class="item">HOME</a>
      </div>
    </div>
    <Split/>
    <div class="m-main">
        <div class="m-main-content">
          <div class="m-tpls-top">
            <a href="javescript:;">
              <div class="u-pic-top">
                <img src="https://yanxuan.nosdn.127.net/b7db4d98e47a94adda8b4d61bc5f4af0.jpg?imageView&quality=65&thumbnail=690y376" alt="">
              </div>
            </a>
          </div>
          <Split/>
          <ul class="m-tpls m-tpls-picker">
            <li>
              <a href="javescript:;" class="u-flexbox">
                <div class="info">
                  <div class="u-name">
                    <span class="ava">
                      <img src="https://yanxuan.nosdn.127.net/6311ec4540ebe620ddcd49b10e08a8f6.png?imageView&quality=65&thumbnail=56y56" alt="">
                    </span>
                    <span>服装组：小服</span>
                  </div>
                  <div class="title">双11忘买羽绒服？没关系，还有双12！</div>
                  <div class="desc">双12时髦保暖羽绒服低至6折</div>
                  <div class="u-rcount">
                    <i class="ico iconfont icon-yanjing"></i>
                    <span>15.5k人看过</span>
                  </div>
                </div>
                <div class="u-pic">
                  <img src="https://yanxuan.nosdn.127.net/affbdf2116ad47ae5fc904b02ab145f6.jpg?imageView&quality=65&thumbnail=272y272" alt="">
                </div>
              </a>

            </li>
          </ul>
          <Split/>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "identifying"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .m-hwrapper
    width: 100%
    position: relative;
    height:100px
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
      top:100px
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
  .m-main
    width: 100%
    height 100%
    .m-main-content
      zoom: 1
      .m-tpls-top
        width: 100%;
        background: #fff;
        margin: .2rem 0;
        padding: .36rem .3rem;
        >a
          zoom: 1
          .u-pic-top
            width 100%
            height: 376px;
            position: relative;
            overflow: hidden;
            border-radius: .08rem;
            >img
              width: 100%
              height 100%
              display block
    .m-tpls
      width: 100%;
      background: #fff;
      margin: .2rem 0;
      padding: .36rem .3rem;
      &.m-tpls-picker
        position: relative;
        padding: .32rem .3rem;
        .u-flexbox
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .info
            position relative
            width: 400px
            height 272px
            .u-name
              font-size: .28rem;
              color: #333;
              line-height: .36rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              .ava
                display inline-block
                width: 56px;
                height: 56px;
                overflow: hidden;
                border-radius: 50%;
                box-sizing: border-box;
                border: .01rem solid #d9d9d9;
                margin-right: .12rem;
                >img
                  width: 100%;
                  height: 100%;
              >span
                display: inline-block;
                vertical-align: middle;
            .title
              width: 100%;
              font-size: 36px;
              color: #333;
              line-height: .6rem;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              padding-top: .32rem;
              font-family: PingFangSC-Regular;
            .desc
              width: 100%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 28px;
              line-height: 40px;
              padding-top: 14px;
              color: #7f7f7f;
            .u-rcount
              font-size: 22px;
              color: #999;
              line-height: 22px;
              position: absolute;
              bottom: 0
              .ico
                font-size 28px

          .u-pic
            width: 272px;
            height: 272px;
            position: relative;
            overflow: hidden;
            border-radius: 8px;

</style>
