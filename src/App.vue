<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMainStore } from '@/store/modules/app';
import { useLocaleStore } from '@/store/modules/locale';
const mainStore = useMainStore()
const localeStore = useLocaleStore()
const { darkMode, count } = storeToRefs(mainStore);
const handleClick = () => {
  mainStore.changeCount(2);
}
</script>

<template>
  <div class="wrapper">
    <router-link to="/">
      <el-button type="primary">Home</el-button>
    </router-link>
    <router-link to="/login">
      <el-button type="danger">Login</el-button>
    </router-link>
    <el-button type="success">切换语言</el-button>
    <p class="wrapper-title">{{ darkMode }}</p>
    <div class="wrapper-body">
      <p>{{ count }}</p>
      <p>{{ $t('t0001') }}</p>
      <p>{{ localeStore.systemLangInfo.locale }}</p>
    </div>
    <router-view />
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
