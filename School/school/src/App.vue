<template>
  <div id="app">
    <Header/>
    <Footer />
  </div>

</template>

<script>
import Header from "./components/Header.vue"
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}

</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>
