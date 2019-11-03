import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class ConversaChat extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title:navigation.state.params.nome,
      tabBarLabel: "Conversa",
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
      <View style={styles.container}>
        <Text>Tela de Chat</Text>
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