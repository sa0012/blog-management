import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login')
    },
    {
      path: '/github',
      name: 'Github',
      component: () => import('@/views/login/github')
    },
    {
      path: '/manage',
      name: 'Manage',
      meta:{
        requiresAuth: true
      },
      component: () => import('@/views/manage'),
      children: [
        // 首页
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/home'),
          meta:{
            requiresAuth: true
          },
        },
        {
          path: '/userList',
          name: 'userList',
          meta:{
            requiresAuth: true,
            title: ['数据管理', '用户列表']
          },
          // 用户列表
          component: () => import('@/views/dataManagement/userList')
        },
        {
          path: '/articleList',
          name: 'articleList',
          meta:{
            requiresAuth: true,
            title: ['数据管理', '文章列表']
          },
          // 文章列表
          component: () => import('@/views/dataManagement/articleList')
        },
        {
          path: '/commentList',
          name: 'commentList',
          meta:{
            requiresAuth: true,
            title: ['数据管理', '评论列表']
          },
          // 评论列表
          component: () => import('@/views/dataManagement/commentList')
        },
        {
          path: '/leaveList',
          name: 'leaveList',
          meta:{
            requiresAuth: true,
            title: ['数据管理', '留言列表']
          },
          // 留言列表
          component: () => import('@/views/dataManagement/leaveList')
        },

        // 添加数据
        {
          path: '/addArticle',
          name: 'addArticle',
          meta:{
            requiresAuth: true,
            title: ['添加数据', '添加文章']
          },
          // 添加文章
          component: () => import('@/views/addData/addArticle')
        },

        // 图表
        {
          path: '/visitor',
          name: 'visitor',
          meta:{
            requiresAuth: true,
            title: ['图表', '用户分布']
          },
          // 用户分布
          component: () => import('@/views/charts/visitor')
        },
        {
          path: '/articleClass',
          name: 'articleClass',
          meta:{
            requiresAuth: true,
            title: ['图表', '文章分类']
          },
          // 文章分类
          component: () => import('@/views/charts/articleClass')
        },

        // 编辑
        {
          path: '/vueEdit',
          name: 'vueEdit',
          meta:{
            requiresAuth: true,
            title: ['编辑', '文本编辑']
          },
          // 文本编辑
          component: () => import('@/views/edit/vueEdit')
        },

        // 设置
        {
          path: '/adminSet',
          name: 'adminSet',
          meta:{
            requiresAuth: true,
            title: ['设置', '个人中心']
          },
          // 管理员设置
          component: () => import('@/views/setting/adminSet')
        },

        // 说明
        {
          path: '/explain',
          name: 'explain',
          meta: ['说明', '管理员设置'],
          // 管理员设置
          component: () => import('@/views/description/explain')
        },
      ]
    }
  ]
})

// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  //获取store里面的token
  let token = window.sessionStorage.getItem('code_token')
  //判断要去的路由有没有requiresAuth
  if(to.meta.requiresAuth){
      if(token){
        next();
      }else{
        next({
          path: '/',
          query: { redirect: to.fullPath }  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
        });
      } 
  }else{
    next();
  }
});

export default router;