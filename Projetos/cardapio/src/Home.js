import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeList from './HomeList';
import HomeProducts from './HomeProducts';


const Navegador = createStackNavigator({
    HomeList:{
        screen: HomeList
    },
    HomeProducts:{
        screen:HomeProducts
    }
});

const container = createAppContainer(Navegador);
export default container;