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
    this.cadastrar = this.cadastrar.bind(this);
  }
  cadastrar(){
    //autenticar firebase - criar usuario
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error)=>{
      //error.code ou error.message
      //alert(error.code+" - "+error.message);
      switch(error.code){
        case 'auth/weak-password':alert("Sua senha deve ter pelo menos 6 caracteres");break;
        case 'auth/email-already-in-use':alert("Email já cadastrado, faça o login!");break;
        default:alert("Ocorreu um erro");break;
      }


      /*
      if(error.code =='auth/weak-password'){
        alert("Sua senha deve ter pelo menos 6 caracteres");
      }else if(error.code =='auth/email-already-in-use'){
        alert("Email já cadastrado, faça o login!");
      }else{
        alert("Ocorreu um erro");
      }
      */
    });
    //alert("Usuário cadastrado com sucesso!");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>E-mail:</Text>
        <TextInput onChangeText={(email) => this.setState({email})} style={styles.input} />
        <Text>Senha:</Text>
        <TextInput secureTextEntry={true} onChangeText={(senha) => this.setState({senha})} style={styles.input} />
        <Button title="Cadastrar" onPress={this.cadastrar} />
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
