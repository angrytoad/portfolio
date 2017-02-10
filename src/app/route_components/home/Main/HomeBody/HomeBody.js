import React from 'react';

import HomeBodyGitHubBio from './HomeBodyGitHubBio';
import HomeBodyStrapLine from './HomeBodyStrapLine';

import './HomeBody.scss';

const HomeBody = React.createClass({
  
  render() {
    return (
      <div id="HomeBody" className="container">
        <HomeBodyGitHubBio />
        <HomeBodyStrapLine />
      </div>
    )
  }
  
});

export default HomeBody;