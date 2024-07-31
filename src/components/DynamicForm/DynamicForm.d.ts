export interface DynamicFormProps {
  title?: string;
  fields: InputFieldSchema[];
  grid: GridTemplateProps;
}

export interface InputValidation {
  required?: boolean;
  min?: number;
  max?: number;
  mimeType?: string[];
}

export enum InputType {
  string = 'string',
  integer = 'integer',
  decimal = 'decimal',
  email = 'email',
  textarea = 'textarea',
  file = 'file'
}

export interface InputFieldSchema {
  name: string;
  label: string;
  type: InputType | string;
  validation?: InputValidation;
}

export interface GridTemplateProps {
  template?: string[][];
  columns?: string;
  rows?: string;
}