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
    this.sair = this.sair.bind(this);
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
    //logout
    //firebase.auth().signOut();

    //fica verificando alterações no login
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        alert("Fez login com sucesso!");
      }
    });
    
  }

  logar(){
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.senha)
    .catch((error)=>{
      alert(error.code+" - "+error.message);
      if(error.code == "auth/wrong-password"){
        alert("Senha errada");
      }else{
        alert("Tente novamente mais tarde");
      }


    });
  }
  sair(){
    firebase.auth().signOut();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>E-mail:</Text>
        <TextInput onChangeText={(email) => this.setState({email})} style={styles.input} />
        <Text>Senha:</Text>
        <TextInput secureTextEntry={true} onChangeText={(senha) => this.setState({senha})} style={styles.input} />
        <Button title="Logar" onPress={this.logar} />
        <Button title="Sair" onPress={this.sair} />
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
    borderColor:'#000',
    margin:10
  }
});
