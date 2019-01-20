import axios from 'axios';
import Vue from 'vue';
import router from '../router';

// 全局设置
axios.defaults.timeout = 10000; // 时间超时设置10s
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 创建一个axios的实列
const instance = axios.create();
// instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

axios.interceptors.request.use = instance.interceptors.request.use;

// request拦截器，每次发送请求的时候拦截下来
instance.interceptors.request.use(
  config => {
    // 每次发送请求，检查 vuex 中是否有token,如果有放在headers中
    let token = window.sessionStorage.getItem('code_token')
    if(token){
      config.headers.Authorization = token;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
)

// respone拦截器
instance.interceptors.response.use(
  response => {
    return response;
  },
  // 除了200以外的请求到这里来，，这里的200不是我们设置的那个code200,,我这里是，没有登录才会不返回200
  error => {
    let { response } = error;
    if(response != null){
      // 这里为什么处理401错误,详见，server/untils/token check_token这个函数
      if(response.status == 401) {
        let msg = response.data || '请重新登录!';
        new Vue().$message.error(msg)
        window.sessionStorage.clear()  // token过期,清除
        router.replace({ //跳转到登录页面
            path: '/',
            // 添加一个重定向后缀，等登录以后再到这里来
            query: { redirect: router.currentRoute.fullPath } 
        });
        return Promise.reject(error.response);
      }
    }else {
      // new Vue().$message.error('网络中断，请稍后重试！')
    }
  }
)

window.axios = instance