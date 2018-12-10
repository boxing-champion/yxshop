import Vue from "vue"

import {
  RECEIVE_KINGKONG,
  RECEIVE_FOCUSLIST,
  RECEIVE_BIGPROMOTION,
  RECEIVE_TAGLIST,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_POLICYDESCLIST,
  RECEIVE_CATEGORYHOTSELLMODULE,
  RECEIVE_CATE,
  RECEIVE_IDENTIFYING,
  SAVE_USER,
  LOGOUT_OUT,
  RECEIVE_MANUAL,
  RECEIVE_TABS,
  RECEIVE_TABDATA
} from "./mutations-types"

export default {
  [RECEIVE_KINGKONG](state, {kingKongModule}) {
    state.kingKongModule = kingKongModule
  },
  [RECEIVE_FOCUSLIST](state, {focusList}) {
    state.focusList = focusList
  },
  [RECEIVE_BIGPROMOTION](state, {bigPromotionModule}) {
    state.bigPromotionModule = bigPromotionModule
  },

  [RECEIVE_TAGLIST](state, {tagList}) {
    state.tagList = tagList
  },
  [RECEIVE_POPULARITEMLIST](state, {popularItemList}) {
    const one = popularItemList.splice(0, 1)
    const two = popularItemList.splice(0)

    popularItemList.push(one, two)
    state.popularItemList = popularItemList
  },
  [RECEIVE_POLICYDESCLIST](state, {policyDescList}) {
    state.policyDescList = policyDescList
  },
  [RECEIVE_CATEGORYHOTSELLMODULE](state, {categoryHotSellModule}) {
    const one = categoryHotSellModule.categoryList.splice(0, 2)
    const two = categoryHotSellModule.categoryList.splice(0)
    categoryHotSellModule.categoryList.push(one, two)
    state.categoryHotSellModule = categoryHotSellModule
  },
  [RECEIVE_CATE](state, {cate}) {
    state.cate = cate
  },
  [RECEIVE_IDENTIFYING](state, {identifying}) {
    const one = identifying.splice(0, 1)
    const two = identifying.splice(0)
    identifying.push(one)
    state.identifying = identifying
  },
  [SAVE_USER](state, {user}) {
    state.user = user
  },
  [LOGOUT_OUT](state) {
    state.user = {}
  },
  [RECEIVE_MANUAL](state, {manual}) {
    state.manual = manual
  },
  [RECEIVE_TABS](state, {tabs}) {
    state.tabs = tabs
  },
  [RECEIVE_TABDATA](state, {tabData}) {
    state.tabData = tabData.result
  },
}
