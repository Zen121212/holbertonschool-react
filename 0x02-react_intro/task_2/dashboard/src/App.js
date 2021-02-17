import React from 'react';
import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </header>
      <body className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <label htmlFor="email">
          Enter your email:
          <input type="email" id="email" name="email" />
        </label>

        <label htmlFor="password">
          Enter your password:
          <input type="password" id="password" name="password" />
        </label>

        <button type="submit">OK</button>

      </body>
      <footer className="App-footer">
        <p>
          {`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}
        </p>
      </footer>
    </div>
  );
}

export default App;
