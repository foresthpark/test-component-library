import React from 'react';

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ children, ...props }, ref) => {
  return (
    <button ref={ref} {...props} type="button">
      {children}
    </button>
  );
});

Button.displayName = 'Button';
