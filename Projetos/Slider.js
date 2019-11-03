import React, { Component } from "react";
import { View, StyleSheet, Slider, Text} from "react-native";

export default class CriadorMeme extends Component {
  constructor(props){
    super(props);
    this.state = {
      v:50
    };
  }
  render() {
    return (
      <View style={styles.body}>
        <Slider minimumTrackTintColor="#F35" maximumTrackTintColor="#CCC" thumbTintColor="#35F" value={this.state.v} onValueChange={(v) => this.setState({v:v})} minimumValue={0} maximumValue={100} />
        <Text>{this.state.v.toFixed(1)}%</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor:"#DDD"
  }
});
