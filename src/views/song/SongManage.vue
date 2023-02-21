<template>
  <div class="table-header">
    <div class="table-header-left-wrap">
    <n-space>
      <n-button  secondary type="primary">
        添加歌曲
      </n-button>
      <n-button secondary type="warning">
        批量删除
      </n-button>
    </n-space>
    </div>
   <div class="table-header-right-wrap">
     <n-input placeholder="搜索">
       <template #prefix>
         <n-icon :component="FlashOutline" />
       </template>
     </n-input>
   </div>
  </div>
  <div class="table-body">
    <n-data-table
        :columns="columns"
        :data="data"
        :pagination="pagination"
        :row-key="rowKey"
        @update:checked-row-keys="handleCheck"
    />
  </div>
</template>

<script setup>
import { FlashOutline } from '@vicons/ionicons5'
import { ref } from 'vue'
const createColumns = () => [
  {
    type: "selection",
    disabled(row) {
      return row.name === "Edward King 3";
    }
  },
  {
    title: "Name",
    key: "name"
  },
  {
    title: "Age",
    key: "age"
  },
  {
    title: "Address",
    key: "address"
  }
];
const columns = createColumns()
const panigation = {
  pageSize:5
}
const rowKey = (row)=>row.address
const handleCheck = (rowKeys)=>{
  checkedRowKeysRef.value = rowKeys
}
const data = Array.from({ length: 46 }).map((_, index) => ({
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`
}));
const checkedRowKeysRef = ref([]);
</script>

<style scoped>
.table-header{
  display: flex;
  justify-content: space-between;
}
</style>