import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Main from './components/Main';
import FindDivers from './components/FindDivers';
import Profile from './components/Profile';

const RouterComponent = () => {
  return (
    <Router>
      <Scene
        key='main'
        component={Main}
        title='Welcome To DiveBuddy!!'
        initial
      />
      <Scene
        key='findDivers'
        component={FindDivers}
        title='Find Divers'
      />
      <Scene
        key='profile'
        component={Profile}
        title='User Profile'
      />
    </Router>
  );
};

export default RouterComponent;
