<template>
  <div>
    <h3>已经选课程</h3>
    <table>
      <thead>
      <tr>
        <th>课程编号</th>
        <th>课和名</th>
        <th>上课时间</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in course" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import UserData from "../data/PermissionsData"

export default{
  name: "Permissions",
  data:function (){
    return {
      course:UserData.permissionsList
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
a{
  cursor: pointer;
  color: #a33;
  text-decoration: none;
}
</style>