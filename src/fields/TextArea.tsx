import React, { useContext } from 'react';
import { FieldContext } from './FieldContext';
import { StyledTextArea } from './Input.styles';
import PropTypes from 'prop-types';

export interface TextareaProps extends React.ComponentPropsWithRef<'textarea'> {
  isResizable?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ isResizable, ...props }, ref) => {
    const id = useContext(FieldContext);
    return (
      <StyledTextArea ref={ref} id={id} isResizable={isResizable} {...props} />
    );
  }
);

TextArea.displayName = 'Field.TextArea';
TextArea.defaultProps = {
  isResizable: true,
};

TextArea.propTypes = {
  isResizable: PropTypes.bool,
};
