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
      $.get(`/oauth/callback?code=${this.$route.query.code}`).then(res => {
        setSession("code_token", res.data.token);
        setSession("userId", res.data.user_id);
        setSession("avatar", res.data.avatar);
        this.$message.success(res.msg);
        this.$router.replace(`/manage`);
      });
    }
  }
};
</script>
