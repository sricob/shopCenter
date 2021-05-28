<template>
  <div class="cartItem">
    <i class="iconfont icon-check" :class="{active:good.isChecked}" @click="changeChecked"></i>
    <div class="img-wrapper">
      <img :src="good.img" />
    </div>
    <div class="right-info">
      <p class="title">{{ good.title }}</p>
      <p class="desc">{{ good.desc }}</p>
        <span class="price">￥{{ good.price }}</span>
        <span class="count">x{{ good.count }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartListItem",
  props: {
    good: {},
  },
  methods:{
    changeChecked(){
      this.good.isChecked=!this.good.isChecked
    }
  }
};
</script>

<style scoped>
.cartItem {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
}
i {
  color: #ddd;
  font-size: 25px;
}
.img-wrapper {
  border-radius: 5px;
  width: 70px;
  height: 100px;
  overflow: hidden;
  margin:5px 10px;
}
img {
  width: 100%;
  height: 100%;
}
.right-info {
  flex: 1;
  flex-direction: column;
  overflow: hidden;
}
.title,
.desc {
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin:10px 5px;
}
.desc{
  font-size: 13px;
  color: #aaa;
}

.price{
  position: absolute;
  left: 110px;
  bottom: 0px;
  color: red;
}
.count{
  position: absolute;
  right: 10px;
  bottom: 0px;
}

.active{
  color: red;
}
</style>