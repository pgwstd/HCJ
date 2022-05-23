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
      <tr>
        <td>{{userInfo.id}}</td>
        <td>{{userInfo.name}}</td>
        <td>{{userInfo.age}}</td>
      </tr>
      </tbody>
    </table>
<!--    设置一个按钮返回用户管理页面-->
    <input type="button" value="返回用户管理" @click="backToUsers">
  </div>
</template>

<script>
import UserData from "../data/UserData.vue"

export default{
  name: "User",
  props:["id"],
  data:function (){
    return {
      users:UserData.userList
    }
  },
   computed:{
     userInfo:function(){
       let user = null
       for (let index = 0; index < this.users.length; index++) {
         if (this.users[index].id == this.id)
           user = this.users[index]
         }
         return user
       }
     },
     methods:{
       backToUsers:function (){
         this.$router.push("/users")
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