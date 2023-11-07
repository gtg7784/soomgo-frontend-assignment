import React from 'react';

import { Option } from '../remotes/interface';

interface Props {
  option: Option;
  itemId: number;
}

const Checkbox = ({ option, itemId }: Props) => {
  return (
    <div className="flex items-center mb-4 last:mb-0">
      <input
        id={`item-${option.id}`}
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 disabled:bg-gray-100"
        name={`${itemId}`}
        value={option.id}
      />
      <label
        htmlFor={`item-${option.id}`}
        className="ml-2 text-sm font-medium text-gray-900 disabled:text-gray-400"
      >
        {option.text}
      </label>
    </div>
  );
};

export default Checkbox;
