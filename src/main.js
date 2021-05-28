import {createApp} from 'vue'
import FastClick from "fastclick"
import App from './App.vue'
import router from './router'
import store from "./store/store"
import mitt from "mitt"
import { Swipe, SwipeItem,} from 'vant';
import 'vant/lib/index.css';

const app = createApp(App);
FastClick.attach(document.body)
app.config.globalProperties.$mybus = new mitt()
app.use(Swipe);
app.use(SwipeItem);
app.use(store)
app.use(router).mount('#app')
