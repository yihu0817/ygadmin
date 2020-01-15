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
      <el-main></el-main>
    </el-container>
  </el-container>
</template>
<script>
import Menu from "@/views/Menu.vue";
export default {};
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
  background: gold;
}
.content .el-main {
  background: rgb(138, 155, 228);
}
p {
  line-height: 8vh;
}
.content-p {
  text-align: center;
}
</style>