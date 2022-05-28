<template>
  <div>
    <ul>
      <li>
        <router-link to="/Course" class="el-icon-s-management">课程信息</router-link>
      </li>
      <li>
        <router-link to="/permissions" class="el-icon-circle-plus">选课情况</router-link>
      </li>
      <li>
        <router-link to="/products" class="el-icon-bank-card">成绩查询</router-link>
      </li>
      <li>
        <router-link to="/orders" class="el-icon-s-data">学分情况</router-link>
      </li>
      <li>
        <router-link to="/settings" class="el-icon-menu">修改密码</router-link>
      </li>
      <li>
        <router-link to="/" class="el-icon-remove">退出系统</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",

}

</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

ul li {
  height: 45px;
  line-height: 45px;
  background-color: #F7DBF0;
  cursor: pointer;
  border-bottom: 2px solid #fff;

}

</style>