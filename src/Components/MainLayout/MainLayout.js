import React from 'react';
import { useRoutes } from 'react-router-dom';
import Topbar from '../Topbar/Topbar';
import Login from '../../Pages/Login/Login';
import Sidebar from '../Sidebar/Sidebar';
import './MainLayout.css';
import Overview from '../../Pages/Overview/Overview';
import Rigs from '../../Pages/Rigs/Main';

const MainLayout = () => {
  const routes = useRoutes([
{path:'/Login', element: <Login />},
{path:'/overview', element: <Overview />},
{path:'/Rigs', element: <Rigs />}
  ]);

  return (
    <div className="layout">
    <Topbar />
    <div className="content">
      <Sidebar />
      <div className="main-content">
        {routes}
      </div>
    </div>
  </div>
  );
};

export default MainLayout;