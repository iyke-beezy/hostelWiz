import * as React from 'react';
import {Keyboard,StyleSheet, CheckBox,ScrollView, Switch ,Picker, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions} from 'react-native';
import { Card,Button, Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import styles from "../style";
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { RadioButton } from 'react-native-paper';
import { Select,InputLabel,MenuItem } from '@material-ui/core';







class HostingTwo extends React.Component{
    constructor(props) {  
        super(props);  
        this.state = {  
            password: '',  
            isPasswordVisible: true,  
            toggleText: 'Show',  
            checked: 'first',
            selectedValue:'',
            itemValue:'',
            isEnabled:false,
            isSelected:false,
            viewNo:'one'
        };  
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.setSelection = this.setSelection.bind(this);
    }  

    toggleSwitch(){
        this.setState({isEnabled:!this.state.isEnabled})
    }

    setSelection(){
        this.setState({isSelected:!this.state.isSelected})
    }

  render(){
  return (
    <View style={styles.container}> 
            
            <View>
                
                <Text>Street Address</Text>
              <TextInput placeholder="Eg. Third Otswe Steet Hse.No F593/3" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />

              <Text>City</Text>
              <TextInput placeholder="Eg. Accra" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />

              <Text>Region</Text>
              <TextInput placeholder="Greater Accra" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />


              <Text>Headline</Text>
              <TextInput placeholder="Headline" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />

              <Text>Description</Text>
              <TextInput placeholder="Descrtiption" multiline = {true} numberOfLines = {4} placeholderColor="#c4c3cb" style={styles.loginFormTextInputArea}  />
          

              <View style={{margin:20}}>
             <Button 
               buttonStyle={styles.loginButton}
             //onPress={() => this.onLoginPress()}
             onPress={() => this.props.navigation.navigate('Hthree')}
               title="Next"
             /> 
             </View>
         </View>

          </View>

   
  );}
}




export default HostingTwo;