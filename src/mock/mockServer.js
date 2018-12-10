
import Mock from "mockjs"
import record from "./msite"
const kingKongModule = record.kingKongModule//十个导航
const bigPromotionModule = record.bigPromotionModule//大的动图以及下面的小图
const tagList = record.tagList//品牌制造商直供
const policyDescList = record.policyDescList//三个low
const categoryHotSellModule = record.categoryHotSellModule//类目热销榜   头部导航
const popularItemList = record.popularItemList//人气推荐
const focusList = record.focusList//轮播图

Mock.mock('/kingKongModule', {code:0, data:kingKongModule})
Mock.mock('/focusList', {code:0, data:focusList})
Mock.mock('/bigPromotionModule', {code:0, data:bigPromotionModule})
Mock.mock('/tagList', {code:0, data:tagList})
Mock.mock('/policyDescList', {code:0, data:policyDescList})
Mock.mock('/categoryHotSellModule', {code:0, data:categoryHotSellModule})
Mock.mock('/popularItemList', {code:0, data:popularItemList})

/*------------------------------------------------------*/

import cate from "./category"
Mock.mock('/cate', {code:0, data:cate})

/*------------------------------------------------------*/

import shiwu from "./shiwu"
Mock.mock('/identifying', {code:0, data:shiwu})

console.log("------mockServer");
