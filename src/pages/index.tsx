import React from 'react';
import { Link } from 'react-router-dom';

const IndexPage = () => {
  return (
    <div className="flex flex-col h-full w-full p-8">
      <h1 className="text-4xl font-extrabold">요청서</h1>
      <ul className="mt-6">
        <li>
          <Link to="/request-form?id=1" className="underline">
            대청소
          </Link>
        </li>
        <li>
          <Link to="/request-form?id=2" className="underline">
            영어 과외
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default IndexPage;
