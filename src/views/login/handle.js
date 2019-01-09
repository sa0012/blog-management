import $ from '@/utils';
import SqTabs from "@/components/tabs/src";
import SqTabpane from "@/components/tabpane/src";

export default {
  data() {
    return {
      showLogin: false,
      loginForm: {
        user_id: '',
        user_pwd: '',
        code: '',
        code_token: ''
      },
      registerForm: {
        user_name: '',
        user_id: '',
        user_pwd: '',
        re_user_pwd: '',
        iphone: '',
        email: '',
        code: '',
        code_token: ''
      },
      img_base64: '',
      rules: {
        user_id: [{
          required: true,
          message: '请输入用户账号',
          trigger: 'blur'
        }, ],
        user_pwd: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }],
        code: [{
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        }, ],
      },
      registerRules: {
        user_name: [{
          required: true,
          message: '请输入昵称',
          trigger: 'blur'
        }, ],
        user_id: [{
          required: true,
          message: '请输入用户账号',
          trigger: 'blur'
        }, ],
        user_pwd: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }],
        re_user_pwd: [{
          required: true,
          message: '请确认密码',
          trigger: 'blur'
        }],
        iphone: [{
          required: true,
          message: '请输入手机号码',
          trigger: 'blur'
        }, ],
        email: [{
          required: true,
          message: '请输入邮箱',
          trigger: 'blur'
        }, ],
        code: [{
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        }, ],
      }
    }
  },
  methods: {
    async submitForm() {
      if (!this.loginForm.user_id) {
        return false;
      } else if (!this.loginForm.user_pwd) {
        return false;
      } else if (!this.loginForm.code) {
        return false;
      }
      $.post('/user/login', this.loginForm).then(res => {
        if (res.code == 200) {
          window.sessionStorage.setItem('code_token', res.data.token)
          this.$router.push('/manage')
        } else {
          this.get_check_code()
        }
      })
    },
    async register() {
      if (this.registerForm.user_name == '' || this.registerForm.user_id == "" || this.registerForm.user_pwd == "" || !this.registerForm.iphone || !this.registerForm.email) {
        alert('注册失败，请填写完整表单');
        return;
      }
      if (this.registerForm.user_pwd.length < 5) {
        alert("注册失败，密码最少为5位");
        return;
      }

      if (this.registerForm.user_pwd != this.registerForm.re_user_pwd) {
        alert('注册失败，2次密码输入不一致!');
        return;
      }

      $.post('/user', this.registerForm).then(res => {
        if (res.code == 200) {
          alert('注册成功')
        this.$router.push('/manage')
        window.sessionStorage.setItem('code_token', res.data.token)
        } else {
          this.get_check_code();
        }
      })
    },
    async get_check_code() {
      $.get('/other/checkcode').then(res => {
        this.img_base64 = res.data.img
        this.loginForm.code_token = res.data.token
        this.registerForm.code_token = res.data.token
        console.log(res, 'checkcode')
      })
    }
  },
  mounted() {
    this.get_check_code()
    this.showLogin = true;
  },
  components: {
    SqTabs,
    SqTabpane
  },
}