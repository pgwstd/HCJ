<template>
  <div>
    <ul>
      <li>
        <router-link to="/users">用户管理</router-link>
      </li>
      <li>
        <router-link to="/permissions">权限管理</router-link>
      </li>
      <li>
        <router-link to="/products">商品管理</router-link>
      </li>
      <li>
        <router-link to="/orders">订单管理</router-link>
      </li>
      <li>
        <router-link to="/settings">系统管理</router-link>
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
  background-color: #a0a0a0;
  color: #fff;
  cursor: pointer;
  border-bottom: 1px solid #fff;
}

</style>