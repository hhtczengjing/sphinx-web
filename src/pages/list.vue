<template>
  <div id="container">
    <el-row :gutter="20">
      <el-col :span="21">
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入SQL语句" v-model="sql">
        </el-input>
      </el-col>
      <el-col :span="3">
        <el-button @click.native="executeSql()" type="primary" size="large" icon="search">查询</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-table :data="tableData" fit border style="width: 100%;" v-loading="loading" element-loading-text="拼命加载中">
          <el-table-column :prop="col.prop" :label="col.label" v-for="col in columns" :key="col.prop"></el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template scope="scope">
              <el-button @click.native="previewRow(scope.row.name)" type="primary" size="small">查看</el-button>
              <el-button @click.native="editRow(scope.row.name)" type="primary" size="small">编辑</el-button>
              <el-button @click.native="deleteRow(scope.row.name)" type="danger" size="small" >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ajax from "../libs/ajax.js";

export default {  
  data () {
    return {
      loading: false,
      columns:[],
      tableData: [],
      sql: '',
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      var that = this;
      this.loading = true;
      var name = this.$route.params['name'];
      ajax.get('/table/'+name, {}, function(data){
        that.tableData = data.data;
        that.columns = data.column;
        that.loading = false;
      });
    },
    executeSql() {
   	  var that = this;
      this.loading = true;
      ajax.post('/execute', {sql: this.sql}, function(data){
        if(data.type === '1') {
          that.tableData = data.data;
          that.columns = data.column;
        }
        else {
          that.tableData = nil;
          that.columns = nil;
        }
        that.loading = false;
      });
    },
    previewRow() {

    },
    editRow() {

    },
    deleteRow() {

    },
  }
}
</script>

<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>