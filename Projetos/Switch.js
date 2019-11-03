import React, { Component } from "react";
import { View, StyleSheet, Switch, Text} from "react-native";

export default class CriadorMeme extends Component {
  constructor(props){
    super(props);
    this.state = {
      valor:false
    };
  }


  render() {
    return (
      <View style={styles.body}>
        <Switch  thumbColor="#35F" trackColor={{false:'#CCC',true:'#F35'}} value={this.state.valor} onValueChange={(v) =>this.setState({valor:v})} />
        <Text>{(this.state.valor) ? "Ativado":"Desativado"}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor:"#DDD"
  }
});
