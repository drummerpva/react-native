import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import firebase from './FirebaseConnection';

export default class Home extends Component {
    static navigationOptions = {
        title:'Home',
        header:null
      }
    
  constructor(props) {
    super(props);
    this.state = {
        nome:''
        //nome:props.navigation.state.params.nome
    };
    if(firebase.auth().currentUser){
        firebase.database().ref('usuarios').child(firebase.auth().currentUser.uid).once('value').then((snapshot) => {
            let state = this.state;
            state.nome = snapshot.val().nome;
            this.setState(state);
        });
    }
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
