import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import Layout from './components/Layout/Layout';
import StoreDetailPage from './pages/StoreDetailPage/StoreDetailPage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element = {<Layout/>}>
          <Route path='/' element = {<HomePage/>}/>
          <Route path='/store/:storeId' element = {<StoreDetailPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
