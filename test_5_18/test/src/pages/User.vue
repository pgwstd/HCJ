<template>
  <div>
    <h3>用户信息</h3>
    <table>
      <thead>
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>年龄</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in users" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
      </tr>
      </tbody>
    </table>
<!--    设置一个按钮返回用户管理页面-->
    <button><router-link to="/users">返回用户管理</router-link></button>
  </div>
</template>
<script>
import UserData from "../data/UserData.vue"
export default{
  name: 'User',
  data:function (){
    return {
      users:UserData.userList
    }
  },  /*这里的data是一个对象，不是一个数组*/
  methods:{
    userInfo:function (id){
      this.$router.push("/user"+id)
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
button{
  //居中
  margin: 0 auto;
}
</style>