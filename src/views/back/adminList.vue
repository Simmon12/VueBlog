<template>
  <el-table :data="Datas" border style="width:80%; margin:0 auto;" v-loading="listLoading" element-loading-text="拼命加载中">
    <el-table-column type="index" width="60"></el-table-column>
    <el-table-column prop="date" label="创建时间" sortable width="180"></el-table-column>
    <el-table-column prop="title" label="文章标题" width="320"></el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <el-button size="small" @click="read(scope.row._id)">查看</el-button>
        <el-button size="small" @click="editArticle(scope.row._id)">编辑</el-button>
        <el-button size="small" type="danger" @click="delArticle(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import moment from 'moment';
  import axios from 'axios';
  import objectIdToTimestamp from 'objectid-to-timestamp';
  export default{
    data() {
      return {
        Datas: [],
        listLoading: false
      }
    },
    created() {
      this.listLoading = true;
      this.getData();

    },
    methods: {
      getData() {
        axios.get(`/api`).then(res => {
          this.Datas = res.data;
          this.Datas.forEach(Data => {
            Data.date = moment(objectIdToTimestamp(Data._id)).format('YYYY-MM-DD');
          });
          this.listLoading = false;
        });
      },
      read(id) {
        this.$router.push({
          name: 'postDetail',
          params: {id: id}
        });
      },
      editArticle(id) {
        this.$router.push({
          name: 'editArticle',
          params: {id: id}
        })
      },
      delArticle(id){
        this.$confirm('确认要删除吗?','提醒',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'waring'
        })
        .then(()=> {
          this.listLoading = true;
          axios.delete(`/api/${id}`)
            .then(()=> {
              this.listLoading = false;
              this.$notify({
                title: '成功',
                message: "删除成功",
                type: 'success'
              })
              this.getData();
            })
        }).catch((err) => {
          console.log(err);
        })
      }

    }
  }
</script>
