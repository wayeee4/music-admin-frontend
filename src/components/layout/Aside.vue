<template>
  <n-layout-sider collapse-mode="width"
                  :collapsed-width="95"
                  :width="240"
                  show-trigger="arrow-circle"
                  content-style="padding: 24px;max-height:100vh;height:100vh;"
                  bordered>
    <n-menu :options="menuOptions" />
  </n-layout-sider>
</template>

<script setup>
import {  h } from "vue";
import { NIcon } from "naive-ui";
import { RouterLink } from 'vue-router'
import {
  MusicalNote as SongIcon,
  Home as HomeIcon,
} from '@vicons/ionicons5'
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label:() =>
      h(RouterLink,{
        to:{
          name:'home',
        }
      },{default:()=>'首页'})
    ,
    key: "home",
    icon: renderIcon(HomeIcon)
  },
  {
    label: "歌曲",
    key: "song",
    icon: renderIcon(SongIcon),
    children:[
      {
        label:() =>
          h(RouterLink,{
            to:{
              name:'songManage',
            }
          }, { default: () => '歌曲管理' })
        ,
        key:"songManager"
      }
    ]
  },
  {
    label: "专辑",
    key: "album",
    icon: renderIcon(SongIcon),
    children:[
      {
        label:() =>
            h(RouterLink,{
              to:{
                name:'albumManage',
              }
            }, { default: () => '专辑管理' })
        ,
        key:"albumManage"
      }
    ]
  }
];

</script>

<style scoped>

</style>