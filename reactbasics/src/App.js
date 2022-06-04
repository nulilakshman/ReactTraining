import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React !!! Content changed !!!

        </p>
        <button data-testid="btnIncrement" onClick={() => setCounter(counter + 1)}  >Add Counter</button>

        Counter is :  <p data-testid='countervalue'>{counter}</p>
      </header>
    </div>
  );
}

export default App;
