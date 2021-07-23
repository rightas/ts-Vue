<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" highlight-current-row>
      <el-table-column align="center" label="用户ID">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="type" label="类型" />
      <el-table-column prop="pwd" label="密码" />
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" @click="handleClick(scope.row)" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listParams.page"
      :limit.sync="listParams.limit"
      @pagination="getList"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

// import editForm from './components/editForm';
import Pagination from "@/components/Pagination/index.vue";

@Component({
  name: 'userList',
  components: {
    // editForm,
    Pagination
  }
})

export default class extends Vue {
  created () {
    this.getList()
  }
  private total = 0;
  private list: any = []
  private listLoading:boolean = false;
  private listParams = {
    page: 1,
    limit: 20
  }

  private getList() : void{
    this.listLoading = true
    setTimeout(()=> {
      this.listLoading = false
      this.list= [
        { id: 1, name: '张三',  type: '测试', pwd: '123456' },
        { id: 2, name: '小四',  type: '管理员', pwd: '12222' },
        { id: 3, name: '老远',  type: '用户A', pwd: '312322' },
        { id: 4, name: '王和',  type: '开发', pwd: '231244' },
        { id: 5, name: '李牧',  type: '测产品试', pwd: '666666' },
        { id: 6, name: '拉破s拉破s',  type: '项目经理', pwd: '3232323' },
        { id: 7, name: '函数',  type: '开发', pwd: '212113' },
        { id: 8, name: '张三',  type: '管理员', pwd: '222222' },
      ]
      this.total = this.list.length
    }, 10)
    
  }

}

</script>

<style lang="scss" scoped>
  
</style>