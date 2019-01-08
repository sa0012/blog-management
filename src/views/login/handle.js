import $ from '@/utils';

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
      img_base64: '',
      rules: {
        user_id: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
            ],
        user_pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      },
    }
  },
  methods: {
    async submitForm(type = '') {
      console.log(type)
      $.post('/user/login', this.loginForm).then(res => {
        console.log(res, 'login')
        this.$router.push('/manage')
      })
    },
    async get_check_code() {
      $.get('/other/checkcode').then(res => {
        this.img_base64 = res.img
        this.loginForm.code_token = res.token
        window.sessionStorage.setItem('code_token', res.token)
        console.log(res, 'checkcode')
      })
    }
  },
  mounted() {
    this.get_check_code()
    this.showLogin = true;
  }
}