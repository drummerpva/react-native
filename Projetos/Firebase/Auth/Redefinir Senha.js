import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Button, FlatList } from "react-native";
import firebase from "firebase";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      senhaVelha:'',
      senhaNova:'',
    };
    this.redefinir = this.redefinir.bind(this);
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
        user.updatePassword(this.state.senhaNova);
        alert('Senha alterada com sucesso');
        //user.updateEmail('...');
      }

    });

    
  }

  redefinir(){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senhaVelha).catch((error)=>{
      alert(error.code)
    });


  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Redefinir Senha</Text>
        <Text>E-mail:</Text>
        <TextInput onChangeText={(email) => this.setState({email})} style={styles.input} />
        <Text>Antiga Senha:</Text>
        <TextInput secureTextEntry={true} onChangeText={(senhaVelha) => this.setState({senhaVelha})} style={styles.input} />
        <Text>Nova Senha:</Text>
        <TextInput secureTextEntry={true} onChangeText={(senhaNova) => this.setState({senhaNova})} style={styles.input} />
        <Button title="Redefinir Senha" onPress={this.redefinir} />

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
  },
  addArea:{
    borderWidth:1,
    borderColor:'#000',
    padding:5
  }
});
