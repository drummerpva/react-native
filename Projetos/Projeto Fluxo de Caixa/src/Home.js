import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableHighlight} from 'react-native';

export default class Home extends Component{
    static navigationOptions = {
        title:"Home",
        header:null
    }

    constructor(props){
        super(props);
        this.state = {
            saldoGeral:23128.98
        };

        this.cadastrar = this.cadastrar.bind(this);
        this.login = this.login.bind(this);
    }
    cadastrar() {
        this.props.navigation.navigate('Cadastro');
    }
    login(){
        this.props.navigation.navigate('Login');
    }

    render(){
        return(
            <ImageBackground
                source={require('.././assets/images/fundo.jpg')}
                style={styles.bg}
            >
                <View style={styles.container} >
                    <Text style={styles.title} >Fluxo de Caixa v1.0</Text>
                    <View style={styles.buttonArea} >
                        <TouchableHighlight  underlayColor="#CCC" style={styles.button} onPress={this.cadastrar}>
                            <Text style={styles.btnText} >Cadastrar</Text>
                        </TouchableHighlight>
                        <TouchableHighlight   underlayColor="#CCC"  style={styles.button} onPress={this.login}>
                            <Text style={styles.btnText}>Login</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.numerosArea} >
                        <Text>No momento administramos</Text>
                        <Text>R$  {this.state.saldoGeral.toFixed(2)}</Text>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    bg:{
        flex:1,
        width:null
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:30,
        backgroundColor:'transparent',
    },
    buttonArea:{
        marginTop:30,

    },
    numerosArea:{
        height:80,
        marginTop:20,
        backgroundColor:'transparent',
        alignItems:'center',
        justifyContent:'center',
    },
    button:{
        backgroundColor:'#bfb300',
        margin:10,
        height:40,
        width:200,
        justifyContent:'center',
        borderRadius:5
    },
    btnText:{
        color:'#FFF',
        textAlign:'center'
    }
});