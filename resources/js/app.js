require('./bootstrap');


import { createApp } from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'

//importamos axios
import VueAxios from 'vue-axios'
import axios from 'axios'

//importamos y coniguramos Vue Router  ----  import { createRouter, createWebHistory }  from 'vue-router'
// import { createMemoryHistory, createRouter } from 'vue-router'
// import { routes } from './routes'
// import { create } from 'lodash';

// const router = createRouter({
//    history: createWebHistory(),
//    routes,
// })

// const router = createRouter({
//   mode: createMemoryHistory(),
//   routes
// })
const app = createApp({})

      app.component('HomeComponent', Home)
      app.component('AppComponent', App)
      //app.use(router)
      app.use(VueAxios, axios)
      app.mount('#app')

