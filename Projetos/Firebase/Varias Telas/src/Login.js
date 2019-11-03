import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import firebase from './FirebaseConnection';

export default class Login extends Component {

  static navigationOptions = {
    title:'Login',
    header:null
  }

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      senha:''
    };
    this.logar = this.logar.bind(this);

    firebase.auth().signOut();
  }

  logar(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.props.navigation.navigate('Home');
        /*
        firebase.database().ref('usuarios').child(user.uid).once('value').then((snapshot) =>{
          this.props.navigation.navigate('Home',{
            nome:snapshot.val().nome
          });
        });
        */

        
      }
    });
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
