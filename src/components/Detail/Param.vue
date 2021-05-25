<template>
  <div v-if="Object.keys(goodsparam).length!==0">
    <table class="sizeTable" >
    <tr v-for="(item,index) in goodsparam.sizes[0]" :key="index">
      <td v-for="(td,index) in item" :key="index">
        {{td}}
      </td>
    </tr>
    </table>
    <table class="infoTable">
      <tr v-for="(item,index) in goodsparam.infos" :key="index">
        <td class="infoKey">{{item.key}}</td>
        <td class="infoValue">{{item.value}}</td>
      </tr>
    </table>
    <img :src="goodsparam.image" v-if="goodsparam.image.length!==0" class="infoImg">
  </div>
</template>

<script>
export default {
  name:"GoodsParam",
  props:{
    goodsparam:{}
  }
}
</script>
<style scoped>
table,tr,td{
  border-bottom: 1px solid rgba(100, 100, 100, 0.3);
  font-size: 14px;
  border-collapse: collapse;
}
.sizeTable{
  border-top: 2px solid rgba(100, 100, 100, 0.3);
  width: 100%;

}
.sizeTable td{
  height: 50px;
  text-align: center;
}

.infoTable{
  width: 100%;
}

.infoTable td{
  height: 50px;
}
.infoTable .infoKey{
  text-align: center;
  width: 100px;
}
.infoTable .infoValue{
  color: var(--color-tint);
  padding-left: 40px;
}
.infoImg{
  width: 100%;
}
</style>