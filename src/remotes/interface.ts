import { FormType } from './enum';

export interface GetFormResponse {
  formId: number;
  title: string;
  items: Item[];
}

export interface Item {
  itemId: number;
  title: string;
  formType: FormType;
  options: Option[];
}

export interface Option {
  id: number;
  text: string;
}
