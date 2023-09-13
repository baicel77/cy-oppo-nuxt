<template>
  <div class="navbar">
    <div class="wrapper content">
      <NuxtLink class="logo" to="/" @click="handleItemClick(0)">
        <img src="@/assets/images/logo.png" alt="">
        <h1 class="title">OPPO商城</h1>
      </NuxtLink>
      <ul class="nav">
        <template v-for="(item, index) in navbars" :key="item.id">
          <li class="nav-item" @click="handleItemClick(index)">
            <NuxtLink :class="['link', currentIndex === index ? 'active' : '']" :to="item.type === 'oppo' ? '/' : item.type">
              {{ item.title }}
            </NuxtLink>
          </li>
        </template>
      </ul>
      <div class="search">
        <input type="text" placeholder="Reno9 系列">
        <img src="@/assets/images/search.svg" alt="search">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useHomeStore from '@/store/home'
import { storeToRefs } from 'pinia';
const homeStore = useHomeStore()
const { navbars } = storeToRefs(homeStore)
const route = useRoute()
const curentRouteFullPath = route.fullPath
const pathMapIndexObj: any = {
  '/': 0,
  '/onePlus': 1,
  '/intelligent': 2,
}
const currentIndex = ref(pathMapIndexObj[curentRouteFullPath])
const handleItemClick = (index: number) => {
  currentIndex.value = index
}
</script>

<style scoped lang="scss">
.navbar {
  @include elementSticky(36px, 99);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.content {
  height: $navBarHeight;
  background-color: #fff;
  @include normalFlex; 
  justify-content: flex-start;
  align-items: center;
  .logo {
    width: 250px;
    height: 50px;
    img {
      height: 100%;
    }
    .title {
      text-indent: -9999px;
    }
  }
  .nav {
    @include normalFlex; 
    width: 530px;
    margin: 0 50px 0 60px;
    .nav-item {
      .link {
        color: #000;
        &:hover, &.active {
          color: $textRedColor;
        }
      }
    }
  }
  .search {
    height: 36px;
    width: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 8px 16px;
    border-radius: 36px;
    background-color: #f6f6f6;
    cursor: pointer;
    input {
      width: 112px;
      height: 21px;
      font-size: 14px;
      opacity: 0.3;
      outline: none;
      border: none;
      background-color: transparent;
    }
    img {
      width: 14px;
      height: 14px;
    }
  }
}
</style>