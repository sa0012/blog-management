<template>
  <!-- upload -->
  <div class="upload">
    <el-form ref="form" :model="form" label-width="100px">
      <el-upload
        class="avatar-uploader"
        style="padding-left: 40px;"
        action
        :http-request="upqiniu"
        :show-file-list="false"
        :before-upload="beforeUpload"
      >
        <img v-if="form.avatar" :src="form.avatar" class="avatar">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <el-form-item label="用户 ID" style="padding-top: 30px;">
        <el-input v-model="form.user_id"></el-input>
      </el-form-item>
      <el-form-item label="用户昵称">
        <el-input v-model="form.user_name"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="form.mobile" maxlength="11"></el-input>
      </el-form-item>
      <el-form-item label="用户邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="注册时间">
        <el-input disabled v-model="form.created_time"></el-input>
      </el-form-item>
      <el-form-item label="修改时间">
        <el-input disabled v-model="form.edit_time"></el-input>
      </el-form-item>
      <el-form-item label="用户地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="自我描述">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item v-if="isShowSubmit">
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="closeEdit">取消</el-button>
      </el-form-item>
    </el-form>
    <el-button class="edit-btn" @click="editUserInfo">编辑用户信息</el-button>
  </div>
</template>
<script>
import $ from "@/utils";
import { setSession, getSession } from "@/common/mutils";
export default {
  data() {
    return {
      imageUrl: "",
      // 七牛云的上传地址，根据自己所在地区选择，我这里是华南区
      domain: "https://upload.qiniup.com",
      // 这是七牛云空间的外链默认域名
      qiniuaddr: "pkt5un28t.bkt.clouddn.com",
      userConfig: {
        token: "",
        user_id: ""
      },
      form: {
        _id: "",
        user_id: "",
        user_name: "",
        mobile: "",
        email: "",
        desc: "",
        avatar: "",
        created_time: "",
        edit_time: "",
        address: ""
      },
      isShowSubmit: false
    };
  },
  methods: {
    // 上传文件到七牛云
    async upqiniu(req) {
      console.log(req);
      const config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      let filetype = "";
      if (req.file.type === "image/png") {
        filetype = "png";
      } else {
        filetype = "jpg";
      }
      // 重命名要上传的文件
      const keyname =
        "juckchen" +
        +new Date() +
        Math.floor(Math.random() * 100) +
        "." +
        filetype;
      // 从后端获取上传凭证token
      const formdata = new FormData();
      formdata.append("file", req.file);
      // formdata.append("key", keyname);
      $.post("/upload/getUploadImg", formdata, config).then(res => {
        this.form.avatar = res.data.key;
        setSession("avatar", res.data.key);
        console.log(res, "imgUrl");
      });
      // await $.get("/upload/getUploadToken").then(res => {
      //   console.log(res, "token");
      //   const formdata = new FormData();
      //   formdata.append("file", req.file);
      //   formdata.append("token", res.data);
      //   formdata.append("key", keyname);
      //   // 获取到凭证之后再将文件上传到七牛云空间
      //   console.log(formdata, "formdata");
      //   window.axios.post(this.domain, formdata, config).then(res => {
      //     this.imageUrl = "http://" + this.qiniuaddr + "/" + res.data.key;
      //     console.log(this.imageUrl, 'imgUrl')
      //   });
      // });
      await $.get("/upload/getUploadToken").then(res => {
        console.log(res, "token");
        const formdata = new FormData();
        formdata.append("file", req.file);
        formdata.append("token", res.data);
        formdata.append("key", keyname);
        // 获取到凭证之后再将文件上传到七牛云空间
        console.log(formdata, "formdata");
        $.post("/upload/getUploadImg", formdata, config).then(res => {
          // this.imageUrl = "http://" + this.qiniuaddr + "/" + res.data.key;
          console.log(res, "imgUrl");
        });
        // window.axios.post(this.domain, formdata, config).then(res => {
        //   this.imageUrl = "http://" + this.qiniuaddr + "/" + res.data.key;
        //   console.log(this.imageUrl, 'imgUrl')
        // });
      });
    },
    // 验证文件合法性
    beforeUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    editUserInfo() {
      this.isShowSubmit = true;
    },
    closeEdit() {
      this.isShowSubmit = false;
    },
    queryUserInfo() {
      $.post("/user/query", this.userConfig).then(res => {
        res.data.created_time = $.timeFormat(res.data.created_time - 0)
        res.data.edit_time = $.timeFormat(res.data.edit_time - 0)
        this.form = Object.assign({}, res.data);
      });
    },
    onSubmit() {
      if (!this.form.user_id) {
        return;
      } else if (!this.form._id) {
        return;
      }
      $.post("/user/editUserMes", this.form).then(res => {
        res.data.created_time = $.timeFormat(res.data.created_time - 0)
        res.data.edit_time = $.timeFormat(res.data.edit_time - 0)
        this.form = Object.assign({}, res.data);
        this.isShowSubmit = false;
        setSession("userId", res.data.user_id);
        setSession("avatar", res.data.avatar);
      });
    }
  },
  created() {
    this.form.avatar = getSession("avatar");
    this.userConfig.token = getSession("code_token");
    this.userConfig.user_id = getSession("userId");
    this.queryUserInfo();
  }
};
</script>
<style scoped>
.upload {
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
  position: relative;
}

.edit-btn {
  position: absolute;
  top: 20px;
  right: 30px;
}
.avatar-uploader .el-upload {
  border: 5px dashed #ca1717 !important;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: inline-block;
  padding-left: 40px;
  padding-bottom: 15px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  /* text-align: center; */
}
.avatar {
  width: 100px;
  border-radius: 1000px;
  margin-right: 100px;
}
</style>