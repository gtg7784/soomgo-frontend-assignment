export interface GetFormResponse {
  formId: number;
  title: string;
  items: Item[];
}

export interface Item {
  itemId: number;
  title: string;
  formType: string;
  options: Option[];
}

export interface Option {
  id: number;
  text: string;
}
