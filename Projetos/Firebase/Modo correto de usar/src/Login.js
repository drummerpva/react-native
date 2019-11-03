import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import Sistema from './Sitema';

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
    Sistema.logout();
  }

  logar(){
    Sistema.addAuthListener((user) =>{
      if(user){
        Sistema.getUserInfo((info)=>{
          this.props.navigation.navigate('Home', {nome:info.val().nome});
        });
        
      }
    });
    Sistema.login(this.state.email, this.state.senha).catch((error) =>{
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
