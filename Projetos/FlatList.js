import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text} from "react-native";


export default class CriadorMeme extends Component {
  constructor(props){
    super(props);
    this.state = {
      flatData:[
        {key:'1', nome:"Douglas",  idade:99, type:"foto"},
        {key:'2', nome:"Elaine",   idade:99, type:"video"},
        {key:'3', nome:"Osvaldo",  idade:20, type:"text"},
        {key:'4', nome:"Marisa",   idade:99, type:"foto"},
      ]
    };
  }
  flatRender(item){
    return (
      <View style={styles.flatItem}>
        <Text style={styles.flatItemNome}>{item.type} - {item.nome}</Text>
        <Text style={styles.flatItemIdade}>{item.idade}</Text>
      </View>
      
    );
  }
  render() {
    return (
      <View style={styles.body}>
        <FlatList data={this.state.flatData} renderItem={({item}) => this.flatRender(item)}/>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex:1
  },
  flatItemNome:{
    fontSize: 26,
  },
  flatItem:{
    padding:10,
    borderWidth:1,
    borderColor: "#000"
  },
  flatItemIdade:{
    fontSize: 14,
  },
  flatList:{
  }
});
