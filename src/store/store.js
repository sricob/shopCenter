import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      goods:[]
    }
  },
  mutations: {
    addCart(state,payload){
      let flag=0
      for(let item of state.goods){
        if(item.id===payload.id){
          item.count++
          flag=1
        }
      }
      if(flag==0){
        state.goods.push(payload)
      }
      
    }
  }
})

export default store