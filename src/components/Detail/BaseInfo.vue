<template>
  <div class="baseInfo-wrapper">
    <p class="title">{{goodsBaseInfo.title}}</p>
    <div class="price">
      <span class="nowPrice">￥{{goodsBaseInfo.lowNowPrice}}</span>
      <span class="oldPrice">{{goodsBaseInfo.oldPrice}}</span>
      <span :style="{backgroundColor:goodsBaseInfo.discountBgColor}" class="goodDesc">{{goodsBaseInfo.discountDesc}}</span>
    </div>
    <div class="columns" >
      <span v-for="(item,index) in goodsBaseInfo.columns" :key="index">{{item}}</span>
    </div>
    <div class="service">
      <div v-for="(item,index) in goodsBaseInfo.services" :key="index" class="serviceItem">
        <img :src="'https:'+item.icon" v-if="item.icon">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"BaseInfo",
  props:{
    goodsBaseInfo:{}
  }
}
</script>

<style scoped>
.baseInfo-wrapper{
  padding:10px 5px;
}
.title{
  padding-bottom:10px;
}
.nowPrice{
  color: var(--color-tint);
}

.oldPrice{
  font-size: 12px;
  padding:0 10px 0 5px;
  text-decoration-line: line-through;        /*给价格加上删除线 */
}

.goodDesc{
  border-radius: 5px;
  color: white;
  font-size: 14px;
  opacity: 0.9;
}
.columns{
  display: flex;
  padding:15px 0;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.columns>span{
  flex:1;
  text-align: center;
  font-size:12px;
  justify-content: space-between;
  opacity: 0.7;
}
.columns>span:first-of-type{
  text-align: left;
}
.columns>span:last-of-type{
  text-align: right;
}
.service{
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.serviceItem{
  flex: 1;
  text-align: center;
  white-space: nowrap

}
.serviceItem>img{
  width: 10px;
}
.serviceItem>span{
  font-size: 10px;
}
</style>