<template>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <Tabbar v-if="this.$route.meta.isShowTabBar"/>
  </div>
</template>
<script>
import Tabbar from "./components/common/Tabbar.vue";

export default {
  components: {
    Tabbar
  }
}
</script>
<style>
@import "assets/css/base.css";
</style>
