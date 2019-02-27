import TopTip from '@/components/topTip'
export default {
  name: 'Manage',
  data() {
    return {
    }
  },
  computed: {
    defaultActive() {
      return this.$route.path.replace("/", "");
    },
    contentHeight() {
      return (document.body.clientHeight || document.documentElement.clientHeight || 0) - 60;
    },
    userMsg() {
      return this.$store.state.user;
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
  },
  mounted() {},
  components: {
    TopTip
  }
}