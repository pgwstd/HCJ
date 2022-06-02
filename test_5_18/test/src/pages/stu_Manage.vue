<!--老师端学生信息-->
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
        <th>学号</th>
        <th>姓名</th>
        <th>班级</th>
      </tr>
      </thead>
      <tbody>
      <!--      遍历数组内容-->
      <tr v-for="item in stu_Manage" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.class }}</td>
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
import Table_stu from "@/data/Table_stuData"; //引入数据
import pageGinaTiion from "@/components/pageGinaTiion"; //引入翻页组件

export default {
  name: "stu_Manage",
  components: {
    pageGinaTiion //引入翻页组件
  },
  data: function () {
    return {
      //input声明一个变量让它存放数据
      input: "",  //搜索框
      table: "",  //表格
      //表格数据
      stu_Manage: [], //已选课数据
      //表格分布功能
      total: Table_stu.stuList.length,  //总条数
      //原始数组
      tableList:Table_stu.stuList,  //原始数组
      pageSize:10 //每页显示条数
    }
  },
  created() { //页面创建完成
    this.stu_Manage = Table_stu.stuList.slice(0, 10)  //初始化数据
  },
  methods: {
    handemit(data){
      this.stu_Manage = data  //更新数据
    },
    handleSizeEmit(data){
      this.stu_Manage = data //更新数据
    },

    //搜索input里面的内容如果有符合的内容就单独显示出来，没有就弹出提示
    sceach: function () {
      if (this.input === "") {  //如果input为空就弹出提示
        this.$message({   //弹出提示
          message: "请输入关键字",
          type: "warning"
        })
      } else {
        this.stu_Manage = Table_stu.stuList.filter(function (item) {  //过滤出符合条件的数据
          return item.name.indexOf(this.input) != -1  //返回true
        }.bind(this))
      }
    },
    // 强制更新搜索框的值
    changeMessage() { //搜索框改变时触发
      this.$forceUpdate()   //强制更新
    },
    //清空input搜索框
    reaset: function () {
      this.input = "";
      this.stu_Manage = Table_stu.stuList //更新数据
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
