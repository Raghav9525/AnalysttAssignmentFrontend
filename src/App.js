import './App.css';
import User from './Components/User';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { useState } from 'react';
import Userdetails from './Components/Userdetails';


function App() {
  const [data, setData] = useState();

  function getUserData(data) {
    setData(data);
  }

  const routes = [
    {
      path: '/',
      element: <Userdetails getUserData={getUserData} />,
    },
    {
      path: '/user/:id',
      element: <User users={data} />,
    },
  ];

  const DashboardRouter = createBrowserRouter(routes);


  return (
    <div className="App">
      <RouterProvider router={DashboardRouter}>
        <Route />
      </RouterProvider>
    </div>
  );
}

export default App;
