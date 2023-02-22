import {createRouter, createWebHistory} from 'vue-router'

const routes = [

    {path: '/login', name: 'login', component: () => import('@/views/Login.vue')},
    {
        path: '/', name: 'Layout', component: () => import('@/components/layout/Layout.vue'),
        children: [
            {path: '', component: () => import('@/views/Home.vue'), name: 'home'},
            {path: 'home', redirect: {name: 'home'}},
            {
                path: 'song', name: 'song', children: [{
                    path: 'manage', name: 'songManage', component: () => import('@/views/song/SongManage.vue'),
                }]
            },
            {
                path: 'album',
                name: "album",
                children: [{
                    path: 'manage',
                    name: 'albumManage',
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
    const token = localStorage.getItem('music-access-token')
    if (!token && to.name !== 'login') {
        return {name: 'login'}
    }
    return true
})
export default router