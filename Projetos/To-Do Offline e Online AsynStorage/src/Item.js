import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Button } from 'react-native';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: (this.props.data.done =='1') ? styles.done : styles.undone
        };
        this.marcar = this.marcar.bind(this);
        this.excluir = this.excluir.bind(this);

    }

    marcar(){
        let state = this.state;
        let done = 'sim';
        if(this.state.done == styles.undone){
            state.done = styles.done;
            done = 'sim';
        }else{
            state.done = styles.undone;
            done = 'nao';
        }

        this.props.onUpdate(this.props.data.id, done);

        this.setState(state);
    }
    excluir(){
        this.props.onDelete(this.props.data.id);
    }

    render() {
        return ( 
            <View style = { styles.area } >
                <TouchableHighlight onPress={this.marcar} style={[styles.marcarArea, this.state.done]} >
                    <View>

                    </View>
                </TouchableHighlight>
                <Text > { this.props.data.item } </Text> 
                <Button title="X" onPress={this.excluir} style={styles.botao} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    area: {
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#CCC',
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    marcarArea:{
        width:40,
        height:40,
        backgroundColor:'#CCC',
        marginRight:10,
        marginLeft:10
    },
    undone:{
        backgroundColor:'#CCC'
    },
    done:{
        backgroundColor:'#0F0'
    },
    botao:{
        width:40,
        height:40,
        backgroundColor:'transparent'
    }
});