import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createDrawerNavigator, createAppContainer, DrawerActions } from "react-navigation";


class Tela1 extends Component {
  static navigationOptions = {
    drawerLabel:"Tela1"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Tela 1</Text>
        <Button
          title="Menu"
          onPress={()=>this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </View>
    );
  }
}
class Tela2 extends Component {
  static navigationOptions = {
    drawerLabel:"Tela2"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Tela 2</Text>
        <Button title="Menu" onPress={()=>this.props.navigation.dispatch(DrawerActions.toggleDrawer())} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
const Navegador = createDrawerNavigator(
  {
    Tela1: {
      screen: Tela1
    },
    Tela2: {
      screen: Tela2
    }
  },{
    drawerPosition:"left", // left padrão
    drawerWidth:150,
    drawerBackgroundColor: '#F35', // possivel usar 'transparent' 
    contentOptions:{
      activeTintColor:'#FFF',//cor do item ativo
      inactiveTintColor:'#35F',
      activeBackgroundColor: '#000',
      //inactiveBackgroundColor: '#FFF', // não usado geralmente
      itemsContainerStyle:{
        //backgroundColor:'#999',
        //marginTop:100,
        //height: 20,
      },
      itemStyle:{
        marginTop:50,

      },
      labelStyle:{
        fontSize:25
      },
      iconContainerStyle:{
        //backgroundColor: '#000'
      }
    }
  });
const AppContainer = createAppContainer(Navegador);
export default AppContainer;
