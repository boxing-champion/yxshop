<template>
  <div class="m-hdWraper">
    <!--头部开始-->
    <div class="m-hd">
      <div class="m-itemCateListHd">
        <div class="m-topSearchIpt">
          <i class="iconfont u-icon icon-sousuo"></i>
          <span class="placeholder">搜索商品, 共19848款好物</span>
        </div>
      </div>
    </div>
    <!--头部结束-->

    <!--左侧导航开始-->
    <div class="m-cateNavVertWrap">
      <div class="middle">
        <ul class="m-cateNavVert" ref="ul">
          <li ref="li" class="item" v-for="(ltem,index) of cate" :key="index" :class="{active:show(index)}">
            <a :href="`/#/classification?classificationId=${ltem.id}`" class="goto">{{ltem.name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <!--左侧导航结束-->

    <!--右侧开始-->
    <div class="m-subCateList" v-if="cate[0]">
      <div class="banner"></div>
      <div class="catelist" v-if="currentIndex<4">
        <ul class="list">
          <li class="cateItem" v-for="(sub,index) of cate[currentIndex].subCateList" :key="index">
            <a href="javascript:;" class="low">
              <div class="up">
                <img :src="sub.bannerUrl" alt="sub">
              </div>
              <div class="down">{{sub.name}}</div>
            </a>
          </li>
        </ul>
      </div>

      <!--下部分开始-->
      <div v-else>
        <div class="cateList" v-for="(sup,index) of cate[currentIndex].subCateList" :key="index">
          <div class="hd">{{sup.name}}</div>
          <ul class="list">
            <li class="cateItem" v-for="(item,index) in sup.categoryList" :key="index">
              <a>
                <div class="cateImgWrapper">
                  <img :src="item.wapBannerUrl" alt="sup" class="cateImg">
                </div>
                <div class="name">{{item.name}}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--下部分结束-->

    </div>
    <!--右侧结束-->
  </div>

</template>

<script>
  import {mapState} from "vuex"
  import BScroll from "better-scroll"

  export default {
    name: "classi-fication",
    computed: {
      ...mapState(["cate"]),
      currentIndex() {
        let flag = -1
        let path = this.$route.fullPath
        let id = path.substring(path.indexOf("=") + 1, path.length)
        if (id === "/classification") return 0
        this.cate.findIndex((item, index) => {
          if (item.id == id) return flag = index
        })
        console.log(flag);
        return flag
      }
    },
    mounted() {
      this.$store.dispatch("getCate")
    },
    methods:{
      show(index){
        return this.currentIndex === index
      },
      some(){
        new BScroll(".middle", {click: true})
      }
    },
    watch:{
      cate(){
        this.$nextTick(()=>{
          this.some()
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .m-hdWraper
    width: 100%
    height 100%
    .m-hd
      bottom-border-1px(#ddd)
      height: 88px;
      position: fixed !important;
      left: 0;
      top: 0;
      z-index: 5;
      width: 100%;
      .m-itemCateListHd
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 .4rem;
        background-color: #fff;
        height: 1.17333rem;
        position: relative;
        .m-topSearchIpt
          background-color: #ededed;
          display: flex;
          align-items: center;
          justify-content: center;
          height: .74667rem;
          font-size: .37333rem;
          border-radius: .10667rem;
          width: 100%
          .u-icon
            margin-right: .13333rem;
            display: inline-block;
            color #666
            font-size 35px
          .placeholder
            color #666

    .m-cateNavVertWrap
      right-border-1px(#ddd)
      bottom: 0;
      left: 0;
      z-index: 4;
      width: 2.16rem;
      height: 100%;
      padding-bottom: 180px
      background-color: #fff;
      top: 1.17333rem;
      position: fixed;
      .middle
        zoom: 1;
        height 100%
        .m-cateNavVert
          padding: .53333rem 0;
          position relative
          .item
            width: 100%;
            height: .66667rem;
            margin-top: 50px;
            text-align: center;
            border: none;
            position relative
            &:first-child
              margin-top: 0;
            &.active
              color: #ab2b2b;
              &::after
                content: ' ';
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                width: .08rem;
                background-color: #ab2b2b;
            .goto
              display: block;
              font-size: .37333rem;
              line-height: .66667rem;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
    .m-subCateList
      margin-top: 88px
      margin-left: 2.16rem;
      padding: .4rem .4rem .28rem;
      .banner
        width: 100%;
        height: 2.56rem;
        display: table;
        margin-bottom: .42667rem;
        background: center no-repeat #f4f4f4;
        background-image: url(http://yanxuan.nosdn.127.net/52855d9a0c1f738f26ac125913af0012.jpg?imageView&thumbnail=0x196&quality=75);
        background-size: cover;
        border-radius: 4px;
      .catelist
        zoom: 1
        .list
          zoom: 1;
          &:last-child
            margin-bottom: 0;
            .cateItem
              display: inline-block;
              padding-left: .45333rem;
              font-size: 0;
              width: 30%;
              vertical-align: top;
              .low
                zoom: 1
                .up
                  width: 1.92rem;
                  height: 1.92rem;
                  > img
                    width: 100%
                    height 100%
                .down
                  height: .96rem;
                  font-size: .32rem;
                  text-align: center;
                  line-height: .48rem;
                  display: block;

      .cateList
        .cateItem
          display: inline-block;
          margin-right: .40333rem;
          font-size: 0;
          width: 1.92rem;
          vertical-align: top;
          .cateList
            margin-bottom: .16rem;
            .hd
              white-space: nowrap;
              max-width: 7.04rem;
              padding-bottom: .10667rem;
              margin-bottom: .32rem;
              text-align: left;
              font-size: 45px;
              font-weight: 700;
              border-bottom: 1px solid #d9d9d9;
            .list
              .cateItem
                display: inline-block;
                margin-right: .45333rem;
                font-size: 0;
                width: 1.92rem;
                vertical-align: top;
                .cateImgWrapper
                  width: 1.92rem;
                  height: 1.92rem;
                  img
                    display: block;
                    width: 100%;
                    background: #fff;
                    height: 100%;
                .name
                  height: .96rem;
                  font-size: .32rem;
                  text-align: center;
                  line-height: .48rem;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  color: #333;
                  overflow: hidden;
                  text-overflow: ellipsis;
          .cateImgWrapper
            width: 1.92rem;
            height: 1.92rem;
            background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/water-d839a69b0d.png) center no-repeat;
            .cateImg
              display: block;
              width: 100%;
              background: #fff;
              height: 100%;
          .name
            height: .96rem;
            font-size: .32rem;
            text-align: center;
            line-height: .48rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
</style>
