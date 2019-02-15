<template>
  <div class="user-list padding">
    <el-table :data="tableData" border style="width: 100%" v-if="tableData.length > 0">
      <el-table-column type="index" label="#" width="180"></el-table-column>
      <el-table-column sortable prop="create_time" label="反馈日期" width="180"></el-table-column>
      <el-table-column prop="type" label="反馈类型" width="180"></el-table-column>
      <el-table-column prop="title" label="反馈标题"></el-table-column>
      <el-table-column prop="content" label="反馈内容"></el-table-column>
    </el-table>
    <el-col :span="24" style="padding-top: 15px;">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="1"
        layout="total, prev, pager, next"
        :total="pagination.total"
      ></el-pagination>
    </el-col>
  </div>
</template>

<script>
import Controller from "./handle";
export default Controller;
</script>
