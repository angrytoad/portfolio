import api_config from '../../../../../../config/api.config';

export const setGitHubUser = (user) => ({ type:'SET_GITHUB_USER', user });

export const fetchGitHubUser = () => {
  return dispatch => {
    fetch(api_config.GitHub + '/users/'+api_config.GitHubUser, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        let json = res.json();
        if (res.status >= 200 && res.status < 300) {
          return {body: json, token: res.headers.get('Authorization')};
        } else {
          return json.then(Promise.reject.bind(Promise));
        }
      })
      .then(({body, token}) => {

        body.then(json => {
          dispatch(setGitHubUser(json));
        });

      })
      .catch(err => {
        console.log('fetchGithubUser failed with the following error:');
        console.log(err.message)
      });
  }
};