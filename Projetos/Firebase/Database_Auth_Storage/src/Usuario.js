import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import firebase from './FirebaseConnection';

export default class Usuario extends Component{
    constructor(props){
        super(props);
        this.state={
            key:this.props.data.key,
            name:this.props.data.name,
            email:this.props.data.email,
            avatar:null
        };
        firebase.storage().ref().child('users/'+this.state.key+'.jpg').getDownloadURL().then((url)=>{
            let state = this.state;
            state.avatar = {uri:url};
            this.setState(state);
        }).catch((error)=>{
            alert(error.code);
        });
    }
    render(){
        return(
            <View style={styles.itemArea} >
                <Image
                    style={styles.itemAvatar} 
                    source={this.state.avatar}
                />
                <View style={styles.itemInfo} >
                    <Text style={styles.avatarNome} >{this.state.name}</Text>
                    <Text style={styles.avatarEmail}>{this.state.email}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    itemArea:{
      height:100,
      flex:1,
      flexDirection:'row'
    },
    itemAvatar:{
      width:80,
      height:80,
      margin:10
    },
    itemInfo:{
      flex:1,
      flexDirection:'column',
      justifyContent:'center'
    },
    avatarNome:{
        fontSize:18,
        fontWeight:'bold'
    }
  });