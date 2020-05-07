import * as React from 'react';
import {Keyboard,Image, Text, View,StyleSheet, TextInput,FlatList, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions} from 'react-native';
import { Card,Button, Icon } from 'react-native-elements';
import { grey } from 'ansi-colors';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';


class EditProfile extends React.Component {


  

    render() {
      return (
        <View style={{marginTop:50}}>
       
  
      
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>HostelWiz</Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <TextInput placeholder="name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}/>
            <TextInput placeholder="phonenumber" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="group" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}/>
            <View style={{margin:20}}>
            <Button 
              buttonStyle={styles.loginButton}
            //onPress={() => this.onLoginPress()}
              onPress={() => this.props.navigation.navigate('/profile')}
              title="Done"
            /> 
            </View>
         
          
          </View>
         
          </View>
        </View>
    
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 40
    },
    user:{
        alignItems:'center',
    },
    image:{
        height:100,
        width:85,
    },
    item: {
      padding: 10,
      marginBottom:10,
      fontSize: 25,
     color:'grey',
      height: 44,
    },
    logoutContainer:{
      paddingLeft:150,
        alignItems:"center",
        flexDirection:"row",
    },
    logout:{
      height:35,
      width:35,
    },
    logoutText:{
      fontSize:35,
      color:'#ff1493',
    },
  })

  export default EditProfile;