<template>
  <div class="app-header">
    <div class="wrapper content">
      <div class="header-left">
        <NuxtLink class="oppo" to="https://www.oppo.com/cn/" target="_blank">OPPO官网</NuxtLink>
        <NuxtLink class="oneplus" to="https://www.oneplus.com/cn" target="_blank">一加官网</NuxtLink>
      </div>
      <div class="header-right">
        <NuxtLink class="download" to="#" target="_blank">
          下载OPPO商城App
          <div class="album">
            <img src="@/assets/images/ecode.png" alt="">
            <p>扫描下载OPPO商城APP</p>
          </div>
        </NuxtLink>
        <NuxtLink to="/login" target="_blank">
          <i class="iconfont icon-user"></i>
          登录
        </NuxtLink>
        <NuxtLink to="/register" target="_blank">注册</NuxtLink>
        <NuxtLink to="#" target="_blank">
          <i class="iconfont icon-shoppingcart"></i>
          购物车(0)
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.app-header {
  @include elementSticky;
  background-color: #222222;
  font-size: 12px;
  .content {
    @include normalFlex;
    align-items: center;
    height: $appHeaderHeight;
    a {
      color: #fff;
    }
    .header-left {
      .oppo {
        margin-right: 24px;
      }
    }
    .header-right {
      > a {
        padding: 0 14px;
        border-right: 1px solid #fff;
        &:last-child {
          border-right: none;
        }
        .iconfont {
          font-size: 12px;
        }
      }
      .download {
        position: relative;
        .album {
          display: none;
          position: absolute;
          top: 26px;
          left: 0;
          background-color: #fff;
          padding: 10px;
          border-radius: 5px;
          text-align: center;
          box-shadow: 0 4px 10px 0 rgba(0,0,0,.08);
          z-index: 999;
          img {
            width: 140px;
            height: 140px;
            margin-bottom: 10px;
          }
          p {
            color: #000;
          }
        }
        &:hover .album {
          display: block;
        }
      }
    }
  }
}
</style>