<script setup>
import {darkTheme} from 'naive-ui'
import config from '@/config/index.js'
window.$config = config
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-message-provider placement="top-right">
      <Content>
        <router-view />
      </Content>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped>

</style>
