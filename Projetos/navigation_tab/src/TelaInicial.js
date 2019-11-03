import React, { Component } from "react";
import { View, Text, TextInput, Image } from "react-native";

export default class TelaInicial extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: "Inicial",
      tabBarIcon: ({ tintColor, focused }) => {
        if (focused) {
          return (
            <Image
              source={require("../assets/images/home_on.png")}
              style={{ width: 26, height: 26 }}
            />
          );
        } else {
          return (
            <Image
              source={require("../assets/images/home_off.png")}
              style={{ width: 26, height: 26 }}
            />
          );
        }
      }
    };
  };
  constructor(props) {
    super(props);
    this.state = { nome: "" };

    this.conversar = this.conversar.bind(this);
  }
  conversar() {
    this.props.navigation.navigate("Conversa", {
      nome: this.state.nome
    });
  }

  render() {
    return (
      <View>
        <Text>Teste Navegação</Text>
        <TextInput
          style={{
            height: 40,
            borderWidth: 1,
            borderColor: "#000",
            width: 200
          }}
          placeholder="Qual seu nome"
          onChangeText={nome => this.setState({ nome })}
        />
      </View>
    );
  }
}
