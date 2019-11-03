import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Button } from "react-native";

export default class CriadorMeme extends Component {
  constructor(p){
    super(p);
    this.state = {meta:2000,consumido:0, status:'Ruin', pct:'0%'};
    this.addCopo = this.addCopo.bind(this);
    this.atualizar = this.atualizar.bind(this);
  }
  atualizar(){
    let s = this.state;
    let pct = Math.floor((s.consumido/s.meta)*100);
    if(pct >= 50){
      s.status = "Bom";
    }else{
      s.status = "Ruin";
    }
    s.pct = pct+'%';
    this.setState(s);
  }
  addCopo(){
    let s = this.state;
    s.consumido += 200;
    this.setState(s);
    this.atualizar();
  }
  render() {
    return (
      <View style={styles.body}>
        <ImageBackground
          source={require("./images/waterbg.png")}
          style={styles.bgImage}
        >
          <View>
            <View style={styles.infoArea}>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Meta</Text>
                <Text style={styles.areaDado}>{this.state.meta}ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Consumido</Text>
                <Text style={styles.areaDado}>{this.state.consumido}ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Status</Text>
                <Text style={styles.areaDado}>{this.state.status}</Text>
              </View>
            </View>
            <View style={styles.pctArea}>
              <Text style={styles.pctText}>{this.state.pct}</Text>
            </View>
            <View style={styles.btnArea}>
              <Button style={styles.btn} title="Beber 200ml" onPress={this.addCopo}></Button>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  bgImage: {
    flex: 1,
    width: null
  },
  infoArea: {
    flex: 1,
    flexDirection: "row",
    marginTop: 70
  },
  area: {
    flex: 1,
    alignItems: "center"
  },
  areaTitulo: {
    color: "#45b2fc"
  },
  areaDado: {
    color: "#2b4274",
    fontSize: 15,
    fontWeight: "bold"
  },
  pctArea: {
    marginTop: 180,
    alignItems:'center'
  },
  pctText: {
    fontSize: 80,
    color: "#FFF",
    backgroundColor:'transparent'
  },
  btnArea:{
    marginTop:30,
    alignItems:'center'
  }
});
