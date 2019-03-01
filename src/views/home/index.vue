<template>
  <div class="home is-auto">
    <section class="data_section">
      <header class="section_title">数据统计</header>
      <el-row :gutter="20" style="margin-bottom: 10px;">
        <el-col :span="4">
          <div class="data_list today_head">
            <span class="data_num head">今日数据：</span>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="data_list">
            <span class="data_num">{{'23'}}</span> 新增用户
          </div>
        </el-col>
        <el-col :span="4">
          <div class="data_list">
            <span class="data_num">{{'34'}}</span> 新增文章
          </div>
        </el-col>
        <el-col :span="4">
          <div class="data_list">
            <span class="data_num">{{'67'}}</span> 今日留言
          </div>
        </el-col>
        <el-col :span="4">
          <div class="data_list">
            <span class="data_num">{{'67'}}</span> 今日反馈
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="data_list all_head">
            <span class="data_num head">历史数据：</span>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="data_list">
            <span class="data_num">{{ '23' }}</span> 历史用户
          </div>
        </el-col>
        <el-col :span="4">
          <div class="data_list">
            <span class="data_num">{{ '34' }}</span> 历史文章
          </div>
        </el-col>
        <el-col :span="4">
          <div class="data_list">
            <span class="data_num">{{ '45' }}</span> 历史留言
          </div>
        </el-col>
        <el-col :span="4">
          <div class="data_list">
            <span class="data_num">{{ '53' }}</span> 历史反馈
          </div>
        </el-col>
      </el-row>
    </section>
    <user-charts></user-charts>
  </div>
</template>

<script>
import Controller from "./handle";

export default Controller;
</script>

<style lang="scss" scoped>
.data_section {
  padding: 20px;
  margin-bottom: 40px;
  .section_title {
    text-align: center;
    font-size: 30px;
    margin-bottom: 10px;
  }
  .data_list {
    text-align: center;
    font-size: 14px;
    color: #666;
    border-radius: 6px;
    background: #e5e9f2;
    .data_num {
      color: #333;
      font-size: 26px;
    }
    .head {
      border-radius: 6px;
      font-size: 22px;
      padding: 4px 0;
      color: #fff;
      display: inline-block;
    }
  }
  .today_head {
    background: #ff9800;
  }
  .all_head {
    background: #20a0ff;
  }
}
</style>


