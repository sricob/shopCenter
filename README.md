##一、解决底部TabBar是否显示问题
```
    1.在配置路由的index.js中每一项路由添加meta：{isShowTabbar:true/false}，在需要隐藏的界面设置为false即可
    2.然后在app.vue中这样修改<Tabbar v-if="this.$route.meta.isShowTabBar"/>
```
##二、使用mitt进行非父子组件间通信
```
    1.npm i mitt  --save
    2.在main.js中进行配置:import mitt from "mitt"
                          app.config.globalProperties.$mybus = new mitt()         //mybus为自定义名
    3.发送事件：this.$mybus.emit("事件名",data)
      接受事件：this.$mybus.on("事件名",data=>{})
```
##三、在添加购物车成功后弹出对应Toast
```
    1.对actions中的addTocart方法的代码使用promise进行封装
    2.即addToCart(context, payload) {
          return new Promise((resolve, reject) => {
            let flag = 0
            for (let item of context.state.goods) {
              if (item.id === payload.id) {
                context.commit("addCount", item)
                resolve("商品数量+1")
                flag = 1
              }
            }
            if (flag == 0) {
              context.commit("addCart", payload)
              resolve("商品添加成功")
            }
          })
        }
    3.添加成功后在.then中显示Toastthis.$store.dispatch("addToCart", product).then((res) => {
        Toast.success(res)
      });
```
##四、解决betterscroll无法滚动问题
```
    1.在betterscroll配置中添加 observeDOM:true,observeImage:true
    2.如果还有问题那就手动在页面高度变化后重新计算高度，即调用refresh()
```
##五、解决弹性元素内 p标签内容不换行且溢出内容用省略号表示 不生效问题
```
    1.给p标签的父元素加上overflow:hidden即可
    2.不添加的话p标签宽度会特别长
    3.p{
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
       }
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
