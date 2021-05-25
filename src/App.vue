<template>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <Tabbar />
  </div>
</template>
<script>
import Tabbar from "./components/common/Tabbar.vue";

export default {
  components: {
    Tabbar,
  },
};
</script>
<style>
@import "assets/css/base.css";
</style>
