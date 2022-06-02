<!--学生端-->
<template>
  <div id="app">
    <Header/>
    <div class="student">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>李雷
    </div>
    <div class="content">
      <div class="panel left">
        <div class="content-main">
          <router-view />
        </div>
      </div>
      <div class="panel right">
        <Menu/>
      </div>

    </div>
    <Footer/>

  </div>
</template>

<script>
import Header from "@/components/Header.vue"  //引入头部组件
import Footer from "@/components/Footer.vue" //引入底部组件
import Menu from "@/components/Menu.vue" //引入菜单组件

export default {
  name: 'Student',
  components: {
    Header, Footer, Menu //引入组件
  },


}

</script>

<style>


.content {
  display: flex;
  position: absolute;
  top: 50px;
  bottom: 40px;
  width: 100%;
}

.panel {
  flex: 1;
  height: 100%;
}

.left {
  margin: 5px;
  background-color: #CDF0EA;
}

.right a{
  color: #2c3e50;
  text-decoration: none;
}


.right a:hover{
  color: #ff719a;

}

.right {
  flex: 0 0 20%;
  background-color: #F7DBF0;
}

.content-main {
  margin-top: 10px;
}
.student{
  position: absolute;
  top: 5px;
  right: 10px;
}
</style>
