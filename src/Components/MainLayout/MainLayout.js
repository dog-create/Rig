import React from 'react';
import { useRoutes } from 'react-router-dom';
import Topbar from '../Topbar/Topbar';
import Dashboard from '../../Pages/Dashboard/Dash';
import Login from '../../Pages/Login/Login';

import Signup from '../../Pages/Signup/Signup';

const MainLayout = () => {
  const routes = useRoutes([
{path: '/Dashboard', element: <Dashboard />},
{path: '/', element: <Login />},
{path: '/Signup', element: <Signup />},
  ]);

  return (
    <div>
      <Topbar />
      {routes}
    </div>
  );
};

export default MainLayout;