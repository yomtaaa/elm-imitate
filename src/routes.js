import Vue from 'vue';
import Router from 'vue-router';
import indexPage from './views/index.vue'
import findPage from './views/find.vue'
import listPage from './views/list.vue'
import userPage from './views/user.vue'
import consigneePage from './views/index_components/consignee.vue'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            redirect: '/index'
        },
        {
            path:'/index',
            component:indexPage
        },
        {
            path:'/find',
            component:findPage
        },
        {
            path:'/list',
            component:listPage
        },
        {
            path:'/user',
            component:userPage
        },
        {
            path: '/consignee',
            component: consigneePage
            
        }
    ]
})