<template>
  <el-container>
    <el-header style="height: 8vh">
      <el-row type="flex" justify="space-between">
        <el-col :span="12" class="mainTitle">
          <p>雨果后台管理中心</p>
        </el-col>
        <el-col :span="12" class="mainContent">
          <el-image :src="require('../images/img.jpg')" class="headerImg"></el-image>
          <span>{{loginUser.username}}</span>
        </el-col>
      </el-row>
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
import { BASEURL } from "../api/base";
export default {
  data() {
    return {
      loginUser: {
        username: null,
        haederimg: null
      },
      base_user: BASEURL
    };
  },
  components: {
    Menu
  },
  created() {
    let userObj = this.$store.getters.getUser;
    this.loginUser.username = userObj.username;
    this.loginUser.haederimg = userObj.headerimg;
    console.log(this.$store.getters.getUser);
  }
};
</script>
<style>
.el-header {
  width: 100%;

  background: rgb(226, 134, 134);
}
.headerImg {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.mainTitle {
  text-align: left;
}
.mainContent {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* border: 1px solid rebeccapurple */
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