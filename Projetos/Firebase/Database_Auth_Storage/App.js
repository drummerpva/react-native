import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image, TextInput, FlatList} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import firebase from './src/FirebaseConnection';

import Usuario from './src/Usuario';

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;



export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      formAvatar: null,
      formNome: '',
      formEmail: '',
      formSenha:'',
      lista:[],
      userUid:0,
      formPct:'0'
    };
    this.cadastrar = this.cadastrar.bind(this);
    this.carregarFoto = this.carregarFoto.bind(this);
    this.saveAvatar = this.saveAvatar.bind(this);
    this.saveUser = this.saveUser.bind(this);

    firebase.auth().signOut();

    firebase.database().ref('users').on('value', (snapshot)=>{
      let state = this.state;
      state.lista = [];
      snapshot.forEach((child)=>{
        state.lista.push({
          key:child.key,
          name:child.val().name,
          email:child.val().email
        });
      });
      this.setState(state);
    });

  }
  
  carregarFoto(){
    let options = {
      title:'Selecione uma opção'
    };
    ImagePicker.showImagePicker(options,(r)=>{
      if(r.uri){
        let state = this.state;
        state.formAvatar = {uri:r.uri};
        this.setState(state);
      }
    });
  }

  saveAvatar(){
    if(this.state.formAvatar != null){
      let uri = this.state.formAvatar.uri.replace('file://','');
      let avatar = firebase.storage().ref().child('users').child(this.state.userUid+'.jpg');
      let mime  = 'image/jpeg';
      RNFetchBlob.fs.readFile(uri, 'base64')
        .then((data)=>{
          return RNFetchBlob.polyfill.Blob.build(data,{type:mime+';BASE64'});
        })
          .then((blob)=>{
            avatar.put(blob, {contentType:mime})
            .on('state_changed',(snapshot)=>{
              let pct = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
              let state = this.state;
              state.formPct = pct;
              this.setState(state);
            }, 
            (error)=>{
                alert(error.code)
            }, 
            ()=>{
              this.saveUser();
            });
          });
    }
  }
  saveUser(){
    if(this.state.userUid != 0){
      firebase.database().ref('users').child(this.state.userUid).set({
        name:this.state.formNome,    
        email:this.state.formEmail,    
      });
      let state = this.state;
      state.formAvatar = null;
      state.formNome = '';
      state.formEmail = '';
      state.formSenha = '';
      state.formPct = '0';
      state.userUid = 0;
      this.setState(state);
      firebase.auth().signOut();
      alert("Usuário inserido com Sucesso!");
  }
  }


  cadastrar(){
    if(this.state.formAvatar != null && this.state.formEmail != '' && this.state.formSenha != '' && this.state.formSenha != ''){
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          let state = this.state;
          state.userUid = user.uid;
          this.setState(state);

          this.saveAvatar();
        }
      });


      firebase.auth().createUserWithEmailAndPassword(this.state.formEmail,this.state.formSenha).catch((error)=>{
        alert(error.code);
      });
    }
  }

  render(){
    return (
      <View style={styles.container} >

        <View style={styles.cadastroArea} >
          <Text>Cadastre um novo usuário</Text>
          <View style={styles.form} >
            <View style={styles.formInfo}>
              <Image 
                source={this.state.formAvatar}
                style={styles.formAvatar}
              />
              <Button 
                title="Carregar..."
                onPress={this.carregarFoto}
              />
              <Text>{this.state.formPct}%</Text>
            </View>
            
            <View style={styles.formInfo} >
                <TextInput  style={styles.input} placeholder="Digite o nome" value={this.state.formNome} onChangeText={(formNome)=>this.setState({formNome})}/>
                <TextInput  style={styles.input} placeholder="Digite o email" value={this.state.formEmail} onChangeText={(formEmail)=>this.setState({formEmail})}/>
                <TextInput secureTextEntry={true} style={styles.input} placeholder="Digite a senha" value={this.state.formSenha} onChangeText={(formSenha)=>this.setState({formSenha})}/>
            </View>
          </View>
          <Button 
            title="Cadastrar"
            onPress={this.cadastrar}
          />
        </View>
        <View style={styles.listaArea} >
          <FlatList 
            data={this.state.lista}
            renderItem={({item})=><Usuario data={item}/>}
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
  cadastroArea:{
    height:240,
    backgroundColor:'#EEE',
    margin:10,
    padding:10
  },
  form:{
    flex:1,
    flexDirection:'row'
  },
  formAvatar:{
    width:100,
    height:100,
    backgroundColor:'#CCC'
  },
  formInfo:{
    flex:1,
    flexDirection:'column'
  },
  input:{
    height:40,
    borderWidth:1,
    borderColor:'#000',
    margin:5
  },
  listaArea:{
    flex:1,
    backgroundColor:'#EEE',
    margin:10
  },
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
    flexDirection:'column'
  }
});