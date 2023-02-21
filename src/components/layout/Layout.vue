<template>
  <n-layout has-sider >
    <Aside/>
    <n-layout>
      <Header/>
      <n-layout-content   content-style="padding: 24px;">
        <slot></slot>
      </n-layout-content>
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
  background: rgba(128, 128, 128, 0.4);
}
</style>