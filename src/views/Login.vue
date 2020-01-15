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
          <!-- 绑定数据、规则 不显示提示信息、 去掉红星-->
          <el-form
            :model="loginForm"
            :rules="loginRule"
            :show-message="false"
            hide-required-asterisk
          >
            <el-form-item label="用户名" prop="username">
              <el-input
                type="text"
                v-model="loginForm.username"
                placeholder="请输入用户名"
                clearable
                @blur="onBlurUserName"
                @focus="onFocusUsername"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                type="password"
                v-model="loginForm.password"
                placeholder="请输入密码"
                show-password
                @blur="onBlurPassword"
                @focus="onFocusPassword"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-row type="flex" justify="space-between">
                <el-button type="primary" @click="onLogin" :disabled="isdis">登录</el-button>
                <el-button type="warning" @click="onCancelLogin">取消</el-button>
              </el-row>
            </el-form-item>
          </el-form>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { RequestLogin } from "../api/UserApi";
import { showMassage } from "../common/massageBox";
export default {
  data() {
    return {
      loginForm: {
        username: null,
        password: null
      },
      loginRule: {
        username: [
          {
            required: true,
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            min: 3,
            max: 8,
            trigger: "blur"
          }
        ]
      },
      isdis: true
    };
  },
  updated() {
    this.onFocusUsername() && this.onFocusPassword()
      ? (this.isdis = false)
      : (this.isdis = true);
  },
  methods: {
    /**
     * 获取焦点，登录按钮可用
     */
    onFocusUsername() {
      // console.log(`获取用户名焦点`);
      return true;
    },
    onFocusPassword() {
      // console.log(`获取密码焦点`);
      return true;
    },
    /**
     * 登录初始化验证,失去焦点
     */
    onBlurUserName() {
      let username = this.loginForm.username;
      if (username != null && username != "") {
        this.loginRule.username[0].required = false;
      } else {
        this.loginRule.username[0].required = true;
        showMassage("请输入用户名！");
      }
    },
    onBlurPassword() {
      let password = this.loginForm.password;
      let passwordLen = 0;
      if (password != null && password != "") {
        this.loginRule.password[0].required = false;
        passwordLen = password.length;
      } else {
        this.loginRule.password[0].required = true;
        // showMassage("请输入密码！");
      }
      // console.log(`密码长度：${passwordLen}`);
      if (passwordLen >= 3 && passwordLen <= 5) {
        this.loginRule.password[0].required = false;
      } else {
        this.loginRule.password[0].required = true;
        showMassage("请输入3-5位密码！");
      }
    },
    /**
     * 登录网络验证
     */
    LoginJudge(user) {
      let { username, password } = user;
      RequestLogin(username, password)
        .then(res => {
          if (res.data.resultCode == 1) {
            // this.$store.dispatch("saveUser", res.data.resultInfo);
            this.$store.dispatch("saveUser", res.data.resultInfo); //保存登录信息
            console.log(res.data.resultInfo);
            this.$router.replace({ path: "/main" });
            showMassage("登录成功！", "success");
          } else {
            showMassage("用户名/密码错误！");
          }
        })
        .catch(err => {
          showMassage(err);
        });
    },

    /**
     * 登录
     */
    onLogin() {
      const user = this.loginForm;
      this.LoginJudge(user);
    },
    /**
     * 取消登录
     */
    onCancelLogin() {
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
  width: 120px;
}
</style>