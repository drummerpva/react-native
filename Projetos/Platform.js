import React, {Component} from "react";
import { View, Text, StyleSheet, Platform} from 'react-native';

export default class Modulos extends Component{

  constructor(props){
    super(props);
    this.state = {plataforma:Platform.OS}
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Meu sistema é {Platform.OS} versão {Platform.Version}</Text>
        <Text style={styles.texto}>Frase qualquer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  texto:Platform.select({
    ios:{
      fontSize: 16,
      color: '#0000FF'
    },
    android:{
      fontSize: 20,
      color: '#00FF00'
    }
  })
});