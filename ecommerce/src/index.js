import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import AddProducts from './Components/Products/AddProducts';
import ManageProducts from './Components/Products/ManageProducts';
import NotFound from './Components/NotFound';
import SignUp from './Components/SignUp/SignUp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='/add-product' element={<AddProducts />} ></Route>
          <Route path='/manage-products' element={<ManageProducts />} ></Route>
          <Route path='/SignUp' element={<SignUp />} ></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
