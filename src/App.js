import React from "react";
import "./style.css"
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>



        <div style={{
  border:'solid 1px black' ,
   maxWidth:'100vw'
   }}>

<h1 className={{title , red}}>My title</h1>

<br/>

<img src="/twice.jpg" />

<br/>

<img src='/exo.webp' />


    </div>
  );
}
      </header>
    </div>
  );
}





