import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = ({}) =>
  ({});

const mapDispatchToProps = dispatch =>
  ({});

const HomeBodyStrapLine = React.createClass({

  render() {
    return (
      <div id="HomeBodyStrapLine">
        <h4>I'm a <strong>Full Stack Developer</strong> based near Nottingham, UK</h4>
      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeBodyStrapLine);