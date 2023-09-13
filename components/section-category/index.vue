
<template>
  <div class="wrapper">
    <template v-for="item in categorys" :key="item.id">
      <template v-if="item.productDetailss.length && item.url">
        <section-header :title="item.title"></section-header>
        <grid-view :productDetailss="item.productDetailss" :url="item.url"></grid-view>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ICategorys } from '@/store/type'

interface ICategorysProp {
  categorys: ICategorys[]
}
withDefaults(defineProps<ICategorysProp>(), {
  categorys: () => []
})

</script>

<style scoped lang="scss">

</style>