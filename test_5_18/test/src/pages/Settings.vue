<!--系统设置-->
<template>
    <div>
        <div class="page-head">
            <header>
                <h3>系统设置</h3>
            </header>
        </div>
        <div class="page-content">
            <div class="page-content-inner">
                <div class="page-content-inner">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="portlet light">
                                <div class="portlet-title">
                                    <div class="caption">
                                        <i class="icon-settings font-green-sharp"></i>
                                        <span class="caption-subject font-green-sharp bold uppercase">系统设置</span>
                                    </div>
                                </div>
                                <div class="portlet-body form">
                                    <form class="form-horizontal" role="form">
                                        <div class="form-body">
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">网站名称</label>
                                                <div class="col-md-9">
                                                    <input type="text" class="form-control" v-model="site_name" placeholder="网站名称">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">网站标题</label>
                                                <div class="col-md-9">
                                                    <input type="text" class="form-control" v-model="site_title" placeholder="网站标题">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">网站关键字</label>
                                                <div class="col-md-9">
                                                    <input type="text" class="form-control" v-model="site_keywords" placeholder="网站关键字">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">网站描述</label>
                                                <div class="col-md-9">
                                                    <input type="text" class="form-control" v-model="site_description" placeholder="网站描述">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">网站备案号</label>
                                                <div class="col-md-9">
                                                    <input type="text" class="form-control" v-model="site_icp" placeholder="网站备案号">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">网站版权</label>
                                                <div class="col-md-9">
                                                    <input type="text" class="form-control" v-model="site_copyright" placeholder="网站版权">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">网站状态</label>
                                                <div class="col-md-9">
                                                    <div class="radio-list">
                                                        <label class="radio-inline">
                                                            <input type="radio" name="site_status" value="1" v-model="site_status"> 开启 </label>
                                                        <label class="radio-inline">
                                                            <input type="radio" name="site_status" value="0" v-model="site_status"> 关闭 </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">网站统计代码</label>
                                                <div class="col-md-9">
                                                    <textarea class="form-control" rows="3" v-model="site_tongji"></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">网站关闭提示</label>
                                                <div class="col-md-9">
                                                    <textarea class="form-control" rows="3" v-model="site_close_tip"></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">网站关闭原因</label>
                                                <div class="col-md-9">
                                                    <textarea class="form-control" rows="3" v-model="site_close_reason"></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">网站关闭时间</label>
                                                <div class="col-md-9">
                                                    <input type="text" class="form-control" v-model="site_close_time" placeholder="网站关闭时间">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "Products"
}
</script>