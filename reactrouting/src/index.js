import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Users from './components/Users/Users';
import ErrorPage from './ErrorPage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserInformation from './components/Users/UserInformation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='/home' element={<Home />} ></Route>
          <Route path='/users' element={<Users />} ></Route>
          <Route path='/userinfo' element={<UserInformation />} >
            <Route path='uname/:name/uid/:id' element={<About />}></Route>
          </Route>
          <Route path='/about' element={<About />} >
            <Route path=':id' element={<About />} ></Route>
            <Route path='username/:name/uid/:id' element={<About />}></Route>
          </Route>
          <Route path='/contactus' element={<p>Contact Here</p>} ></Route>
          <Route path='*' element={<ErrorPage></ErrorPage>} ></Route>
        </Route>

      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
