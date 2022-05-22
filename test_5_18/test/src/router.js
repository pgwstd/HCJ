import Vue from "vue"
import VueRouter from "vue-router"

import Users from "./pages/Users.vue"
import User from "./pages/User.vue"
import Permissions from "./pages/Permissions.vue"
import Product from "./pages/Products.vue"
import Orders from "./pages/Orders.vue"
import Settings from "./pages/Settings.vue"

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    router: [
        {
            path: "/",
            redirect: "/products"
        },
        {
            path: "/users",
            redirect: Users
        },
        {
            path: "/user/:id",
            component: User,
            props: true
        },
        {
            path: "/permissions",
            component: Permissions
        },
        {
            path: "/products",
            component: Product
        },
        {
            path: "/orders",
            component: Orders
        },
        {
            path: "/settings",
            component: Settings
        },
    ]
})

