<template>
  <div class="user-list">
    <div>文章内容</div>
    <div>{{ article.article }}</div>

    <div>评论区域</div>
    <div style="display: flex; align-items: center;">
      <input type="text" placeholder="请填写评论内容" v-model="commentList.content">
      <div style="background: #999; padding: 5px 10px;" @click="commentTest">提交评论</div>
    </div>
    <ul>
        <li v-for="(comment, index) in fatherCommentList" :key="index">
          <div class="user-msg">
            <img :src="comment.user.user_avatar" alt class="user-avatar">
            <div class="user-name">{{ comment.user.user_name }}</div>
          </div>
          <div class="user-comment">{{ comment.content }}</div>
        </li>
      </ul>
          <input type="text" placeholder="请输入评论内容" v-model="childComment.content">
          <span @click="getReplyComment">回复</span>
  </div>
</template>

<script>
import Controller from "./handle";
export default Controller;
</script>

<style lang="scss" scoped>
.user-avatar {
  width: 30px;
}

.user-name {
  display: inline-block;
  font-size: 18px;
  padding-left: 15px;
}
</style>

