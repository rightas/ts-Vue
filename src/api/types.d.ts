export interface IArticleData {
  id: number;
  status: string;
  timestamp: string | number;
  author: string;
}

interface IUserFormData {
  userName?: string;
  pwd?: string | number;
  type?: string | number;
}
