<template>
  <div class="detailNavbar">
    <NavBar>
      <template #left>
        <div class="imgWrapper" @click="backClick">
          <img src="../../assets/img/back.svg" />
        </div>
      </template>
      <template #center>
        <ul class="liWrapper">
          <li v-for="(title,index) in titles" :key="index" :class="{active:currentIndex===index}" @click="liClick(index)">{{title}}</li>
        </ul>
      </template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar";
export default {
  name: "DetailNavBar",
  components:{
    NavBar
  },
  data(){
    return{
      titles:["商品","参数","评论","推荐"],
      currentIndex:0
    }
  },
  methods:{
    liClick(index){
      this.currentIndex=index
      this.$emit("liClick",index)
    },
    backClick(){
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.detailNavbar{
  background-color: white;
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  margin-bottom:44px;
}
.liWrapper {
  display: flex;
}
.liWrapper > li {
  flex: 1;
  font-size: 14px;
}

.imgWrapper {
  position: relative;
}

.imgWrapper > img {
  position: absolute;
  left: 50%;
  margin-left: -11px;
  margin-top: 11px;
}

.active{
  color: var(--color-high-text);
}
</style>