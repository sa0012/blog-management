import TopTip from '@/components/topTip'
import { getSession } from '@/common/mutils';
import avatarImg from '../../assets/images/default.jpg';

export default {
  name: 'Manage',
  data() {
    return {
      userName: '',
      avatar: avatarImg
    }
  },
  computed: {
    defaultActive() {
      return this.$route.path.replace("/", "");
    },
    contentHeight() {
      return (document.body.clientHeight || document.documentElement.clientHeight || 0) - 60;
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {
    this.userName = getSession('user_name')
    if (getSession('avatar')) {
      this.avatar = getSession('avatar')
    }
  },
  mounted() {
  },
  components: {
    TopTip
  }
}