import Vue from "vue"
import VueRouter from "vue-router"
import Login from "./components/Login";
import Home from "@/pages/Home";

import Course_Details from "./pages/Course_Details"
import Permissions from "./pages/Permissions"
import Orders from "./pages/Orders"
import Settings from "./pages/Settings"
import Course from "@/pages/Course";
import Products from "@/pages/Products";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home,
        redirect: '/Course',
        children: [
            {
                path: '/Course',
                name: 'Course',
                component: Course
            },
            {
                path: '/Course_Details/:id',
                name: 'Course_Details',
                props: true,
                component:Course_Details
            },
            {
                path: '/Products',
                name: 'Products',
                component: Products
            },
            {
                path: '/Orders',
                name: 'Orders',
                component: Orders
            },
            {
                path: '/Settings',
                name: 'Settings',
                component: Settings
            },
            {
                path: '/Permissions',
                name: 'Permissions',
                component: Permissions
            }
        ]
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router



