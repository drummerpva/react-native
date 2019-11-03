import React, { Component } from "react";
import { View, StyleSheet, SectionList, Text} from "react-native";

export default class CriadorMeme extends Component {
  constructor(props){
    super(props);
    this.state = {
      listData:[
        {title:"B", data:[
          {key:'1', nome:"Bonieky", idade:90}
        ]},
        {title:"D", data:[
          {key:'2', nome:"Douglas", idade:99},
          {key:'5', nome:"Diogo", idade:99},
          {key:'6', nome:"Dhionatan", idade:99}
        ]},
        {title:"E", data:[
          {key:'3', nome:"Elaine", idade:99}
        ]},
        {title:"O", data:[
          {key:'4', nome:"Osvaldo", idade:20},
          {key:'7', nome:"Osvlaudio", idade:20},
          {key:'8', nome:"Osvlaudio", idade:20},
          {key:'9', nome:"Osvlaudio", idade:20},
          {key:'10', nome:"Osvlaudio", idade:20},
          {key:'11', nome:"Osvlaudio", idade:20},
          {key:'12', nome:"Osvlaudio", idade:20},
          {key:'13', nome:"Osvlaudio", idade:20},
          {key:'14', nome:"Osvlaudio", idade:20},
          {key:'15', nome:"Osvlaudio", idade:20},
          {key:'16', nome:"Osvlaudio", idade:20}
        ]}
      ]
    };
  }
  listSectionRender(section){
    return (
      <Text style={styles.section}>Letra {section.title}</Text>
    );
  }
  listRender(item){
    return(
      <Text style={styles.item}>{item.nome} - {item.idade} anos</Text>
    );
  }
  render() {
    return (
      <View style={styles.body}>
        <SectionList sections={this.state.listData} renderItem={({item}) => this.listRender(item)} renderSectionHeader={({section})=>this.listSectionRender(section)} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex:1,
    height:200
  },
  item:{
    fontSize:18,
    height:40,
    padding:10
  },
  section:{
    fontSize:14,
    backgroundColor: '#CCC',
    padding:10
  }
});
