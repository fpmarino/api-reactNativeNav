import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground , Button} from 'react-native';
import { Linking } from 'react-native';

export class HomeScreen extends Component {

  


    render(){
        return(
            <View style={styles.container}>
              
                <Text>Encontrá tu cervecería</Text>
                
                <Text style={{color: '#00a3b5'}}onPress={() => Linking.openURL('http://google.com')}></Text>             
                
                <StatusBar style="auto" />
               
            </View>
        );
    }
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "center",
        justifyContent: "center"
      },
  });
