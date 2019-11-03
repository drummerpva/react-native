import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import firebase from './FirebaseConnection';
import HistoricoItem from './HistoricoItem';


export default class Interna extends Component{
    static navigationOptions = {
        title:"Home",
        header:null
    }
    constructor(props){
        super(props);
        this.state = {
            saldo:0,
            historico:[]
        };
        this.addDespesa = this.addDespesa.bind(this);
        this.addReceita = this.addReceita.bind(this);
        this.sair = this.sair.bind(this);
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                firebase.database().ref('users').child(user.uid).on('value',(snapshot)=>{
                    let state = this.state;
                    state.saldo = snapshot.val().saldo;
                    this.setState(state);
                });

                firebase.database().ref('historico').child(user.uid).on('value', (snapshot) =>{
                    let state = this.state;
                    state.historico = [];

                    snapshot.forEach((childItem)=>{
                        state.historico.push({
                            key:childItem.key,
                            type:childItem.val().type,
                            valor:childItem.val().valor,
                        });
                    });
                    this.setState(state);
                });

            }else{
                this.props.navigation.navigate('Home');
            }
        });

    }
    addReceita(){
        this.props.navigation.navigate('AddReceita');
    }
    addDespesa(){
        this.props.navigation.navigate('AddDespesa');
    }
    sair(){
        firebase.auth().signOut();
    }


    render(){
        return(
            <View style={styles.container} >
                <View style={styles.saldoArea} >
                    <Text style={styles.saldo} >Saldo: R$ {parseFloat(this.state.saldo).toFixed(2)}</Text>
                </View>
                <FlatList 
                    style={styles.historico}
                    data={this.state.historico}
                    renderItem={({item})=><HistoricoItem data={item} />}
                />
                <View style={styles.botoesArea} >
                    <Button 
                        title="+ Receita"
                        onPress={this.addReceita}
                    />
                    <Button 
                        title="+ Despesa"
                        onPress={this.addDespesa}
                    />
                    <Button 
                        title="Sair"
                        onPress={this.sair}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    saldoArea:{
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#999'
    },
    saldo:{
        textAlign:'center',
        fontSize:25
    },
    historico:{
        flex:1
    },
    botoesArea:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#DDD'
    }
});