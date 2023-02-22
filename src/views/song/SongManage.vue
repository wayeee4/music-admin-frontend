<template>
  <div class="table-header">
    <div class="table-header-left-wrap">
      <n-space>
        <n-button secondary type="primary">
          添加歌曲
        </n-button>
        <n-button secondary type="warning">
          批量删除
        </n-button>
      </n-space>
    </div>
    <div class="table-header-right-wrap">
      <n-input v-model:value="table.keyword" @blur="table.handleSearch" clearable placeholder="搜索">
        <template #prefix>
          <n-icon :component="FlashOutline"/>
        </template>
      </n-input>
    </div>
  </div>
  <div class="table-body">
    <n-data-table
        remote
        :columns="table.columns"
        :loading="table.loading"
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
import {FlashOutline} from '@vicons/ionicons5'
import {h, nextTick, onMounted, reactive, ref} from 'vue'
import {NButton, NImage, NSwitch} from 'naive-ui'
import songApi from '@/api/song'

const createColumns = () => [
  {
    type: "selection",
    disabled(row) {
      // return row.name === "Edward King 3";
    }
  },
  {
    title: "歌曲名",
    key: "name"
  },
  {
    title: "封面",
    key: "pic",
    render(row) {
      return h(
          NImage,
          {
            src: row.pic,
            width: 80
          },
          null
      )
    }
  },
  {
    title: "创作者",
    key: "artist_name"
  },
  {
    title: "所属专辑",
    key: "album_name"
  },
  {
    title: "时长",
    key: "duration",
    render(row) {
      const duration = row.duration
      const m = parseInt(duration / 60)
      const s = duration % 60
      return `${m} : ${s}`;
    }
  },
  {
    title: "上下架",
    key: "status",
    render(row) {
      return h(NSwitch, {
        value: !!row.status,
        onUpdateValue: async (value) => {
          const status = value ? 1 : 0
          await updateStatus([row.id], status)
          row.status = status
        }
      }, null)
    }
  },
  {
    title: "原创",
    key: "is_original",
    render(row) {
      return row.is_original ? '是' : '否';
    }
  },
  {
    title: '最近更新时间',
    key: 'update_time',
  }
];

const table = reactive({
  columns: createColumns(),
  keyword: '',
  loading: true,
  pagination: {
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
  rowKey: (row) => row.name,
  handleCheck: (rowKeys) => {
    table.checkedRowKeys = rowKeys
  },
  handleSearch: () => {
    queryAndSet(table.pagination.page, table.pagination.pageSize, table.keyword)
  },
  checkedRowKeys: null,
  data: [],
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
  options: [
    {
      label: "编辑",
      key: "edit"
    },
    {
      label: () => h("span", {style: {color: "red"}}, "删除"),
      key: "delete"
    }
  ],
  show: false,
  x: 0,
  y: 0,
  onClickoutside: () => {
    actions.show = false
  },
  handleSelect: () => {
    actions.show = false
  }
})

onMounted(() => {
  queryAndSet(table.pagination.page, table.pagination.pageSize, table.keyword)
})
const queryAndSet = async (pageNum, pageSize, keyword) => {
  const res = await songApi.getList({page_num: pageNum, page_size: pageSize, keyword})
  table.pagination.itemCount = res.total
  table.data = res.songs
  table.loading = false
}
const updateStatus = async (ids, status) => {
  const res = await songApi.updateStatus({ids, status})
  return true
}
</script>

<style scoped>
.table-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}
</style>