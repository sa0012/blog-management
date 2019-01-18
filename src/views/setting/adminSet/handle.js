export default {
  name: 'adminSet',
  data() {
    return {
      fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    };
  },
  methods: {
    beforeUpload(file) {
      let fd = new FormData();//通过form数据格式来传
      // fd.append("picFile", file); //传文件
      console.log(fd, 'fd')
    },
    handleChange(file) {
      console.log(file, 'change')
    },
    handleRemove(file, fileList) {
      console.log(file, fileList, remove);
    },
    handlePreview(file) {
      console.log(file, 'preview');
    }
  }
}