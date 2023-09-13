<template>
  <div class="oppo">
    <banner :banners="banners"></banner>
    <tab-categorys :tabCategory="categorys"></tab-categorys>
    <section-category :categorys="categorys"></section-category>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useHomeStore from '~/store/home';
const homeStore = useHomeStore()
const { banners, categorys } = storeToRefs(homeStore)
</script>

<style lang="scss" scoped>
.oppo {
  background-color: #fafafa;
}
</style>