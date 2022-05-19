import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div>
        <h1>React Learnings</h1>
      </div>
      <Link to='/home'>Home</Link> |
      <Link to='/about'>About Us</Link> |
      <Link to='/about/10'>About Us With value</Link> |
      <Link to='/about/username/testuser/uid/45'>About Us With name</Link> |
      <Link to='/users'>Users</Link> |
      <Link to='/contactus'>Contact Us</Link> |
      <Link to='/contactus-1'>Error</Link>

      <Outlet></Outlet>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
