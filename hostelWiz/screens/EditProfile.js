import * as React from 'react';
import {Keyboard,StyleSheet, CheckBox,ScrollView, Switch ,Picker, Text, View, TextInput,TouchableHighlight,TouchableOpacity, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions} from 'react-native';
import { Card,Button, Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { RadioButton } from 'react-native-paper';
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
            id:this.props.route.params.user.id,
           username:this.props.route.params.user.username,
           password:this.props.route.params.user.password,
           first_name:this.props.route.params.user.first_name,
           last_name:this.props.route.params.user.last_name,
           email:this.props.route.params.user.email,
           groups:this.props.route.params.user.groups,
           contact:this.props.route.params.user.contact,
           token:null,
           
        };  
       
    }  
    componentDidMount(){
      console.log(this.state.username)
    }

     init = async () => {
    const status = await AsyncStorage.getItem('userToken')
    if (status) {
      this.getToken()
    } 
  }


    getToken = async () => {
      try {
        let userToken = await AsyncStorage.getItem("userToken");
        let token = JSON.parse(userToken)
        this.setState({ token, loginSource: 'token' })
      } catch (error) {
        console.log("Something went wrong", error);
      }
    }
 


    _edit = async () => {
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
   
          const response = await editUser(data,this.state.user.id,this.state.token)
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
    <View style={styles.container}> 
     <View style={styles.backAndSave}>
              <TouchableHighlight
                onPress={() => this.props.navigation.goBack()}
                style={styles.back}>
                <AntDesign color='black' size={20} name="left" />
              </TouchableHighlight>
           
              </View>
 
       <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{marginTop:30,alignSelf:"stretch"}}>
       <View style={{alignItems:"center",justifyContent:"center",marginBottom:35}} >
          <Text style={styles.title}>Edit your personal info</Text>
        </View>
         <Text style={styles.label}>Username</Text>
          <TextInput
            defaultValue={this.state.username}
            placeholder="username"
            placeholderColor="#fff"
           style={styles.input}
            onChangeText={(text) => this.setState({username:text})}
            />
            <View  style={styles.divider} ></View>

        
            <Text style={styles.label}>Email</Text>
            <TextInput
            defaultValue={this.state.email}
            placeholder="Email"
            placeholderColor="#fff"
            style={styles.input}
            onChangeText={(text) => this.setState({email:text})}
            />

         <View  style={styles.divider} ></View>


         <Text style={styles.label}>First name</Text>

          <TextInput
          defaultValue={this.state.first_name}
            placeholder="first name"
            placeholderColor="#fff"
            style={styles.input}
            onChangeText={(text) => this.setState({first_name:text})}
            />

            <View  style={styles.divider} ></View>


            <Text style={styles.label}>Last name</Text>

              <TextInput
              defaultValue={this.state.last_name}
            placeholder="last name"
            placeholderColor="#fff"
            style={styles.input}
            onChangeText={(text) => this.setState({last_name:text})}
            />


          <View  style={styles.divider} ></View>

          <Text style={styles.label}>Phone number</Text>
          <TextInput
          defaultValue={this.state.contact}
            placeholder="phonenumber"
            placeholderColor="#fff"
            style={styles.input}
            onChangeText={(text) => this.setState({contact:text})}
            />


          <View  style={styles.divider} ></View>
         

          <Button
            buttonStyle={styles.loginButton}
            disabled={!this.state.username || !this.state.email || !this.state.first_name || !this.state.last_name || !this.state.contact}
            onPress={() => this._edit()}
            title="Done"
          />

       

         
        </KeyboardAwareScrollView>   
        </View> 
       

   
  );}
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    flex:1,height:screenHeight,
    padding:18,
  },
  title:{
    alignSelf:"flex-start",
    fontSize:30,
     fontFamily: 'Baloo-Paaji-Medium',
     //color:'gainsboro'
  
  },
  label:{
    fontSize:18
  },
  input:{
    marginTop:10,fontSize:25,color:'grey'
  },
  divider:{
    borderBottomWidth:1,marginTop:20,borderColor:"gainsboro",marginBottom:20
  },
  loginButton:{
    height:screenHeight*0.07,
    borderRadius:5,
    backgroundColor:"#E7C654",

    
  },
  backAndSave: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    marginBottom:20,
  },
  back: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 64,
  
    alignItems: "center",
    justifyContent: 'center',
  },
})





export default EditProfile;