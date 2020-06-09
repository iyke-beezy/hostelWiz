import * as React from 'react';
import {Keyboard,StyleSheet, CheckBox,ScrollView, Switch ,Picker, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions} from 'react-native';
import { Card,Button, Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { RadioButton } from 'react-native-paper';
import styles from "../style";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Select,InputLabel,MenuItem } from '@material-ui/core';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import { editUser } from '../api';








class EditProfile extends React.Component{
    constructor(props) {  
        super(props);  
        this.state = {  
            user:this.props.route.params.user,
           username:this.props.route.params.user.username,
           password:this.props.route.params.user.password,
           first_name:this.props.route.params.user.first_name,
           last_name:this.props.route.params.user,
           email:this.props.route.params.user.email,
           groups:this.props.route.params.user.groups,
           contact:this.props.route.params.user.contact,

        };  
       
    }  
    componentDidMount(){
      console.log(this.state.username)
    }


    _signUp = async () => {
      try {
          const data = {
              username: this.state.username,
              password: this.state.password,
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              email: this.state.email,
              groups: this.state.groups,
              contact: this.state.contact,
          }
          const token =  "286ffbb3abfacc19e516ae4327deae01bb7132b5"
          const response = await editUser(data,this.state.user.id,token)
          if(response){
            ToastAndroid.showWithGravityAndOffset(
              'Details edited succesfully',
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50
            );
           console.log(response)
           this.props.navigation.navigate('profile')
          }
          console.log(response)
           
      }
      catch (err) {
          console.log(err.errMessage)
      }
  }

    

  render(){
  return (
    <View style={{backgroundColor:"gold",flex:1}}> 
     <View style={{alignItems:"center",justifyContent:"center",marginTop:50,marginBottom:50}} >
          <Text style={{alignSelf:"center"}}>Edit Profile</Text>
        </View>
       <KeyboardAwareScrollView style={{flex:1}}>
          <TextInput
            placeholder={this.state.username}
            placeholderColor="#fff"
            style={[styles.loginFormTextInput,
            { fontFamily: "Baloo-Paaji", color: '#fff' }
            ]}
            onChangeText={(text) => this.setState({username:text})}
            />

          <TextInput
            placeholder="Password"
            placeholderColor="#fff"
            style={[styles.loginFormTextInput,
            { fontFamily: "Baloo-Paaji", color: '#fff' }
            ]}
            secureTextEntry={true}
            onChangeText={(text) => this.setState({password:text})}
             />

            <TextInput
            placeholder="Email"
            placeholderColor="#fff"
            style={[styles.loginFormTextInput,
            { fontFamily: "Baloo-Paaji", color: '#fff' }
            ]}
            onChangeText={(text) => this.setState({email:text})}
            />

          <TextInput
            placeholder="first name"
            placeholderColor="#fff"
            style={[styles.loginFormTextInput,
            { fontFamily: "Baloo-Paaji", color: '#fff' }
            ]}
            onChangeText={(text) => this.setState({first_name:text})}
            />

              <TextInput
            placeholder="last name"
            placeholderColor="#fff"
            style={[styles.loginFormTextInput,
            { fontFamily: "Baloo-Paaji", color: '#fff' }
            ]}
            onChangeText={(text) => this.setState({last_name:text})}
            />

          <TextInput
            placeholder="phonenumber"
            placeholderColor="#fff"
            style={[styles.loginFormTextInput,
            { fontFamily: "Baloo-Paaji", color: '#fff' }
            ]} 
            onChangeText={(text) => this.setState({contact:text})}
            />
          <TextInput
            placeholder="group"
            placeholderColor="#fff"
            style={[styles.loginFormTextInput,
            { fontFamily: "Baloo-Paaji", color: '#fff' }
            ]}
            onChangeText={(text) => this.setState({groups:text})}
            />

          <Button
            buttonStyle={styles.loginButton}
            //onPress={() => this.onLoginPress()}
            onPress={() => this._signUp()}
            title="Done"
          />

       

         
        </KeyboardAwareScrollView>   
        </View> 
       

   
  );}
}





export default EditProfile;