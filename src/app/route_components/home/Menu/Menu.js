import React from 'react';

import './Menu.scss';

const Menu = React.createClass({

  render() {
    return (
      <div id="Menu">
        <div id="MenuTitle" className="row row-center">
          <h2>PORTFOLIO</h2>
        </div>
        <ul>
          <li>GitHub</li>
          <li>Work</li>
          <li>Projects</li>
          <li>About Me</li>
        </ul>
      </div>
    )
  }

});

export default Menu;