import React, { Component } from "react";
import { View, StyleSheet, Picker, Text} from "react-native";

export default class CriadorMeme extends Component {
  constructor(props){
    super(props);
    this.state = {
      servico:0,
      servicos:[
        {nome:"Alinhamento", valor:30},
        {nome:"Balanceamento", valor:20},
        {nome:"Rodizio de pneus", valor:50},
        {nome:"Voltinha", valor:10}
      ]  
    }
  }

  render() {
    let servicosItems = this.state.servicos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    });
    return (
      <View style={styles.body}>
        <Text style={styles.logo}>Auto Peças Dodo</Text>
        <Picker selectedValue={this.state.servico} mode="dropdown" onValueChange={(itemValue, itemIndex) => this.setState({servico:itemValue})}>
          {servicosItems}
        </Picker>
        <Text style={styles.texto}>R$ {this.state.servicos[this.state.servico].valor.toFixed(2)}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor:"#DDD"
  },
  logo:{
    fontSize:30,
    textAlign:'center',
    marginBottom:20
  },
  texto:{
    fontSize:26,
    textAlign:'center',
    marginTop:20
  }
});
