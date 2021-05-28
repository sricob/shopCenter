<template>
  <div class="cart-wrapper">
    <NavBar class="navbar">
      <template #center>
        <div>购物车({{ $store.state.goods.length }})</div>
      </template>
    </NavBar>
      <CartList />
      <BottomBar/>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar"; //引入顶部标题栏
import CartList from "components/Cart/CartList"; //引入商品展示栏
import BottomBar from "components/Cart/BottomBar" //引入底部计算栏
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    BottomBar
  },
};
</script>
<style scoped>
.cart-wrapper{
  height: 100vh;
  position: relative;
}
.navbar {
  background-color: var(--color-high-text);
  color: white;
}
</style>