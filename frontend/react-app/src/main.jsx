import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './views/Home.jsx';
import App from './App.jsx'
import './index.css'
import Login from './views/Login.jsx';
import AdminDashborard from './views/AdminDashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/login",
    element: <Login/>,
  },
  {
    path:"/admin",
    element: <AdminDashborard/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
