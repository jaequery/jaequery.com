import React, { useState, useEffect } from "react";
import logo from './illust.svg';
import './App.css';

import { Animated } from "react-animated-css";


function App() {

  const [quote, setQuote] = useState("Click here to start");

  setTimeout(function () {
    setQuote("Click here to start");
  }, 3000);

  return (
    <div className="App">
      <header className="App-header">

        <Animated animationIn="fadeInDownBig" isVisible={true}>
          <h3 className="me">hello, there <span aria-label="wave" role="img">👋</span></h3>
        </Animated>

        <Animated animationIn="slideInUp" isVisible={true}>
          <img className="App-logo" src={logo} alt="logo" />
          <p className="quote ">{quote}</p>
        </Animated>

        {/* <div className="links">
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
        </div> */}

      </header>
    </div>
  );
}

export default App;
