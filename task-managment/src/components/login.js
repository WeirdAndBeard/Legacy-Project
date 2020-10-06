import logIn from './logIn.vue'

const router = new VueRouter({
    routes: [
      { 
       path: '/login',
       name: 'login',
       component: logIn
      }
    ]
  });