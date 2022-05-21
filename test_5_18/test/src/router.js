import Vue from "vue"
import VueRouter from "vue-router"


import Users from "/pages/Users"
import User from "/pages/User"
import Permissions from "/pages/Permissions"
import Product from "/pages/Product"
import Orders from "/pages/Orders"
import Settings from "/pages/Settings";


Vue.use(VueRouter)
export default new VueRouter({
    mode: "history",
    router: [
        {
            path: "/",
            redirect: "/products",
        },
        {
            path: "/users",
            redirect: Users,
        },
        {
            path: "/user/:id",
            component: User,
            props: true
        },
        {
            path: "/permissions",
            component: Permissions,
        },
        {
            path: "/products",
            component: Product,
        },
        {
            path: "/orders",
            component: Orders,
        },
        {
            path: "/settings",
            component: Settings,
        }
    ]
})

