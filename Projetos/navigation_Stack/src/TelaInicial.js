import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

export default class TelaInicial extends Component {
  static navigationOptions = {
    title: "Chat"
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
        <Button title="Conversar" onPress={this.conversar} />
      </View>
    );
  }
}