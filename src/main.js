import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './pages/home.vue'
import Restaurant from './pages/Restaurant.vue'

const routes = [
  { path: '/', component: Home },
  {name: 'Restaurant-list', path: '/restaurant/:namerestaurant', component: Restaurant },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const VueApp = createApp(App)

VueApp.use(router)

VueApp.mount('#app');

