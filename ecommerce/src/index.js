import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import AddProducts from './Components/Products/AddProducts';
import NotFound from './Components/NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('config', process.env.REACT_APP_API_BASE_URL)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='/add-product' element={<AddProducts />} ></Route>
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
