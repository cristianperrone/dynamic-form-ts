import { Controller, Control, FieldValues, FormState } from 'react-hook-form';

import { InputFieldSchema, InputType } from '../DynamicForm.d';
import { InputText, InputNumber } from './index';

const InputResolver = ({ fieldSchema, control, formState }: { fieldSchema: InputFieldSchema, control: Control, formState: FormState<FieldValues> }) => {
  const { errors } = formState;

  // {
  //   return (
  //     <div key={index} className="form-field" style={{
  //       gridArea: field.name,
  //     }}>
  //       <label>{field.label}</label>
  //       <input type={field.type} name={field.name} />
  //       {/* {errors[field.name] && <p>{errors[field.name].message}</p>} */}
  //     </div>
  //   );
  // }
  
  return (
    <div style={{gridArea: fieldSchema.name}}>
      <Controller
        name={fieldSchema.name}
        control={control}
        render={({ field }) => {
          console.log('field:', field);
          switch (fieldSchema.type) {
            case InputType.decimal:
              return <InputNumber label={fieldSchema.label} field={field} errors={errors} />
            case InputType.integer:
              return <InputNumber label={fieldSchema.label} field={field} errors={errors} />
            case InputType.string:
              return <InputText label={fieldSchema.label} field={field} errors={errors} />
            default:
              return <InputText label={fieldSchema.label} field={field} errors={errors} />
          }
        }}
      />
    </div>
  );
};

export default InputResolver;