<template>
  <div>
    <ul>
      <li>
        <router-link to="/users">课程列表</router-link>
      </li>
      <li>
        <router-link to="/permissions">课程查询</router-link>
      </li>
      <li>
        <router-link to="/products">成绩查询</router-link>
      </li>
      <li>
        <router-link to="/orders">修改密码</router-link>
      </li>
      <li>
        <router-link to="/settings">意见反馈</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu"
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