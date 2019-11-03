import React, { Component } from "react";
import { View, StyleSheet, FlatList} from "react-native";
import ListItem from "./src/ListItem";


export default class Tela1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:[
        {key:'1',img:'http://www.b7web.com.br/avatar1.png', nome:'Douglas Poma', msg:'Quando sai novas aulas?Quando sai novas aulas?Quando sai novas aulas?Quando sai novas aulas?Quando sai novas aulas?Quando sai novas aulas?'},
        {key:'2',img:'http://www.b7web.com.br/avatar2.png', nome:'Mãe', msg:'Quando sai novas aulasss?'},
        {key:'3',img:'http://www.b7web.com.br/avatar3.png', nome:'Elaine', msg:'Olá'},
        {key:'4',img:'http://www.b7web.com.br/avatar2.png', nome:'Osvaldo', msg:'Quando sai novas aulas em?'},
        {key:'5',img:'http://www.b7web.com.br/avatar3.png', nome:'Amor', msg:'Tudu pom?'},
        {key:'6',img:'http://www.b7web.com.br/avatar1.png', nome:'DSP', msg:'Quando sai novas aulas please?'},
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.list}
          renderItem={({item})=><ListItem data={item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: "center",
    //alignItems: "center"
  }
});