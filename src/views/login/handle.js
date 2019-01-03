export default {
  data() {
    return {
      showLogin: false,
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
            ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      },
    }
  },
  methods: {
    submitForm(type = '') {
      console.log(type)
      this.$router.push('/manage')
    }
  },
  mounted() {
    this.showLogin = true;
  }
}