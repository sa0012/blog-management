<template>
  <div class="padding">
    <el-table :data="tableData" class="user-list">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户 ID">
              <span class="table-text">{{ props.row._id }}</span>
            </el-form-item>
            <el-form-item label="用户名">
              <span class="table-text">{{ props.row.user_id }}</span>
            </el-form-item>
            <el-form-item label="用户手机号码">
              <span class="table-text">{{ props.row.iphone }}</span>
            </el-form-item>
            <el-form-item label="用户邮箱">
              <span class="table-text">{{ props.row.email }}</span>
            </el-form-item>
            <el-form-item label="用户注册时间">
              <span class="table-text">{{ props.row.date }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span class="table-text">{{ props.row.address }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column label="注册日期" prop="date" width="140"></el-table-column>
      <el-table-column label="用户 ID" prop="_id" width="240"></el-table-column>
      <el-table-column label="用户头像" width="140">
        <template slot-scope="scope">
          <img
            class="user-avator"
            src="../../../assets/images/default.jpg"
            @click="handleClick(scope.row)"
            alt
          >
        </template>
      </el-table-column>
      <el-table-column label="用户名" prop="user_id" width="140"></el-table-column>
      <el-table-column label="用户地址" prop="address"></el-table-column>
    </el-table>
    <el-col :span="24" style="padding-top: 15px;">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000"
      ></el-pagination>
    </el-col>
  </div>
</template>

<script>
import Controller from "./handle";
export default Controller;
</script>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 120px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>


<style lang="scss" scoped>
.user-list {
  width: 100%;
  border: 1px solid #dfe6ec;
  box-shadow: inset 0 2px 0 #f4f4f4;
}

.table-text {
  color: #333;
}

.user-avator {
  width: 45px;
  border-radius: 1000px;
}
</style>
