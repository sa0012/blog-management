<template>
  <div class="user-list padding">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户 ID">
              <span>{{ props.row._id }}</span>
            </el-form-item>
            <el-form-item label="用户名">
              <span>{{ props.row.user_id }}</span>
            </el-form-item>
            <el-form-item label="用户手机号码">
              <span>{{ props.row.iphone }}</span>
            </el-form-item>
            <el-form-item label="用户邮箱">
              <span>{{ props.row.email }}</span>
            </el-form-item>
            <el-form-item label="用户注册时间">
              <span>{{ props.row.date }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <!-- <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>-->
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="用户 ID" prop="_id"></el-table-column>
      <el-table-column label="用户头像" prop="avator"></el-table-column>
      <el-table-column label="用户名" prop="user_id">
        <img src="../../../assets/images/default.jpg" alt="">
      </el-table-column>
      <el-table-column label="用户地址" prop="address"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import Controller from "./handle";
export default Controller;
</script>

<style lang="scss" scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
