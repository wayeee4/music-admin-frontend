<template>
  <n-layout has-sider >
    <Aside/>
    <n-layout>
      <Header/>
      <n-scrollbar style="max-height: calc(100vh - var(--layout-header-height))">
        <n-layout-content content-style="padding: 24px;">
          <router-view/>
        </n-layout-content>
      </n-scrollbar>
    </n-layout>
  </n-layout>
</template>

<script setup>

</script>

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
  min-height: calc(100vh - var(--layout-header-height));
  background: rgba(128, 128, 128, 0.4);
}
</style>