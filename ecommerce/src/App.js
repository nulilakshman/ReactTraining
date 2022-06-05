import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {
  return (
    <div id="layout-wrapper">
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;
