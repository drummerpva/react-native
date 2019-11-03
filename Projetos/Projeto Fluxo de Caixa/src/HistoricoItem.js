import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class HistoricoItem extends Component{
    constructor(props){
        super(props);
        let bg = '#3f5';
        if(this.props.data.type == 'despesa'){
            bg = '#f35';
        }
        this.state = {
            bg
        };
    }

    render(){
        return(
            <View style={[styles.area,{backgroundColor:this.state.bg}]} >
                <Text>{this.props.data.type}</Text>
                <Text>R$ {parseFloat(this.props.data.valor).toFixed(2)}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    area:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingRight:20,
    }
});