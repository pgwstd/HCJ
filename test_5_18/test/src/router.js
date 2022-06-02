import Vue from "vue"
import VueRouter from "vue-router"
import Login from "./components/Login";


import Course_Details from "./pages/Course_Details"
import Already_course from "./pages/Already_course"
import Credit from "./pages/Credit"
import Password from "./pages/Password"
import Course from "@/pages/Course";
import Score from "@/pages/Score";
import Student from "@/pages/Student";
import Teacher from "@/pages/Teacher";
import stu_Manage from "@/pages/stu_Manage";
import class_Manage from "@/pages/class_Manage";
import teatime from "@/pages/teatime";
import Statistics from "@/pages/Statistics";
import Uploadgrades from "@/pages/Uploadgrades";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,
        // redirect: '/Student'
    },
    //判断路由登录的页面是Student还是Teacher

    {
        path: '/Student',
        name: 'Student',
        component: Student,
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
                path: '/Score',
                name: 'Score',
                component: Score
            },
            {
                path: '/Credit',
                name: 'Credit',
                component: Credit
            },
            {
                path: '/Password',
                name: 'Password',
                component: Password
            },
            {
                path: '/Already_course',
                name: 'Already_course',
                component: Already_course
            },


        ]
    },
    {
        path: '/Teacher',
        name: 'Teacher',
        component: Teacher,
        children: [
            {
                path: '/',

            },
            {
                path: '/stu_Manage',
                name: 'stu_Manage',
                component: stu_Manage
            },
            {
                path: '/class_Manage',
                name: 'class_Manage',
                component: class_Manage
            },
            {
                path: '/teatime',
                name: 'teatime',
                component: teatime
            },
            {
              path: '/Statistics',
              name: 'Statistics',
              component: Statistics
            },
            {
              path: '/Uploadgrades',
              name: 'Uploadgrades',
              component: Uploadgrades
            },
        ]
    }
]
//     {
//         path: '/Student',
//         name: 'Student',
//         component: Student,
//         redirect: '/Course',
//         children: [
//             {
//                 path: '/Course',
//                 name: 'Course',
//                 component: Course
//             },
//             {
//                 path: '/Course_Details/:id',
//                 name: 'Course_Details',
//                 props: true,
//                 component:Course_Details
//             },
//             {
//                 path: '/Score',
//                 name: 'Score',
//                 component: Score
//             },
//             {
//                 path: '/Credit',
//                 name: 'Credit',
//                 component: Credit
//             },
//             {
//                 path: '/Password',
//                 name: 'Password',
//                 component: Password
//             },
//             {
//                 path: '/Already_course',
//                 name: 'Already_course',
//                 component: Already_course
//             },
//             {
//                 path: '/Teacher',
//                 name: 'Teacher',
//                 component: Teacher
//             }
//         ]
//     },
// ]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router





