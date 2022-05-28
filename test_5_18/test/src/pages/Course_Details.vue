<template>
  <div>
    <h3>课程信息</h3>
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
        <td>{{userInfo.id}}</td>
        <td>{{userInfo.name}}</td>
        <td>{{userInfo.count}}/60</td>
        <td></td>
      </tr>
      </tbody>
    </table>
<!--    设置一个按钮返回用户管理页面-->
    <input type="button" value="返回课程列表" @click="backToUsers">
  </div>
</template>

<script>

import CourseData from "@/data/CourseData";


export default{
  name: "Course_Details",
  props:["id"],
  data:function (){
    return {
      course:CourseData.courseList
    }
  },
   computed:{
     userInfo:function(){
       let user = null
       for (let index = 0; index < this.course.length; index++) {
         if (this.course[index].id == this.id)
           user = this.course[index]
         }
         return user
       }
     },
     methods:{
       backToUsers:function (){
         this.$router.push("/Course")
       }
     },
}

</script>
<style scoped>  /*样式只能在这里用*/
table{
  width:100%;
  border-collapse:collapse;
}
td,th{
  border:1px solid #eee;
  line-height: 35px;
  font-size: 12px;
}
th{
  background-color: #ddd;
}

</style>