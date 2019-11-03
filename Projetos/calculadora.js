import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

class Botao extends Component {
  constructor(props) {
    super(props);
    this.stare = {};
    let c = 1;
    if (props.c) {
      c = parseInt(props.c);
    }
    let bg = '#e0e0e0';
    if(props.bg){
      bg = props.bg;
    }
    this.styles = StyleSheet.create({
      area: {
        flex: c,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#999",
        backgroundColor: bg
      },
      text: {
        fontSize: 18
      }
    });
  }
  render() {
    return (
      <TouchableOpacity style={this.styles.area} onPress={this.props.clicou}>
        <Text style={this.styles.text} >{this.props.n}</Text>
      </TouchableOpacity>
    );
  }
}

export default class CriadorMeme extends Component {
  constructor(props){
    super(props);
      this.state = {r:'0'};
      this.btn = this.btn.bind(this);
  }
  btn(b){
    let s = this.state;
    if(b == "C"){
      s.r = '0';
    }else if(b == "="){
      s.r = eval(s.r);
    }else{
      if(s.r == '0'){
        s.r = b;
      }else{
        s.r += b;
      }
      
    }




    this.setState(s);
  }
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.linha}>
          <Text style={styles.res}>{this.state.r}</Text>
        </View>
        <View style={styles.linha}>
          <Botao c="3" n="C" bg="#CCCCCC" clicou={() =>this.btn("C")}/>
          <Botao  n="/" bg="#FD9526" clicou={() =>this.btn("/")}/>
        </View>
        <View style={styles.linha}>
          <Botao n="7" clicou={() =>this.btn("7")} />
          <Botao n="8" clicou={() =>this.btn("8")} />
          <Botao n="9" clicou={() =>this.btn("9")} />
          <Botao n="x" bg="#FD9526" clicou={() =>this.btn("*")} />
        </View>
        <View style={styles.linha}>
          <Botao n="4" clicou={() =>this.btn("4")} />
          <Botao n="5" clicou={() =>this.btn("5")} />
          <Botao n="6" clicou={() =>this.btn("6")} />
          <Botao n="-" bg="#FD9526" clicou={() =>this.btn("-")} />
        </View>
        <View style={styles.linha}>
          <Botao n="1"  clicou={() =>this.btn("1")}/>
          <Botao n="2"  clicou={() =>this.btn("2")}/>
          <Botao n="3"  clicou={() =>this.btn("3")}/>
          <Botao n="+" bg="#FD9526" clicou={() =>this.btn("+")} />
        </View>
        <View style={styles.linha}>
          <Botao c="2" n="0"  clicou={() =>this.btn("0")}/>
          <Botao n=","  clicou={() =>this.btn(".")}/>
          <Botao n="=" bg="#FD9526"  clicou={() =>this.btn("=")}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  linha:{
    flex:1,
    flexDirection:'row'
  },
  res:{
    backgroundColor:'#000',
    color:"#FFF",
    fontSize:50,
    flex:1,
    textAlign:'right'
  }
});
