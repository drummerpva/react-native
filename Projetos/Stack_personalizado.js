import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

const Tela1HeaderRight = () => {
  return (
    <View>
      <Button title="Sair" onPress={() => {}} />
    </View>
  );
};
const Tela1HeaderLeft = () => {
  return (
      <Text >Alguma Coisa</Text>
  );
};

class Tela1 extends Component {
  static navigationOptions = {
    title: "Tela 1",
    //header:null
    //headerBackTitle: null //Só IOS Aparece
    //headerTruncatedBackTitle:'Voltar!' //Só IOS
    headerRight: Tela1HeaderRight(), //em ambos
    headerStyle:{
      backgroundColor: '#CCC',
      //height: 100
    },
    headerTintColor:'#F35',
    headerTitleStyle:{
      fontSize:30
    }
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
    title: "Tela 2",
    //headerLeft: Tela1HeaderLeft() // Substitui botão voltar
    headerBackTitleStyle:{ //Só funciona no IOS
      //fontSize:50
    }
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
const Navegador = createStackNavigator(
  {
    Tela1: {
      screen: Tela1
    },
    Tela2: {
      screen: Tela2
    }
  },
  {
    headerMode: "float"
  }
);
const AppContainer = createAppContainer(Navegador);
export default AppContainer;
