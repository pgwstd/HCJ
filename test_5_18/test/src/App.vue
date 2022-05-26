<template>
  <div id="app">
    <Header/>
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
  <Login />
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import Menu from "./components/Menu.vue"
import Login from "@/components/Login";

export default {
  name: 'App',
  components: {
    Login,
    Header, Footer, Menu

  }
}

</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
  color: #F9F9F9;
}

.right {
  flex: 0 0 20%;
  background-color: #F7DBF0;
}

.content-main {
  margin-top: 10px;
}
</style>
