import {createRouter,createWebHistory} from 'vue-router'

const routes = [
  {path:'/',component:()=> import('@/views/Home.vue'),name:'home'},
  {path:'/login',name:'login',component:()=> import('@/views/Login.vue')},
  {path:'/song',name:'song',children:[{
    path:'/manage',name:'songManage',component:()=> import('@/views/song/SongManage.vue'),
    }]},
  {path:'/album',name:"album",children: [{path:'/manage',name:'albumManage',component:()=> import('@/views/album/AlbumManage.vue')}]}
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router