<template>
  <div class="app-wrapper">
    <!-- 左侧 menu -->
    <sidebar
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的 navbar -->
        <navbar />
      </div>
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>
<script setup>
import Navbar from '@/layout/components/Navbar.vue'
import Sidebar from '@/layout/components/Sidebar/index.vue'
import AppMain from '@/layout/components/AppMain.vue'
//正常引入variables.scss没有效果,如果想在 JavaScript 中作为 CSS Modules 导入 CSS 或其它预处理文件，该文件应该以 .module.(css|less|sass|scss|styl) 结尾;  网址：https://cli.vuejs.org/zh/guide/css.html#postcss
import variables from '@/styles/variables.module.scss'
</script>

<style lang="scss" scoped>
@import '~@/mixin.scss';
@import '~@/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>
