<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">网易严选</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on:!loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>

          <div :class="{on:loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button
                :disabled="!isRightPhone"
                class="get_code"
                :class="{right_phone_number:isRightPhone}"
                @click.prevent="sendCode"
              >{{overTime > 0 ? `还剩下${overTime}s` : "获取验证码"}}
              </button>
            </section>
            <section class="login_code">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <!---------------------------------------------------->
          <div :class="{on:!loginWay}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_code">
                <input :type="isShowPwd?`text`: `password`" maxlength="8" placeholder="密码" v-model="pwd">
                <div class="switch_button" :class="isShowPwd?`on`:`off`" @click="isShowPwd=!isShowPwd">
                  <div class="switch_circle" :class="{right:isShowPwd}"></div>
                  <span class="switch_text">{{isShowPwd?"abc":""}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img ref="captcha" class="get_code" src="http://localhost:5000/captcha" alt="captcha">
              </section>
            </section>
          </div>

          <button class="login_submit" @click.prevent="login">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <span href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </span>
    </div>
  </div>
</template>

<script>
  import {reqSendCode, reqPwd, reqPhone} from "../../api"
  import {Toast, MessageBox} from 'mint-ui'

  export default {
    data() {
      return {
        loginWay: true,  //true手机号登陆 false密码登陆
        phone: "", // 手机号
        code: "", //短信验证码
        overTime: 0,  //剩余时间
        name: "",//用户名
        pwd: "", //密码
        captcha: "",//图形验证码
        isShowPwd: false //是否显示密码
      }
    },
    methods: {
      async sendCode() {//发送验证码
        this.overTime = 30
        this.timer = setInterval(() => {
          this.overTime--
          if (this.overTime <= 0) {
            this.overTime = 0
            clearInterval(this.timer)
          }
        }, 1000)
        const result = await reqSendCode(this.phone)
        if (result.code === 0) {//请求成功
          console.log("请求成功了");
          clearInterval(this.timer)
          this.overTime = 0
        } else {
          console.log("请求失败了");
          this.overTime = 0
        }
      },
      async login() {//登陆
        const {phone, code, name, pwd, captcha, loginWay} = this
        let result
        if (loginWay) {//短信登陆
          if (!this.isRightPhone) return MessageBox.alert("请正确输入手机号")
          else if (!code) return MessageBox.alert("必须输入验证码")
          result = await reqPhone(phone, code)
          if (result.code !== 0) {
            console.log("登陆失败");
          }
        } else {//密码登陆
          //前台表单验证
          if (!name) return MessageBox.alert("必须输入用户名")
          else if (!pwd) return MessageBox.alert("必须输入密码")
          else if (captcha.length !== 4) return MessageBox.alert("验证码输入错误")
          result = await reqPwd({name, pwd, captcha})
          if (result.code !== 0) {
            console.log("登陆失败");
            this.$refs.captcha.src = `http://localhost:5000/captcha?time=` + Date.now()
          }
        }
        if (result.code === 0) {
          console.log("登陆成功");
          const user = result.data
          this.$store.dispatch("saveUser", user)
          this.$router.replace("/profile")
        }
      }
    },
    computed: {
      isRightPhone() {
        return /^1\d{10}$/.test(this.phone)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 80px
          text-align center
          > a
            color #333
            font-size 14px
            padding-bottom 8px
            &:first-child
              margin-right 80px
            &.on
              color #02a774
              font-weight 700
              border-bottom 4px solid #02a774
      .login_content
        > form
          > div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 8px
              outline 0
              font 400 28px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 32px
              height 96px
              font-size 56px
              background #fff
              .get_code
                width auto
                position absolute
                top 50%
                right 20px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 28px
                background transparent
                &.right_phone_number
                  color black
            .login_code
              position relative
              margin-top 32px
              height 96px
              font-size 28px
              background #fff
              .switch_button
                font-size 24px
                border 1px solid #ddd
                border-radius 16px
                transition background-color .3s, border-color .3s
                padding 0 12px
                width 60px
                height 32px
                line-height 32px
                color #fff
                position absolute
                top 50%
                right 20px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                > .switch_circle
                  position absolute
                  top -2px
                  left -2px
                  width 32px
                  height 32px
                  border 2px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 4px 8px 0 rgba(0, 0, 0, .1)
                  transition transform .3s
                  &.right
                    transform translateX(27px)
            .login_hint
              margin-top 24px
              color #999
              font-size 28px
              line-height 40px
              > a
                color #02a774
          .login_submit
            display block
            width 100%
            height 84px
            margin-top 60px
            border-radius 8px
            background #4cd96f
            color #fff
            text-align center
            font-size 32px
            line-height 84px
            border 0
        .about_us
          display block
          font-size 24px
          margin-top 40px
          text-align center
          color #999
      .go_back
        position absolute
        top 10px
        left 10px
        width 60px
        height 60px
        > .iconfont
          font-size 60px
          color #999
</style>
