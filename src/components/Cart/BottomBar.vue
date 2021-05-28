<template>
  <div class="bottom-wrapper">
    <label class="selectAll" @click="checkAll">
      <i class="iconfont icon-check" :class="{ active: isSelectAll }"></i>
      <span>全选</span>
    </label>
    <div class="price">
      <span>总价格:￥{{ totalPrice.toFixed(2) }}</span>
    </div>
    <div class="computed">
      <span>结算</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  computed: {
    totalPrice() {
      return this.$store.state.goods
        .filter((good) => {
          return good.isChecked === true;
        })
        .reduce((pre, good) => {
          return pre + good.price * good.count;
        }, 0);
    },
    isSelectAll() {
      return (
        this.$store.state.goods.length !== 0 &&
        this.$store.state.goods.every((good) => {
          return good.isChecked === true;
        })
      );
    },
  },
  methods: {
    checkAll() {
      this.$store.state.goods = this.$store.state.goods.map((good) => {
        if (this.isSelectAll === true) {
          return { ...good, isChecked: false };
        } else {
          return { ...good, isChecked: true };
        }
      });
    },
  },
};
</script>

<style scoped>
.bottom-wrapper {
  height: 44px;
  font-size: 14px;
  display: flex;
  align-items: center;
  background-color: #eee;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
}
i {
  color: #ddd;
  font-size: 25px;
}
.selectAll {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.price {
  flex: 2;
  text-align: center;
}

.computed {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: red;
  color: white;
}

.active {
  color: red;
}
</style>