
<template>
  <div>
    <h3>订单管理</h3>
    <table>
      <thead>
      <tr>
        <th>编号</th>
        <th>出售货品</th>
        <th>订单生效日期</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in users" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.time}}</td>
        <td><a href="#">订单详情</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import UserData from "../data/OrdersData"

export default{
  name: "Orders",
  data:function (){
    return {
      users:UserData.ordersList
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