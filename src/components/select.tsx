import React from 'react';
import { twMerge } from 'tailwind-merge';

import { Option } from '../remotes/interface';

interface Props extends React.ComponentProps<'select'> {
  options: Option[];
  itemId: number;
}

const Select = ({ options, itemId, className, ...props }: Props) => {
  return (
    <select
      id={`item-${itemId}`}
      className={twMerge(
        `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`,
        `bg-[url('assets/icons/chevron-down.svg')] bg-[position:right_0.75rem_center] bg-[length:0.75rem_0.75rem] bg-no-repeat appearance-none`,
        className,
      )}
      name={`${itemId}`}
      {...props}
    >
      {options.map((option) => (
        <option key={`option-${option.id}`} value={option.id}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
