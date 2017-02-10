import React from 'react';
import {connect} from 'react-redux';

import './HomeHeader.scss';

import { fetchGitHubUser } from './actions';

const mapStateToProps = ({ GitHubUser }) =>
  ({
    GitHubUser
  });

const mapDispatchToProps = dispatch =>
  ({
    fetchGitHubUser: () => dispatch(fetchGitHubUser())
  });

const HomeHeader = React.createClass({
  
  componentDidMount() {
    this.props.fetchGitHubUser();
  },
  
  render() {
    return (
      <div id="HomeHeader">
    
        <div id="HeaderInformation" className="container">
          <div className="row row-center">
            {
              this.props.GitHubUser
              ?
                <div id="HeaderInformationIntro" className="column animated fadeIn">
                  <div id="HeaderInformationIntroAvatar">
                    <img src={this.props.GitHubUser.avatar_url} />
                  </div>
                  <div id="HeaderInformationIntroText">
                    <h2>Thanks for stopping by...</h2>
                    <h4>I'm <span className="emphasis">Tom Freeborough</span></h4>
                  </div>
                </div>
              :
                false
            }
          </div>
        </div>
  
      </div>
    )
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);