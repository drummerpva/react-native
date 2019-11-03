import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import firebase from './src/FirebaseConnection';


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      avatar:null
    };
    firebase.storage().ref().child('images/imagem2.jpg').getDownloadURL().then((url)=>{
      let state = this.state;
      state.avatar = {uri:url};
      this.setState(state);
    }).catch((error)=>{
      alert(error.code);
    });
    this.remover = this.remover.bind(this);
  }
  
remover(){
  firebase.storage().ref().child('images/imagem.jpg').delete().then(()=>{
    this.setState({avatar:null});
    alert("Imagem removida com Sucesso");
  }).catch((error)=>{
    alert(error.code);
  });
}

  render(){
    return (
      <View style={styles.container} >
        <Image 
          source={this.state.avatar}
          style={styles.avatar}
        />
        <Button 
          title="Remover Avatar"
          onPress={this.remover}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  avatar:{
    width:100,
    height:100
  }
});