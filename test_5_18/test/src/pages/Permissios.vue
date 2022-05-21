<!--权限管理-->
<template>
  <div>
    <div class="page-body">
      <el-row :gutter="20">
        <el-col :span="24">
          <el-card class="box-card" shadow="never">
            <div slot="header">
              <span>权限管理</span>
            </div>
            <div>
              <el-form :inline="true" :model="form" class="demo-form-inline">
                <el-form-item label="角色名称">
                  <el-input v-model="form.name" placeholder="请输入角色名称"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="search">查询</el-button>
                  <el-button @click="reset">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div>
              <el-table
                  :data="tableData"
                  border
                  style="width: 100%">
                <el-table-column
                    prop="name"
                    label="角色名称"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="description"
                    label="角色描述"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="create_time"
                    label="创建时间"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="update_time"
                    label="更新时间"
                    width="180">
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="180">
                  <template slot-scope="scope">
                    <el-button type="text" @click="edit(scope.$index, scope.row)">编辑</el-button>
                    <el-button type="text" @click="del(scope.$index, scope.row)">删除</el-button>
                  </template>