<!--学生端成绩查询-->
<template>
  <div>
    <div class="course-header">
      <el-select v-model="value"  placeholder="请选择" >
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value" >
        </el-option>
      </el-select>
      <el-button type="primary" icon="el-icon-search" @click="seach" >查询</el-button>
    </div>
<!--    定义表格框架-->
    <table>
      <thead>
      <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>课号</th>
        <th>课名</th>
        <th>学期</th>
        <th>教师</th>
        <th>平时成绩</th>
        <th>考试成绩</th>
        <th>总成绩</th>
        <th>绩点</th>
      </tr>
      </thead>
      <tbody>
      <!--      遍历数组内容-->
      <tr v-for="item in Score" :key="item.id" >
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.cid}}</td>
        <td>{{item.cname}}</td>
        <td>{{item.semester}}</td>
        <td>{{item.teacher}}</td>
        <td>{{item.usuallyScore}}</td>
        <td>{{item.examScore}}</td>
        <td>{{item.totalScore}}</td>
        <td>{{item.GPA}}</td>
      </tr>
      </tbody>
    </table>
<!--    分页功能定义-->
    <pageGinaTiion
        :totalLength="total"
        :pages="[5, 10]"
        :page-size="pageSize"
        :tableList="tableList"
        @handleCurrentEmit="handemit"
        @handleSizeEmit="handleSizeEmit"
    >

    </pageGinaTiion>
  </div>
</template>
<script>
import ScoreData from "../data/ScoreData" //引入数据
import pageGinaTiion from "@/components/pageGinaTiion"; //引入翻页组件


export default{
  name: "Score",
  components:{
    pageGinaTiion //引入翻页组件
  },
  data:function (){
    return {
      table: "",
      //表格数据
      Score:[], //已选课数据
      //表格分布功能
      total: ScoreData.ScoreList.length,  //总条数
      tableList:ScoreData.ScoreList,  //表格数据
      pageSize: 10, //每页显示条数
      value: "全部",  //下拉框选择
      options: [
        {
          value: '全部',
          label: '全部'
        },{
        value: '1',
        label: '2018-2019学年第一学期'
      }, {
        value: '2',
        label: '2018-2019学年第二学期'
      }, {
        value: '3',
        label: '2018-2019学年第三学期'
      },
      ]
    }
  },
  created() { //页面创建完成后执行

    this.Score = ScoreData.ScoreList.slice(0, 10) //初始化数据


  },
  methods: {
    //选择全部，查询会出现全部的数据，选择其他的学期，查询的数据就是选择的学期的数据
    seach: function () {  //查询
      if (this.value == "全部") { //全部
        this.Score = ScoreData.ScoreList; //全部
      } else {
        this.Score = ScoreData.ScoreList.filter(function (item) { //过滤
          return item.semester == this.value; //返回符合条件的数据
        }.bind(this));  //绑定this
      }
    },
    //表格分页功能{
      handemit(data) {
        this.Score = data   //更新数据
      },
      handleSizeEmit(data) {
        this.Score = data   //更新数据
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
.course-header{
  clear: none;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  float: left;
}

</style>