<template>
  <div class="goodItem-wrapper" @click="goodItemCilck">
      <img :src=" goodsimg" >
    <div class="goodinfo">
      <p class="title">{{good.title}}</p>
      <span class="price">￥{{good.price}}</span>
      <span class="collect">{{good.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"GoodsListItem",
  props:{
    good:{}
  },
  methods:{
    goodItemCilck(){
      this.$router.push("/detail/"+this.good.iid)                  //params类型
      // this.$router.push({                                          //query类型
      //   path:"/detail",
      //   query:{
      //     iid:this.good.iid
      //   }
      // })                  
    }
  },
  computed:{
    goodsimg(){
      return  this.good.image||this.good.show.img 
    }
  }
}
</script>

<style scoped>
.goodItem-wrapper{
  width: 48%;
  /* overflow: hidden; */
  margin-bottom: 10px;
}

img{
  width: 100%;
  border-radius: 5px;
}
.goodinfo{
  text-align: center;
  font-size: 13px;
}
.title{
   white-space: nowrap;
   overflow: hidden;
   text-overflow:ellipsis;
   color: #1a1a1a;
}

.price{
  color: red;
}
.collect{
  padding-left:30px;
  position:relative;
}

.collect::before{
  content: "";
  position: absolute;                                   /*相对于collect定位 */
  background: url("../../assets/img/collect.svg");
  background-size: 100%;                              /*一定要指定这个属性*/
  height: 14px;
  width: 14px;
  left: 15px;
}
</style>