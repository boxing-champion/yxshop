
import Mock from "mockjs"
import record from "./msite"
const kingKongModule = record.kingKongModule//十个导航
const bigPromotionModule = record.bigPromotionModule//大的动图以及下面的小图
const tagList = record.tagList//品牌制造商直供
const policyDescList = record.policyDescList//三个low
const categoryHotSellModule = record.categoryHotSellModule//类目热销榜   头部导航
const popularItemList = record.popularItemList//人气推荐
const focusList = record.focusList//轮播图
const indexActivityModule = record.indexActivityModule//新人专享礼


Mock.mock('/kingKongModule', {code:0, data:kingKongModule})



console.log("------mockServer");
