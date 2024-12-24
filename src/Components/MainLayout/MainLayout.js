import React from 'react';
import { useRoutes } from 'react-router-dom';
import Topbar from '../Topbar/Topbar';
import Dashboard from '../../Pages/Dashboard/Dash';
import Login from '../../Pages/Login/Login';

const MainLayout = () => {
  const routes = useRoutes([
{path: '/Dashboard', element: <Dashboard />},
{path: '/', element: <Login />},
  ]);

  return (
    <div>
      <Topbar />
      {routes}
    </div>
  );
};

export default MainLayout;