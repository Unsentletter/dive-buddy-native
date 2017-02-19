import { createStore } from 'redux';
import reducer from '../reducer';

const INIT_STATE = {
  randomState: '',
};

exports.configureStore = (initialState = INIT_STATE) => {
  const store = createStore(reducer, initialState);
  return store;
};
