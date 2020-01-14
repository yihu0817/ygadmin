<template>
  <div class="login">
    <el-container>
      <el-main>
        <el-card class="box-card">
          <el-row type="flex" justify="center">
            <el-col :span="24">
              <h2>登录界面</h2>
            </el-col>
          </el-row>
          <el-form :model="loginForm">
            <el-form-item label="用户名">
              <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input
                type="password"
                v-model="loginForm.password"
                placeholder="请输入密码"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-row type="flex" justify="space-between">
                <el-button type="primary" @click="on_Login">登录</el-button>
                <el-button type="warning" @click="on_cancelLogin">取消</el-button>
              </el-row>
            </el-form-item>
          </el-form>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    /**
     * 登录
     *
     */
    onLogin() {
      const user = this.loginForm;
      this.$store.dispatch("saveUser", user);
      this.$router.replace({ path: "/main" });
    },
    /**
     * 取消登录
     */
    on_cancelLogin() {
      this.loginForm.username = null;
      this.loginForm.password = null;
    }
  }
};
</script>
<style scoped>
.el-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  /* background: red */
  /* border: 1px solid red; */
}
.el-main {
  margin-top: 12%;
  /* border: 1px solid red; */
}
.el-card {
  width: 400px;
  /* height: 400px; */
  padding: 0px 30px;
}
.el-row {
  width: 100%;
  text-align: center;
  /* border: 1px solid red; */
}
.el-button {
  margin-top: 30px;
  width: 100px;
}
</style>