import React from 'react';
import { FieldContext } from './FieldContext';
import { useUniqueId } from '../utils/useUniqueId';
import { Label } from './Label';
import { Input } from './Input';
import { TextArea } from './TextArea';

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
  TextArea: typeof TextArea;
}

interface FieldProps {
  children: React.ReactNode;
}

export const Field: React.FC<FieldProps> & FieldComposition = ({
  children,
}) => {
  const id = useUniqueId();
  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
Field.TextArea = TextArea;
