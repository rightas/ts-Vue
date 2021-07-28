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
 
  // 相当于getters
  get getList() {
    return this.list
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