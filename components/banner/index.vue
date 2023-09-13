
<template>
  <div class="banner">
    <div class="wrapper content">
      <el-carousel ref="carouselRef" class="carousel" height="480px" indicator-position="none" @change="handleBannerChange($event)">
        <template v-for="(item, index) in banners" :key="item.id">
          <el-carousel-item :name="index + ''">
            <img :src="item.picStr" alt="banner_img">
          </el-carousel-item>
        </template>
      </el-carousel>
      <!-- 小圆点 -->
      <ul class="dots">
        <template v-for="(item, index) in banners" :key="item.id">
          <li :class="['dot', currentIndex === index ? 'active' : '']" @click="handleBannerChange(index, true)"></li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElCarousel, ElCarouselItem } from 'element-plus'
import { IBanners } from '~/store/type';
interface IBannersProp {
  banners: IBanners[]
}
withDefaults(defineProps<IBannersProp>(), {
  banners: () => []
})
const currentIndex = ref(0)
const carouselRef = ref<InstanceType <typeof ElCarousel>>()
const handleBannerChange = (index: number, isDotClick?: boolean) => {
  currentIndex.value = index
  if (isDotClick) {
    carouselRef.value?.setActiveItem(index)
  }
}
</script>

<style scoped lang="scss">
.content {
  position: relative;
  margin-top: 36px;
  .carousel {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .dots {
    height: 40px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0;
    text-align: center;
    .dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      box-sizing: border-box;
      border-radius: 10px;
      margin-right: 10px;
      background-color: #fff;
      opacity: 0.8;
      cursor: pointer;
      &.active, &:hover {
        background-color: $textRedColor;
        border: none;
      }
    }
  }
}
</style>