
<template>
  <div class="view-item">
    <div class="grid-view-item">
      <div class="item-img">
        <img :src="productDetails.url" alt="">
      </div>
      <div class="item-title">{{ productDetails.title }}</div>
      <div class="item-labels">
        <template v-for="item in productDetails.activityList" :key="item.type">
          <span class="label">{{ item.activityInfo }}</span>
        </template>
      </div>
      <div class="item-price">
        <span class="prefix">{{ productDetails.priceInfo?.prefix }}</span>
        <span class="prefix">{{ productDetails.priceInfo?.currencyTag }}</span>
        <span class="price">{{ productDetails.priceInfo?.buyPrice || productDetails.priceInfo?.price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProductDetails } from '@/store/type'

interface IProductDetailsProp {
  productDetails: Partial<IProductDetails>
}
withDefaults(defineProps<IProductDetailsProp>(), {
  productDetails: () => ({})
})

</script>

<style scoped lang="scss">
.view-item {
  width: 20%;
  padding-right: 18px;
  margin-bottom: 18px;
  box-sizing: border-box;
  background-color: #fafafa;
  cursor: pointer;
  .grid-view-item {
    text-align: center;
    background-color: #fff;
    border-radius: 8px;
    transition: all 0.2s linear;
    &:hover {
      @include hoverEffect
    }
    .item-img {
      img {
        width: 130px;
        height: 150px;
        margin-top: 14px;
        margin-bottom: 7px;
      }
    }
    .item-title {
      padding: 0 20px;
      margin-top: 2px;
      font-weight: 500;
      font-size: 15px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .item-labels {
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      .label {
        display: inline-block;
        padding: 1px 2px;
        color: $priceColor;
        font-size: 13px;
        border: 1px solid $priceColor;
        margin-right: 4px;
        margin-bottom: 4px;
      }
    }
    .item-price {
      padding-bottom: 40px;
      .prefix {
        color: $priceColor;
        font-size: 13px;
      }
      .price {
        color: $priceColor;
        font-size: 20px;
        line-height: 1;
      }
    }
  }
}
</style>