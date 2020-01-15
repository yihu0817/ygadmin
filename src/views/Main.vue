<template>
  <el-container>
    <el-header style="height: 8vh">
      <p>雨果后台管理中心</p>
    </el-header>
    <el-container class="content">
      <el-aside width="200px">
        <p class="content-p">菜单列表</p>
        <Menu></Menu>
      </el-aside>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom:8px">
          <el-breadcrumb-item :to="{path:'/about'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-text="this.$router.currentRoute.meta.title">首页</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Menu from "@/views/Menu.vue";
export default {
  components: {
    Menu
  }
};
</script>
<style>
.el-header {
  width: 100%;

  background: rgb(226, 134, 134);
}
* {
  margin: 0;
  padding: 0;
}
.content {
  height: 92vh;
}
.content .el-aside {
  background: #545c64;
}

p {
  line-height: 8vh;
}
.content-p {
  text-align: center;
}
</style>