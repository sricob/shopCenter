<template>
  <div class="tabbar">
    <div class="tabbar_item">
      <router-link to="/home" tag="div">
        <div class="iconfont icon-home"></div>
        <div class="title">首页</div>
      </router-link> 
    </div>
      <div class="tabbar_item">
        <router-link to="/category" tag="div">
        <div class="iconfont icon-yyclassify2"></div>
        <div class="title">分类</div>
      </router-link> 
      </div>
      <div class="tabbar_item">
         <router-link to="/cart" tag="div">
        <div class="iconfont icon-cart"></div>
        <div class="title">购物车</div>
      </router-link> 
      </div>
     <div class="tabbar_item">
       <router-link to="/profile" tag="div">
        <div class="iconfont icon-Profile"></div>
        <div class="title">我的</div>
      </router-link> 
     </div>
      
  </div>
</template>

<script>


export default {
  name: 'TabBar',
  components: {

  }
}
</script>

<style scoped>
   @import "../../assets/css/iconfont/iconfont.css";  /* 引入css不能使用路径别名*/

   *{
     margin: 0;
     padding: 0;
   }

  .tabbar{
    display: flex;
    position: fixed;
    height: 49px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .tabbar_item{
    /* line-height: 49px; */
    height: 49px;
    flex:1;
    text-align: center;
    background-color: #f6f6f6;
    box-shadow: 0px -1px 3px rgba(100, 104, 101, 0.1);
    align-items: center;
  }

  .iconfont{
    font-size: 25px;
    
  }

  .title{
     height: 19px;
    line-height: 19px;
    font-size: 14px;
    /* margin-top:3px */

   
  }

 .router-link-active{
    color: var(--color-high-text);
  }
  
  a{
    text-decoration: none;
    color: black;
  }

  
</style>