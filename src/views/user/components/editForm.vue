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
            :value="item.label">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</el-dialog>
</template>
<script lang="ts">
import { Vue, Prop, Component, Emit } from 'vue-property-decorator'
import { Form } from 'element-ui'
import { AdminListModule } from "@/store/modules/adminList";

@Component({
  name: 'editForm'
})
export default class editForm  extends Vue {
  @Prop({type: Object, required: true, default: { userName: '',pwd: '',type: '', id: ''} })  userForm: Object;
  userFormRules :any = {
    userName: [ { required: true, message: '请输入用户名', trigger: 'blur' }],
    pwd: [ { required: true, message: '请输入密码', trigger: 'blur' } ],
    type: [ { required: true, message: '请输入类型', trigger: 'change' } ]
  }
  private options : any[]  = []
  created () {
    this.options = AdminListModule.optionsList
  }
  private submitForm() : void {
    (this.$refs['userForm'] as Form).validate((valid : any) => {
      if (valid) {
        this.formData()
      } else {
        return false
      }

    })
  }
  @Emit()
  formData() {
    return Object.assign({}, this.userForm)
  }
 
}
</script>
<style lang="scss" scoped>


</style>