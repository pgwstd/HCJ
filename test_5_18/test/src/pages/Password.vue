<!--学生端密码修改-->
<template>
  <div>
    <div class="form-group">
      <div class="old">
      <el-input placeholder="请输入旧密码" autocomplete="off"  style="width: 250px;" v-model="old" show-password></el-input>
      </div>
      <div class="new">
        <el-input placeholder="请输入新密码" style="width: 250px;"v-model="news" show-password></el-input>
      </div>
      <div class="agin">
        <el-input placeholder="确认您的密码" style="width: 250px;" v-model="next" show-password></el-input>
      </div>
        <el-button type="primary" @click="submitForm">提交</el-button>
      <el-button type="primary" @click="reaset">重置</el-button>
    </div>
  </div>
</template>
<script>




export default{
  name: "Password",
  data () {
    return {
     old:'',    //旧密码
     news:'',  //新密码
     next:''  //确认密码
    }
  },
  // 如果密码与确认密码不一致，则提示
  //如果旧密码与123456不一致，则提示
  //新密码与确认密码不可为空，为空则提示
  methods: {
    submitForm() {
      if(this.old!= '123456'){
        this.$message.error('密码错误');
      }else if(this.news!=this.next){
        this.$message.error('两次密码不一致');
      }else if(this.news==''||this.next==''){
        this.$message.error('新密码不可为空');
      }else{
        this.$message.success('修改成功');
      }
    },

    //点击重置，则三个输入框清空
    reaset: function () {
      this.old = "";
      this.news = "";
      this.next = "";

    },
  }

}
</script>
<style scoped>  /*样式只能在这里用*/
table{
  width:100%;
  border-collapse:collapse;
}
td,th{
  border:1px solid #eee;
  line-height: 35px;
  font-size: 12px;
}
th{
  background-color: #ddd;
}
a{
  cursor: pointer;
  color: #a33;
  text-decoration: none;
}
.form-group{
  width: 300px;
  padding-bottom:20px;
  margin: 0 auto;
}
.form-group .old{
  width: 250px;
  margin: 0 auto;
  padding: 20px 0 20px 0;
}
.form-group .new{
  width: 250px;
  margin: 0 auto;
  padding: 10px 0 20px 0;
}
.form-group .agin{
  width: 250px;
  margin: 0 auto;
  padding: 10px 0 20px 0;
}
</style>