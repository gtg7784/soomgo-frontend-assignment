export const FormType = {
  Select: 'select',
  Checkbox: 'checkbox',
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type FormType = (typeof FormType)[keyof typeof FormType];
