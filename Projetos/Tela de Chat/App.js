import React, { Component } from "react";
import { View, StyleSheet, FlatList, ImageBackground} from "react-native";
import MsgItem from './src/MsgItem';

export default class Tela1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      chat:[
        {key:'1', nome:'Douglas', msg:'Oi', m:true},
        {key:'2', nome:'Nany', msg:'Oi', m:false},
        {key:'3', nome:'Douglas', msg:'Tudo pom?', m:true},
        {key:'4', nome:'Nany', msg:'Tudo e ai?', m:false},
        {key:'5', nome:'Douglas', msg:'tudo bem graças a Deus, conte-me mais sobre o assunto que queria falar sobre o senhor Osvaldionor ', m:true},
        {key:'6', nome:'Nany', msg:'Nada de mais, apenas que ele é um mala e que ta pedindo mais comida!', m:false},
        {key:'7', nome:'Douglas', msg:'Ah Bom', m:true},
        {key:'8', nome:'Douglas', msg:'Até + Bjus s2', m:true},
        {key:'9', nome:'Nany', msg:'Bjus s2', m:false},
      ]
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground source={require('./assets/images/bg.jpg')} style={styles.chat}>
        <FlatList 
          data={this.state.chat}
          renderItem={({item}) => <MsgItem data={item}/>}
        />
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center"
  },
  chat:{
    flex:1
  }
});