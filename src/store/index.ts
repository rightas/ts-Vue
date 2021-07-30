import Vue from "vue";
import Vuex from "vuex";
import { IAppState } from "./modules/app";
import { IUserState } from "./modules/user";
import { IPermissionState } from "./modules/permission";
import { ISettingsState } from "./modules/settings";
import { IUserList } from './modules/adminList'
import { IBillList } from './modules/billList'


Vue.use(Vuex);

export interface IRootState {
  app: IAppState;
  user: IUserState;
  permission: IPermissionState;
  settings: ISettingsState;
  userList: IUserList;
  IBillList: IBillList;
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({});
