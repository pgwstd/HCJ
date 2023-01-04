<!--老师端-->
<template>
  <div class="content">
    <div class="panel left">
      <el-row class="tac">
        <el-menu
            background-color="#97C4B8"
            text-color="#fff"
            active-text-color="#ffd04b"
            router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>信息管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item @click="stu_Manage">学生信息</el-menu-item>
              <el-menu-item @click="teatime">课程安排</el-menu-item>

            </el-menu-item-group>
          </el-submenu>
          <el-menu-item>
            <i class="el-icon-s-management"></i>
            <span slot="title" @click="class_Manage">班级信息</span>
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-bank-card"></i>
            <span slot="title" @click="uploadgrades">上传成绩</span>
          </el-menu-item>

          <el-menu-item>
            <i class="el-icon-message-solid"></i>
            <span @click="Statistics">数据统计</span>
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-remove"></i>
            <span slot="title" @click="quit">退出系统</span>
          </el-menu-item>
        </el-menu>
      </el-row>

    </div>
    <div class="panel right">
      <div class="content-main">
        <router-view/>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Teacher',
  methods: {
    stu_Manage() {
      this.$router.push('/stu_Manage');  //跳转到学生信息管理页面
    },
    class_Manage() {
      this.$router.push('/class_Manage');  //跳转到班级信息管理页面
    },
    teatime() {
      this.$router.push('/teatime'); //跳转到课程安排页面
    },
    Statistics() {
      this.$router.push('/Statistics');  //跳转到数据统计页面
    },
    uploadgrades() {
      this.$router.push('/Uploadgrades');  //跳转到上传成绩页面
    },
    quit() {
      this.$router.push("/");  //跳转到登录页面
    }
  }

}

</script>

<style scoped>
/**{*/
/*  margin: 0;*/
/*  padding: 0;*/
/*}*/

.content {
  width: 100%;
  height: 100%;
  top: 0;
}

.panel {
  flex: 1;
  height: 100%;
}

.left {
  flex: 0 0 20%;
  background-color: #97C4B8;
}

.left a {
  color: white;
  text-decoration: none;
}

.right {
  margin: 5px;
}

.content-main {
  margin-top: 10px;
}
</style>
