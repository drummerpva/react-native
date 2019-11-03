import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

export default class Cadastro extends Component{
    static navigationOptions = {
        title:"Cadastre-se"
    }

    constructor(props){
        super(props);
        this.state = {
            usuario:'',
            senha:''
        };
        this.cadastrar = this.cadastrar.bind(this);
    }
    cadastrar(){

    }

    render(){
        return(
            <View style={styles.container} >
                <TextInput  style={styles.input} onChangeText={(usuario) => this.setState({usuario})} placeholder="Digite o usuário"/>
                <TextInput  secureTextEntry={true} style={styles.input} onChangeText={(senha) => this.setState({senha})} placeholder="Digite a senha"/>
                <Button  title="Salvar" onPress={this.cadastrar}/>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    input:{
        height:40,
        borderWidth:1,
        borderColor:'#000'
    }
});