import React, {Component} from 'react';
import {View, StyleSheet, Image, FlatList, Text} from 'react-native';

export default class HomeProducts extends Component{

constructor(props){
    super(props);
    this.state={
        list : props.navigation.state.params.products
    };
}

static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title,
});

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.list}
                    renderItem={({item}) => <ProductItem data={item} />}
                 />
            </View>
        );
    }
}

class ProductItem extends Component {
    constructor(props){
        super(props);
        this.state ={};
    }
    render(){
        return (
            <View style={styles.productItem}>
                <Image resizeMode="contain" source={this.props.data.img} style={styles.productImagem}/>
                <Text style={styles.productName}>{this.props.data.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icone:{
        width:26,
        height:26
    },
    container:{
        flex:1,
        backgroundColor: '#CCC'
    },
    productItem:{
        height:100,
        backgroundColor:'#FFF',
        margin:10,
        borderRadius:5,
        padding:10,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    productImagem:{
        height: 80,
        width:150
    },
    productName:{
        fontSize:16,
        fontWeight:'bold'
    }
});

