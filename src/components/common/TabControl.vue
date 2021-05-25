<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in titles" :key="index" class="tabItem" :class="{active:index===currentIndex}" @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"TabControl",
  props:{
    titles:{
      type:Array,
      required:true
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    tabClick(index){
      this.currentIndex=index
      this.$emit("tabControlClick",index)
    }
  }
}
</script>

<style scoped>
.tabcontrol{
  width: 100%;
  height:44px;
  display: flex;
  background-color: white;
  align-items: center;

}

.tabItem{
  flex:1;
  text-align: center;
  font-size: 14px;
  color: #1a1a1a;
}

span{
  padding-bottom: 3px;
}
.active{
  color:var(--color-high-text)
}

.active span{
  border-bottom:3px solid var(--color-tint)
}
</style>