var defaultState = {
  diverUsername: undefined,
  numberOfDives: undefined,
  diverDescription: undefined
}

module.exports = (state=defaultState, action) => {
  switch(action.type) {
    case 'CREATE_PROFILE':
      return [
        ...state,
        action.newProfile
      ];

    default:
      return state;
  }
}
