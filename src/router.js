import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/login')
    },
    {
      path: '/manage',
      name: 'Manage',
      component: () => import('@/views/manage'),
      children: [
        // 首页
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/home')
        },
        {
          path: '/userList',
          name: 'userList',
          // 用户列表
          component: () => import('@/views/dataManagement/userList')
        },
        {
          path: '/articleList',
          name: 'articleList',
          // 文章列表
          component: () => import('@/views/dataManagement/articleList')
        },
        {
          path: '/commentList',
          name: 'commentList',
          // 评论列表
          component: () => import('@/views/dataManagement/commentList')
        },
        {
          path: '/leaveList',
          name: 'leaveList',
          // 留言列表
          component: () => import('@/views/dataManagement/leaveList')
        },
        {
          path: '/adminList',
          name: 'adminList',
          // 管理员列表
          component: () => import('@/views/dataManagement/adminList')
        },

        // 添加数据
        {
          path: '/addArticle',
          name: 'addArticle',
          // 添加文章
          component: () => import('@/views/addData/addArticle')
        },

        // 图表
        {
          path: '/visitor',
          name: 'visitor',
          // 用户分布
          component: () => import('@/views/charts/visitor')
        },
        {
          path: '/articleClass',
          name: 'articleClass',
          // 文章分类
          component: () => import('@/views/charts/articleClass')
        },

        // 编辑
        {
          path: '/vueEdit',
          name: 'vueEdit',
          // 文本编辑
          component: () => import('@/views/edit/vueEdit')
        },

        // 设置
        {
          path: '/adminSet',
          name: 'adminSet',
          // 管理员设置
          component: () => import('@/views/setting/adminSet')
        },

        // 说明
        {
          path: '/explain',
          name: 'explain',
          // 管理员设置
          component: () => import('@/views/description/explain')
        },
      ]
    }
  ]
})
