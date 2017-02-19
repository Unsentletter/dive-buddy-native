var defaultState = {
  profile: {}
}
 
module.exports = (state=defaultState, action) => {
  switch(action.type) {
    case 'CREATE_PROFILE':
      return {
        ...state,
        profile: action.profile
      };

    case 'SET_PROFILE':
      return {
        ...state,
        profile: action.profile
      }

    default:
      return state;
  }
}
