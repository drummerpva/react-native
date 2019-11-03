import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Conversa extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.nome
    };
  };
  render() {
    //const { navigation } = this.props;
    //const nome = navigation.getParam('nome', 'NO-NAME');
    return (
      <View>
        <Text>Tela de Conversa</Text>
      </View>
    );
  }
}
