import * as React from 'react';
import {Keyboard,StyleSheet, CheckBox,ScrollView, Switch ,Picker, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions} from 'react-native';
import { Card,Button, Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import styles from "../style";
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { RadioButton } from 'react-native-paper';
import { Select,InputLabel,MenuItem } from '@material-ui/core';




class HostingScreen extends React.Component {

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



    render() {
    


      return (
       
       
  
      
          <View style={{marginTop:300}}>
         
         <Button 
               buttonStyle={styles.loginButton}
             //onPress={() => this.onLoginPress()}
               onPress={() => this.props.navigation.navigate('Hone')}
               title="Host your apartment/Hostels here"
             /> 
            </View>
       
      
           
      
      );
    }
  }

  export default HostingScreen;



/*


  class PostPropertyImage extends React.Component {
    state = {
        image: null,
      };
    
      render() {
        let { image } = this.state;
    
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Pick an image from camera roll" onPress={this._pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          </View>
        );
      }
    
      componentDidMount() {
        this.getPermissionAsync();
      }
    
      getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      };
    
      _pickImage = async () => {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
            this.setState({ image: result.uri });
          }
    
          console.log(result);
        } catch (E) {
          console.log(E);
        }
      };
  }
*/
 