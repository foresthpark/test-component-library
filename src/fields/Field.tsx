import React from 'react';
import { FieldContext } from './FieldContext';
import { useUniqueId } from '../utils/useUniqueId';
import { Label } from './Label';
import { Input } from './Input';

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
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
