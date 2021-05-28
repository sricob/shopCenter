<template>
  <div ref="scroll">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data(){
    return{
      scroll:Object         
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    }
  },
  mounted() {
      this.scroll = new BScroll(this.$refs.scroll, {
      probeType: this.probeType,
      click:true,
      pullUpLoad:true,
      observeDOM:true,
      observeImage:true
    })
    // console.log(this.scroll)
    this.scroll.on("scroll", (position) => {
      this.$emit("ScrollPosition",position)
    })
    this.scroll.on("pullingUp",()=>{
      this.$emit("pullup")
    })
  }
};
</script>

