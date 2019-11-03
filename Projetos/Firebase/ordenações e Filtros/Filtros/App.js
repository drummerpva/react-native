import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import firebase from './src/FirebaseConnection';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      lista:[]
    };
    //equalTo(), limitToFirst(2), limitToLast
    //adicionar no Firebase em Regras 
firebase.database().ref('usuarios').orderByChild('idade').limitToLast(2)
.on('value',(snapshot) =>{
  let state = this.state;
  state.lista = [];
  snapshot.forEach((childItem) =>{
    state.lista.push({
      key:childItem.key,
      nome:childItem.val().nome,
      idade:childItem.val().idade,
    });
  });
  this.setState(state);
});

  }
  render(){
    return(
      <View style={[styles.area, {}]} >
        <FlatList 
          data={this.state.lista}
          renderItem={({item}) => {
            return(
              <Text>-> {item.key+' - '+item.nome+" - "+item.idade}</Text>
            );
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  area:{
    flex:1,
  }
});