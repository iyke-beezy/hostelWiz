import * as React from 'react';
import {Keyboard,Image, Dimensions , Text, View,StyleSheet, TextInput,FlatList, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Card,Button, Icon } from 'react-native-elements';
import { grey } from 'ansi-colors';
import { AntDesign ,Entypo} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { getUser } from '../api';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import Constants from 'expo-constants';



class Others extends React.Component {
 
  

  render() {
    return (
      <View style={styles.container}>
     <Text style={styles.soonText}>Coming soon</Text>
    </View>
       
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    fontFamily: 'Baloo-Paaji',
    paddingTop: Constants.statusBarHeight,
    paddingLeft: screenWidth * 0.05,
    paddingRight: screenWidth * 0.05,
    height: screenHeight,
  },
 
  soonText:{
    fontSize:20,
    color:'grey',
  },
})

  export default Others;