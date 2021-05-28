export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      let flag = 0
      for (let item of context.state.goods) {
        if (item.id === payload.id) {
          context.commit("addCount", item)
          resolve("商品数量+1")
          flag = 1
        }
      }
      if (flag == 0) {
        context.commit("addCart", payload)
        resolve("商品添加成功")
      }
    })

  }
}