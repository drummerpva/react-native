import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";


export default class CriadorMeme extends Component {
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.header}></View>
        <ScrollView >
            <View style={styles.quadrado1}></View>
            <View style={styles.quadrado2}></View>
            <View style={styles.quadrado1}></View>
            <View style={styles.quadrado2}></View>
            <View style={styles.quadrado1}></View>
            <View style={styles.quadrado2}></View>
            <View style={styles.quadrado1}></View>
            <View style={styles.quadrado2}></View>
        </ScrollView>
        <View style={styles.header}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex:1
  },
  quadrado1:{
    backgroundColor:'#F35',
    height:200
  },
  quadrado2:{
    backgroundColor:'#3F5',
    height:300
  },
  header:{
    backgroundColor:'#35F',
    height:100
  }
});
