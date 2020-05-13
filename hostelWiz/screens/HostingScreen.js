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
           
        };  
        
    }  

  

    render() {
    


      return (
       
       
  
      
          <View style={styles.formArea}>
            <Text style={{fontSize:35}}>Why host on HostelWiz?</Text>
          <View>
            <Text style={{ fontSize:20,textAlign:'justify'}}>

            HostelWiz gives you simplicity in setting your prices, house rules, and offers you tools to ensure you're in control. 
            
           You are given the opportunity to place your properties in front of a nationwide and global network of people looking for the perfect match.

            </Text>
          </View>

          <Text style={{marginTop:40, fontSize:35}}>Host in 3 easy steps</Text>
         
         <Text style={{marginTop:40,fontSize:20}}>1. Set up your property</Text>
         <Text style={{textAlign:'justify'}}>
         Tell us the various features that uniquely identifies your property. Add your property location for easier search.
         </Text>

         <Text style={{marginTop:40,fontSize:20}}>2. Upload Photos</Text>
         <Text style={{textAlign:'justify'}}>
         Upload unique photos of your building to show off.
         </Text>

         <Text style={{marginTop:40,fontSize:20}}>3.Payments Plans</Text>
         <Text style={{textAlign:'justify'}}>
         Host your property on HostelWiz and enjoy your first 3 months free.
         </Text>
         

          <View style={{marginBottom:30}}></View>

         <Button 
               buttonStyle={styles.acceptButton}
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
 