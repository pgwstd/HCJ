<!--学生端学分情况-->
<template>
  <div>
    <!--    定义表格框架-->
    <table>
      <thead>
      <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>完成学分</th>
        <th>均绩</th>
      </tr>
      </thead>
      <tbody>
      <!--      遍历数组内容-->
      <tr v-for="item in credit" >
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.completecredits}}</td>
        <td>{{item.averagegrade}}</td>
      </tr>
      </tbody>
    </table>

  </div>
</template>
<script>
import CreditData from "../data/CreditData" //引入数据

export default{
  name: "Credit",
  data:function (){
    return {
      credit:CreditData.creditList  //学生学分情况数据
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