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
      foto:null
    };
    this.pegarFoto = this.pegarFoto.bind(this);
    /*

      let images = firebase.storage().ref().child('assets').child('images').child('images');
      //let arquivos = firebase.storage().ref().child('assets/files');
      //let arquivos = images.parent.child('files');
      let raiz = images.root;
    */
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
        let imagem = firebase.storage().ref().child('images').child('imagem.jpg');
        let mime = 'image/jpeg';

        RNFetchBlob.fs.readFile(uri,'base64')
        .then((data)=>{
          return RNFetchBlob.polyfill.Blob.build(data, {type:mime+';BASE64'});
        })
          .then((blob)=>{
            imagem.put(blob, {contentType:mime})
              .then(()=>{
                blob.close();
                alert("Terminou o processo!");
                //pega URL da imagem
                let url = imagem.getDownloadURL();

              })
                .catch((error)=>{
                  alert(error.code);
                });
          });
      }
    });
  }

  render(){
    return (
      <View style={styles.container} >
        <Button title="Pegar Foto" onPress={this.pegarFoto} />
        <Image 
          source={this.state.foto}
          style={styles.image}
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
    width:300,
    height:300
  }
});