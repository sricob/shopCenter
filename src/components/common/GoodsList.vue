<template>
  <div class="goodsList-wrapper">
    <GoodsListItem
      v-for="(good, index) in goods"
      :key="index"
      :good="good"
      class="listItem"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods:{}
  },
};
</script>

<style scoped>
.goodsList-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>