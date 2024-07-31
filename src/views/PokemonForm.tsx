import { DynamicForm } from '@/components/DynamicForm';
import formSchema from './pokemon-schema.json';

const PokemonForm = () => {

  return <DynamicForm title={formSchema.title} fields={formSchema.fields} grid={formSchema.grid}  />
};

export default PokemonForm;