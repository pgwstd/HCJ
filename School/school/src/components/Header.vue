<!--图片轮播组件-->
<template>
 <div class="slide-content">
   <div class="slide-view">
     <a>
       <img v-for="(item,index) in slideList"
           :key="index" :src="item" v-show="n == index"
           @mouseenter="clearGo" @mouseleave="go">
     </a>
     <span class="up-page" @mouseenter="clearGo"><-</span>
     <span class="next-page" @mouseenter="clearGo">-></span>
     <ul class="slide-index">
       <li v-for="(v,i) in slideList" :key="i" :class="n == i ? 'active' : ''"></li>
     </ul>
   </div>
   </div>
</template>

<script>

export default {
  name: 'Header',
  data:{
    slideList:[
        "./src/assets/1.jpg",
        "./src/assets/2.jpg",
        "./src/assets/3.jpg",
        "./src/assets/4.jpg",
        "./src/assets/5.jpg",

    ],
    n:0,
    interId:null
  },
  methods:{
    go(){ //开始改变图片
      setInterval(()=>{
        this.n++;
        if(this.n>=this.slideList.length){ //如果超过最大值，就回到第一张
          this.n=0;
        }
      },2000) //2秒改变一次
    },
    clearGo(){ //清除定时器
      clearInterval(this.interId)
    },
    clickPage(str){ //点击索引
      if (str === 'up') {
        this.n--;
        if (this.n < 0) {
          this.n = this.slideList.length - 1;
        }
      } else if (str === 'next') {
        this.n++;
        if (this.n >= this.slideList.length) {
          this.n = 0;
        }
      } else {
        this.n = str;
      }
    }
  },
  mounted(){
    this.go();
  }
}

</script>
<style scoped>

</style>