<template>
  <div class="shopInfo-wrapper">
    <div class="shopName">
      <img :src="'https:'+shopInfo.logo">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="score">
      <div class="leftInfo">
        <div class="sellCount">
          <p>{{(shopInfo.sells/10000).toFixed(1)}}万</p>
          <p>总销量</p>
        </div>
        <div class="goodsCount">
          <p>{{shopInfo.goods}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <ul class="rightInfo">
        <li v-for="(item,index) in shopInfo.score" :key="index">
          <span>{{item.name}}</span>
          <span :class="{highColor:item.isBetter}" class="rightScore">{{item.score.toFixed(2)}}</span>
          <span :class="{highColor:item.isBetter}" class="rightText">{{item.isBetter?"高":"低"}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:"ShopInfo",
  props:{
    shopInfo:{}
  }
}
</script>

<style scoped>


.shopName{
  display: flex;
  align-items: center;
  padding-bottom: 20px;
}
.shopName>img{
  width: 70px;
  margin-right: 20px;
}
.shopName>span{
  font-size: 18px;
}
.score{
  display: flex;
}
.leftInfo{
  flex:1;
  display: flex;
  text-align: center;
}
.leftInfo>div{
  flex: 1;
}

.rightInfo{
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding-left: 30px;
}
.rightScore,.rightText{
  color: green;
  margin: 0 10px;
}



.highColor{
  color: red;
}
</style>