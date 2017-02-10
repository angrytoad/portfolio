import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = ({ GitHubUser }) =>
  ({
    GitHubUser
  });

const mapDispatchToProps = dispatch =>
  ({});

const HomeBodyGitHubBio = React.createClass({

  render() {
    return (
      <div id="HomeBodyGitHubBio" className="row row-center">
        {
          this.props.GitHubUser
            ?
            <div className="column animated fadeIn">
              <div className="row">
                <div className="column gitbox-wrapper">
                  <div className="gitbox">
                    <div className="absolute-center">
                      <div>
                        <p className="big">{this.props.GitHubUser.login}</p>
                        <p>GitHub Username</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column gitbox-wrapper">
                  <div className="gitbox">
                    <div className="absolute-center">
                      <div>
                        <p className="big">{this.props.GitHubUser.company}</p>
                        <p>Working at</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column gitbox-wrapper">
                  <div className="gitbox">
                    <div className="absolute-center">
                      <div>
                        <p className="big">{this.props.GitHubUser.public_repos}</p>
                        <p>Public Repo's</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column gitbox-wrapper">
                  <div className="gitbox">
                    <div className="absolute-center">
                      <div>
                        <p className="big">{this.props.GitHubUser.public_gists}</p>
                        <p>Public Gists</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            :
            false
        }

      </div>
    )
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeBodyGitHubBio);