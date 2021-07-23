<template>
  <div class="container">
    <el-form ref="userForm" :model="userForm" label-width="120px" :rules="userFormRules">
      <el-form-item label="用户名：" prop="userName">
        <el-input v-model="userForm.userName" tyoe="text"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="pwd">
        <el-input v-model="userForm.pwd" type="number"></el-input>
      </el-form-item>
      <el-form-item label="类型：" prop="type">
        <el-select v-model="userForm.type" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="btn-box">
      <el-button type="primary" :loading="loading" @click="submitForm()">添加</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

import { From } from 'element-ui'

@Component({
  name: 'addUser'
})

export default class extends Vue {
  // private userForm = Object.assign({}, userForm1);
  userForm = {
    userName: '',
    pwd: '',
    type: ''
  }
  userFormRules = {
    userName: [ { required: true, message: '请输入用户名', trigger: 'blur' }],
    pwd: [ { required: true, message: '请输入密码', trigger: 'blur' } ],
    type: [ { required: true, message: '请输入类型', trigger: 'change' } ]
  }
  private loading = false;
  private options = [
    { value: '1', label: '管理员' },
    { value: '2', label: '开发' },
    { value: '3', label: '用户' },
    { value: '4', label: '测试' },
    { value: '5', label: '其它' },
  ];

  private submitForm() : void{
    (this.$refs['userForm'] as Form).validate(valid => {
      if (valid) {
        this.loading = true;
        this.$notify({
          title: "添加成功",
          message: "The post published successfully",
          type: "success",
          duration: 2000
        });
        setTimeout(() => {
          this.loading = false;
          this.$router.push({ path: "/userList/index" });
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