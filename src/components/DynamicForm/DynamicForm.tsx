import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { DynamicFormProps } from './DynamicForm.d';
import { resolveGridTemplates, createValidationSchema } from './utils';
import { InputResolver } from './InputResolver';

const DynamicForm: React.FC<DynamicFormProps> = ({ title, fields, grid }: DynamicFormProps) => {
  const divStyle: React.CSSProperties = {
    ...resolveGridTemplates(grid),
  };
  const schema = createValidationSchema(fields);

  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema)
  });
  
  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <section className="dynamic-form">
      <h1 className="form-title">{title}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-fields" style={divStyle}>
          {fields.map((field, index) => <InputResolver key={index} fieldSchema={field} control={control} formState={formState} />)}
        </div>
        <div className="form-actions" style={{ textAlign: 'right', marginTop: '1rem' }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default DynamicForm;