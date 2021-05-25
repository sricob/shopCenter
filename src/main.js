import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import { Swipe, SwipeItem,} from 'vant';
import 'vant/lib/index.css';

const app = createApp(App);
app.use(Swipe);
app.use(SwipeItem);
app.use(router).mount('#app')
