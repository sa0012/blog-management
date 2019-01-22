import $ from '@/utils';
import {
  setSession,
  removeSession
} from '@/common/mutils';
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
        user_id: '',
        user_pwd: '',
        re_user_pwd: '',
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
        code: [{
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        }, ],
      }
    }
  },
  methods: {
    githubLogin() {
      $.get('/github/login').then(res => {
        window.location.href = res.data
        window.localStorage.setItem('GITHUB_LOGIN_REDIRECT_URL', `${this.$route.path}?comment=new`);

      })
      // window.location.href = 'https://github.com/login/oauth/authorize?client_id=1f08860dca3e7b4499a5&redirect_uri=http://192.168.31.230:8080/login&scope=User';

    },
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
          setSession('code_token', res.data.token)
          setSession('userId', res.data.user_id)
          setSession('user_name', res.data.user_name)
          setSession('avatar', res.data.avatar)
          this.$message.success('登陆成功')
          this.$router.push(`/manage`)
        } else {
          this.get_check_code()
        }
      })
    },
    async register() {
      if (this.registerForm.user_id == "" || this.registerForm.user_pwd == "") {
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
          setSession('code_token', res.data.token)
          setSession('userId', res.data.user_id)
          setSession('user_name', res.data.user_id)
          setSession('avatar', res.data.github_avator)
          this.$message.success('注册成功')
          this.$router.push(`/manage`)
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