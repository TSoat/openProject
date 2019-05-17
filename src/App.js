import React from 'react';
import logo from './img/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
			This site is used to practice myReact skill.
        </p>
		<p>
			Creator : Thanakorn Sumpaotong
		</p>
		<a
          className="App-link"
          href="https://web.facebook.com/kapoat"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
		<a
          className="App-link"
          href="https://github.com/TSoat/openProject"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to download this site repository
        </a>
      </header>
    </div>
  );
}

export default App;
