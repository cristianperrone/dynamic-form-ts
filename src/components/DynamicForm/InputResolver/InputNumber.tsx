import { TextField } from '@mui/material';
import { ControllerRenderProps, FieldValues, FieldErrors } from 'react-hook-form';

const InputNumber = ({ label, field, errors }: { label: string, field: ControllerRenderProps<FieldValues, string>, errors: FieldErrors<FieldValues> }) => {

  return (
    <TextField
      {...field}
      label={label}
      type="number"
      fullWidth
      variant="outlined"
      placeholder="Enter your age"
      error={!!errors[field.name]}
      helperText={errors[field.name]?.message as string | undefined || ''}
    />
  );
};

export default InputNumber;
