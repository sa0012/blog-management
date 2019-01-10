<template>
  <div class="manage fillcontain">
    <el-row style="height: 100%;">
      <el-col :span="4" style="min-height: 100%; background-color: #324057;">
        <div class="user-msg">
          <img src="../../assets/images/default.jpg" alt="avator" class="user-avator">
          <div class="user-name">{{ userName }}</div>
        </div>

        <el-menu
          :default-active="defaultActive"
          style="min-height: 100%;"
          theme="dark"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#324057"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="manage">
            <i class="el-icon-menu"></i>首页
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>数据管理
            </template>
            <el-menu-item index="userList">用户列表</el-menu-item>
            <el-menu-item index="articleList">文章列表</el-menu-item>
            <el-menu-item index="commentList">评论列表</el-menu-item>
            <el-menu-item index="leaveList">留言列表</el-menu-item>
            <el-menu-item index="adminList">管理员列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-plus"></i>添加数据
            </template>
            <el-menu-item index="addArticle">添加文章</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-star-on"></i>图表
            </template>
            <el-menu-item index="visitor">用户分布</el-menu-item>
            <el-menu-item index="articleClass">文章分类</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-edit"></i>编辑
            </template>
            <el-menu-item index="vueEdit">文本编辑</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-setting"></i>设置
            </template>
            <el-menu-item index="adminSet">管理员设置</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-warning"></i>说明
            </template>
            <el-menu-item index="explain">说明</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%; overflow: hidden;">
        <top-tip></top-tip>
        <keep-alive>
          <router-view  :style="{ height: `${contentHeight}px` }"></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Controller from "./handle";

export default Controller;
</script>


<style lang="scss" scoped>
.user-msg {
  text-align: center;
  padding-top: 20px;

  .user-avator {
    width: 80px;
    border-radius: 1000px;
  }

  .user-name {
    font-size: 16px;
    color: #fff;
    padding: 10px 0;
  }
}
</style>
