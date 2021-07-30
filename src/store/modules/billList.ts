import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'

import store from '@/store'


export interface IBillList {
  list: any[]
}

@Module( { dynamic: true, store, name: 'bill'} ) 
export default class BillList extends VuexModule implements IBillList {

 private list: any[] = []

 get getList() {
   return  this.list
 }

 @Mutation
 private SET_LIST(arr: any []) {
   this.list = arr
 }

 @Action
 private updList(arr: any []) {
   this.SET_LIST(arr)
 }

}

export const BillListModule = getModule(BillList)