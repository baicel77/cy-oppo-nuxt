
<template>
  <div class="wrapper tab-category">
    <template v-for="item in tabCategory" :key="item.id">
      <div class="tab-category-item" @click="handleTabCategortItemClick(item)">
        <img :src="item.picStr" alt="">
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ICategorys } from '~/store/type';
interface ICategoryProp {
  tabCategory: ICategorys[]
}
withDefaults(defineProps<ICategoryProp>(), {
  tabCategory: () => []
})

const handleTabCategortItemClick = (item: ICategorys) => {
  if (item.type) {
    return navigateTo(`/detail?type=${item.type}`)
  }
}
</script>

<style scoped lang="scss">
.tab-category {
  margin-top: 40px;
  @include normalFlex;
  align-items: center;
  .tab-category-item {
    cursor: pointer;
    img {
      width: 80px;
      height: 80px;
    }
    .title {
      margin-top: 16px;
      font-size: 16px;
      text-align: center;
      height: 24px;
    }
  }
}
</style>