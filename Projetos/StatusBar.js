import React, { Component } from "react";
import { View, StyleSheet, Button, StatusBar} from "react-native";

export default class CriadorMeme extends Component {
  constructor(props){
    super(props);
    this.state = {
      statusStyle:"dark-content",
      bgColor:"#FFF"
    };
    this.alternar = this.alternar.bind(this);
  }
  alternar(){
    let s = this.state;
    if(s.statusStyle == 'dark-content'){
      s.statusStyle = 'light-content';
      s.bgColor = "#111";
    }else{
      s.statusStyle = 'dark-content';
      s.bgColor = "#FFF";
    }
    this.setState(s);
  }
  render() {
    return (
      <View style={[styles.body, {backgroundColor: this.state.bgColor}]}>
      <StatusBar barStyle={this.state.statusStyle} backgroundColor={this.state.bgColor}/>
        <Button title="Alternar" onPress={this.alternar}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});
