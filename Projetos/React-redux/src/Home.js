import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';



export default class Home extends Component {
    static navigationOptions = {
        title: 'Estudo',
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {};
        this.cadastrar = this.cadastrar.bind(this);
        this.login = this.login.bind(this);
    }
    cadastrar() {
        this.props.navigation.navigate('Cadastro');
    }
    login() {
        this.props.navigation.navigate('Login');
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title} >Nome do Sistema</Text>
                <View>
                    <Button title="Login" onPress={this.login} />
                    <Button title="Cadastre-se" onPress={this.cadastrar} />
                </View>
            </View>

        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title:{
        fontSize:20,
        color:'#777',
        textAlign:'center',
        marginBottom:40
    }
});