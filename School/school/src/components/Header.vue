<!--<template>-->
<!--  <div class="swiper">-->
<!--    <div class="swiper-content">-->
<!--      <div class="swiper-item" v-for="(item,index) in imageurl" :key="index">-->
<!--        <img :src="item"/>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="page">-->
<!--      <span></span>-->
<!--      <span></span>-->
<!--      <span></span>-->
<!--      <span></span>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--export default {-->
<!--  data () {-->
<!--    return {-->
<!--      imageurl:[-->
<!--        require("../assets/1.jpg"),-->
<!--        require("../assets/2.jpg"),-->
<!--        require("../assets/3.jpg"),-->
<!--        require("../assets/4.jpg"),-->
<!--        require("../assets/5.jpg"),-->
<!--      ],-->
<!--    };-->
<!--  },-->
<!--  methods:{-->
<!--    swiper(){-->
<!--      new Swiper({-->
<!--        content: '.swiper-content',-->
<!--        swiperItem: '.swiper-item',-->
<!--        page:"#page",-->

<!--      });-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
<!--<style scoped>-->
<!--.swiper{-->
<!--  width: 800px;-->
<!--  height: 400px;-->
<!--  position: relative;-->
<!--  overflow: hidden;-->
<!--  margin: auto;-->
<!--}-->
<!--.swiper-content{-->
<!--  position: absolute;-->
<!--  left: 0;-->
<!--  display: flex;-->

<!--}-->
<!--.swiper-item{-->
<!--  height: 400px;-->
<!--  width: 800px;-->
<!--}-->
<!--img{-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--}-->
<!--.page{-->
<!--  position: absolute;-->
<!--   left: 50%;-->
<!--  transform: translate(-50%,50%);-->
<!--  bottom: 15px;-->
<!--}-->
<!--span{-->
<!--  display: inline-block;-->
<!--  width: 15px;-->
<!--  height: 15px;-->
<!--  border-radius: 50%;-->
<!--  background: #fff;-->
<!--  margin-left: 20px;-->

<!--}-->
<!--</style>-->






