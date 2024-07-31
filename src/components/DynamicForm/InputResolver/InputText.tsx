import { TextField } from '@mui/material';
import { ControllerRenderProps, FieldValues, FieldErrors } from 'react-hook-form';

const InputText = ({ label, field, errors }: { label: string, field: ControllerRenderProps<FieldValues, string>, errors: FieldErrors<FieldValues> }) => {
  console.log('field InputText:', field);
  return (
    <TextField
      {...field}
      label={label}
      type="text"
      fullWidth
      variant="outlined"
      placeholder="Enter your name"
      error={!!errors[field.name]}
      helperText={errors[field.name]?.message as string | undefined || ''}
    />
  );
};

export default InputText;