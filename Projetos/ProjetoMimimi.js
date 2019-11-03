import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, Image} from "react-native";

export default class CriadorMeme extends Component {
  constructor(props){
    super(props);
    this.state = {texto1:"text1", texto2:"text2"}
    this.escrever = this.escrever.bind(this);
  }
  mudarVogais(text = ""){
    let nT = text.toLowerCase();
    nT = nT.replace(/(a|e|i|o|u)/g,'i');
    nT = nT.replace(/(á|à|ã|â)/g,"i")
    nT = nT.replace(/(é|è|ê)/g,"i")
    nT = nT.replace(/(í|ì|î)/g,"i")
    nT = nT.replace(/(ó|ò|õ|ô)/g,"i")
    nT = nT.replace(/(ú|ù|û)/g,"i")
    return nT;
  }
  escrever(t){
    let s = this.state;
    s.texto1 = t;
    s.texto2 = this.mudarVogais(t);
    this.setState(s);
  }
  render() {
    return (
      <View style={styles.body}>
        <View>
          <Text style={styles.titulo}>Criador de Mimimi</Text>
        </View>
        <View style={styles.inputArea}>
          <TextInput style={styles.input} placeholder="Digite seu mimimi" onChangeText={this.escrever}/>
        </View>
        <View style={styles.area}>
          <Text style={[styles.texto, styles.texto1]}>{this.state.texto1.toUpperCase()}</Text>
          <Image source={require('./images/mimimi.jpg')} style={styles.guri}/>
          <Text style={[styles.texto, styles.texto2]}>{this.state.texto2.toUpperCase()}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body:{
    backgroundColor: '#999',
    flex:1,
    flexDirection:"column",
    alignItems:'center'
  },
  titulo:{
    fontSize:30,
    color: '#FFF',
    fontWeight:'bold'
  },
  inputArea:{
    alignSelf:'stretch'
  },
  input:{
    color: '#000',
    borderWidth:1,
    borderColor:'#CCC',
    backgroundColor:'#EEE',
    height:40,
    margin:20,
    padding:10
  },
  area:{
    marginTop:10,
    width:300,
    height:300
  },
  guri:{
    width:300,
    height:300,
    marginTop:-70,
    
  },
  texto:{
    fontSize: 25,
    color: '#FFF',
    padding:10,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textAlign:'center',
    height:70
  },
  texto1:{
    zIndex:1
  },
  texto2:{
    zIndex:1,
    marginTop:-70
  }
});
