import React, {Component} from "react";
import {View, Text} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Home from "./src/Home";
//import Tela1 from "./src/Tela1";
import Tela2 from "./src/Tela2";

const Navegador = createBottomTabNavigator({
  Tela1:{
    screen:Home
    //,TabBarIcon:...
  },
  Tela2:{
    screen:Tela2
  }
},{
    //unmountInactiveRoutes:true,
    defaultNavigationOptions:{
      //...
    }
  });

const AppContainer = createAppContainer(Navegador);
export default AppContainer;