import React from 'react';
import Helmet from 'react-helmet';

import './Home.scss';


import Menu from './Menu/Menu';
import Main from './Main/Main';

const Home = (props) => {
  return (
    <div id="home">
      <Helmet
        title="Tom Freeborough | Full Stack Developer"
        />
      <Menu />
      <Main />
    </div>
  )
};

export default Home;