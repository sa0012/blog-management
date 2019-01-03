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
          meta: ['数据管理', '用户列表'],
          // 用户列表
          component: () => import('@/views/dataManagement/userList')
        },
        {
          path: '/articleList',
          name: 'articleList',
          meta: ['数据管理', '文章列表'],
          // 文章列表
          component: () => import('@/views/dataManagement/articleList')
        },
        {
          path: '/commentList',
          name: 'commentList',
          meta: ['数据管理', '评论列表'],
          // 评论列表
          component: () => import('@/views/dataManagement/commentList')
        },
        {
          path: '/leaveList',
          name: 'leaveList',
          meta: ['数据管理', '留言列表'],
          // 留言列表
          component: () => import('@/views/dataManagement/leaveList')
        },
        {
          path: '/adminList',
          name: 'adminList',
          meta: ['数据管理', '管理员列表'],
          // 管理员列表
          component: () => import('@/views/dataManagement/adminList')
        },

        // 添加数据
        {
          path: '/addArticle',
          name: 'addArticle',
          meta: ['添加数据', '添加文章'],
          // 添加文章
          component: () => import('@/views/addData/addArticle')
        },

        // 图表
        {
          path: '/visitor',
          name: 'visitor',
          meta: ['图表', '用户分布'],
          // 用户分布
          component: () => import('@/views/charts/visitor')
        },
        {
          path: '/articleClass',
          name: 'articleClass',
          meta: ['图表', '文章分类'],
          // 文章分类
          component: () => import('@/views/charts/articleClass')
        },

        // 编辑
        {
          path: '/vueEdit',
          name: 'vueEdit',
          meta: ['编辑', '文本编辑'],
          // 文本编辑
          component: () => import('@/views/edit/vueEdit')
        },

        // 设置
        {
          path: '/adminSet',
          name: 'adminSet',
          meta: ['设置', '管理员设置'],
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
