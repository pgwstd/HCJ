<!--网页登录页面-->
<template>
  <div class="body">
    <div class="container">
      <h1>学生选课系统</h1>
      <div class="from">
        <input type="text" placeholder="您的帐号" v-model="form.id">
        <input type="password" placeholder="您的密码" v-model="form.pwd">
        <!--      单选框学生与教师,水平排序,不让上面的样式影响-->
        <div id="radio" style="width: 120px;height: 20px;">
          <input type="radio" name="type" value="student" v-model="identity" style="width:13px">学生
          <input type="radio" name="type" value="teacher" v-model="identity" style="width:13px">教师
        </div>
        <button class="btn-login" @click="login" style="margin: 15px">登录</button>
      </div>

    </div>
    <!--    动画模块-->
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

import PasswordData from "@/data/PasswordData";

export default {
  name: "Login",
  data() {
    return {
      form: {
        id: '', //账号
        pwd: '',  //密码
        radio: '' //身份单选框
      }
    }
  },
  methods: {
    login() {
      //使用路由守卫进行登录,使用PasswordData中的列表passwordList用户id与password和identity的选择进行比对
      //如果配对成功跳转到相应的页面
      //如果登录失败,提示用户
      let id = this.form.id;  //获取用户名
      let pwd = this.form.pwd;  //获取密码
      let identity = this.identity; //获取身份
      let passwordList = PasswordData.passwordList; //获取密码列表的总条数
      let flag = false;
      for (let i = 0; i < passwordList.length; i++) {   //循环找出PasswordData列表中与输入框配对的用户名、密码、身份
        if (id == passwordList[i].id && pwd == passwordList[i].password && identity == passwordList[i].identity) {
          flag = true;
          break;
        }
      }
      //获取当前学生的名字
      let studentName = '';
      for (let i = 0; i < passwordList.length; i++) {  //循环找出PasswordData列表中与输入框配对的学生名
        if (id == passwordList[i].id && pwd == passwordList[i].password && identity == passwordList[i].identity) {
          studentName = passwordList[i].name;
          break;
        }
      }
      //获取当前教师的名字
      let teacherName = '';
      for (let i = 0; i < passwordList.length; i++) { //循环找出PasswordData列表中与输入框配对的老师名
        if (id == passwordList[i].id && pwd == passwordList[i].password && identity == passwordList[i].identity) {
          teacherName = passwordList[i].name;
          break;
        }
      }
      if (flag) { //如果配对成功
        if (identity == 'student') {
          //两秒弹窗弹出相对应的名字
          this.$message({ //弹出提示框
            message: '欢迎学生' + studentName + '登录',
            type: 'success',  //提示类型
            duration: 2000  //持续时间
          });
          this.$router.push('/Student');  //跳转到学生页面
        } else {
          this.$message({
            message: '欢迎老师' + teacherName + '登录',
            type: 'success',
            duration: 2000
          });
          this.$router.push('/Teacher');  //跳转到教师页面
        }
      } else {
        //错误事件外理
        //判断身份是否为空，为空则提示
        if (identity == null) {
          this.$message({
            message: '请选择身份',
            type: 'error',
            duration: 2000
          });
        } else if (id == '' || pwd == '') {  //判断用户名和密码是否为空，为空则提示
          this.$message({
            message: '账号或密码不能为空',
            type: 'error',
            duration: 2000
          });
        } else { //如果用户名和密码都不为空，则提示用户名或密码错误
          this.$message({
            message: '账号或密码错误',
            type: 'error',
            duration: 2000
          });
        }

      }
    }
  }
}


</script>
<style scoped>
* {
  /* 初始化 */
  margin: 0;
  padding: 0;
  box-sizing: border-box; /*让所有的元素都有相同的边框*/
}

.body {
  /*100vh是网页的高度，vw是网页的宽度*/
  height: 100vh;
  /* 弹性布局 */
  display: flex;
  justify-content: center; /*垂直居中*/
  align-items: center; /*水平居中*/
  /*渐变效果*/
  background: linear-gradient(to top left, #ffe29f, #ffa99f, #ff719a);
  /* 溢出隐藏 */
  overflow: hidden;
}

.container { /*容器*/
  text-align: center;
  color: #fff;
}

.container h1 { /*标题*/
  font-size: 35px;
  font-weight: 100;
  letter-spacing: 2px;
  margin-bottom: 15px;
  /* 过渡效果*/
  transition: 1s ease-in-out;
}

.from {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  opacity: 1;
  /*不透明改变时的过渡效果*/
  transition: opacity 0.5s;
}

.from input { /*输入框*/
  outline: none;
  border: 1px solid rgb(255, 255, 255, 0.4);
  background-color: rgb(255, 255, 255, 0.2);
  width: 250px;
  padding: 10px 15px;
  border-radius: 3px;
  margin: 0 auto 10px auto;
  text-align: center;
  color: #fff;
  font-size: 15px;
  transition: 0.25s;
}

.from input::placeholder { /*输入框的提示文字为空时显示,并会在字段获得焦点时消失*/
  color: #fff;
  font-size: 14px;
  font-weight: 300;

}

.from input:hover { /*输入框的提示文字*/
  background-color: rgb(255, 255, 255, 0.4);
}

.from input:focus { /*输入框字焦点效果*/
  background-color: #fff;
  width: 300px;
  color: #ff719a;
}

.btn-login { /*登录按钮*/
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

.btn-login:hover { /*登录按钮*/
  background-color: #f5f7f9;
}

.bg-squares { /*背景方块*/
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.bg-squares li { /*背景方块*/
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.15); /*背景颜色*/
  position: absolute; /*绝对定位*/
  bottom: -160px; /*距离底部的距离*/
  /*执行动画：动画名 时长 线性 无限循环*/
  animation: square 20s linear infinite;
}

.bg-squares li:nth-child(1) { /*背景方块*/
  left: 10%;
}

.bg-squares li:nth-child(2) { /*背景方块*/
  left: 20%;
  width: 80px;
  height: 80px;
  animation-delay: 2s; /*延迟2秒执行动画*/
  animation-duration: 17s; /*动画持续时间*/
}

.bg-squares li:nth-child(3) { /*背景方块*/
  left: 25%;
  animation-delay: 4s;
}

.bg-squares li:nth-child(4) { /*背景方块*/
  left: 40%;
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.25);
  animation-duration: 22s;
}

.bg-squares li:nth-child(5) { /*背景方块*/
  left: 70%;

}

.bg-squares li:nth-child(6) { /*背景方块*/
  left: 80%;
  width: 120px;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.2);
  animation-delay: 3s;
}

.bg-squares li:nth-child(7) { /*背景方块*/
  left: 32%;
  width: 160px;
  height: 160px;
  animation-delay: 7s;
}

.bg-squares li:nth-child(8) { /*背景方块*/
  left: 55%;
  width: 20px;
  height: 20px;
  animation-delay: 15s;
  animation-duration: 40s;
}

.bg-squares li:nth-child(9) { /*背景方块*/
  left: 25%;
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  animation-delay: 2s;
  animation-duration: 40s;
}

.bg-squares li:nth-child(10) { /*背景方块*/
  left: 90%;
  width: 160px;
  height: 160px;
  animation-delay: 11s;
}

/* 定义动画规则 */
@keyframes square { /*背景方块的动画定义*/
  0% {
    transform: rotateY(0); /*旋转*/
  }
  100% {
    transform: translateY(-120vh) rotateY(600deg); /*移动*/
  }
}
</style>