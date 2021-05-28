<template>
  <div class="carousel-wrapper">
    <van-swipe :autoplay="2000" class="my-swipe" lazy-render :stop-propagation="false" >
      <van-swipe-item v-for="(img, index) in imgs" :key="index">
        <!-- <a :href="img.link"> -->
          <img :src="img.image" @load="imgLoad"/>
        <!-- </a> -->
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data(){
    return {
      isLoad:false
    }
  },
  props: {
    imgs: {
      type: Array,
      required: true,
    }
  },
  methods:{
    imgLoad(){
      if(!this.isLoad){                       //使用节流，只发送一次imgLoad图片加载完成事件
       this.$emit("imgLoad")
      }
      this.isLoad=true
    }
  }
};
</script>

<style scoped>
.carousel-wrapper {
  /*给轮播图容器设置高度 */
  height: 187.2px;
}
img {
  width: 100%; /*给图片设置宽度*/
}
</style>