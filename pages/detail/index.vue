<template>
  <div class="detail">
    <div class="wrapper content">
      <el-tabs v-model="activeTab" class="tabs">
        <template v-for="item in oppoDetail" :key="item.id">
          <el-tab-pane :label="item.title" :name="item.title">
            <grid-view :productDetailss="item.productDetailss"></grid-view>
          </el-tab-pane>
        </template>
      </el-tabs>
      <no-more></no-more>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElTabs, ElTabPane } from 'element-plus'
import useDetailStore from '@/store/detail'
import type { IDeatilType } from '@/service/detail'
import { storeToRefs } from 'pinia';
const route = useRoute()
const { type = 'oppo'} = route.query
// 请求数据
const detailStore = useDetailStore()
await detailStore.fetchOppoDetailAction(type as IDeatilType)

// 获取数据
const { oppoDetail } = storeToRefs(detailStore)

const activeTab = oppoDetail.value?.[0]?.title
</script>

<style scoped lang="scss">
.detail {
  background-color: #fafafa;
  padding-bottom: 60px;
  padding-top: 8px;
  .tabs {
    --el-color-primary: #f34141 !important;
    :deep(.el-tabs__header) {
      background-color: #fff;
    }
    :deep(.el-tabs__nav-wrap::after) {
      background-color: #fff;
    }
  }
}
</style>