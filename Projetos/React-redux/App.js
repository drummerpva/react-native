import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './src/Reducers';

import Home from './src/Home';
import Cadastro from './src/Cadastro';
import Login from './src/Login';

let store = createStore(Reducers);

let Navegador = createStackNavigator({
  Home:{
    screen:Home
  },
  Cadastro:{
    screen:Cadastro
  },
  Login:{
    screen:Login
  }
});

let Container = createAppContainer(Navegador);
//export default appCont;


export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

/*

*/