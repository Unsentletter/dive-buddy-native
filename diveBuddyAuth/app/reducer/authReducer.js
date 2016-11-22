var defaultState = {
  user_id: undefined,
  profile: "test"
}

module.exports = (state=defaultState, action) => {
  switch(action.type) {
    case 'AUTH_USER':
      return {
        user_id: action.user_id,
        profile: action.profile
      }

    case 'UNAUTH_USER':
      return {
        user_id: undefined
      }

    default:
      return state;
  }
}
