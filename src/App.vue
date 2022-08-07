<script setup lang="ts">
</script>

<template>
  <div class="wrapper">
    <p class="wrapper-title">Test</p>
    <p class="wrapper-body">zhengyu</p>
  </div>
</template>

<style lang="less" scoped>
@import "./styles/global.less";
.wrapper {
  height: 100vh;
  width: 100vw;
  
  &-title {
    font-size: larger;
    font-weight: bolder;
  }
  &-body {
    color: @backgroundColor;
  }
}
</style>
