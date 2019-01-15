<template>
  <div class="user-list">
    <div>文章内容</div>
    <div>{{ article.article }}</div>

    <div>评论区域</div>
    <div style="display: flex; align-items: center;">
      <input type="text" placeholder="请填写评论内容" v-model="commentList.content">
      <div style="background: #999; padding: 5px 10px;" @click="commentTest">提交评论</div>
    </div>
  </div>
</template>

<script>
import Controller from './handle'
export default Controller
</script>
