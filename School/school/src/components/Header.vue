<template>
  <div class="slide">
    <div class="slideshow">
    <ul>
      <li v-for="(img,index) in imgArray" v-show="index===mark" :key="index">
      <img  v-bind:src="img">
      </li>
    </ul>
  </div>
  <div class="bar">
    <span v-for="(item,index) in imgArray" :class="{'active':index===mark}" :key="index"></span>
  </div>
  </div>
</template>




<script>
export  default {
  name:'Header',
  data(){
    return{
      mark:0,
      imgArray:[
        require('../assets/1.jpg'),
        require('../assets/2.jpg'),
        require('../assets/3.jpg'),
        require('../assets/4.jpg'),
        require('../assets/5.jpg'),

      ]
    }
  },
  methods:{
    autoplay(){
      this.mark++;
      if(this.mark===this.imgArray.length){
        this.mark=0;
      }
    },
    play(){
      setInterval(this.autoplay,5000)
    }
  },
  created() {
    this.play();
  }
}

</script>




<style scoped>
*{
  margin:0;
  padding:0;
}
.slide{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;


}

.slideshow{
  width:100%;
  height:420px;

}
li{
  position: absolute;

}
img{
  width:100%;
  height:100%;

}
.bar{
  position: absolute;
  width: 100%;
  bottom: 10px;
  z-index: 10;
  text-align: center;

}
.bar span{
  display: inline-block;
  width: 15px;
  height: 3px;
  background:#545c64;
  margin: 0 5px;
  cursor: pointer;

}
.active{
  background: white !important;
}
</style>