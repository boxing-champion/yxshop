import {
  reqKingKongModule
} from "../api"
import {RECEIVE_KINGKONG} from "./mutations-types"

export default {
  async getKingKongModule({commit}) {
    const result = await reqKingKongModule()
    if(result.code===0){
      const kingKongModule = result.data
      commit(RECEIVE_KINGKONG, {kingKongModule})
    }
  },
}
