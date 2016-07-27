import React from 'react';
import './Home.css';

import logo from './logo.png';

const Home = (props) => {
  return (
    <div id="home">
      <h1>Application successfully running</h1>
      <div id="logo-wrap">
        <h1>Next generation applications brought to you by</h1>
        <img src={logo} id="logo" />
      </div>

    </div>
  )
};

export default Home;