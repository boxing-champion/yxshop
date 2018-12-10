<template>

  <div style="width: 100%;height: 100%">
    <!--头部开始-->
    <header class="m-indexHd" v-if="categoryHotSellModule.categoryList">
      <div class="line">
        <a class="logo" href="/"></a>
        <div class="m-topSearchIpt ipt">
          <i class="icon"></i>
          <span class="placeholder">搜索商品, 共19919款好物</span>
        </div>
        <div class="loginBtn">登录</div>
      </div>
      <div class="tabWrap">
        <div class="m-tabs">
          <div class="inner" style="position:relative;height:100%;width:100%;overflow:hidden;">
            <div class="list" ref="ul">
              <div ref="li" class="tab active" v-for="(hea,index) of categoryHotSellModule.categoryList[1]" :key="index">
                <span class="txt">{{hea.extra.operationResource.categoryName}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!--头部结束-->
    <!--下部分开始-->
    <div class="wrap">
      <div class="middle">
        <div class="wrap-content">

          <!--轮播图开始-->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(fl,index) of focusList" :key="index">
                <img style="width: 100%; height: 100%" :src="fl.picUrl"/>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <!--轮播图结束-->

          <!--low开始-->
          <div class="m-indexServicePolicy active" v-if="policyDescList[0]">
            <ul class="g-grow">
              <li class="item">
                <i class="iconfont icon-xuan"></i>
                <span class="text">{{policyDescList[0].desc}}</span>
              </li>
              <li class="item">
                <i class="iconfont icon-xuan">
                </i><span class="text">{{policyDescList[1].desc}}</span>
              </li>
              <li class="item">
                <i class="iconfont icon-xuan"></i>
                <span class="text">{{policyDescList[2].desc}}</span>
              </li>
            </ul>
          </div>
          <!--low结束-->

          <!--中心开始-->
          <div class="content">

            <!--one开始-->
            <div class="m-kingkongCarousel">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a href="javascript:;" class="link_to_shop" v-for="(king,index) of kingKongModule.kingKongList"
                     :key="index">
                    <div class="kingkong-item">
                      <img :src="king.picUrl">
                    </div>
                    <span>{{king.text}}</span>
                  </a>
                </div>
              </div>
            </div>
            <!--one结束-->

            <!--two开始-->
            <div class="m-indexBigPromotionModule" v-if="bigPromotionModule.bigPromotionList">
              <div class="m-lazyload">
                <img class="onetwo" :src="bigPromotionModule.bigPromotionList[0].data.contents[0].picUrl" alt="1212">
              </div>
            </div>
            <!--two结束-->

            <!--three开始-->
            <div class="m-Discount"
                 style="background: url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_496_750_588)">
              <div v-if="bigPromotionModule.bigPromotionList">
                <a href="#" class="newSup">
                  <div>
                    <img :src="bigPromotionModule.bigPromotionList[1].data.contents[0].picUrl" alt="hh">
                  </div>
                </a>
                <div class="promItem">
                  <a href="#">
                    <div class="m-lazyload">
                      <img :src="bigPromotionModule.bigPromotionList[1].data.contents[1].picUrl" alt="one">
                    </div>
                  </a>
                  <a href="#">
                    <div class="m-lazyload">
                      <img :src="bigPromotionModule.bigPromotionList[1].data.contents[2].picUrl" alt="two">
                    </div>
                  </a>
                </div>
                <div class="fast"
                     style="background:url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_1084_750_305);background-size:100% 100%;">
                  <a class="fast-one" href="#">
                    <div>
                      <img :src="bigPromotionModule.bigPromotionList[2].data.contents[0].picUrl" alt="">
                    </div>
                  </a>
                  <a class="fast-two" href="#">
                    <div>
                      <img :src="bigPromotionModule.bigPromotionList[2].data.contents[1].picUrl" alt="">
                    </div>
                  </a>
                </div>
                <div
                  style="width: 100%; height: 12.5px; background: url('https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_1389_750_15') 100% 100%;"></div>
              </div>
            </div>
            <!--three结束-->

            <!--four开始-->
            <div class="newVip">
              <div class="moduleTitle"><span class="txt">新人专享礼</span></div>

              <div class="new-content">
                <a class="left" href="javascript:void(0)">
                  <div class="name">新人专享礼包</div>
                  <div class="imgWrap">
                    <div class="m-lazyload img m-lazyload-loaded"><img class="swiper-lazy"
                                                                       src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png">
                    </div>
                    <div class="animate"></div>
                  </div>
                </a>
                <div class="right">
                  <div class="module1"><a class="m-activityItem" href="javascript:void(0)"
                                          style="background-image:url();background-size:100% 100%;">
                    <div class="picWrap">
                      <div class="m-lazyload pic m-lazyload-loaded"><img
                        class="swiper-lazy"
                        src="http://yanxuan.nosdn.127.net/2aa6c2c0c74258a3c895de220c79a875.png"></div>
                      <div class="discount">
                        <div class="line1">¥649</div>
                        <div class="line2">¥999</div>
                      </div>
                    </div>
                    <div class="cnt">
                      <div class="title">福利社</div>
                      <div class="subTitle">今日特价</div>
                      <span></span></div>
                  </a></div>
                  <div class="module2"><a class="m-activityItem" href="javascript:void(0)"
                                          style="background-image:url(undefined);background-size:100% 100%;">
                    <div class="picWrap">
                      <div class="m-lazyload pic m-lazyload-loaded"><img class="swiper-lazy"
                                                                         src="http://yanxuan.nosdn.127.net/589f0990b8ba1d354a698731afacd2d4.png">
                      </div>
                      <div class="discount">
                        <div class="line1">¥1</div>
                        <div class="line2">¥9</div>
                      </div>
                    </div>
                    <div class="cnt">
                      <div class="title">新人拼团</div>
                      <div class="subTitle"></div>
                      <div class="tag">1元起包邮</div>
                    </div>
                  </a></div>
                </div>
              </div>
            </div>
            <!--four结束-->

            <!--five开始-->
            <div class="m-indexManufacturersSupplying" v-if="tagList[0]">
              <div class="moduleTitle">
                <div class="left"><span>品牌制造商直供</span></div>
                <a class="right"><span>更多</span><i
                  class="iconfont u-icon icon-jiantouarrow484"></i></a></div>
              <ul class="list">
                <a class="item" href="javascript:void(0)" v-for="(tag,index) of tagList"
                   :style="`backgroundImage:url(${tag.picUrl})`">
                  <div class="cnt">
                    <h4 class="title">
                      {{tag.name}}
                    </h4>
                    <div>
                      <span class="price">
                        <span>{{tag.floorPrice}}</span>
                        <span>元起</span>
                      </span>
                      <i class="newIcon" v-if="tag.newOnShelf" :style="tag.newOnShelf ? `backgroundColor:#cbb693` : ``">{{tag.newOnShelf
                        ? "上新" : ""}}</i>
                    </div>
                  </div>
                </a>
              </ul>
            </div>
            <!--five结束-->

            <!--six开始-->
            <div class="m-categoryHotSellModule" v-if="categoryHotSellModule.title">
              <div class="moduleTitle">
                <div class="left"><span>{{categoryHotSellModule.title}}</span></div>
              </div>

              <div class="content">
                <div class="line1" v-for="(hot,index) of categoryHotSellModule.categoryList[0]" :key="index">
                  <a class="item-big item-1" href="javascript:void(0)">
                    <div>
                      <div class="name"><span class="txt">{{hot.categoryName}}</span></div>
                    </div>
                    <div class="imgWrap">
                      <div class="m-lazyload  m-lazyload-loaded"><img :src="hot.picUrl">
                      </div>
                    </div>
                  </a>
                </div>


                <div class="line2">
                  <a class="item" href="javascript:void(0)" v-for="(hot,index) of categoryHotSellModule.categoryList[1]"
                     :key="index">
                    <div class="name">{{hot.categoryName}}</div>
                    <div class="imgWrap">
                      <div class="m-lazyload  m-lazyload-loaded">
                        <img :src="hot.picUrl">
                      </div>
                    </div>
                  </a>

                </div>

              </div>
            </div>
            <!--six结束-->

            <!--seven开始-->
            <div class="m-popularItemModule" v-if="popularItemList[0]">
              <div class="moduleTitle">
                <div class="left"><span>人气推荐</span></div>
                <a class="right"><span>更多</span><i class="iconfont u-icon icon-jiantouarrow484"></i></a></div>
              <a class="spItem">
                <div class="wraper">
                  <div class="m-lazyload  m-lazyload-loaded"><img :src="popularItemList[0][0].listPicUrl">
                  </div>
                </div>
                <div class="floor">
                  <div class="tagWraper"><span class="tag-status coupon">券</span></div>
                  <div class="name">{{popularItemList[0][0].name}}</div>
                  <div class="desc">{{popularItemList[0][0].simpleDesc}}</div>
                  <div class="price"><span>¥</span><span>{{popularItemList[0][0].retailPrice}}</span></div>
                </div>
              </a>
              <div class="m-indexItem m-goodGrid">
                <ul class="list">
                  <li class="item" v-for="(popul,index) of popularItemList[1]">
                    <a class="good" href="javascript:;">
                      <div class="hd">
                        <div class="wraper">
                          <div class="m-lazyload  m-lazyload-loaded"><img
                            :src="popul.listPicUrl">
                          </div>
                        </div>
                      </div>
                      <div class="name">
                        <span>{{popul.name}}</span>
                        <span class="dynamicPrice">
                          <span>&nbsp;</span>
                          <span class="priceInner">
                            <span><span>¥</span><span>{{popul.retailPrice}}</span></span></span></span>
                      </div>
                      <div class="price">
                        <span class="priceInner">
                          <span>
                            <span>¥</span>
                            <span>{{popul.counterPrice}}</span>
                          </span>
                        </span>
                      </div>
                      <div class="tagWraper">
                        <p class="status gradientPrice">{{popul.promTag}}</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <!--seven结束-->

          </div>
          <!--中心结束-->
        </div>
      </div>
      <!--下部分结束-->
    </div>
  </div>


</template>

<script>
  import BScroll from "better-scroll"
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from "vuex"

  export default {
    name: "home-page",
    mounted() {
      this.request()
    },
    computed: {
      ...mapState([
        "kingKongModule",
        "focusList",
        "bigPromotionModule",
        "policyDescList",
        "tagList",
        "popularItemList",
        "categoryHotSellModule"
      ])
    },
    methods: {
      _bscroll() {
        const ul = this.$refs.ul
        const li = this.$refs.li
        const liW = Array.from(li).map((xx)=>{return xx.clientWidth}).reduce((a,b)=>{return a+b})
        ul.style.width = liW + "px"

        new BScroll(".inner", {click: true, scrollX: true})//头部导航滑动
      },
      _lbt() {
        new Swiper('.swiper-container', {//轮播图
          loop: true,
          pagination: '.swiper-pagination',
          autoplay: 2000,
        })
      },
      request() {
        this.$store.dispatch("getKingKongModule")
        this.$store.dispatch("getFocusList")
        this.$store.dispatch("getBigPromotion")
        this.$store.dispatch("getTagList")
        this.$store.dispatch("getPopularItemList")
        this.$store.dispatch("getPolicyDescList")
        this.$store.dispatch("getCategoryHotSellModule")
      }
    },
    watch:{
      categoryHotSellModule(){
        this.$nextTick(() => {
          this._bscroll()
        })
      },
      focusList(){
        this.$nextTick(() => {
          this._lbt()
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .m-indexHd
    position fixed !important
    left: 0
    top: 0
    z-index 666
    width 100%
    height 148px
    background-color #fff
    border-bottom 1px solid #d9d9d9
    .line
      display flex
      align-items: center
      padding: .21333rem .4rem;
      .logo
        width: 1.84rem;
        height: .53333rem;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
        display: inline-block;
        margin-right: .26667rem;
        background-size: cover;
        background-position: center;
      .m-topSearchIpt
        display: -webkit-box;
        flex-grow 1
        justify-content: center;
        height: 56px
        font-size: .37333rem;
        background-color: #ededed;
        border-radius: .10667rem;
        -webkit-box-align: center;
        .icon
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: 28px
          height: 28px
        .placeholder
          color: #666;
          line-height: 1.5;
      .loginBtn
        width: .98667rem;
        height: .53333rem;
        line-height: .53333rem;
        text-align: center;
        color: #b4282d;
        border: 1px solid #b4282d;
        margin-left: .21333rem;
    .tabWrap
      width 100%
      .m-tabs
        width 100%
        box-sizing border-box
        padding-right 60px
        .inner
          overflow hidden
          width: 100%
          .list
            display flex
            padding-left 20px;
            .tab
              margin-left: 0
              height 60px
              text-align center
              line-height 60px
              .txt
                display inline-block
                color #b4282d
                padding 0px 21px
                white-space nowrap
                font-size 30px

  .swiper-container {
    width: 100%
    height: 370px;
  }

  .m-indexServicePolicy
    width: 100%
    background #FFEDDB
    .g-grow
      display flex
      padding 0 30px
      height: 72px
      .item
        flex 1
        font-size 16px
        color #B4282D
        line-height 72px
        .iconfont
          font-size 32px
        .text
          margin-left: 5px
          color #B4282

  .wrap
    background-color rgb(244, 244, 244)
    width 100%
    height 100%
    .middle
      margin-top: 150px
      height 100%
      width 100%
      .wrap-content
        padding-bottom: 250px
        position relative
        z-index 50
        .content
          width: 100%
          .m-kingkongCarousel
            background #FFEDDB
            .swiper-wrapper
              padding-bottom: 52px
              width 100%
              height 100%
              .swiper-slide
                display flex
                justify-content center
                align-items flex-start
                flex-wrap wrap
                .link_to_shop
                  color #000
                  width 20%
                  text-align center
                  margin-top: 25px
                  .kingkong-item
                    display block
                    width 100%
                    text-align center
                    padding-bottom 10px
                    font-size 0
                    img
                      display inline-block
                      width 110px
                      height 110px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
          .m-indexBigPromotionModule
            width: 100%
            .m-lazyload
              width: 100%
              height 330px
              .onetwo
                width 100%
                height 100%
                display block

          .m-Discount
            width: 100%
            .newSup
              display inline-block
              width: 49%
              height 100%
              img
                width: 100%
                height: 100%
            .promItem
              display inline-block
              width: 49%
              height 100%
              .m-lazyload
                height 50%
                img
                  display block
                  width 100%
                  height auto

            .fast
              height 203px
              width 100%
              .fast-one
                display inline-block
                width 49%
                height 100%
                img

                  width 100%
                  height 100%
              .fast-two
                display inline-block
                width 49%
                height 100%
                img

                  width 100%
                  height 100%
          .newVip
            background-color rgb(255, 255, 255)
            margin: 20px 0px
            padding-bottom: 30px
            .moduleTitle
              width: 100%
              height 90px
              line-height 90px
              box-sizing border-box
              font-size: .42667rem
              padding: 0 .4rem
              text-align: center
              font-weight 700
              .txt
                position relative
                display inline-block
                &::before
                  left: -.53333rem
                  content: '';
                  position: absolute;
                  top: .6rem;
                  width: .32rem;
                  height: .04rem;
                  background: #333;
                &::after
                  left: 2.3rem
                  content: '';
                  position: absolute;
                  top: .6rem;
                  width: .32rem;
                  height: .04rem;
                  background: #333;
            .new-content
              height: 438px
              padding-left: 0.4rem
              .left
                display: block;
                width: 4.57333rem;
                height: 5.78667rem;
                background: #F9E9CF;
                border-radius: .05333rem;
                margin-right: .05333rem;
                float: left;
                color: #333;
                .name
                  font-size: .42667rem;
                  padding: .4rem 0 0 .4rem
                .imgWrap
                  margin: .66667rem auto;
                  width: 3.04rem;
                  height: 3.05333rem;
                  position: relative;
                  .img
                    width: 3.04rem;
                    height: 3.05333rem;
                    img
                      height 100%
                  .animate
                    position: absolute;
                    width: .4rem;
                    height: .26667rem;
                    bottom: .24rem;
                    right: .6rem;
                    background url(//yanxuan.nosdn.127.net/3f7e731c6650bc1770589c78bd5a18b7.png) no-repeat
                    background-size: 100% 100%;
                    animation: carousel 1s linear infinite
              .right
                float left
                .module1
                  background: #FBE2D3;
                  border-radius: 4px;
                  width: 4.57333rem;
                  height: 2.86667rem;
                  margin-bottom: .05333rem;
                  .m-activityItem
                    position relative
                    box-sizing border-box
                    display: block;
                    color: #333;
                    width: 4.57333rem;
                    height: 2.86667rem;
                    float: left;
                    border-radius: .05333rem;
                    margin: 0 .05333rem .05333rem 0;
                    font-size: .32rem;
                    padding: .26667rem 0 0 .4rem;
                    .picWrap
                      position: absolute;
                      right: 0;
                      top: .26667rem;
                      .pic
                        width: 2.66667rem;
                        height: 2.66667rem;
                        > img
                          width: 100%;
                          height: auto;
                      .discount
                        width: 80px;
                        height: 80px;
                        line-height 50px
                        opacity: .8;
                        background: #F59524;
                        border-radius: 50%;
                        color: #fff;
                        text-align: center;
                        position: absolute;
                        top: 0;
                        right: 0.5rem;
                        .line1
                          font-size: .32rem;
                        .line2
                          font-size: .26667rem;
                          margin-top: -0.3rem;
                          text-decoration: line-through;
                    .cnt
                      position: relative;
                      .title
                        font-size: .42667rem;
                      .subTitle
                        color: #7F7F7F;
                      .tag
                        position: relative;
                        display: inline-block;
                        padding: 0 .13333rem;
                        height: .42667rem;
                        background: #CBB693;
                        border-radius: .05333rem;
                        color: #fff;
                        font-size: .29333rem;
                        line-height: .42667rem;
                        text-align: center;
                .module2
                  background: #FBE2D3;
                  border-radius: 4px;
                  width: 4.57333rem;
                  height: 2.86667rem;
                  margin-bottom: .05333rem;
                  .m-activityItem
                    position relative
                    box-sizing border-box
                    display: block;
                    color: #333;
                    width: 4.57333rem;
                    height: 2.86667rem;
                    float: left;
                    border-radius: .05333rem;
                    margin: 0 .05333rem .05333rem 0;
                    font-size: .32rem;
                    padding: .26667rem 0 0 .4rem;
                    .picWrap
                      position: absolute;
                      right: 0;
                      top: .26667rem;
                      .pic
                        width: 2.66667rem;
                        height: 2.66667rem;
                        > img
                          width: 100%;
                          height: auto;
                      .discount
                        width: 80px;
                        height: 80px;
                        line-height 50px
                        opacity: .8;
                        background: #F59524;
                        border-radius: 50%;
                        color: #fff;
                        text-align: center;
                        position: absolute;
                        top: 0;
                        right: 0.5rem;
                        .line1
                          font-size: .32rem;
                        .line2
                          font-size: .26667rem;
                          margin-top: -0.3rem;
                          text-decoration: line-through;
                    .cnt
                      position: relative;
                      .title
                        font-size: .42667rem;
                      .subTitle
                        color: #7F7F7F;
                      .tag
                        position: relative;
                        display: inline-block;
                        padding: 0 .13333rem;
                        height: .42667rem;
                        background: #CBB693;
                        border-radius: .05333rem;
                        color: #fff;
                        font-size: .29333rem;
                        line-height: .42667rem;
                        text-align: center;

          .m-indexManufacturersSupplying
            padding-bottom: .10667rem;
            .moduleTitle
              width: 100%;
              height: 1.33333rem;
              line-height: 1.33333rem;
              padding: 0 .4rem;
              background: #fff;
              overflow: hidden;
              .left
                float: left;
                font-size: .42667rem;
              .right
                display: block;
                font-size: .37333rem;
                float: right;
                color: #333;
                line-height: 1.33333rem;
                .u-icon
                  font-size 24px
                  margin: -.06667rem 0 0 .10667rem;

            .list
              position: relative;
              overflow: hidden;
              background: #fff;
              margin-bottom: .26667rem;
              padding: 0 .34667rem .34667rem .4rem;
              .item
                float left
                position: relative;
                margin: 0 .05333rem .05333rem 0;
                width: 4.57333rem;
                height: 3.46667rem;
                overflow: hidden;
                background-color: #f4f4f4;
                border-radius: .05333rem;
                background-size: 100% 100%;
                .cnt
                  position: absolute;
                  left: 0;
                  top: 0;
                  padding-top: .30667rem;
                  width: 100%;
                  z-index: 4;
                  text-align: center;
                  .title
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    color: #333;
                    font-size: .37333rem;
                    line-height: .45333rem;
                    margin-bottom: .04rem;
                  .price
                    position relative
                    color: #7F7F7F;
                    font-size: .32rem;
                  .newIcon
                    display: inline-block;
                    width: .85333rem;
                    height: .42667rem;
                    color: #fff;
                    line-height: .42667rem;
                    text-align: center;
                    border-radius: .05333rem;
                    margin-left: .13333rem;
          .m-categoryHotSellModule
            background-color: #fff;
            margin-bottom: .26667rem;
            .moduleTitle
              width: 100%;
              height: 1.33333rem;
              line-height: 1.33333rem;
              padding: 0 .4rem;
              background: #fff;
              overflow: hidden;
              .left
                float: left;
                font-size: .42667rem;

            .content
              padding: 0 .26667rem .26667rem .4rem;
              overflow: hidden;
              .line1
                zoom 1
                .item-big
                  width: 4.53333rem;
                  height: 2.66667rem;
                  float: left;
                  border-radius: .05333rem;
                  margin: 0 .13333rem .13333rem 0;
                  background: #F9F3E4;
                  position: relative;
                  .name
                    padding-left: .4rem;
                    color: #333;
                    font-family: PingFangSC-Medium;
                    font-size: .37333rem;
                    margin-top: .88rem;
                    .txt
                      display: inline-block;
                      position: relative;
                      &::before
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: -.21333rem;
                        width: .64rem;
                        height: .05333rem;
                        background: #333;

                  .imgWrap
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 2.66667rem;
                    height: 2.66667rem;
                    .m-lazyload
                      width: 100%
                      > img
                        width: 100%;
                        height: auto;
              .line2
                zoom 1
                .item
                  display: block;
                  width: 2.2rem;
                  height: 2.4rem;
                  background: #F5F5F5;
                  border-radius: .05333rem;
                  float: left;
                  margin: 0 .13333rem .13333rem 0;
                  .name
                    margin-top: .13333rem;
                    text-align: center;
                    font-size: .32rem;
                    color: #333;
                    font-family: PingFangSC-Medium;
                  .imgWrap
                    width: 1.6rem;
                    height: 1.6rem;
                    margin: .02667rem 0 0 .30667rem;
                    .m-lazyload
                      width: 100%
                      > img
                        width: 100%;
                        height: auto;

          .m-popularItemModule
            background-color: #fff;
            margin-bottom: .26667rem;
            padding-bottom: .4rem;
            .moduleTitle
              width: 100%;
              height: 1.33333rem;
              line-height: 1.33333rem;
              padding: 0 .4rem;
              background: #fff;
              overflow: hidden;
              .left
                float: left;
                font-size: .42667rem;
              .right
                display: block;
                font-size: .37333rem;
                float: right;
                color: #333;
                line-height: 1.33333rem;
                .u-icon
                  font-size 24px
                  margin: -.06667rem 0 0 .10667rem;

            .spItem
              display block
              color: #333;
              position relative
              width: 9.2rem;
              height: 3.73333rem;
              background: #FEF0DF;
              border-radius: .05333rem;
              margin: 0 0.4rem 0.26667rem;
              .wraper
                width: 3.73333rem;
                height: 3.73333rem;
                background: url(//yanxuan.nosdn.127.net/3235bc71e70f134b5499316fc74337d4.png)
                background-size: 100% 100%;
                margin-right: .4rem;
                .m-lazyload
                  width: 100%
                  > img
                    width: 100%
                    height: 100%
              .floor
                width 345px
                position absolute
                right: 0
                top: 75px
                .tagWraper
                  width: 4.66667rem;
                  margin-bottom: .12rem;
                  .tag-status
                    position: relative;
                    padding: .06667rem .17333rem;
                    background-image: linear-gradient(-135deg, #EA8989 0, #E57B7B 100%);
                    border-radius: .04rem;
                    overflow: hidden;
                    height: .4rem;
                    line-height: .26667rem;
                    font-size: .26667rem;
                    display: inline-block;
                    color: #fff;
                    text-align: center;
                    margin-left: 0;
                    &::before
                      left: -.10667rem;
                      position: absolute;
                      top: 0;
                      margin: auto 0;
                      width: .16rem;
                      height: .16rem;
                      background: #fff;
                      border-radius: 100%;
                      bottom: 0;
                      content: '';
                    &::after
                      right: -.10667rem;
                      position: absolute;
                      top: 0;
                      margin: auto 0;
                      width: .16rem;
                      height: .16rem;
                      background: #fff;
                      border-radius: 100%;
                      bottom: 0;
                      content: '';
                .name
                  font-family: PingFangSC-Regular;
                  font-size: .37333rem;
                  width: 4.66667rem;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                .desc
                  margin 0.12rem 0 0.12rem 0;
                  font-size: .32rem;
                  color: #7F7F7F;
                  width: 4.66667rem;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                .price
                  width 350px
                  margin-top: 0.12rem
                  font-size: .37333rem;
                  color: #b4282d;

            .m-goodGrid
              padding-left: .13333rem;
              .list
                display flex
                flex-wrap: wrap;
                .item
                  padding: 0 0 .17333rem !important;
                  margin-left: .26667rem;
                  height: auto;
                  overflow: hidden;
                  background-color: #fff;
                  position: relative;
                  width: 30%;
                  .good
                    width: 100%;
                    display block
                    .hd
                      border-radius: .05333rem;
                      position: relative;
                      background-color: #f5f5f5;
                      z-index: 0;
                      .wraper
                        margin-bottom: .16rem;
                        .m-lazyload
                          width: 100%
                          > img
                            width: 100%
                            height 100%
                    .name
                      margin-top: 0;
                      color: #333;
                      height: auto;
                      margin-bottom: .05333rem;
                      padding: 0;
                      font-size: .32rem;
                      overflow: visible;
                      white-space: normal;
                      line-height: .48rem;
                      .dynamicPrice
                        color: #b4282d;
                    .newItemDesc
                      display none
                    .tagWraper
                      width: 100%;
                      z-index: 1;
                      margin: 0 0 .05333rem -.16rem;
                      height: .4rem;
                      overflow: hidden;
                      padding-left: 0;
                      .gradientPrice
                        background-color: #f48f18;
                        height: .4rem;
                        padding: .06667rem .21333rem;
                        line-height: .26667rem;
                        text-align: center;
                        color: #fff;
                        font-size: .26667rem;
                        border-radius: .02667rem;
                        display: inline-block;
                        vertical-align: middle;
                        zoom: 1;
                        margin-left: .16rem;

  @keyframes carousel {
    0% {
      background-image: url(//yanxuan.nosdn.127.net/3f7e731c6650bc1770589c78bd5a18b7.png);
    }

    50% {
      background-image: url(//yanxuan.nosdn.127.net/d635ac1cf1b2bde41e96ea43dacf0cfc.png);
    }
    100% {
      background-image: url(//yanxuan.nosdn.127.net/bf881c47a51af89a723d97d58b2bca9e.png);
    }
  }
</style>
