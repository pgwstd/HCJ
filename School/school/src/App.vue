<template>
  <div id="app">
    <Top />
    <Header/>
    <Footer />
  </div>

</template>

<script>
import Top from "./components/Top.vue";
import Header from "./components/Header.vue"
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Top,
    Footer,
    Header
  }
}

</script>

<style scoped>
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
</style>
