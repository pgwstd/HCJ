<!--
 Created by 潘光伟 on 2022/4/25.
-->
<!--翻页的组件封装-->
<template>
  <div>
<!--    /*当前页发生变化时触发*/-->
<!--    /*每页条数发生变化时触发*/-->
<!--    /*每页条数选项*/-->
<!--    /*每页条数*/-->
<!--    /*当前页*/-->
<!--    /*组件布局*/-->
<!--    /*总条数*/-->
<!--    /*是否显示背景色*/-->
    <el-pagination
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :page-sizes="pages"
        :page-size="pSize"
        :current-page="currentPage"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalLength"
        :background="true"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "pageGinaTiion",  //组件名称
  props: {
    totalLength: {  //总条数
      type: [String, Number], //类型
      default: 0  //默认值
    },
    pages: {  //每页条数选项
      type: Array,
      default() { //默认值
        return [] //默认值
      }
    },
    pageSize:{  //每页条数
      type:Number,
      default:0 //默认值
    },
    tableList: {  //表格数据
      type: Array,  //表格数据
      default() { //默认值
        return [] //默认值
      }
    },
  },
  data() {  //数据
    return {
      currentPage: 1, //当前页
      pSize: 5, //每页条数
      pageData: { //组件布局
        index: 0, //索引
        leng: 5 //长度
      }
    }
  },
  created() { //页面创建完成后执行
    this.pSize = this.pageSize  //每页条数
    this.pageData.leng = this.pageSize  //长度
  },
  methods: {  //方法
    handleSizeChange(val) { //每页条数发生变化时触发
      this.currentPage = 1 //当前页
      this.pageData = { //组件布局
        index: 0,   //索引
        leng: val //长度
      }
      this.pSize = val //每页条数
      const listEmit = this.tableList.slice(this.pageData.index, val) //表格数据
      this.$emit('handleSizeEmit', listEmit) //表格数据
    },
    //表格分页功能
    handleCurrentChange(val) {  //当前页发生变化时触发
      //判断向前反页
      if (this.currentPage < val) {//  向前
        //判断是不是跳着翻页  === 1 就是一步一步走的  != 就是翻页走
        if (val - this.currentPage === 1) { //  向前一步
          this.pageData.index += this.pSize //索引
          this.pageData.leng += this.pSize //长度
        } else { //  向前翻页
          let {index, leng} = this.pageData //索引和长度
          index = this.pSize * val - this.pSize //索引
          leng = this.pSize * val //长度
          this.pageData = {index, leng} //组件布局
        }
      } else {
        //  向后
        // span 跨度  用于判断是不是跳着翻页 === 1 就是一步一步走的  != 就是翻页走
        const span = this.currentPage - val
        if (span === 1) { //  向后一步
          this.pageData.index -= this.pSize //索引
          this.pageData.leng -= this.pSize //组件布局
        } else {
          let {index, leng} = this.pageData //索引和长度
          /**
           * span * this.pSize  跨度 * 每页条数 =  总条数（跨过了多少条数）
           * 上一次的下标 - 总条数 = 当前页的下标
           **/
          index = index - span * this.pSize //索引
          leng = leng - span * this.pSize //长度
          this.pageData = {index, leng} //组件布局
        }
      }
      //记录当前页
      this.currentPage = val  //当前页
      const listEmit = this.tableList.slice(this.pageData.index, this.pageData.leng)  //表格数据
      this.$emit('handleCurrentEmit', listEmit) //表格数据
    }
  }
}
</script>

<style scoped>

</style>