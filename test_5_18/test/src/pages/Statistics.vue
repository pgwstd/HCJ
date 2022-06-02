<!--老师端数据统计-->
<template>
  <div class="stu">
    <div class="course-header">
      <!--    请输入关键字搜索课程-->
      <el-input
          v-model="input" @input="changeMessage($event)" placeholder="请输入关键字搜索"
          style="padding:0 15px; width: 250px; height: 20px"
      ></el-input>
      <el-button type="primary" icon="el-icon-search" @click="sceach">搜索</el-button>
      <el-button type="primary" icon="el-icon-delete" @click="reaset">重置</el-button>
    </div>
<!--     表格框架定义-->
    <table>
      <thead>
      <tr>
        <th>班级</th>
        <th>成绩优秀</th>
        <th>成绩良好</th>
        <th>成绩中等</th>
        <th>成绩不及格</th>
      </tr>
      </thead>
      <tbody>
      <!--      遍历数组内容-->
      <tr v-for="item in Statistics" :key="item.id">
        <td>{{ item.className }}</td>
        <td>{{ item.grade }}</td>
        <td>{{ item.grade2 }}</td>
        <td>{{ item.grade3 }}</td>
        <td>{{ item.grade4 }}</td>
      </tr>
      </tbody>
    </table>
<!--     分页功能定义-->
        <pageGinaTiion
            :totalLength="total"
            :pages="[5, 10]"
            :page-size="pageSize"
            :tableList="tableList"
            @handleCurrentEmit="handemit"
            @handleSizeEmit="handleSizeEmit"
        >

        </pageGinaTiion>
  </div>

</template>
<script>

import pageGinaTiion from "@/components/pageGinaTiion"; //引入翻页组件
import statisticsData from "@/data/statisticsData"; //引入数据

export default {
  name: "Statistics",
  components: {
    pageGinaTiion //引入翻页组件
  },
  data: function () {
    return {
      //input声明一个变量让它存放数据
      input: "",  //搜索框
      table: "",  //表格
      //表格数据
      stu_Manage: [], //学生管理
      //表格分布功能
      total: statisticsData .length,  //总条数
      //原始数组
      tableList:statisticsData .statiscsList, //表格数据
      pageSize:10 //每页显示条数
    }
  },
  created() {
    this.Statistics = statisticsData .statiscsList.slice(0, 10) //初始化数据
  },
  methods: {
    handemit(data){
      this.Statistics = data  //更新数据
    },
    handleSizeEmit(data){
      this.Statistics= data   //更新数据
    },

    //搜索input里面的内容如果有符合的内容就单独显示出来，没有就弹出提示
    sceach: function () {
      if (this.input === "") {  //如果input为空就弹出提示
        this.$message({   //弹出提示
          message: "请输入关键字",
          type: "warning"
        })
      } else {
        this.Statistics = statisticsData .statiscsList.filter(function (item) {  //过滤出符合条件的数据
          return item.name.indexOf(this.input) != -1  //返回true
        }.bind(this))
      }
    },
    // 强制更新搜索框的值
    changeMessage() { //搜索框的值改变时触发
      this.$forceUpdate() //强制更新
    },
    //清空input搜索框
    reaset: function () { //清空搜索框
      this.input = "";  //清空搜索框
      this.Statistics = statisticsData .statiscsList //更新数据
    },
  }
}
</script>
<style scoped>  /*样式只能在这里用*/
*{
  margin: 0;
  padding: 0;
}
table {
  width: 100%;
  border-collapse: collapse;
}

td, th {
  border: 1px solid #eee;
  line-height: 35px;
  font-size: 12px;
}

th {
  background-color: #ddd;
}

a {
  cursor: pointer;
  color: #a33;
  text-decoration: none;
}

.course-header {
  clear: none;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  float: left;
}
</style>
