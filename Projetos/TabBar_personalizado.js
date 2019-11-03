import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";


class Tela1 extends Component {
  static navigationOptions = {
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Tela 1</Text>
        <Button
          title="Ir para Tela 2"
          onPress={() => this.props.navigation.navigate("Tela2")}
        />
      </View>
    );
  }
}
class Tela2 extends Component {
  static navigationOptions = {
    tabBarVisible:false//oculta a tabbar
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Tela 2</Text>
        <Button title="Voltar" onPress={() => this.props.navigation.goBack()} />
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
const Navegador = createMaterialTopTabNavigator(
  {
    Tela1: {
      screen: Tela1
    },
    Tela2: {
      screen: Tela2
    }
  },
  {
    animationEnabled: true, //Padrão invertidos entre IOS e android
    //initialRouteName:'Tela2', //Define qual é a padrão
    //order:['Tela2','Tela1'], //Define a sequencia das Telas
    tabBarOptions:{
      //showIcon: true, //Mostra ou oculta os ícones
      //showLabel: false, //Mostra ou oculta o texto do título, ficando só ícone
      activeTintColor:'#f35', //cor do item ativado
      inactiveTintColor: '#3F5', //cor do item não ativo
      //upperCaseLabel: true, //apenas android - deixa titulo maiusculo
      pressColor: '#f35', //cor da animação ao pressionar botão - só ANDROID
      //scrollEnabled:true, //só ANDROID, possibilita scroll no menu TAB
      tabStyle:{
        //backgroundColor: '#FFFF33',
      },
      indicatorStyle:{

      },
      labelStyle:{
        fontSize:25
      },
      iconStyle:{

      }
    }
  }
);
const AppContainer = createAppContainer(Navegador);
export default AppContainer;
