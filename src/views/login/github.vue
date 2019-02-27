<template>
  <div class="github-callback">github正在授权登录</div>
</template>

<script>
import $ from '@/utils';
import {
  setSession
} from '@/common/mutils';
export default {
  name: 'Github',
  data() {
    return {};
  },
  mounted() {
    if (this.$route.query.code) {
      $.get(`/oauth/callback?code=${this.$route.query.code}&type=management`).then(res => {
        this.$store.dispatch('USER_MSG', res.data);
        this.$message.success(res.msg);
        this.$router.replace(`/manage`);
      });
    }
  }
};
</script>
