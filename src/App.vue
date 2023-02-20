<script setup>
import { darkTheme,NLayout } from 'naive-ui'
import Aside from '@/components/layout/Aside.vue'
import Header from '@/components/layout/Header.vue'
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-layout has-sider >
     <Aside/>
      <n-layout>
        <Header/>
        <n-layout-content content-style="padding: 24px;">
          <router-view />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<style scoped>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
