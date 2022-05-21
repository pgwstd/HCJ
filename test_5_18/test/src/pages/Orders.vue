<!--订单-->
<template>
  <div>
    <h3>订单详情</h3>
    <table>
      <thead>
      <tr>
        <th>编号</th>
        <th>商品名称</th>
        <th>订单成交时间</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in users" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.time}}</td>
        <td><a @click="userInfo(item.id)">订单详情</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import UserData from "../data/OrdersData.vue"
export default{
  name: 'Orders',
  data:function (){
    return {
     Orders:OrdersData.OrdersList
    }
  },
  methods:{
    orderInfo:function (id){
      this.$router.push("/order"+id)
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
</style>