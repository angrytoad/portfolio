import React from 'react';

/**
 * @author "Tom Freeborough"  <thomas@hotsnapper.com> (27 Jul 2016)
 *
 * This does not need changing, the idea is that all routes get rendered inside this dumb component and its for
 * them to handle changes and updates. 
 */
const App = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
};

export default App;