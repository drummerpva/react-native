import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import firebase from "firebase";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista:[]
    };
    //Firebase
    var config = {
      apiKey: "AIzaSyAsnhRngioHpbBxUlX0ZmYHPlDdS41xQUA",
      authDomain: "projeto-teste-29a27.firebaseapp.com",
      databaseURL: "https://projeto-teste-29a27.firebaseio.com",
      projectId: "projeto-teste-29a27",
      storageBucket: "projeto-teste-29a27.appspot.com",
      messagingSenderId: "1026685178387"
    };
    firebase.initializeApp(config);
    //on atualiza sempre, once pucha quando carrega
    firebase.database().ref('usuarios').once('value',(snapshot)=>{
      let state = this.state;
      state.lista = [];
      snapshot.forEach((childItem) => {
        state.lista.push({
          key:childItem.key,
          nome:childItem.val().nome,
          idade:childItem.val().idade
        });
      });

      this.setState(state);
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
        data={this.state.lista}
    renderItem={({item})=><Text>{item.nome}, {item.idade} anos (Chave: {item.key})</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20
  },
  input:{
    height:40,
    borderWidth:1,
    borderColor:'#F35'
  }
});
