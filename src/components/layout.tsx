import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="bg-white min-h-screen min-w-screen relative">
      <Outlet />
    </div>
  );
};

export default Layout;
