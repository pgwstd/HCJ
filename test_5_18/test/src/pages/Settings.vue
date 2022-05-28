<template>
  <div>
    <h3>密码修改</h3>
    <div class="form-group">
      <label>旧密码</label>
      <input type="password" v-model="oldPassword" class="form-control">
    </div>
  </div>
</template>
<script>


export default{
  name: "Settings",

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