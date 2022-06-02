<!--老师端上传成绩-->
<template>
  <div>
    <div class="course-header">
      <!--    请输入关键字搜索课程-->
<!--      用v-model显示值和实时更新值-->
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
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <!--      遍历数组内容-->
      <tr v-for="item in uploadgrades" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.class }}</td>
        <td><a @click="">上传</a></td>
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
import uploadData from "@/data/uploadData"; //引入数据
import pageGinaTiion from "@/components/pageGinaTiion"; //引入翻页组件

export default {
  name: "Uploadgrades",
  components: {
    pageGinaTiion //引入翻页组件
  },
  data: function () {
    return {
      //input声明一个变量让它存放数据
      input: "",  //搜索框
      table: "",  //表格
      //表格数据
      uploadgrades: uploadData.uploadList,  //上传成绩初始化
      //表格分布功能
      total: uploadData.uploadList.length,  //总条数
      //原始数组
      tableList:uploadData.uploadList,  //表格数据
      pageSize:10 //每页显示条数
    }
  },
  created() {
    this.course = uploadData.uploadList.slice(0, 10)  //初始化表格数据
  },
  methods: {
    handemit(data){  //翻页功能
      this.uploadgrades = data //更新数据
    },
    handleSizeEmit(data){ //每页显示条数
      this.uploadgrades = data //更新数据
    },

    //搜索input里面的内容如果有符合的内容就单独显示出来，没有就弹出提示
    sceach: function () {
      if (this.input === "") {  //如果input为空就弹出提示
        this.$message({
          message: "请输入关键字",
          type: "warning"
        })
      } else {
        this.uploadgrades = uploadData.uploadList.filter(function (item) {  //过滤出符合条件的数据
          return item.name.indexOf(this.input) != -1  //返回true
        }.bind(this))
      }
    },
    // 强制更新搜索框的值
    changeMessage() { //搜索框更新
      this.$forceUpdate() //强制更新
    },
    //清空input搜索框
    reaset: function () { //清空搜索框
      this.input = ""; //清空搜索框
      this.uploadgrades = uploadData.uploadList //更新数据
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
