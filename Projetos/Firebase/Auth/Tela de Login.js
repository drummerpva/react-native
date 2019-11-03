import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import firebase from "firebase";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      senha:''
    };
    this.logar = this.logar.bind(this);
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
    firebase.auth().signOut();
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        firebase.database().ref('usuarios').child(user.uid).once('value')
        .then((snapshot)=>{
          let nome = snapshot.val().nome;
          alert("Bem vindo(a), "+nome);
        });
      }
    });
    
  }

  logar(){
    firebase.auth().signInWithEmailAndPassword(
      this.state.email, 
      this.state.senha
      ).catch((errpr)=>{
        alert(error.code);
      });

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Tela de Login</Text>
        <Text>E-mail:</Text>
        <TextInput onChangeText={(email) => this.setState({email})} style={styles.input} />
        <Text>Senha:</Text>
        <TextInput secureTextEntry={true} onChangeText={(senha) => this.setState({senha})} style={styles.input} />
        <Button title="Logar" onPress={this.logar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:20
  },
  h1:{
    fontSize:28,
    textAlign:'center',
    margin:20
  },
  input:{
    height:40,
    borderWidth:1,
    borderColor:'#000',
    margin:10
  }
});
