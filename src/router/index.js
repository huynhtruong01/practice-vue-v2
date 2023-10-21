import Vue from "vue"
import VueRouter from "vue-router"
import Posts from "../components/Posts/Posts.vue"
import CalculatorView from "../views/CalculatorView.vue"
import CreatePostView from "../views/CreatePostView.vue"
import HomeView from "../views/HomeView.vue"
import PostsView from "../views/PostsView.vue"
import UpdatePostView from "../views/UpdatePostView.vue"
import UserView from "../views/UserView.vue"
import TodoListView from "../views/TodoListView.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/user",
        name: "user",
        component: UserView,
    },
    {
        path: "/todos",
        name: "todos",
        component: TodoListView,
    },
    {
        path: "/calculator",
        name: "calculator",
        component: CalculatorView,
    },
    {
        path: "/posts",
        name: "posts",
        component: PostsView,
        children: [
            {
                path: "",
                component: Posts,
            },
            {
                path: "create",
                component: CreatePostView,
            },
            {
                path: "update/:postId",
                component: UpdatePostView,
            },
        ],
    },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    linkExactActiveClass: "active",
    routes,
})

export default router
