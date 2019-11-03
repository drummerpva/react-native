import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

export default class ConversaList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
       title:"Conversas",
      tabBarLabel: "Lista",
      tabBarIcon: ({ tintColor, focused }) => {
        if (focused) {
          return (
            <Image
              source={require("../assets/images/chat_on.png")}
              style={{ width: 26, height: 26 }}
            />
          );
        } else {
          return (
            <Image
              source={require("../assets/images/chat_off.png")}
              style={{ width: 26, height: 26 }}
            />
          );
        }
      }
    };
  };
  render() {
    //const { navigation } = this.props;
    //const nome = navigation.getParam('nome', 'NO-NAME');
    return (
      <View style={styles.container}>
        <Text>Tela de Conversa</Text>
        <Button title="Paulo" onPress={()=>this.props.navigation.navigate('ConversaChat',{nome:'Paulo'})}/>
        <Button title="João" onPress={()=>this.props.navigation.navigate('ConversaChat',{nome:'João'})}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  
  }
});