<template>
  <div>
    <div class="m-main">
      <div class="m-main-content">
        <div class="m-tpls-top" v-if="identifying[0]">
          <a href="javescript:;">
            <div class="u-pic-top">
              <img :src="identifying[0][0].ad.picUrl" alt="">
            </div>
          </a>
        </div>
        <div v-for="(indent,index) of mans" :key="index">
          <Split/>
          <div class="m-tpls m-tpls-picker" v-if="indent.type === 1">
            <a href="javescript:;" class="u-flexbox">
              <div class="info">
                <div class="u-name">
                    <span class="ava"><img :src="indent.avatar">
                    </span>
                  <span>{{indent.nickname}}</span>
                </div>
                <div class="title">{{indent.title}}</div>
                <div class="desc">{{indent.subTitle}}</div>
                <div class="u-rcount">
                  <i class="ico iconfont icon-yanjing"></i>
                  <span>15.5k人看过</span>
                </div>
              </div>
              <div class="u-pic">
                <img :src="indent.picUrl">
              </div>
            </a>
          </div>
          <div class="m-tpls m-tpls-rec" v-if="indent.type === 0">
            <a href="javescript:;">
              <div class="u-name">
              <span class="ava">
                <img :src="indent.avatar">
              </span>
                <span>{{indent.nickname}}</span>
              </div>
              <div class="title">{{indent.title}}</div>
              <div class="u-pic">
                <img :src="indent.picUrl"></div>
              <div class="u-rcount">
                <i class="ico iconfont icon-yanjing"></i>
                <span>97.4k人看过</span>
              </div>
            </a>
          </div>
          <div class="m-tpls m-tpls-rec" v-if="indent.type === 2">
            <a href="javescript:;">
              <div class="u-name">
              <span class="ava">
                <img :src="indent.avatar">
              </span>
                <span>{{indent.nickname}}</span>
              </div>
              <div class="title">{{indent.title}}</div>
              <div class="u-pic">
                <img :src="indent.picUrl"></div>
              <div class="u-rcount">
                <i class="ico iconfont icon-yanjing"></i>
                <span>97.4k人看过</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"

  export default {
    name: "indent-main",
    data() {
      return {
        mans: [],
      }
    },
    mounted() {
      this.$store.dispatch("getIdentifying")//最上面的那个图片
      this.$store.dispatch("getManual")
    },
    computed: {
      ...mapState(["manual", "identifying", "tabs", "tabData"]),
      currentIndex() {
        let flag = 9
        let path = this.$route.fullPath
        let id = path.split("=", 2)[1]
        this.tabs.map((item) => {
          if (item.tabId == id) return flag = id
        })
        return flag
      }
    },
    watch: {
      manual() {//真实接口
        this.manual.forEach((indent) => {
          return this.mans.push(indent.topics)
        })
        return this.mans = this.mans.flat(Infinity)
      },
      tabData() {
        this.tabData.forEach((tab) => {
          return this.mans.push(tab)
        })
        return this.mans = this.mans.flat(Infinity)
      },
      currentIndex() {
        if (this.currentIndex == 9) {
          this.mans = []
          console.log("发送getManual请求");
          this.$store.dispatch("getManual")
        } else if (this.currentIndex == 4) {
          this.mans = []
          console.log("发送getTabData请求");
          this.$store.dispatch("getTabData")

        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .m-main
    width: 100%
    height 100%
    .m-main-content
      margin-bottom: 110px
      zoom: 1
      .m-tpls-top
        width: 100%;
        background: #fff;
        margin: .2rem 0;
        padding: .36rem .3rem;
        > a
          zoom: 1
          .u-pic-top
            width 100%
            height: 376px;
            position: relative;
            overflow: hidden;
            border-radius: .08rem;
            > img
              width: 100%
              height 100%
              display block
    .m-tpls
      width: 100%;
      background: #fff;
      margin: .2rem 0;
      padding: .36rem .3rem;
      &.m-tpls-rec
        position relative
        .u-name
          font-size: .28rem;
          margin-bottom: .24rem;
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
            > img
              width: 100%;
              height: 100%;
          > span
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
          padding-bottom: .32rem;
          font-family: PingFangSC-Regular;
        .u-pic
          width: 100%;
          height: 376px;
          position: relative;
          margin-bottom: .2rem;
          overflow: hidden;
          border-radius: .08rem;
        .u-rcount
          font-size: 22px;
          color: #999;
          line-height: 22px;
          position: absolute;
          bottom: 0
          .ico
            font-size 28px

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
                > img
                  width: 100%;
                  height: 100%;
              > span
                display: inline-block;
                vertical-align: middle;
            .title
              width: 100%;
              font-size: 36px;
              color: #333;
              line-height: .6rem;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
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
