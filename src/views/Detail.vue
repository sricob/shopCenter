<template>
  <div class="detail-wrapper">
    <NavBar @liClick="liClick" ref="navbar"/>
    <Scroll class="wrapper" ref="scroll" :probeType="3" @ScrollPosition="ScrollPosition">
      <Carousel :imgs="detailCarouselImages" />
      <BaseInfo :goodsBaseInfo="goodsBaseInfo" />
      <ShopInfo :shopInfo="shopInfo" />
      <GoodsImg :goodsimgs="goodsimgs" @imgLoadFinished="imgFinished"/>
      <Param :goodsparam="goodsparam" ref="param"/>
      <Comment :goodsComment="goodsComment" ref="comment"/>
      <GoodsList :goods="recommendImgs" ref="commend"/>
    </Scroll>
    <BackTop @click="backTop" v-show="isShowBackTop"/>
    <BottomBar @addToCart="addToCart"/>
  </div>
</template>

<script>
import Scroll from "components/common/Scroll"; //引入betterscroll
import NavBar from "components/Detail/NavBar"; //引入顶部导航栏
import Carousel from "components/Detail/Carousel"; //引入轮播图
import BaseInfo from "components/Detail/BaseInfo"; //引入商品基本信息
import ShopInfo from "components/Detail/ShopInfo"; //引入店铺信息
import GoodsImg from "components/Detail/GoodsImg"; //引入商品穿着效果图片
import Param from "components/Detail/Param"; //引入商品参数信息
import Comment from "components/Detail/Comment"; //引入用户评论信息
import GoodsList from "components/common/GoodsList"//引入推荐信息
import BottomBar from "components/Detail/BottomBar" //引入底部导航栏
import BackTop from "components/common/BackTop"  //引入返回顶部按钮
import {
  getDetailData,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "../network/detail"; //获取详情页数据
import {debounce} from "assets/js/debounce"
export default {
  name: "Detail",
  components: {
    Scroll,
    NavBar,
    Carousel,
    BaseInfo,
    ShopInfo,
    GoodsImg,
    Param,
    Comment,
    GoodsList,
    BottomBar,
    BackTop
  },
  data() {
    return {
      detailCarouselImages: [],
      goodsBaseInfo: {},
      shopInfo: {},
      goodsimgs: {},
      goodsparam: {},
      goodsComment: [],
      recommendImgs:{},
      tops:[],
      getThemeTopY:{},
      currentIndex:0,
      isShowBackTop:false
    };
  },
  created() {
    getDetailData(this.$route.params.id).then((res) => {
      const data = res.data.result;
      this.detailCarouselImages = data.itemInfo.topImages.map((imgUrl) => {
        //获取轮播图图片
        return "https:" + imgUrl;
      })
      this.goodsBaseInfo = new Goods( //获取商品信息
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      )
      this.shopInfo = new Shop(data.shopInfo); //获取店铺信息
      this.goodsimgs = data.detailInfo; //获取商品穿着效果图片
      this.goodsparam = new GoodsParam( //获取商品参数信息
        data.itemParams.info,
        data.itemParams.rule
      )
      this.goodsComment = data.rate.list ? data.rate.list : []; //获取用户评论信息
    })
    getRecommend().then((res) => {
      this.recommendImgs=res.data.data.list
    })
    this.getThemeTopY=debounce(()=>{
      this.tops.push(0)
      this.tops.push(this.$refs.param.$el.offsetTop)
      this.tops.push(this.$refs.comment.$el.offsetTop)
      this.tops.push(this.$refs.commend.$el.offsetTop)
      this.tops.push(Number.MAX_VALUE)
    },1000)
  },
  methods:{
    imgFinished(){
      this.getThemeTopY()
    },
    liClick(index){
     this.$refs.scroll.scroll.scrollTo(0,-this.tops[index],200)
    },
    ScrollPosition(position){
      let length=this.tops.length
      for(let i=0;i<=length-1;i++){
        if(this.currentIndex!==i&&-position.y>=this.tops[i]&&-position.y<this.tops[i+1]){
          this.currentIndex=i
          this.$refs.navbar.currentIndex=this.currentIndex
        }
      }
      if(-position.y>=1500){
        this.isShowBackTop=true
      }else{
        this.isShowBackTop=false
      }
    },
    backTop(){
      this.$refs.scroll.scroll.scrollTo(0,0,200)
    },
    addToCart(){
      const product={}
      product.img=this.detailCarouselImages[0]
      product.title=this.goodsBaseInfo.title
      product.desc=this.goodsBaseInfo.desc
      product.price=this.goodsBaseInfo.lowNowPrice
      product.id=this.$route.params.id
      product.count=1
     this.$store.commit("addCart",product)
     console.log(this.$store.state.goods)
    }
  }
};
</script>

<style scoped>
.detail-wrapper {
  height: 100vh;
  position: relative;
}

.wrapper {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
</style>