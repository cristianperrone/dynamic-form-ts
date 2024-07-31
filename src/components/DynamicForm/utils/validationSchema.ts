import { z, ZodRawShape } from 'zod';
import { InputType, InputFieldSchema } from '../DynamicForm.d';

const createValidationSchema = (fields: InputFieldSchema[]) => {
  const schemaShape: ZodRawShape = {};

  fields.forEach((field: InputFieldSchema) => {
    let fieldSchema;

    switch (field.type) {
      case InputType.string:
        fieldSchema = z.string();

        if (field.validation?.required) fieldSchema = fieldSchema.min(1, 'Este campo es obligatorio');
        if (field.validation?.min) fieldSchema = fieldSchema.min(field.validation.min, `Mínimo ${field.validation.min} caracteres`);
        if (field.validation?.max) fieldSchema = fieldSchema.max(field.validation.max, `Máximo ${field.validation.max} caracteres`);
        break;

    case InputType.email:
      fieldSchema = z.string().email();

      if (field.validation?.required) fieldSchema = fieldSchema.min(1, 'Este campo es obligatorio');
      if (field.validation?.min) fieldSchema = fieldSchema.min(field.validation.min, `Mínimo ${field.validation.min} caracteres`);
      if (field.validation?.max) fieldSchema = fieldSchema.max(field.validation.max, `Máximo ${field.validation.max} caracteres`);
      break;

      case InputType.decimal:
      case InputType.integer:
        fieldSchema = z.number();

        if (field.type === InputType.integer) fieldSchema.int();
        if (!field.validation?.required) fieldSchema.nullable();
        if (field.validation?.min !== undefined) fieldSchema = fieldSchema.min(field.validation.min, `Mínimo ${field.validation.min}`);
        if (field.validation?.max !== undefined) fieldSchema = fieldSchema.max(field.validation.max, `Máximo ${field.validation.max}`);
        break;

      case InputType.file:
        fieldSchema = z.instanceof(File);

        if (field.validation?.required) fieldSchema = fieldSchema.refine(file => file.size > 0, 'Este campo es obligatorio');
        if (field.validation?.min) fieldSchema = fieldSchema.refine(file => file.size >= (field.validation?.min as number), `Tamaño mínimo ${field.validation.min} bytes`);
        if (field.validation?.max) fieldSchema = fieldSchema.refine(file => file.size <= (field.validation?.max as number), `Tamaño máximo ${field.validation.max} bytes`);
        if (field.validation?.mimeType) fieldSchema = fieldSchema.refine(file => field.validation?.mimeType?.includes(file.type), 'Tipo de archivo no permitido');
        break;

      default:
        fieldSchema = z.string(); // Default al tipo string
    }

    schemaShape[field.name] = fieldSchema;
  });

  return z.object(schemaShape);
};

export default createValidationSchema;