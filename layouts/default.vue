<template>
  <div class="default">
    <app-header></app-header>
    <!-- nav-bar -->
    <navbar></navbar>
    <slot></slot>
    <app-footer></app-footer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
import useHomeStore from '@/store/home'
import { IHomeInfoType } from '~/service/home';
const homeStore = useHomeStore()
const type = computed(() => route.path === '/' ? 'oppo' : route.path.slice(1))
watch(type, (newType) => {
  homeStore.fetchHomeInfoAction(newType as IHomeInfoType)
}, {
  immediate: true
})
</script>

<style scoped>

</style>