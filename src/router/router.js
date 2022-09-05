import {createRouter, createWebHistory} from 'vue-router'
import Main from '@/pages/Main.vue'
import PostSingle from '@/pages/PostSingle.vue'
import NotFound from '@/pages/404.vue'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts/:id',
        name: 'post.single',
        component: PostSingle
    },
    { 
        path: '/404', 
        name: '404', 
        component: NotFound, 
    }, 
    { 
        path: '/:catchAll(.*)', 
        redirect: '/404' 
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;