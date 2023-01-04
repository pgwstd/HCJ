/*
@author pgwstr
@date 2022/7/29 11:06 PM
*/
<!--学生端选课情况-->

<template>
  <div>
    <!--    定义表格框架-->
    <table>
      <thead>
      <tr>
        <th>课号</th>
        <th>课名</th>
        <th>学期</th>
        <th>教师</th>
        <th>上课时间</th>
        <th>上课地点</th>
      </tr>
      </thead>
      <tbody>
      <!--      遍历数组内容-->
      <tr v-for="item in alreadycourse" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.semester }}</td>
        <td>{{ item.teacher }}</td>
        <td>{{ item.time }}</td>
        <td>{{ item.place }}</td>
      </tr>
      </tbody>
    </table>
    <!--    页面翻页功能-->
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
import AlreadycourseData from "../data/AlreadycourseData.vue" //引入数据
import {xuanke} from "@/data/data"; //引入数据
import pageGinaTiion from "@/components/pageGinaTiion"; //引入翻页组件

export default {
  name: "Already_course",
  components: {
    pageGinaTiion //引入翻页组件
  },
  data: function () {
    return {
      table: "",
      alreadycourse: [],  //已选课数据
      //表格分布功能
      total: AlreadycourseData.AlreadycourseList.length,  //总条数
      tableList: AlreadycourseData.AlreadycourseList,  //表格数据
      pageSize: 10, //每页显示条数
    }
  },
  created() {

    this.alreadycourse = AlreadycourseData.AlreadycourseList.slice(0, 10) //初始化数据
    this.alreadycourse.push(...xuanke)  //添加选课后的数据内容

  },

  //表格分页功能
  methods: {
    handemit(data) {
      this.alreadycourse = data //更新数据
    },
    handleSizeEmit(data) {
      this.alreadycourse = data //更新数据
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
</style>