import * as React from 'react';
import {Keyboard,StyleSheet, CheckBox,ScrollView, Switch ,Picker, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions} from 'react-native';
import { Card,Button, Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import styles from "../style";
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { RadioButton } from 'react-native-paper';
import { Select,InputLabel,MenuItem } from '@material-ui/core';







class HostingOne extends React.Component{
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
            
                    <Text>Add new Apartment</Text>     
           
           <Text>Building Type</Text>
           <Picker
       selectedValue={this.state.selectedValue}
       style={{ height: 50, width: 150 }}
     //  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
     >
       <Picker.Item label="Apartment" value="Apartment" />
       <Picker.Item label="Hostel" value="hostel" />
     </Picker>

   


     <Text>Sale Type</Text>
           <Picker
       selectedValue={this.state.selectedValue}
       style={{ height: 50, width: 150 }}
     //  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
     >
       <Picker.Item label="For rent" value="rent" />
       <Picker.Item label="For sale" value="sale" />
     </Picker>

     <View style={{margin:20}}>
             <Button 
               buttonStyle={styles.loginButton}
             //onPress={() => this.onLoginPress()}
             onPress={() => this.props.navigation.navigate('Htwo')}
               title="Next"
             /> 
             </View>

          </View>

   
  );}
}



export default HostingOne;