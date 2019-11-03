import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Tela1 extends Component{
    static navigationOptions ={
        title:'Tela 1 Top'
    }
    render(){
        return(
            <View>
                <Text>Tela 1</Text>
            </View>
        );
    }
}
export default Tela1;