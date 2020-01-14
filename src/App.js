import React from 'react';
import logo from './illust.svg';
import './App.css';

import { Animate } from "react-simple-animate";

function App() {

  const showMenu = () => {
    alert("you clickedp");
  };

  let quote = "hope you like what you see here"

  setTimeout( () => {
    quote = "Click here to start"
  })


  return (
    <div className="App">
      <header className="App-header">
        <Animate 
          play 
          start={{ opacity: 0 }}
          end={{ opacity: 0.3 }}
          duration={22}
          render={({ style }) => (
            <h3 className="me">hello, there 👋</h3>
          )} 
        />
                
        <p className="quote ">{quote}</p>

        <div className="links">
          <a
            className="App-link"
            href="https://github.com/jaequery"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
        </a>
          <a
            className="App-link"
            href="https://twitter.com/jaequery"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
        </a>
        </div>

      </header>
    </div>
  );
}

export default App;
