import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Patty';
  const greet = (name: string) => <p>Hello, {name || 'Guest'}!</p>;
  
  const n = Math.floor(Math.random() * 10); // 0 〜 9 の整数を生成
  const threshold = 5;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{greet(name)}</div>
        <p>
          Hello World
        </p>
        <div>
          {n > threshold && <p>`n` is larger than {threshold}</p>}
          <p>`n` is {n % 2 === 0 ? 'even' : 'odd'}</p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
