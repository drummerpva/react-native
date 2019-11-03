import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,TouchableHighlight} from 'react-native';
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';

import ReceitaResumo from './ReceitaResumo';
import ReceitaIngredientes from './ReceitaIngredientes';
import ReceitaModo from './ReceitaModo';


const Abas = createMaterialTopTabNavigator({
    ReceitaResumo:{
        screen:ReceitaResumo
    },
    ReceitaIngredientes:{
        screen:ReceitaIngredientes
    },
    ReceitaModo:{
        screen:ReceitaModo
    }
},{
    tabBarPosition:'top',
    animationEnabled:true,
    tabBarOptions:{
        showIcon:false,
        style:{
            backgroundColor:'#EEE',
        },
        labelStyle:{
            fontSize:14,
            height:47,
            lineHeight:47
        },
        activeTintColor:'#333',
        inactiveTintColor:'#CCC',
        upperCaseLabel:false
    }
});
const AbasContainer = createAppContainer(Abas);




export default class Receita extends Component{
    static navigationOptions = {
        title:'Receita',
        header:null
    };
    constructor(props){
        super(props);
        this.state = {};
        this.goBack = this.goBack.bind(this);
    }
    goBack(){
        this.props.navigation.goBack();
    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight onPress={this.goBack} style={styles.backButton} underlayColor="#BBB">
                    <Image source={require('../assets/images/back.png')} style={styles.backImage} />
                </TouchableHighlight>
                <Image source={{uri:this.props.navigation.state.params.imagem}} style={styles.receitaImage} />
                <AbasContainer screenProps={this.props.navigation.state.params}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
	container:{
		flex:1
    },
    backImage:{
        width:26,
        height:26
    },
    backButton:{
        width:26,
        height:26,
        marginLeft:10,
        marginTop:5,
        zIndex:99
    },
    receitaImage:{
        height:200,
        marginTop:-36
    }
});