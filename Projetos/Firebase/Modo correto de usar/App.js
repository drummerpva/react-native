import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Login from './src/Login';
import Home from './src/Home';

const navegador = createStackNavigator({
  Login:{
    screen:Login
  },
  Home:{
    screen:Home
  }
});

const AppContainer = createAppContainer(navegador);
export default AppContainer;