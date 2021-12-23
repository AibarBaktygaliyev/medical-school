import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import MainContainer from '@/views/Index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'MainContainer',
        component: MainContainer
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
