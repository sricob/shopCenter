import { createStore } from 'vuex'
import mutations from "./mutation"
import actions from "./action"

// 创建一个新的 store 实例

const state = {
  goods: []
}
const store = createStore({
  state,
  mutations,
  actions
})

export default store