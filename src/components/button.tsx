import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends React.ComponentProps<'button'> {}

const Button = ({ className, ...props }: Props) => {
  return (
    <button
      className={twMerge(
        'inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300',
        className,
      )}
      {...props}
    />
  );
};

export default Button;
