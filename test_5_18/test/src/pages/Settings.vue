<template>
  <div>
    <h3>系统设置</h3>
    <table>
      <thead>
      <tr>
        <th>编号</th>
        <th>功能分类</th>
        <th>本月操作次数</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in users" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.count}}</td>
        <td><a href="#">进入</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import UserData from "../data/SettingsData"

export default{
  name: "Settings",
  data:function (){
    return {
      users:UserData.settingsList
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