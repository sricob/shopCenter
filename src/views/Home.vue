<template>
  <div class="home">
    <NavBar class="home-nav">
      <!--这里是vue2.6后的新用法，#即为v-slot的简写 
          v-slot必须写在template标签中 -->
      <template #center><div>购物街</div></template>
    </NavBar>
    <TabControl
      :titles="['流行', '新款', '精选']"
      @tabControlClick="tabClick"
      ref="tabControl1"
      class="tabControl"
      v-show="showTabControl"
    />
    <Scroll
      class="scroll-wrapper"
      ref="scroll"
      :probeType="3"
      @ScrollPosition="scrollShow"
      @pullup="loadMore"
    >
      <Carousel :imgs="banners" @imgLoad="didLoad" />
      <Recommend :recommends="recommends" />
      <Feature />
      <TabControl
        :titles="['流行', '新款', '精选']"
        @tabControlClick="tabClick"
        ref="tabControl2"
      />
      <GoodsList :goods="goods[kind].list" />
    </Scroll>
    <BackTop @click="backtopClick" v-show="isShow" />
  </div>
</template>

<script>
import Scroll from "components/common/Scroll";

import { homeMultidata, homeGoods } from "network/home"; //请求首页数据
import NavBar from "components/common/NavBar"; //顶部导航栏
import Carousel from "components/Home/Carousel"; //轮播图
import Recommend from "components/Home/Recommend"; //建议栏
import Feature from "components/Home/Feature"; //本周流行
import TabControl from "components/common/TabControl"; //中间商品展示区导航栏
import GoodsList from "components/common/GoodsList"; //引入商品展示
import BackTop from "components/common/BackTop"; //引入返回顶部按钮

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
      kind: "pop",
      isShow: false, //控制回到顶部按钮是否显示
      tabControlTop: 0,
      showTabControl: false,
      savePosition: 0,
    };
  },
  components: {
    Scroll,
    NavBar,
    Carousel,
    Recommend,
    Feature,
    TabControl,
    GoodsList,
    BackTop,
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("pop"); //调用获取首页商品数据的方法
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  activated() {
    //再次回到页面时设置为原来的位置
    this.$refs.scroll.scroll.scrollTo(0, this.savePosition, 0);
  },
  deactivated() {
    //离开页面时记录位置
    this.savePosition = this.$refs.scroll.scroll.y;
  },
  methods: {
    getHomeMultidata() {
      homeMultidata()
        .then((res) => {
          this.banners = res.data.data.banner.list; //请求并保存首页banner数据
          this.recommends = res.data.data.recommend.list; //请求并保存首页recommend数据
        })
        .catch((err) => {
          console.log("出错了", err.message);
        });
    },
    getHomeGoods(type) {
      homeGoods(type, this.goods[type].page).then((res) => {
        //这里直接使用data里的page
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page++; //请求完成后页码加1
        this.$refs.scroll.scroll.finishPullUp();
      });
    },
    tabClick(index) {
      //点击切换tabclick
      switch (index) {
        case 0:
          this.kind = "pop";
          break;
        case 1:
          this.kind = "new";
          break;
        case 2:
          this.kind = "sell";
          break;
        default:
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backtopClick() {
      //点击按钮返回顶部
      this.$refs.scroll.scroll.scrollTo(0, 0, 300);
    },
    scrollShow(position) {
      if (position.y <= -1500) {
        //控制返回顶部按钮是否显示
        this.isShow = true;
      } else {
        this.isShow = false;
      }

      if (this.tabControlTop <= -position.y) {
        //控制tabControl1是否显示
        this.showTabControl = true;
      } else {
        this.showTabControl = false;
      }
    },
    loadMore() {
      //上拉加载更多
      this.getHomeGoods(this.kind);
    },
    didLoad() {
      //轮播图加载完成后再获取tabControl的offsetTop
      this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
};
</script>


<style scoped>
.home {
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: #ff5777;
  color: white;
}
.scroll-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}

.tabControl {
  position: relative;
  z-index: 1;
}
</style>


