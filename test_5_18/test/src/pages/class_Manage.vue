<!--老师端班级信息-->
<template>
  <div class="tp">
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
        <th>学号</th>
        <th>姓名</th>
        <th>女生</th>
        <th>男生</th>
      </tr>
      </thead>
      <tbody>
      <!--      遍历数组内容-->
      <tr v-for="item in class_Manage" :key="item.id">
        <td>{{ item.className }}</td>
        <td>{{ item.people }}</td>
        <td>{{ item.man }}</td>
        <td>{{ item.woman }}</td>
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
import Table_classData from "@/data/Table_classData"; //引入数据
import pageGinaTiion from "@/components/pageGinaTiion"; //引入翻页组件

export default {
  name: "class_Manage",
  components: {
    pageGinaTiion //引入翻页组件
  },
  data: function () {
    return {
      //input声明一个变量让它存放数据
      input: "",
      table: "",
      //表格数据
      class_Manage: [], //已选课数据
      //表格分布功能
      total: Table_classData.classList.length,  //总条数
      //原始数组
      tableList: Table_classData.classList, //表格数据
      pageSize: 10 //每页显示条数
    }
  },
  created() {
    this.class_Manage = Table_classData.classList.slice(0, 10) //初始化数据
  },
  methods: {
    handemit(data) {
      this.class_Manage = data  //接收翻页组件传递的数据
    },
    handleSizeEmit(data) {
      this.class_Manage = data  //接收翻页组件传递的数据
    },

    //搜索input里面的内容如果有符合的内容就单独显示出来，没有就弹出提示
    sceach: function () {
      if (this.input === "") {  //如果input为空就弹出提示
        this.$message({
          message: "请输入关键字",
          type: "warning"
        })
      } else {
        this.class_Manage = Table_classData.classList.filter(function (item) {  //过滤出符合条件的数据
          return item.name.indexOf(this.input) != -1  //返回true
        }.bind(this))
      }
    },
    // 强制更新搜索框的值，防止搜索框的值为空但是显示有内容
    changeMessage() {
      this.$forceUpdate()
    },
    //清空input搜索框
    reaset: function () {
      this.input = "";
      this.class_Manage = Table_classData.classList
    },
  }
}
</script>
<style scoped>  /*样式只能在这里用*/
* {
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
