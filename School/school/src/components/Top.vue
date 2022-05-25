<template>
  <div class="header">
  <div class="dl">
    <div class="block">
      <div class="nav_left">学生  |  教职工  |  校友  |  访客  |  招聘  |  捐赠</div>
    <div class="nav_ringht">门户  网络  邮箱  图书  信箱  校历  校规</div>
  </div>
  </div>
  </div>
</template>
<script>
export default{
  name:'Top',
}
</script>

<style scoped>
*{
  font-family: 'Microsoft YaHei';
  min-width: 320px;
  margin: auto;
}
.header{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 3;
  transition: all .7s ease-out 0s;
}
.header .dl{
  background: #A0BCC2;
  color: #fff;
  line-height: 45px;
  font-size: 14px;
  transition: all .2s ease-out 0s;
  overflow: hidden;
}
.header .dl .block{
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header .dl .block .nav_left{
  background: #A0BCC2;
  color: #fff;
  line-height: 45px;
  height: 45px;
  font-size: 14px;
  transition: all 0.2s ease-out 0s;
  overflow: hidden;
  letter-spacing: 5px;
}
.header .dl .block .nav_ringht{
  background: #A0BCC2;
  color: #fff;
  line-height: 45px;
  height: 45px;
  font-size: 14px;
  transition: all 0.2s ease-out 0s;
  overflow: hidden;
  /*字段间距*/
  letter-spacing: 5px;
}
</style>
