<template>
  <el-container>
    <el-header style="height: 8vh">
      <el-row type="flex" justify="space-between">
        <el-col :span="12" class="mainTitle">
          <p>雨果后台管理中心</p>
        </el-col>
        <el-col :span="12" class="mainContent">
          <el-image
            :src="loginUser.headerimg!=''?(baseUrl+loginUser.headerimg):''"
            class="headerImg"
          >
            <div slot="error" class="image-solt">
              <el-image :src="require('../images/headerimg.jpg')" />
            </div>
          </el-image>
          <span>{{loginUser.username}}</span>
        </el-col>
      </el-row>
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
import { BASEURL } from "../api/base";
export default {
  data() {
    return {
      loginUser: {
        username: null,
        headerimg: null
      },
      baseUrl: BASEURL
    };
  },

  components: {
    Menu
  },
  created() {
    let userObj = this.$store.getters.getUser;
    this.loginUser.username = userObj.username;
    this.loginUser.headerimg = userObj.headerimg;
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
  margin-right: 20px;
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
  background: #545c64;
}

p {
  line-height: 8vh;
}
.content-p {
  text-align: center;
}
</style>