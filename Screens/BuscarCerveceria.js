import { StatusBar } from 'expo-status-bar';
import React, {Component, useState} from 'react';
import { StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, View } from 'react-native';
const axios = require("axios");

 
export class BuscarCerveceria extends Component {
  state = {

    response: [],
    estado: null,
  };

  handlerText(t)
  {
    var buscar = t;
    this.setState({value : buscar});
  }  

  handlerButton = () => 
  {
    var buscar = this.state.value; 
    if(buscar==null)
    { 
    axios.get( 'https://api.openbrewerydb.org/breweries')
        .then( dato => {
        console.log(dato.data); 
          
        
        this.setState({
          response: dato.data,
          estado: true
        }) 
        console.log(this.state)
    });
    } 
  }




  render(){
    
    if(this.state.estado != true)
    {
      const {style} = this.props;
   
      return (
        <View style={styles.container}>

        <Text style={styles.text}>Econtrá tu cervecería</Text>
        <TextInput style={styles.input}  onChangeText = {this.handlerText.bind(this)}></TextInput> 
        <TouchableOpacity
        style={styles.button}
        onPress={this.handlerButton.bind(this)}>
        <Text>Enviar</Text>
        </TouchableOpacity>
        
          <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>Nombre: {this.state.response.name}</Text>          
          <Text style={styles.text}>Tipo de cerveceria: {this.state.response.brewery_type}</Text>
          <Text style={styles.text}>Direccion: {this.state.response.street}</Text>
          <Text style={styles.text}>Ciudad: {this.state.response.city}</Text>          
          <Text style={styles.text}>Pais: {this.state.response.country}</Text>
          <Text style={styles.text}>Telefono: {this.state.response.phone}</Text>
          <Text style={styles.text}>Pagina Web: {this.state.response.website_url}</Text>
          </ScrollView>
          <StatusBar style="auto" />
          
        </View>             
      );  
    }


}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccccc8',
    alignItems: 'center',
    justifyContent: 'center',
    padding:15,

  },
  text: {
    color: "#00a3b5",
    paddingTop: 30,
    fontSize: 20,
    marginRight:20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#7f8282",
    padding: 10,
    paddingHorizontal: 40,
  },
  input: { 
    height: 35,
    width: 200,
    margin: 15,
    padding: 8,
    borderColor: '#00a3b5',
    backgroundColor: 'white', 
    borderWidth: 2, 
  }, 
  scrollView: {
    backgroundColor: '#dededc',
    padding: 15,
    marginTop: 20
  },
});
