import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators'
import store from "@/store";
export interface IUserList {
  list: any[]
}

@Module({ dynamic: true, store, name: "user" } )
export default class UserList extends VuexModule implements IUserList {
  public list: any [] = []
  private options : any[]  = [
    { value: '1', label: '管理员'},
    { value: '2', label: '开发' },
    { value: '3', label: '用户' },
    { value: '4', label: '测试' },
    { value: '5', label: '其它' },
  ]
  // 相当于getters
  get getList() {
    return this.list
  }
  get optionsList() {
    return this.options
  }
  @Mutation
  private SET_LIST(arr: any []) {
    this.list = arr
  }
  @Action
  public updList(list: any []) {
    this.SET_LIST(list)
  }
}

export const AdminListModule = getModule(UserList)