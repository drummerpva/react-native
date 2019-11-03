import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import firebase from './src/FirebaseConnection';

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      foto:null,
      pct:'5'
    };
    this.pegarFoto = this.pegarFoto.bind(this);
    this.carregarAvatar = this.carregarAvatar.bind(this);
    
    this.carregarAvatar('images/imagem2.jpg');

    /*
    firebase.storage().ref().child('images/imagem.jpg').getDownloadURL().then((url)=>{
      let state = this.state;
      state.foto = {uri:url};
      this.setState(state);
    });
    */
  }

  carregarAvatar(img){
    firebase.storage().ref().child(img).getDownloadURL().then((url)=>{
      let state = this.state;
      state.foto = {uri:url};
      this.setState(state);
    });

  }

  pegarFoto(){
    let options = {
      title: 'Selecione uma Foto'
    };
    //ImagePicker.launchCamera({}, (r)=>{
    ImagePicker.launchImageLibrary({}, (r)=>{
    //ImagePicker.showImagePicker(options, (r)=>{
      if(r.uri){
        //correção URI para Iphone
        let uri = r.uri.replace('file://','');
        //preparar no firebase Storage
        let imagem = firebase.storage().ref().child('images').child('imagem2.jpg');
        let mime = 'image/jpeg';

        RNFetchBlob.fs.readFile(uri,'base64')
        .then((data)=>{
          return RNFetchBlob.polyfill.Blob.build(data, {type:mime+';BASE64'});
        })
          .then((blob)=>{
            imagem.put(blob, {contentType:mime})
              .on('state_changed',(snapshot)=>{
                let pct = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                let state = this.state;
                state.pct = pct.toString();
                this.setState(state);
              },
              (error)=>{
                alert(error.code);
              }, 
              ()=>{
                imagem.getDownloadURL().then((url)=>{
                  let state = this.state;
                  state.foto = {uri:url};
                  this.setState(state);
                });
                

                
                alert("Imagem carregada com sucesso!");
              });
          });
      }
    });
  }

  render(){
    return (
      <View style={styles.container} >
        <Button title="Pegar Foto" onPress={this.pegarFoto} />
        <Text>{this.state.pct}%</Text>
        <View style={{width:this.state.pct+'%', height:40, backgroundColor:'#F35'}} ></View>
          <Image 
            style={styles.image}
            source={this.state.foto}
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  image:{
    width:'100%',
    height:300
  }
});