import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import Layout from './components/Layout/Layout';
import StoreDetailPage from './pages/StoreDetailPage/StoreDetailPage';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element = {<Layout/>}>
          <Route path='/' element = {<HomePage/>}/>
          <Route path='/store/:storeId' element = {<StoreDetailPage/>}/>
          
            <Route path='/profile' element = {
              <PrivateRoute>
                <ProfilePage/>
              </PrivateRoute>
            }/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
