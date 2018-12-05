import Vue from "vue"

import {
  RECEIVE_KINGKONG
} from "./mutations-types"

export default {
    [RECEIVE_KINGKONG](state,{kingKongModule}){
      state.kingKongModule=kingKongModule
    }
}
