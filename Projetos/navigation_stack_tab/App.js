import React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import TelaInicial from "./src/TelaInicial";
import Conversa from "./src/Conversa";
import Config from "./src/Config";

const Navegador = createBottomTabNavigator({
  Home: {
    screen: TelaInicial
    //,navigationOptions:{title:'Texto Aqui'}
  },
  Conversa: {
    screen: Conversa,
    navigationOptions: {
      title: "Conversas",
      tabBarLabel: "Conversas",
      tabBarOptions: {
        showIcon: true
      },
      tabBarIcon: ({ tintColor, focused }) => {
        if (focused) {
          return (
            <Image
              source={require("./assets/images/chat_on.png")}
              style={{ width: 26, height: 26 }}
            />
          );
        } else {
          return (
            <Image
              source={require("./assets/images/chat_off.png")}
              style={{ width: 26, height: 26 }}
            />
          );
        }
      }
    }
  },
  Config: {
    screen: Config
  }
});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;
