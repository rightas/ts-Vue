<template>
  <div class="container">
    <el-form ref="userForm" :model="userForm" label-width="120px" :rules="userFormRules">
      <el-form-item label="用户名：" prop="userName">
        <el-input v-model="userForm.userName" tyoe="text"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="userForm.sex">
          <el-radio label="男" value="男"></el-radio>
          <el-radio label="女" value="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="地址：" prop="address">
        <el-input v-model="userForm.address" tyoe="text"></el-input>
      </el-form-item>
      <el-form-item label="爱好：" prop="hobby">
        <el-input v-model="userForm.hobby" tyoe="text"></el-input>
      </el-form-item>
    </el-form>
    <div class="btn-box">
      <el-button type="primary" :loading="loading" @click="submitForm()">添加</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import { IBillFromData } from "@/api/types";
import { BillListModule } from "@/store/modules/billList";

import { Form } from 'element-ui'

@Component({
  name: 'add'
})

export default class extends Vue {
  userForm: IBillFromData = {
    userName: '',
    sex: '',
    address: '',
    hobby: ''
  }
  userFormRules : any = {
    userName: [ { required: true, message: '请输入用户名', trigger: 'blur' }],
    sex: [ { required: true, message: '请输入性别', trigger: 'change' } ],
    address: [ { required: true, message: '请输入地址', trigger: 'blur' } ],
    hobby: [ { required: true, message: '请输入爱好', trigger: 'blur' } ], 
  }
  private loading = false;
  private options : any[]  = []
  private submitForm() : void{
    (this.$refs['userForm'] as Form).validate((valid : any) => {
      if (valid) {
        let list:any= BillListModule.getList
        list.push({
          ...this.userForm,
          id: list.length ? list.length : 1
        })
        BillListModule.updList(list)
        this.loading = true;
        this.$notify( {
          message: "添加成功",
          type: "success",
          duration: 2000
        } );
        setTimeout(() => {
          this.loading = false;
          this.$router.push({ path: "/bill/list" });
        }, 0.5 * 1000);
      } else {
        return false;
      }
    });
  }  

}

</script>


<style lang="scss" scoped>
.container {
  padding: 20px;
}
</style>