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
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
  },
  components: {
    TopTip
  }
}