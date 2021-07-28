<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" highlight-current-row>
      <el-table-column prop="id" label="用户ID" />
      <el-table-column prop="userName" label="姓名" />
      <el-table-column prop="type" label="类型" />
      <el-table-column prop="pwd" label="密码" />
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" @click="handleClick(scope.row)" size="small">编辑</el-button>
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
    <template>
      <el-dialog
          :title="dialog.title"
          :visible.sync="dialog.visible"
          width="30%"
          :before-close="handleClose">
        <editForm ref="editFrom" @form-data="subFromData" :user-form="rowInfo"/>
        <span slot="footer" class="dialog-footer">
          <el-button @click="handleClose">取 消</el-button>
          <el-button type="primary" @click="handleSub">确 定</el-button>
        </span>
      </el-dialog>
    </template>
   
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import editForm from './components/editForm.vue';
import Pagination from "@/components/Pagination/index.vue";
import { AdminListModule } from "@/store/modules/adminList";
@Component({
  name: 'userList',
  components: {
    editForm,
    Pagination
  }
})

export default class extends Vue {
  created () {
    this.getList()
  }
  private dialog :any = {
    visible: false,
    title: '修改'
  }
  private rowInfo : any = {}
  private total = 0;
  private list: any = []
  private listLoading:boolean = false;
  private listParams = {
    page: 1,
    limit: 20
  }
  private handleClose(): void{
    this.rowInfo = {};
    this.dialog.visible = false;
  }
  private handleClick(row :any) :void{
    this.rowInfo = row
    this.dialog.visible = true
  }
  private handleSub() :void {
    (this.$refs['editFrom'] as HTMLFormElement).submitForm()
  }
  private handleDel(row: any) {
    this.list = this.list.filter((el: any)=> el.id !== row.id)
    AdminListModule.updList(this.list)
  }
  private subFromData(row : any) {
    this.list = this.list.map( (el : any) => {
      if (el.id === row.id) el = Object.assign({}, row)
      return el
    })
    AdminListModule.updList(this.list)
    this.handleClose();
  }

  private getList() : void{
    this.listLoading = true
    setTimeout(()=> {
      this.listLoading = false
      this.list= AdminListModule.getList
      console.log(this.list)
      this.total = this.list.length
    }, 10)
  }
}

</script>

<style lang="scss" scoped>
  
</style>