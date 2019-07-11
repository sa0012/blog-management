<template>
  <section class="padding is-auto">
    <el-row class="content">
      <div class="container">
        <!-- <h2 class="title">博客简介</h2> -->
        <el-row>
          <el-col :span="8">
            <div class="avatar-img">
              <img src="../../../assets/images/avatar.jpg" style="width: 100%;" class="avatar" alt>
            </div>
          </el-col>
          <el-col :span="16">
            <section class="profile">
              <h3 class="profile-title">个人资料</h3>
              <el-row>
                <el-col :span="4" class="pro-name">姓名：</el-col>
                <el-col :span="20">陈龙</el-col>
              </el-row>
              <el-row>
                <el-col :span="4" class="pro-name">职业：</el-col>
                <el-col :span="20">web前端开发工程师</el-col>
              </el-row>
              <el-row>
                <el-col :span="4" class="pro-name">技能：</el-col>
                <el-col :span="20">javascript, vue, react, webpack, git。。。</el-col>
              </el-row>
              <el-row>
                <el-col :span="4" class="pro-name">邮箱：</el-col>
                <el-col :span="20">
                  <span>1583479514@qq.com</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" class="pro-name">个人博客：</el-col>
                <el-col :span="20">
                  <a href="https://www.juckchen.cn" target="_blank">client.juckchen.cn</a>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="4" class="pro-name">GitHub：</el-col>
                <el-col :span="20">
                  <a
                    href="https://github.com/sa0012?tab=repositories"
                    target="_blank"
                  >https://github.com/sa0012</a>
                </el-col>
              </el-row>
            </section>
          </el-col>
        </el-row>

        <section class="intro-wrap">
          <h3 class="profile-title">博客简介</h3>

          <p class="intro-content">
            2016年毕业走出校门，选择了web前端这个职业至今，从刚毕业时的懵懂少年至今也有三年的时间了，
            刚开始的时候主要使用jQuery技术栈，那个时候jQuery很牛，天马行空，各种插件层出不穷，web管理系统可能还是前后端不分离的，
            那个时候还是jQuery+bootstrap的天下，低版本IE成为大家惧怕的对象，到现在jQuery也在慢慢的退出历史，很多公司也逐渐放弃对
            低版本IE的支持，时间过得很快，现在web前端已经是遍地开花， 三大框架的流行， vue、react，angular已经统领web前端的各个角落，
            vue衍生出weex, react衍生出react-native, web前端的触角已经设计到移动领域，nodejs也变得越来越成熟，h5css3的推行，让web前端发展的更加快速。
          </p>
          <p class="intro-content">
            本来早就有搭建一个自己的个人博客的计划， 由于之前工作比较忙，还有技术积累的关系，一直拖着未做，最近，正好利用工作闲暇时间，
            再将手里的技术积累整理一下，搭建了一套较为完整的博客系统，包括一个blog站点，一个管理系统，一个后台，主要的技术栈是koa, vue、react，angular已经统领web前端的各个角落，考虑到blog展示需要
            考虑SEO的需要， 故采用vue ssr去做， 后台采用koa， 数据库使用mongoDB, 建立此博客的目的， 一是， 练习下自己的技术，二是， 记录自己的工作学习经验和技术总结，三是， 借助此平台结识更多的同行们，
            大家一起学习交流。
          </p>
          <p class="intro-content">
            个人技能方面， 主要的前端技术， 包括：html, css, html5, css3, vue.js, react.js, 对于nodejs略有研究，本博客就是使用koa搭建，目前主要使用的框架是vue， 在公司主要负责移动h5业务的开发，业余时间研究过react， 写过一个豆瓣电影的小项目，完成度还算可以，
            顺便使用了react技术栈的各大工具，react + react-router-dom + redux + ant-design-mobile， 还研究过谷歌推出的flutter， 略有了解， 对于web的技术发展一直保持关注，对于新的技术都会去尝试。
          </p>
          <p
            class="intro-content"
          >最后， 感觉所有的同行好友们对我的支持， 有什么不对的地方或者bug欢迎大家提出， 有什么好的建议和想法也可以提出来，大家一起学习交流。</p>
        </section>
        <section class="contact">
          <el-col :span="12">
            <h3 class="qr-title">QQ联系</h3>
            <img src="../../../assets/images/qr_qq.jpg" alt="qq" class="qr-qq">
          </el-col>
          <el-col :span="12">
            <h3 class="qr-title">微信联系</h3>
            <img src="../../../assets/images/qr_weixin.jpg" alt="wechat" class="qr-wechat">
          </el-col>
        </section>
      </div>
    </el-row>
  </section>
</template>

<script>
import Controller from "./handle";
export default Controller;
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  margin: 0 auto;
  text-align: center;
  width: 80%;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 30px;

  .title {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 3px;
    padding: 15px;
  }
  
  .pro-name {
    min-width: 50px;
  }

  .avatar-img {
    padding-right: 30px;
    box-sizing: border-box;
    min-width: 300px;
  }

  .intro-wrap {
    text-align: left;
    padding-top: 30px;
  }

  .profile-title {
    padding: 10px 0;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
  }

  .intro-content {
    text-indent: 2em;
    padding-bottom: 10px;
    color: #666;
    line-height: 1.5em;
  }

  .profile {
    text-align: left;
    padding-left: 30px;
    box-sizing: border-box;
  }
}

.contact {
  .qr-qq,
  .qr-wechat {
    width: 240px;
    height: 240px;
  }

  .qr-title {
    font-size: 16px;
    font-weight: bold;
    padding: 10px 0;
  }
}
</style>
