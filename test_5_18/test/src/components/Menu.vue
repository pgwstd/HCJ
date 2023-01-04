<!--网页菜单栏组件-->
<template>
  <div>
    <ul>
      <li>
        <!--        路由连接跳转-->
        <router-link to="/Course" class="el-icon-s-management">课程信息</router-link>  <!--跳转到课程信息页面-->
      </li>
      <li>
        <router-link to="/Already_course" class="el-icon-circle-plus">选课情况</router-link> <!--跳转到选课情况页面-->
      </li>
      <li>
        <router-link to="/Score" class="el-icon-bank-card">成绩查询</router-link> <!--跳转到成绩查询页面-->
      </li>
      <li>
        <router-link to="/Credit" class="el-icon-s-data">学分情况</router-link> <!--跳转到学分情况页面-->
      </li>
      <li>
        <router-link to="/Password" class="el-icon-menu">修改密码</router-link> <!--跳转到修改密码页面-->
      </li>
      <li>
        <router-link to="/" class="el-icon-remove">退出系统</router-link> <!--跳转到登录页面-->
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