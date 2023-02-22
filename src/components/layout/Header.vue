<template>
  <n-layout-header bordered>
    <div></div>
    <n-dropdown :options="dropdown.options" @select="dropdown.handleSelect">
      <n-button text class="btn-avatar">
        <n-avatar
            round
            :size="40"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </n-button>
    </n-dropdown>
  </n-layout-header>
</template>

<script setup>
import {h, reactive} from 'vue'
import {NIcon} from "naive-ui";
import {
  LogOutOutline as LogoutIcon
} from "@vicons/ionicons5";
import {useRouter} from "vue-router";

const router = useRouter()
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};
const dropdown = reactive({
  options: [
    {
      label: "退出登录",
      key: "logout",
      icon: renderIcon(LogoutIcon)
    }
  ],
  handleSelect: (key) => {
    if (key == 'logout') {
      router.push({name: 'login'})
    }
  }
})
</script>

<style scoped>
.n-layout-header {
  padding: 0 24px !important;
  height: var(--layout-header-height);
  min-height: var(--layout-header-height);
  max-height: var(--layout-header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn-avatar {
}
</style>