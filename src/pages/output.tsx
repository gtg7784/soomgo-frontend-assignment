import React from 'react';

import { useAppSelector } from '../hooks/store';

const OutputPage = () => {
  const output = useAppSelector((state) => state.outputs.value);

  return (
    <div className="flex flex-col h-full w-full p-8">
      <h1 className="text-4xl font-extrabold">Output</h1>
      <pre className="mt-6">{JSON.stringify(output, null, 4)}</pre>
    </div>
  );
};

export default OutputPage;
