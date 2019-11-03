import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import firebase from "firebase";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Carregando...",
      nomeInput:'',
      idadeInput:''
    };

    var config = {
      apiKey: "AIzaSyAsnhRngioHpbBxUlX0ZmYHPlDdS41xQUA",
      authDomain: "projeto-teste-29a27.firebaseapp.com",
      databaseURL: "https://projeto-teste-29a27.firebaseio.com",
      projectId: "projeto-teste-29a27",
      storageBucket: "projeto-teste-29a27.appspot.com",
      messagingSenderId: "1026685178387"
    };

    firebase.initializeApp(config);
    this.inserirUsuario = this.inserirUsuario.bind(this);
    /*
    //Alterando
    //set altera toda a chave
    //firebase.database().ref('usuarios').child('2').child('idade').set(77);
    let id = '-L_PyrspcoVczuwdvn2_';
    //firebase.database().ref('usuarios').child(id).child('nome').set('Elaine Regina');
    firebase.database().ref('usuarios').child(1).set({
      nome: 'Douglas Poma',
      idade:115
    });
    */
    //Excluindo
    //set altera toda a chave
    //firebase.database().ref('usuarios').child('2').child('idade').set(77);
    let id = '-L_PyrspcoVczuwdvn2_';
    //firebase.database().ref('usuarios').child(id).child('nome').set('Elaine Regina');
    firebase.database().ref('usuarios').child(id).remove();
    firebase.database().ref('contagem').remove();
    firebase.database().ref('usuarios/2').remove();


    /* Pegando dados
    firebase.database().ref("usuarios/1/nome").on('value',(snapshot)=>{
      let state = this.state;
      state.nome = snapshot.val();
      this.setState(state);
    });       //value - quando tiver qualquer tipo de alteração no BD
              //chield - quando tiver qualquer tipo de alteração no registro
    
    firebase
      .database()
      .ref("usuarios/1/nome")
      .once("value").then((snapshot) => {
        let state = this.state;
        state.nome = snapshot.val();
        this.setState(state);
      });
      */
  }
  inserirUsuario(){
    if(this.state.nomeInput.length > 0){
      let usuarios = firebase.database().ref("usuarios");
      let chave = usuarios.push().key;
      usuarios.child(chave).set({
        nome:this.state.nomeInput,
        idade:this.state.idadeInput
      });
      alert("Usuário inserido");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Nome do usuário: </Text>
        <TextInput style={styles.input} value={this.state.nomeInput} onChangeText={(nomeInput) => this.setState({nomeInput})} />
        <Text>Idade do usuário: </Text>
        <TextInput style={styles.input} value={this.state.idadeInput} onChangeText={(idadeInput) => this.setState({idadeInput})} />
        <Button title="Inserir usuário" onPress={this.inserirUsuario} />
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
