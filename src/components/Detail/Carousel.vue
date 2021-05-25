<template>
  <div>
    <van-swipe :autoplay="2000" lazy-render class="carouselWrapper">
      <van-swipe-item v-for="(img,index) in imgs" :key="index">
        <img :src="img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props:{
    imgs:{}
  }
};
</script>

<style scoped>
.carouselWrapper{
  height: 250px;
}
img{
  width: 100%;
}
</style>

