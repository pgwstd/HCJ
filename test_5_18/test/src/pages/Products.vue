<!--商品管理-->
<template>
  <div>
    <div class="page-head">
      <div class="page-title">
        <h1>商品管理</h1>
      </div>
    </div>
    <div class="page-content">
      <div class="panel">
        <div class="panel-body">
          <div class="form-inline">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="请输入商品名称" v-model="search.name">
            </div>
            <div class="form-group">
              <select class="form-control" v-model="search.category_id">
                <option value="">请选择分类</option>
                <option v-for="item in categorys" :value="item.id">{{item.name}}</option>
              </select>
            </div>
            <div class="form-group">
              <select class="form-control" v-model="search.status">
                <option value="">请选择状态</option>
                <option value="1">上架</option>
                <option value="2">下架</option>
              </select>
            </div>
            <button class="btn btn-primary" @click="search">搜索</button>
            <button class="btn btn-primary" @click="add">添加</button>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-body">
          <div class="table-responsive">
            <table class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>商品名称</th>
                  <th>商品分类</th>
                  <th>商品价格</th>
                  <th>商品状态</th>
                  <th>商品详情</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in products">
                  <td>{{item.id}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.category.name}}</td>
                  <td>{{item.price}}</td>
                  <td>{{item.status_text}}</td>
                  <td>
                    <a href="javascript:;" @click="showDetail(item.id)">查看详情</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>