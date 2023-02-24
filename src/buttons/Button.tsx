import React from 'react';
import { StyledButton } from './styles';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isFullWidth: PropTypes.bool,
};

Button.displayName = 'Button';
Button.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  isFullWidth: false,
};
