import React, { Component } from "react";
import { View, Text, Image, Button } from "react-native";
import {DrawerActions} from "react-navigation";

export default class Conversa extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      drawerLabel: "Conversa",
      drawerIcon: ({ tintColor, focused }) => {
        if (focused) {
          return (
            <Image
              source={require("../assets/images/chat_on.png")}
              style={{ width: 20, height: 20 }}
            />
          );
        } else {
          return (
            <Image
              source={require("../assets/images/chat_off.png")}
              style={{ width: 20, height: 20 }}
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
        <Text>Tela de Conversa</Text>
        <Button title="Abrir DrawerNavigator" onPress={()=>this.props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
      </View>
    );
  }
}
