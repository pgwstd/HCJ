<!--学生端课程信息-->
<template>
  <div>
    <div class="course-header">
      <!--    请输入关键字搜索课程-->
      <el-input
          v-model="input" @input="changeMessage($event)" placeholder="请输入关键字搜索"
          style="padding:0 15px; width: 250px; height: 20px"
      ></el-input>
      <el-button type="primary" icon="el-icon-search" @click="sceach">搜索</el-button>
      <el-button type="primary" icon="el-icon-delete" @click="reaset">重置</el-button>
    </div>
    <!--    定义表格框架-->
    <table>
      <thead>
      <tr>
        <th>课号</th>
        <th>课名</th>
        <th>学分</th>
        <th>学时</th>
        <th>院系</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <!--      遍历数组内容-->
      <tr v-for="item in course" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.credit }}</td>
        <td>{{ item.hours }}</td>
        <td>{{ item.Faculty }}</td>
        <td><a @click="courseInfo(item.id)">课程详情</a></td>
      </tr>
      </tbody>
    </table>

    <!--    分页功能定义-->
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
import CourseData from "@/data/CourseData"; //引入数据
import pageGinaTiion from "@/components/pageGinaTiion"; //引入翻页组件

export default {
  name: "Course",
  components: {
    pageGinaTiion //引入翻页组件
  },
  data: function () {
    return {
      //input声明一个变量让它存放数据
      input: "",
      table: "",
      //表格数据
      course: [], //课程数据
      //表格分布功能
      total: CourseData.courseList.length,  //总条数
      //原始数组
      tableList: CourseData.courseList,  //原始数组
      pageSize: 10 //每页显示条数
    }
  },
  created() {
    this.course = CourseData.courseList.slice(0, 10)  //初始化数据
  },
  methods: {
    handemit(data) {
      this.course = data    //更新数据
    },
    handleSizeEmit(data) {
      this.course = data  //更新数据
    },
    courseInfo: function (id) {
      this.$router.push("/Course_Details/" + id)  //跳转到课程详情页面
    },
    //搜索input里面的内容如果有符合的内容就单独显示出来，没有就弹出提示
    sceach: function () {
      if (this.input === "") {  //如果input为空就弹出提示
        this.$message({
          message: "请输入关键字",
          type: "warning"
        })
      } else {
        this.course = CourseData.courseList.filter(function (item) {  //过滤出符合条件的数据
          return item.name.indexOf(this.input) != -1  //返回true
        }.bind(this)) //绑定this
      }
    },
    // 强制更新搜索框的值，防止搜索框的值为空但是显示有内容
    changeMessage() {
      this.$forceUpdate() //强制更新
    },
    //清空input搜索框
    reaset: function () {
      this.input = "";
      this.course = CourseData.courseList   //更新数据
    },
  }
}
</script>
<style scoped>  /*样式只能在这里用*/
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
