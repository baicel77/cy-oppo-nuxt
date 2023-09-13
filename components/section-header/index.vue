
<template>
  <div class="wrapper section-header">
    {{ title }}
  </div>
</template>

<script setup lang="ts">
interface IHeaderProp {
  title: string
}
withDefaults(defineProps<IHeaderProp>(), {
  title: ''
})
</script>

<style scoped lang="scss">
.section-header {
  padding-top: 60px;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
}
</style>