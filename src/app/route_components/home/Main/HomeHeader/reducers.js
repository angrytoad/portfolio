

export const GitHubUser = (state, action) => {
  switch ( action.type ) {
    case 'SET_GITHUB_USER':
      return action.user;
    default:
      return state || false;
  }
};