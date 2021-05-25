<template>
  <div class="bottom-wrapper">
    <div class="service">
      <i class="iconfont icon-service"></i>
      <p>客服</p>
    </div>
    <div class="shop">
      <i class="iconfont icon-shop"></i>
      <p>店铺</p>
    </div>
    <div class="collect">
      <i class="iconfont icon-collect"></i>
      <p>收藏</p>
    </div>
    <div class="cart" @click="addToCart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>
<script>
export default {
  name:"BottomBar",
  methods:{
    addToCart(){
      this.$emit("addToCart")
    }
  }
}
</script>
<style scoped>
.bottom-wrapper{
  font-size: 13px;
  height: 49px;
  background-color: white;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
  align-items: center;
}
.service,.shop,.collect{
  flex:1;

}

i{
  font-size:20px;
}

p{
  margin-top:3px;
}
.cart{
  flex: 2;
  height: 100%;
  background-color: yellow;
  padding-top:18px;
  font-size:14px;
}
.buy{
  flex:2;
  height: 100%;
  padding-top: 18px;
  background-color: var(--color-tint);
  font-size: 14px;
}
</style>