import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/login', name: 'Login', component: () => import('@/views/Login.vue')},
    {
        name: 'Layout', component: () => import('@/components/layout/Layout.vue'),
        children: [
            {path: '/home', component: () => import('@/views/Home.vue'), name: 'Home'},
            {
                path: '/song', name: 'Song', children: [{
                    path: '/manage', name: 'SongManage', component: () => import('@/views/song/SongManage.vue'),
                }]
            },
            {
                path: '/album',
                name: "Album",
                children: [{
                    path: '/manage',
                    name: 'AlbumManage',
                    component: () => import('@/views/album/AlbumManage.vue')
                }]
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    // ...
    // 返回 false 以取消导航
    return false
})
export default router