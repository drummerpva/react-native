import React from 'react';
import {View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Lista from './src/Lista';
import Receita from './src/Receita';

const navegador = createStackNavigator({
  Lista:{
    screen:Lista
  },
  Receita:{
    screen:Receita
  }
});

const container = createAppContainer(navegador);
export default container;