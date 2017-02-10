import React from 'react';

import HomeHeader from './HomeHeader/HomeHeader';
import HomeBody from './HomeBody/HomeBody';
import HomeFooter from './HomeFooter/HomeFooter'

const Main = React.createClass({
  
  render() {
    return (
      <div id="Main">
        <HomeHeader />
        <HomeBody />
        <HomeFooter />
      </div>
    )
  }
  
});

export default Main;