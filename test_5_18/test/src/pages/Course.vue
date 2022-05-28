<template>
  <div>
    <h3>课程列表详情</h3>
    <table>
      <thead>
      <tr>
        <th>课程编号</th>
        <th>课程名</th>
        <th>已选人数</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="item in course" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.count}}</td>
          <td><a @click="courseInfo(item.id)">课程详情</a></td>
        </tr>
    </tbody>
    </table>
  </div>
</template>
<script>
import CourseData from "@/data/CourseData";

export default{
  name: "Course",
  data:function (){
    return {
      course:CourseData.courseList
    }
  },
  methods:{
    courseInfo:function (id){
      this.$router.push("/Course_Details/"+id)
    }
  }
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
a{
  cursor: pointer;
  color: #a33;
  text-decoration: none;
}
</style>