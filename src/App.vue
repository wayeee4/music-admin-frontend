<script setup>
import { darkTheme } from 'naive-ui'
import Layout from '@/components/layout/Layout.vue'
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <Layout><router-view /></Layout>
  </n-config-provider>
</template>

<style scoped>

</style>
