<template>
  <div>
      <h2>登录界面</h2>
      <el-form model="loginForm">
        <el-form-item label="用户名">
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onLogin">登录</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      loginForm:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    /**
     * 登录
     */
    onLogin(){
      const user = this.loginForm;
      this.$store.dispatch('saveUser',user);
      this.$router.replace({path:'/main'});
    }
  }
}
</script>

<style>

</style>