import { CSSProperties } from 'react';
import { GridTemplateProps } from '../DynamicForm.d';

const resolveGridTemplates = ({ template, columns, rows }: GridTemplateProps): CSSProperties => {
  if (template) {
    return {
      display: 'grid',
      gap: '2rem',
      gridTemplate: template?.map((column) => `"${column.join(' ')}"`).join(' ') || 'initial',
      gridTemplateColumns: columns || 'initial',
      gridTemplateRows: rows || 'initial'
    };
  } else {
    return {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    };
  }
};

export default resolveGridTemplates;