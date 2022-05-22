<template>
  <div id="app">
<Header />
    <div class="content">
      <div class="panel left">
        <Menu />
      </div>
      <div class="panel right">
        <div class="panel-main">
        <router-view />
    </div>
  </div>
  </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Menu
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content{
  display: flex;
  position: absolute;
  top:58px;
  bottom: 40px;
  width: 100%;
}
.panel{
  flex: 1;
  height: 100%;
}
.left{
  flex: 0 0 20%;
  background-color: #545c64;
}
.left a{
  color: white;
  text-decoration: none;
}
.right{
  margin: 5px;
}
</style>
