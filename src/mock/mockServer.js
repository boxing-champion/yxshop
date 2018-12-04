
import Mock from "mockjs"
import record from "./data.json"

Mock.mock('/info', {code:0, data:record.info})
Mock.mock('/goods', {code:0, data:record.goods})
Mock.mock('/ratings', {code:0, data:record.ratings})

console.log("------mockServer");
