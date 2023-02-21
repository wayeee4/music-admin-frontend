<script setup>
import {darkTheme} from 'naive-ui'
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-message-provider placement="top-right">
      <Content>
        <router-view/>
      </Content>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped>

</style>
