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
     <n-input clearable placeholder="搜索">
       <template #prefix>
         <n-icon :component="FlashOutline" />
       </template>
     </n-input>
   </div>
  </div>
  <div class="table-body">
    <n-data-table
        :columns="table.columns"
        :data="table.data"
        :pagination="table.pagination"
        :row-key="table.rowKey"
        @update:checked-row-keys="table.handleCheck"
        :row-props="table.rowProps"
        max-height="70vh"
    />
    <n-dropdown
        placement="bottom-start"
        trigger="manual"
        :x="actions.x"
        :y="actions.y"
        :options="actions.options"
        :show="actions.show"
        :on-clickoutside="actions.onClickoutside"
        @select="actions.handleSelect"
    />
  </div>
</template>

<script setup>
import { FlashOutline } from '@vicons/ionicons5'
import { h, nextTick, reactive, ref } from 'vue'
import { NButton } from 'naive-ui'
const createColumns = () => [
  {
    type: "selection",
    disabled(row) {
      // return row.name === "Edward King 3";
    }
  },
  {
    title: "名称",
    key: "name"
  },
  {
    title: "封面",
    key: "age"
  },
  {
    title: "创作者",
    key: "address"
  },{
    title: "所属专辑",
    key: "address"
  },
  {
    title: "时长",
    key: "address"
  },
  {
    title: "状态",
    key: "address"
  },
];

const table = reactive({
  columns:createColumns(),
  pagination:{
    page: 1,
    pageSize: $config.pageSize,
    showSizePicker: true,
    pageSizes: $config.pageSizes,
    onChange: (page) => {
      table.pagination.page = page;
    },
    onUpdatePageSize: (pageSize) => {
      table.pagination.pageSize = pageSize;
      table.pagination.page = 1;
    }
  },
  rowKey:(row)=>row.address,
  handleCheck:(rowKeys)=>{
    table.checkedRowKeysRef = rowKeys
  },
  checkedRowKeysRef:null,
  data:Array.from({ length: 46 }).map((_, index) => ({
    name: `Edward King ${index}`,
    age: 32,
    address: `London, Park Lane no. ${index}`
  })),
  rowProps: (row) => {
    return {
      onContextmenu: (e) => {
        e.preventDefault();
        actions.show = false;
        nextTick().then(() => {
          actions.show = true;
          actions.x = e.clientX;
          actions.y = e.clientY;
        });
      }
    };
  }
})

const actions = reactive({
  options : [
    {
      label: "编辑",
      key: "edit"
    },
    {
      label: () => h("span", { style: { color: "red" } }, "删除"),
      key: "delete"
    }
  ],
  show:false,
  x:0,
  y:0,
  onClickoutside:()=>{
    actions.show = false
  },
  handleSelect:()=>{
    actions.show = false
  }
})
</script>

<style scoped>
.table-header{
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}
</style>