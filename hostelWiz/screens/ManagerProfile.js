import * as React from 'react';
import {Keyboard,Checkbox, ScrollView, Switch, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions} from 'react-native';
import styles from "../style";
import { Card,Button, Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { RadioButton } from 'react-native-paper';

class ManageProperty extends React.Component {

    constructor(props) {  
        super(props);  
        this.state = {  
            password: '',  
            isPasswordVisible: true,  
            toggleText: 'Show',  
            checked: 'first',
        };  
    }  


    render() {
      return (
        <View style={{marginTop:50}}>
       
  
      
          <View style={styles.loginScreenContainer}>
          <ScrollView>
         

            
           <Text>Manager Profile</Text>
            </ScrollView>
           
            </View>
          </View>
      
           
      
      );
    }
  }

  export default ManageProperty;



