import React, { Component } from "react";
import { View, StyleSheet, Modal, Text, Button} from "react-native";

export default class CriadorMeme extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisivel:false
    };
    this.abrirModal = this.abrirModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
  }
  abrirModal(){
    let s = this.state;
    s.modalVisivel = true;
    this.setState(s);
  }
  fecharModal(){
    let s = this.state;
    s.modalVisivel = false;
    this.setState(s);
  }
  render() {
    return (
      <View style={styles.body}>
        <Modal animationType="slide" visible={this.state.modalVisivel} onRequestClose={() => alert("Fechou!")}> 
          <View style={styles.modal}>
              <Button title="X" onPress={this.fecharModal}/>
              <Text>Testando Modal...</Text>
          </View>
        </Modal>
        <Button title="Abrir Modal" onPress={this.abrirModal} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#DDD"
  },
  modal:{
    flex:1,
    backgroundColor:'#5F3',
    paddingTop:25,
    alignItems:'flex-start'
  }
});
