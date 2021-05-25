module.exports={                                //此文件用于配置路径别名，@即表示src
  configureWebpack:{
    resolve:{
      alias:{
        "assets":"@/assets",
        "common":"@/common",
        "components":"@/components",
        "network":"@/network",
        "views":"@/views",
      }
    }
  }
}