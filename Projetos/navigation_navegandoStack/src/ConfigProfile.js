import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import {DrawerActions} from 'react-navigation';

export default class ConfigProfile extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        drawerLabel: "Config. do Perfil",
      drawerIcon: ({ tintColor, focused }) => {
        if (focused) {
          return (
            <Image
              source={require("../assets/images/config_on.png")}
              style={{ width: 26, height: 26 }}
            />
          );
        } else {
          return (
            <Image
              source={require("../assets/images/config_off.png")}
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
      <View style={styles.container}>
        <Text>Tela de Configurações do Profile</Text>
        <Button title="Abrir Menu" onPress={()=>this.props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  
  }
});