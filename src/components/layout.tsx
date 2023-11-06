import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="bg-white h-screen w-screen relative">
      <Outlet />
    </div>
  );
};

export default Layout;
