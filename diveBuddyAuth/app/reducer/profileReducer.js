var defaultState = {
  username: undefined,
  numberOfDives: undefined,
  diverDescription: undefined
}

module.exports = (state=defaultState, action) => {
  switch(action.type) {
    case 'CREATE_PROFILE':
      return {
        username: action.username,
        numberOfDives: action.numberOfDives,
        diverDescription: action.diverDescription
      }

    default:
      return state;
  }
}
