import {
  reqKingKongModule,
  reqFocusList,
  reqBigPromotion,
  reqCategoryHotSellModule,
  reqPolicyDescList,
  reqPopularItemList,
  reqTagList,
  reqCate,
  reqIdentifying,
  reqUser,
  reqLogout,
  reqManual,
  reqTabs,
  reqTabDta
} from "../api"
import {
  RECEIVE_KINGKONG,
  RECEIVE_FOCUSLIST,
  RECEIVE_BIGPROMOTION,
  RECEIVE_CATEGORYHOTSELLMODULE,
  RECEIVE_POLICYDESCLIST,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_TAGLIST,
  RECEIVE_CATE,
  RECEIVE_IDENTIFYING,
  SAVE_USER,
  RECEIVE_MANUAL,
  RECEIVE_TABS,
  RECEIVE_TABDATA
} from "./mutations-types"

export default {
  async getKingKongModule({commit}) {//十个
    const result = await reqKingKongModule()
    if (result.code === 0) {
      const kingKongModule = result.data
      commit(RECEIVE_KINGKONG, {kingKongModule})
    }
  },
  async getFocusList({commit}) {//轮播
    const result = await reqFocusList()
    if (result.code === 0) {
      const focusList = result.data
      commit(RECEIVE_FOCUSLIST, {focusList})
    }
  },
  async getBigPromotion({commit}) {//大图
    const result = await reqBigPromotion()
    if (result.code === 0) {
      const bigPromotionModule = result.data
      commit(RECEIVE_BIGPROMOTION, {bigPromotionModule})
    }
  },

  async getTagList({commit}) {//品牌
    const result = await reqTagList()
    if (result.code === 0) {
      const tagList = result.data
      commit(RECEIVE_TAGLIST, {tagList})
    }
  },
  async getPopularItemList({commit}) {//人气推荐
    const result = await reqPopularItemList()
    if (result.code === 0) {
      const popularItemList = result.data
      commit(RECEIVE_POPULARITEMLIST, {popularItemList})
    }
  },
  async getPolicyDescList({commit}) {//三个low
    const result = await reqPolicyDescList()
    if (result.code === 0) {
      const policyDescList = result.data
      commit(RECEIVE_POLICYDESCLIST, {policyDescList})
    }
  },
  async getCategoryHotSellModule({commit}) {//类目 头部导航
    const result = await reqCategoryHotSellModule()
    if (result.code === 0) {
      const categoryHotSellModule = result.data
      commit(RECEIVE_CATEGORYHOTSELLMODULE, {categoryHotSellModule})
    }
  },
  async getCate({commit}) {//第二页
    const result = await reqCate()
    if (result.code === 0) {
      const cate = result.data
      commit(RECEIVE_CATE, {cate})
    }
  },
  async getIdentifying({commit}) {//第三页
    const result = await reqIdentifying()
    if (result.code === 0) {
      const identifying = result.data
      commit(RECEIVE_IDENTIFYING, {identifying})
    }
  },
  saveUser({commit}, user) {
    commit(SAVE_USER, {user})
  },
  async getUser({commit}) {//得到用户信息
    const result = await reqUser()
    if (result.code === 0) {
      const user = result.data
      commit(SAVE_USER, {user})
    }
  },
  async getLogout({commit}) {//得到用户信息
    const result = await reqLogout()
    if (result.code === 0) {
      commit(LOGOUT_OUT)
    }
  },


  async getManual({commit}) {//真实接口测试
    const result = await reqManual()
    if (result.code == 200) {
      const manual = result.data
      commit(RECEIVE_MANUAL, {manual})
    }
  },
  async getTabs({commit}) {//真实接口测试
    const result = await reqTabs()
    if (result.code == 200) {
      const tabs = result.data
      commit(RECEIVE_TABS, {tabs})
    }
  },
  async getTabData({commit}) {//真实接口测试
    const result = await reqTabDta()
    if (result.code == 200) {
      const tabData = result.data
      commit(RECEIVE_TABDATA, {tabData})
    }
  },
}
