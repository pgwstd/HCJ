<template>
  <div>
    <h3>权限管理</h3>
    <table>
      <thead>
      <tr>
        <th>帐号</th>
        <th>姓名</th>
        <th>入网时长</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in users" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td><a href="#">修改权限</a></td>
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
      users:UserData.permissionsList
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
}
</style>