<template>
  <div class="padding is-height">
    <el-table :data="tableData" class="user-list" v-if="tableData && tableData.length">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户 ID">
              <span class="table-text">{{ props.row.user_id }}</span>
            </el-form-item>
            <el-form-item label="作者">
              <span class="table-text">{{ props.row.author }}</span>
            </el-form-item>
            <el-form-item label="标题">
              <span class="table-text">{{ props.row.title }}</span>
            </el-form-item>
            <el-form-item label="分类">
              <span class="table-text">{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="标签">
              <span class="table-text" v-for="(tag, index) in props.row.tags" :key="index">
                <span>{{ tag }}</span>
                <span style="padding: 0 5px;" v-if="index !== (props.row.tags.length - 1)">/</span>
              </span>
            </el-form-item>
            <el-form-item label="发布时间">
              <span class="table-text">{{ props.row.create_time }}</span>
            </el-form-item>
            <el-form-item label="修改时间">
              <span class="table-text">{{ props.row.edit_time }}</span>
            </el-form-item>
            <el-form-item label="文章">
              <el-popover
                placement="top-start"
                title="标题"
                width="200"
                trigger="hover"
                :content="props.row.article"
              >
                <div class="table-text" style="max-width: 300px;" slot="reference">{{ props.row.article }}</div>
              </el-popover>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column sortable label="发布时间" prop="create_time" width="180"></el-table-column>
      <!-- <el-table-column label="用户 ID" prop="_id" width="240"></el-table-column> -->
      <el-table-column label="作者" prop="author" width="140"></el-table-column>
      <el-table-column label="标题" prop="title" width="200"></el-table-column>
      <el-table-column label="分类" prop="category" width="140"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button plain size="small" @click="lookArticle(scope.row)">查看</el-button>
          <el-button plain size="small" @click="addArticle(scope.row._id, scope.row.user_id)" v-if="userMsg.role === 'ADMIN'">添加</el-button>
          <el-button plain size="small" @click="modifyArticle(scope.row._id, scope.row.user_id)" v-if="userMsg.role === 'ADMIN'">修改</el-button>
          <el-button
            type="danger"
            size="small"
            @click="deleteArticle(scope.row._id, scope.row.user_id)"
            v-if="userMsg.role === 'ADMIN'"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-col :span="24" style="padding-top: 15px;">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="1"
        layout="total, prev, pager, next"
        :total="pagination.page"
      ></el-pagination>
    </el-col>

    <look-article :showArticle.sync="showArticle" :articleObj="articleObj"></look-article>
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
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
<style lang="scss" scoped>
@import "../../../assets/style/mixins.scss";
.user-list {
  width: 100%;
  border: 1px solid #dfe6ec;
  // background: #fbfdff;
  background: green;
  box-shadow: inset 0 2px 0 #f4f4f4;
}

.table-text {
  color: #333;
  @include no-wrap;
}

.user-avator {
  width: 45px;
  border-radius: 1000px;
}
</style>
