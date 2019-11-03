import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import firebase from './src/FirebaseConnection';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      lista:[]
    };
    //orderByValue, orderByKey, orderByChild, orderByValue
firebase.database().ref('usuarios/1/caracteristicas').orderByValue()
.on('value',(snapshot) =>{
  let state = this.state;
  state.lista = [];
  snapshot.forEach((childItem) =>{
    state.lista.push({
      key:childItem.key,
      valor:childItem.val()
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
              <Text>-> {item.key+' - '+item.valor}</Text>
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