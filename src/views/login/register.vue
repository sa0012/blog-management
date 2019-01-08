<template>
  <div class="register-page">
    <div class="form">
      <p class="form-title">用户注册</p>
      <div class="form-item">
        <span class="form-item-title">称呼</span>
        <input class="form-input" type="text" placeholder="请输入称呼" v-model="userInfo.user_name">
      </div>
      <div class="form-item">
        <span class="form-item-title">账号</span>
        <input class="form-input" type="text" placeholder="请输入账号/手机号/邮箱登陆" v-model="userInfo.user_id">
      </div>
      <div class="form-item">
        <span class="form-item-title">密码</span>
        <input class="form-input" type="password" placeholder="请输入密码" v-model="userInfo.user_pwd">
      </div>
      <div class="form-item">
        <span class="form-item-title">手机号</span>
        <input class="form-input" type="text" placeholder="请输入手机号码" v-model="userInfo.iphone" maxlength="11">
      </div>
      <div class="form-item">
        <span class="form-item-title">邮箱</span>
        <input class="form-input" type="text" placeholder="请输入邮箱" v-model="userInfo.email">
      </div>
      <div class="form-item">
        <span class="form-item-title">确认密码</span>
        <input class="form-input" type="password" placeholder="请再次输入密码" v-model="userInfo.re_user_pwd">
      </div>
      <div class="form-item">
        <span class="form-item-title">验证码</span>
        <input class="form-input" type="text" placeholder="请输入验证码" v-model="userInfo.code"  @keyup.enter="submit">
        <img class="form-checkcode" :src=img_base64 alt="验证码" title="点击切换验证码" @click="get_check_code">
      </div>
      <div class="form-item">
        <button  class="form-submit-btn" @click="submit">注册</button>
      </div>
      <div class="form-bottom">
         <router-link class="form-jump-link" to="/login">已有账号，去登录</router-link>
      </div>
    </div>
    <div class="cropper-img-box" v-if="cropper_box_mark == true">
    <div class="cropper-img-tool">
      <button class="cropper-img-tool-btn" @click="rotateRight">顺时针90°</button>
      <button class="cropper-img-tool-btn" @click="finish">确认</button>
      <button class="cropper-img-tool-btn" @click="cropper_box_mark = false">取消</button>
      <button class="cropper-img-tool-btn" @click="rotateLeft">逆时针90°</button>
    </div>
    </div>
  </div>
</template>

<script>
import $ from '@/utils';
export default {
  created(){
    this.get_check_code();
  },
  data() {
    return {
      cropperData: {
				img: '',
				autoCrop: true,
				autoCropWidth: 200,
				autoCropHeight: 200,
				fixedBox: true
      },
      cropper_box_mark: false,
      img_base64: '',
      userInfo: {
        user_name: '',
        user_id: '',
        iphone: '',
        email: '',
        user_pwd: '',
        re_user_pwd: '',
        avatar: '',
        code: '',
        code_token: ''
      }
    }
  },
  methods: {
    async get_check_code() {
      $.get('/other/checkcode').then(res => {
        this.img_base64 = res.img
        this.userInfo.code_token = res.token
        console.log(res, 'checkcode')
      })
    },
    async submit(){
      if(this.userInfo.user_name == '' || this.userInfo.user_id == "" || this.userInfo.user_pwd == "" || !this.userInfo.iphone || !this.userInfo.email ){
        alert('注册失败，请填写完整表单');
        return;
      }
      if(this.userInfo.user_pwd.length < 5){
        alert("注册失败，密码最少为5位");
        return;
      }

      if(this.userInfo.user_pwd != this.userInfo.re_user_pwd){
        alert('注册失败，2次密码输入不一致!');
        return;
      }
      $.post('/user', this.userInfo).then(res => {
        alert('注册成功')
        this.$router.push('/')
        console.log( res.token)
        window.sessionStorage.setItem('code_token', res.token)
        // this.get_check_code();
      })
    }
  }
}
</script>


<style lang="scss">
.register-page {
  .avatar-box {
    flex: 1;
  }
  #upload-img {
    opacity: 0;
    display: none;
  }
  .upload-img-btn {
    width: 100px;
    border: 1px solid #ccc;
    display: block;
    padding: 5px 15px;
    transform: translateY(40%);
    margin: 5px auto;
    cursor: pointer;
  }
  .form-itme-avatar {
    height: auto;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  .avatar-show {
    margin: 0 auto;
    display: block;
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  .cropper-img-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  .cropper-img-tool {
    position: absolute;
    z-index: 2;
    bottom: 20px;
    left: 0;
    text-align: center;
    width: 100%;
    .cropper-img-tool-btn {
      width: 140px;
      height: 50px;
      font-size: 18px;
      cursor: pointer;
      & + .cropper-img-tool-btn {
        margin-left: 50px;
      }
    }
  }
}
</style>

