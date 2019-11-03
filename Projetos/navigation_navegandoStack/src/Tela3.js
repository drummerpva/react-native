import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";

class Tela3 extends Component {
  static navigationOptions = {
    title: "Tela 3"
  };
  constructor(props) {
    super(props);
    this.state = {};
    this.voltarTela = this.voltarTela.bind(this);
  }
  voltarTela() {
    this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Tela1" })]
      })
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Tela 3</Text>
        <Button title="Ir para o Início" onPress={this.voltarTela} />
      </View>
    );
  }
}
export default Tela3;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
