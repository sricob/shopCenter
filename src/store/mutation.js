export default {
  addCart(state,payload){
    state.goods.push(payload)
  },
  addCount(state,payload){           //这里接收到的item是actions发出的item，即id相同的商品
    payload.count++
  }
}