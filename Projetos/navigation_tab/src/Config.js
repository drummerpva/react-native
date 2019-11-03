import React, { Component } from "react";
import { View, Text, Image } from "react-native";

export default class Config extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: "Config",
      tabBarIcon: ({ tintColor, focused }) => {
        if (focused) {
          return (
            <Image
              source={require("../assets/images/chat_on.png")}
              style={{ width: 26, height: 26 }}
            />
          );
        } else {
          return (
            <Image
              source={require("../assets/images/chat_off.png")}
              style={{ width: 26, height: 26 }}
            />
          );
        }
      }
    };
  };
  render() {
    //const { navigation } = this.props;
    //const nome = navigation.getParam('nome', 'NO-NAME');
    return (
      <View>
        <Text>Tela de Configurações</Text>
      </View>
    );
  }
}
