
<template>
  <div class="wrapper grid-view">
    <div class="view-item first" v-if="url">
      <img :src="url" alt="">
    </div>
    <template v-for="item in productDetailss" :key="item.id">
      <grid-view-item :productDetails="item"></grid-view-item>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { IProductDetails } from '@/store/type'
interface IProductDetailssProp {
  productDetailss: IProductDetails[]
  url?: string
}
withDefaults(defineProps<IProductDetailssProp>(), {
  productDetailss: () => [],
  url: ''
})
</script>

<style scoped lang="scss">
.grid-view {
  width: 1266px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  .view-item.first {
    width: 40%;
    padding-right: 18px;
    margin-bottom: 18px;
    box-sizing: border-box;
    background-color: #fafafa;
    cursor: pointer;
    > img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        @include hoverEffect;
      }
    }
  }
}
</style>