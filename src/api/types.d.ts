export interface IArticleData {
  id: number;
  status: string;
  timestamp: string | number;
  author: string;
}

export interface IUserFormData {
  userName?: string;
  pwd?: string | number;
  type?: string | number;
}

export interface IBillFromData {
  userName?: string;
  sex: string ;
  address: string;
  hobby: string;
}

