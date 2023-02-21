<template>
 <slot></slot>
</template>
<script>
import { useMessage } from 'naive-ui'
import { defineComponent } from 'vue'

// content
export default defineComponent({
  setup() {
    window.$message = useMessage()
  }
})
</script>

<style scoped lang="scss">

</style>