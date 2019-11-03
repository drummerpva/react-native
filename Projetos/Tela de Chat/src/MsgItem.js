import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default class MsgItem extends Component{

    constructor(props){
        super(props);

        this.estilo = (props.data.m) ? styles.balaoDireita : styles.balaoEsquerda;
        
    }
    render(){
        return (
            <View style={[styles.balao, this.estilo]}>
                <Text style={styles.nome}>{this.props.data.nome}</Text>                
                <Text>{this.props.data.msg}</Text>                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    balao:{
        backgroundColor: '#F35',
        margin: 10,
        padding:10,
        borderRadius: 10
    },
    balaoEsquerda:{
        backgroundColor: '#FFF',
        alignSelf:'flex-start',
        marginRight:50
    },
    balaoDireita:{
        backgroundColor: '#0F0',
        alignSelf:'flex-end',
        marginLeft:50
    },
    nome:{
        fontSize:15,
        fontWeight:'bold'
    }
});