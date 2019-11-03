import React, { Component } from "react";
import {  Image, StyleSheet } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Home from "./src/Home";
import Contato from "./src/Contato";
import Horarios from "./src/Horarios";
import Sobre from "./src/Sobre";

const Navegador = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Restaurante XYZ",
        tabBarLabel: "Home",
        tabBarIcon: ({ focused, tintColor }) => {
          if (focused) {
            return (
              <Image
                source={require("./assets/images/home_azul.png")}
                style={styles.icone}
              />
            );
          } else {
            return (
              <Image
                source={require("./assets/images/home_preto.png")}
                style={styles.icone}
              />
            );
          }
        }
      }
    },
    Contato: {
      screen: Contato
    },
    Horarios: {
      screen: Horarios
    },
    Sobre: {
      screen: Sobre
    }
  },
  {
    tabBarOptions: {
      showIcon: true
    }
  }
);

const container = createAppContainer(Navegador);
export default container;


const styles = StyleSheet.create({
  icone:{
      width:26,
      height:26
  }
});