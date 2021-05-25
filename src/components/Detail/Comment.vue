<template>
  <div v-if="Object.keys(goodsComment).length!==0" class="comment-wrapper">
    <div class="title">
      <span class="title1">用户评论</span>
      <span class="title2">更多</span>
    </div>
    <div class="userInfo" >
      <img :src="'https:'+goodsComment[0].user.avatar" >
      <span>{{goodsComment[0].user.uname}}</span>
    </div>
    <p class="content">{{goodsComment[0].content}}</p>
    <div class="content-detail">
      <span class="time">{{usertime}}</span>
      <span class="style">{{goodsComment[0].style}}</span>
    </div>
    <img v-for="(img,index) in goodsComment[0].images" :key="index" :src="img" class="userimg">
  </div>
</template>

<script>
import Time from "time.js"          //引入time.js将时间戳格式化为日期
export default {
  name:"Comment",
  props:{
    goodsComment:{}
  },
  computed:{
    usertime(){
      return Time(this.goodsComment[0].created*1000, "%y-%M-%d %h:%m:%s")
    }
  }
}
</script>

<style scoped>
.comment-wrapper{
  padding-bottom: 20px;
}
.title{
  width:100%;
  height: 70px;
  display: flex;
  align-items: center;
  border-top:2px solid rgba(100, 100, 100, 0.2);
  border-bottom:1px solid rgba(100, 100, 100, 0.2)
}
.title>span{
  flex: 1;
  font-size: 14px;
}
.title1{
  margin-left: 20px;
}
.title2{
  text-align: right;
  margin-right: 20px;
}

.userInfo{
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.userInfo img{
  width: 60px;
  margin-right: 20px;
}
.content{
  width: 100%;
  font-size:14px;
  margin:10px 5px;
}
.content-detail .time{
  margin:10px;
  font-size: 14px;
  opacity: 0.5;
}
.content-detail .style{
  font-size: 13px;
  opacity: 0.5;
}
.userimg{
  width: 40%;
  margin: 5px;
}
</style>