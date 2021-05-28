<template>
    <Scroll class="list" ref="scroll">
      <CartListItem
        v-for="(good, index) in $store.state.goods"
        :good="good"
        :key="index"
      />
    </Scroll>
</template>

<script>
import Scroll from "components/common/Scroll";
import CartListItem from "components/Cart/CartListItem";
export default {
  name: "CartList",
  components: {
    CartListItem,
    Scroll,
  },
  mounted(){
    this.$mybus.on("refresh",()=>{
      this.$refs.scroll.scroll.refresh()        //添加商品后立即调用refresh函数
    })
  }
};
</script>

<style scoped>

.list {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 93px;
  overflow: hidden;
}
</style>