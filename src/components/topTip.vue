<template>
  <div class="toptip">
    <el-breadcrumb separator="/" class="bread-nav">
      <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta.title" :key="index">{{ item }}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-dropdown @command="handleCommand" menu-align="start">
      <img :src="userMsg.avatar" class="user-avator">
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="home">首页</el-dropdown-item>
        <el-dropdown-item command="singout" @click.native="quitLogin">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_name: ""
    };
  },
  computed: {
    userMsg() {
      return this.$store.state.user;
    },
  },
  methods: {
    handleCommand(command) {
      if (command === "home") {
        this.$router.push(`/manage`);
      } else {
        console.log(command);
      }
    },
    quitLogin() {
      this.$router.push(`/`);
    }
  },
  created() {
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.toptip {
  background-color: #eff2f7;
  height: 60px;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  padding-left: 20px;

  .user-avator {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin: 0 20px;
  }
}
</style>
