<template>
  <n-layout-header bordered>
    <div></div>
    <n-dropdown :options="options" >
      <n-button text class="btn-avatar"><n-avatar
          round
          :size="48"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      /></n-button>
    </n-dropdown>
  </n-layout-header>
</template>

<script setup>
import { h } from 'vue'
import { NIcon } from "naive-ui";
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from "@vicons/ionicons5";
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};
const options = [
  {
    label: "用户资料",
    key: "profile",
    icon: renderIcon(UserIcon)
  },
  {
    label: "编辑用户资料",
    key: "editProfile",
    icon: renderIcon(EditIcon)
  },
  {
    label: "退出登录",
    key: "logout",
    icon: renderIcon(LogoutIcon)
  }
]
</script>

<style scoped>
.n-layout-header{
  padding: 0 24px!important;
  height:var(--layout-header-height);
  min-height: var(--layout-header-height);
  max-height: var(--layout-header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn-avatar{
}
</style>