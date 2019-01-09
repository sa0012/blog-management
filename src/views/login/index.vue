<template>
  <div class="login fillcontain">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer" v-show="showLogin">
        <div class="manage_tip">
          <p>BLOG后台管理系统</p>
        </div>
        <sq-tabs active="name1" line-scale="0.7" font-size="16" title-height="40">
          <sq-tabpane label="登陆" name="name1">
            <el-form :model="loginForm" :rules="rules" ref="loginForm">
              <el-form-item prop="user_id">
                <el-input v-model="loginForm.user_id" placeholder="账号"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input type="password" placeholder="密码" v-model="loginForm.user_pwd"></el-input>
              </el-form-item>
              <el-form-item prop="code">
                <el-col :span="14">
                  <el-input type="text" placeholder="验证码" v-model="loginForm.code"></el-input>
                </el-col>
                <el-col :span="10">
                  <img
                    class="form-checkcode"
                    :src="img_base64"
                    alt="验证码"
                    title="点击切换验证码"
                    @click="get_check_code"
                  >
                </el-col>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
              </el-form-item>
            </el-form>
          </sq-tabpane>
          <sq-tabpane label="注册" name="name2">
            <el-form :model="registerForm" :rules="registerRules" ref="loginForm">
              <el-form-item prop="user_name">
                <el-input v-model="registerForm.user_name" placeholder="昵称"></el-input>
              </el-form-item>
              <el-form-item prop="user_id">
                <el-input v-model="registerForm.user_id" placeholder="账号"></el-input>
              </el-form-item>
              <el-form-item prop="iphone">
                <el-input v-model="registerForm.iphone" placeholder="手机号码" maxlength="11"></el-input>
              </el-form-item>
              <el-form-item prop="email">
                <el-input v-model="registerForm.email" placeholder="邮箱"></el-input>
              </el-form-item>
              <el-form-item prop="user_pwd">
                <el-input type="password" placeholder="密码" v-model="registerForm.user_pwd"></el-input>
              </el-form-item>
              <el-form-item prop="re_user_pwd">
                <el-input type="password" placeholder="确认密码" v-model="registerForm.re_user_pwd"></el-input>
              </el-form-item>
              <el-form-item prop="code">
                <el-col :span="14">
                  <el-input type="text" placeholder="验证码" v-model="registerForm.code"></el-input>
                </el-col>
                <el-col :span="10">
                  <img
                    class="form-checkcode"
                    :src="img_base64"
                    alt="验证码"
                    title="点击切换验证码"
                    @click="get_check_code"
                  >
                </el-col>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="register()" class="submit_btn">注册</el-button>
              </el-form-item>
            </el-form>
          </sq-tabpane>
        </sq-tabs>
      </section>
    </transition>
  </div>
</template>

<script>
import Controller from "./handle";

export default Controller;
</script>

<style lang="scss" scoped>
.login {
  background-color: #324057;

  .manage_tip {
    position: absolute;
    width: 100%;
    top: -100px;
    left: 0;
    p {
      font-size: 34px;
      color: #fff;
    }
  }
  .form_contianer {
    width: 320px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
    .submit_btn {
      width: 100%;
      font-size: 16px;
    }
  }
  .tip {
    font-size: 12px;
    color: red;
  }
  .form-fade-enter-active,
  .form-fade-leave-active {
    transition: all 1s;
  }
  .form-fade-enter,
  .form-fade-leave-active {
    transform: translate3d(-50%, -50px, 0);
    opacity: 0;
  }
}

.form-checkcode {
  float: right;
}
</style>


