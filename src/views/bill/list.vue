<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" highlight-current-row>
      <el-table-column prop="id" label="用户ID" />
      <el-table-column prop="userName" label="姓名" />
      <el-table-column prop="sex" label="性别" />
      <el-table-column prop="address" label="地址" />
      <el-table-column prop="hobby" label="爱好" />
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" @click="handleDel(scope.row)" size="small">删除</el-button>
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
import { Vue, Component } from 'vue-property-decorator'
import { BillListModule } from "@/store/modules/billList";
import Pagination from "@/components/Pagination/index.vue";


@Component({
  name: 'list',
  components: {
    Pagination
  }
})

export default class extends Vue {
  private listLoading:boolean = false;
  private list: any[] = []
  private total: number = 0
  private listParams : any =  {
    page: 1,
    limit: 20
  }
   
  created () {
    this.getList()
  }
  
  private handleDel(row: any) :void {
    this.list = this.list.filter((el: any)=> el.id !== row.id)
    BillListModule.updList(this.list)
  }

  private getList() : void {
    this.listLoading = true
    setTimeout(()=> {
      this.listLoading = false
      this.list= BillListModule.getList
      this.total = this.list.length
    }, 10)
  }

}
</script>
