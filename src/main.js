import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import About from './pages/About.vue'
import Contacts from './pages/Contacts.vue'
import Home from './pages/Home.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/contacts',
        name: 'contacts',
        component: Contacts
      }
    ]
});

const app = new Vue({
    router,
    render: createEle => createEle(App)
}).$mount('#app');
