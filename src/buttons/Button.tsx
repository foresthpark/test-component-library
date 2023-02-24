import React from 'react';
import { StyledButton } from './styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, isFullWidth, ...props }, ref) => {
    return (
      <StyledButton
        variant={variant}
        size={size}
        isFullWidth={isFullWidth}
        ref={ref}
        {...props}
        type="button"
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';
Button.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  isFullWidth: false,
};
