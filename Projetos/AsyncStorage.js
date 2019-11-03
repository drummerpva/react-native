import React, { Component } from "react";
import { View, StyleSheet, AsyncStorage, TextInput } from "react-native";

export default class CriadorMeme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: ""
    };
    AsyncStorage.getItem("nome").then((value)=>{
      this.setState({nome:value});
    });
    this.setNome = this.setNome.bind(this);
  }
  setNome(t){
    let s = this.state;
    s.nome = t;
    this.setState(s);

    AsyncStorage.setItem("nome",t);

  }
  render() {
    return (
      <View style={styles.body}>
        <TextInput style={styles.input} value={this.state.nome} onChangeText={(t) => this.setNome(t)} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input:{
    height:40,
    width:200,
    borderWidth:1,
    borderColor:"#ccc",
    padding:10,
    fontSize:16
  }
});
