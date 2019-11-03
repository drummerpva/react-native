import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import firebase from './FirebaseConnection';


export default class AddReceita extends Component{
    static navigationOptions = {
        title:"Adicionar Receita",
    }
    constructor(props){
        super(props);
        this.state = {
            valor:''
        };
        this.add = this.add.bind(this);

    }
    add(){
        if(this.state.valor != ''){
            let historico = firebase.database().ref('historico').child(firebase.auth().currentUser.uid);
            let user = firebase.database().ref('users').child(firebase.auth().currentUser.uid);
            //Adicionando Historico.
            let key = historico.push().key;
            historico.child(key).set({
                type:'receita',
                valor:parseFloat(this.state.valor.replace(',','.'))
            });
            //Alterando o Saldo.
            user.once('value').then((snapshot)=>{
                let saldo = parseFloat(snapshot.val().saldo);
                saldo += parseFloat(this.state.valor.replace(',','.'));
                user.set({
                    saldo
                });
                this.props.navigation.goBack();
            });

        }
    }

    render(){
        return(
            <View style={styles.container} >
                <Text>Quanto você quer adicionar?</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={this.state.valor}
                    onChangeText={(valor)=>this.setState({valor})}
                    autoFocus={true}
                />
                <Button 
                    title="Adicionar"
                    onPress={this.add}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:10
    },
    input:{
        height:40,
        backgroundColor:'#DDD',
        marginTop:20
    }
});