<template>
  <div class="recommend-wrapper">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" >
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Recommend",
  props:{
     recommends:{
       type:Array,
       required:true
    }
  }
   
}
</script>

<style scoped>
.recommend-wrapper{
  margin-top:50px ;
  height:80px;
  display: flex;
  text-align: center;
  align-items: center;
  padding-bottom: 70px;
  border-bottom:5px solid #eee;
}
.recommend-item{
  flex:1;
  height:80px;
  text-align: center;
  font-size: 13px;
}
img{
  width: 90%;
  margin-bottom:5px
}
</style>