<template>
  <div class="body">
  <div class="container">
    <h1>学生选课系统</h1>
    <div class="from">
      <input type="text" placeholder="您的账号" v-model="form.id">
      <input type="password" placeholder="您的密码" v-model="form.pwd">
      <button class="btn-login" @click="login">登录</button>
    </div>
  </div>
    <ul class="bg-squares">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: "Login",
    // 要操作的元素: ".container",".btn-login"
    data() {
      return {
        form: {
          id: '110',
          pwd: '123456'
        }
      }
    },
    methods: {
      login(){
        //如果帐号是张三密码是123456就路由跳转到首页
        if(this.form.id == '110' && this.form.pwd == '123456'){
          this.$router.push('/Home');
        }else{
          alert('账号或密码错误!');
        }
      },

    }

  }
</script>rpt>
<style scoped>
*{
  /* 初始化 */
  margin: 0;
  padding: 0;
  box-sizing: border-box; /*让所有的元素都有相同的边框*/
}
.body{
  /*100vh是网页的高度，vw是网页的宽度*/
  height: 100vh;
  /* 弹性布局 */
  display: flex;
  justify-content: center;
  align-items: center;
  /*渐变效果*/
  background: linear-gradient(to top left,#ffe29f,#ffa99f,#ff719a);
  /* 溢出隐藏 */
  overflow: hidden;
}
.container{
  text-align: center;
  color: #fff;
}
.container h1{
  font-size: 35px;
  font-weight: 100;
  letter-spacing: 2px;
  margin-bottom: 15px;
  /* 过渡效果*/
  transition: 1s ease-in-out;
}
.from{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  opacity: 1;
  /*不透明改变时的过渡效果*/
  transition: opacity 0.5s;
}
.from input{
  outline: none;
  border: 1px solid rgb(255,255,255,0.4);
  background-color: rgb(255,255,255,0.2);
  width: 250px;
  padding: 10px 15px;
  border-radius: 3px;
  margin:0 auto 10px auto;
  text-align: center;
  color: #fff;
  font-size: 15px;
  transition: 0.25s;
}
.from input::placeholder{
  color: #fff;
  font-size: 14px;
  font-weight: 300;

}
.from input:hover{
  background-color: rgb(255,255,255,0.4);
}
.from input:focus{
  background-color: #fff;
  width: 300px;
  color: #ff719a;
}
.btn-login{
  outline: none;
  background-color: #fff;
  color: #ff719a;
  border: 250px;
  padding: 10px 15px;
  border-radius: 3px;
  font-size: 15px;
  cursor: pointer;
  transition: 0.25s;
}
.btn-login:hover{
  background-color: #f5f7f9;
}
/*背景方块*/
.bg-squares{
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.bg-squares li{
  width: 40px;
  height: 40px;
  background-color: rgba(255,255,255,0.15);
  position: absolute;
  bottom: -160px;
  /*执行动画：动画名 时长 线性 无限循环*/
  animation: square 20s linear infinite;
}
.bg-squares li:nth-child(1){
  left: 10%;
}
.bg-squares li:nth-child(2){
  left: 20%;
  width: 80px;
  height: 80px;
  animation-delay: 2s;
  animation-duration:17s;
}
.bg-squares li:nth-child(3){
  left: 25%;
  animation-delay: 4s;
}
.bg-squares li:nth-child(4){
  left: 40%;
  width: 60px;
  height: 60px;
  background-color: rgba(255,255,255,0.25);
  animation-duration: 22s;
}
.bg-squares li:nth-child(5){
  left: 70%;

}
.bg-squares li:nth-child(6){
  left: 80%;
  width: 120px;
  height: 120px;
  background-color: rgba(255,255,255,0.2);
  animation-delay: 3s;
}
.bg-squares li:nth-child(7){
  left: 32%;
  width: 160px;
  height: 160px;
  animation-delay: 7s;
}
.bg-squares li:nth-child(8){
  left: 55%;
  width: 20px;
  height: 20px;
  animation-delay: 15s;
  animation-duration:40s;
}
.bg-squares li:nth-child(9){
  left: 25%;
  width: 10px;
  height: 10px;
  background-color: rgba(255,255,255,0.3);
  animation-delay: 2s;
  animation-duration:40s;
}
.bg-squares li:nth-child(10){
  left: 90%;
  width: 160px;
  height: 160px;
  animation-delay: 11s;
}
/* 定义动画 */
@keyframes square{
  0%{
    transform: rotateY(0);
  }
  100%{
    transform: translateY(-120vh) rotateY(600deg);
  }
}
</style>