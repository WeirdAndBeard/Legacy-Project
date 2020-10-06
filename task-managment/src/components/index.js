import Vue from 'vue'
import Router from 'vue-router'
import LogIn from './LogIn.vue'
import SignUp from './SignUp.vue'


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/LogIn',name:"LogIn", component: LogIn },
        { path: '/SignUp',name:"SignUp", component: SignUp }
    ]
})