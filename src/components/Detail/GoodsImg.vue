<template>
  <div class="goodsimg-wrapper" v-if="Object.keys(goodsimgs).length!==0"> 
    <div class="desc-wrapper">
      <p class="desc">{{goodsimgs.desc}}</p>
    </div>          
    <p class="key">{{goodsimgs.detailImage[0].key}}</p>
    <div class="img-wrapper" v-for="(imgUrl,index) in goodsimgs.detailImage[0].list" :key="index">
      <img  :src="'https:'+imgUrl"  @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name:"GoodsImg",
  props:{
    goodsimgs:{}
  },
  methods:{
    imgLoad(){
      this.$emit("imgLoadFinished")
    }
  }
}
</script>

<style scoped>
.goodsimg-wrapper{
  margin: 20px 10px;
  font-size: 14px;
}

.desc-wrapper{
  position: relative;
}
.desc::before{
  content: "";
  width:40%;
  height: 2px;
  background-color: var(--color-tint);
  opacity: 0.2;
  position: absolute;
  left: 0;
  top:-5px;
}

.desc::after{
  content: "";
  width:40%;
  height: 2px;
  background-color: var(--color-tint);
  opacity: 0.2;
  position: absolute;
  bottom: -5px;
  right: 0;
}

.key{
  margin: 20px 0;
}
.img-wrapper>img{
  width: 100%;
}
</style>