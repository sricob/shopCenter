<template>
  <div class="backtop-wrapper">
    <img src="../../assets/img/top.png">
  </div>
</template>

<script>
export default {
  name:"BackTop"
}
</script>

<style scoped>
.backtop-wrapper{
  position: fixed;
  bottom:55px;
  right: 10px;
  opacity: 0.8;
}

img{
  width: 50px;
  height: 50px;
}
</style>