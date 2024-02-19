import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import reportWebVitals from './reportWebVitals';
import RootLayout from './routes/RootLayout';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home,{loader as homeloader} from './Pages/Home/Home'
import Movie,{loader as  singlemovieloader} from './Pages/Movie/Movie';
import MoviesPage from './Pages/Moviespage/MoviesPage';
import Selectshowpage,{loader as selectshowloader} from './Pages/Selectshows/Selectshowpage';
import Selectseat,{loader as selectseatloader} from './Pages/selectseat/Selectseat';
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement:<ErrorPage/>,
    children :[
      {
        path:'/',
        element:<Home/>,
        loader:homeloader

      },{
      path :'/movies',
      element:<MoviesPage/>
      },
      {
        path:"/movie/:movieId",
        element:<Movie/>,
        loader:singlemovieloader
      },
      {
        path :'/select-show/:movieId',
        element :<Selectshowpage/>,
        loader : selectshowloader
      },
      {
        path :'/select-seat/:showId',
        element:<Selectseat/>,
        loader : selectseatloader
      }
    ]
  },
  
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
