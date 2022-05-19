<template>
  <div>
    <h3>用户管理</h3>
    <table>
      <thead>
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="item in users" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td><a @click="userInfo(item.id)">用户信息</a></td>
        </tr>
    </tbody>
    </table>
  </div>
</template>
<script>
import UserData from "../data/UserData.vue"
export default{
  name: 'Users',
  data:function (){
    return {
      users:UserData.userList
    }
  },
  methods:{
    userInfo:function (id){
      this.$router.push("/user"+id)
    }
  }
}
</script>
<style scoped>  /*样式只能在这里写*/
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