import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import Sistema from './Sitema';

export default class Home extends Component {
    static navigationOptions = {
        title:'Home',
        header:null
      }
    
  constructor(props) {
    super(props);
    this.state = {
        nome:props.navigation.state.params.nome
    };
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Olá, {this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:20
  }
});
