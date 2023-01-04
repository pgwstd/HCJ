<!--学生端课程信息-->
<template>
  <div>
    <h3>课程信息</h3>
    <!--    定义表格框架-->
    <table>
      <thead>
      <tr>
        <th>编号</th>
        <th>课程名</th>
        <th>已选人数</th>
        <th>状态</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{ coursedetails.id }}</td>
        <td>{{ coursedetails.name }}</td>
        <td>{{ coursedetails.Count }}/60</td>
        <!--        选课状态初始化为可选，如果点击，则会变成已选-->
        <td>
          <button v-if="state" @click="selectCourse">选课</button>
          <button v-else>已选</button>
        </td>
      </tr>
      </tbody>
    </table>
    <!--    设置一个按钮返回用户管理页面-->
    <input type="button" value="返回课程列表" @click="backToCourse">
  </div>
</template>

<script>

import CourseData from "@/data/CourseData"; //引入数据
import {xuanke} from '@/data/data'  //引入数据

export default {
  name: "Course_Details",
  props: ["id"], //接收父组件传递的id
  data: function () {
    return {
      course: CourseData.courseList, //课程数据
      state: true, //选课状态
    }
  },
  computed: {
    coursedetails: function () {  //计算属性，计算当前课程的详细信息
      let user = null  //定义一个变量
      for (let index = 0; index < this.course.length; index++) { //遍历课程数组
        if (this.course[index].id == this.id)  //如果课程id等于传递的id
          user = this.course[index]  //赋值给user
      }
      return user  //返回user
    }
  },
  methods: {
    backToCourse: function () {  //返回课程列表
      this.$router.push("/Course") //跳转到课程详情页面
    },
    //点击按钮后，改变选课状态变为已选
    selectCourse: function () {  //选课
      this.state = false //改变选课状态
      xuanke.push(this.coursedetails)  //将课程信息添加到选课数组中
    }
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

</style>