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







class HostingScreen extends React.Component{
    constructor(props) {  
        super(props);  
        this.state = {  
           name:'',
           number_of_rooms:null,
           room_type:'',
           sec_screen:false,
           third_screen:false,
           fourth_screen:false,

        };  
      
    }  

  

  render(){
    if(!this.state.sec_screen && !this.state.third_screen && !this.state.fourth_screen) {
             
    return(
    <View style={styles.container}> 
  
           
           
           {//name
          

      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ justifyContent:'flex-start', alignSelf:'flex-start'}}>
      <View style={{alignItems:"center",justifyContent:"flex-start",marginBottom:35}} >
         <Text style={styles.title}>Kindly enter the  name for your hostel/apartment</Text>
       </View>
        
         <TextInput
           
           placeholder="name"
           placeholderColor="#fff"
           defaultValue={this.state.name}
          style={styles.input}
           onChangeText={(text) => this.setState({name:text})}
           />
           <View  style={styles.divider} ></View>

        

         <Button
           buttonStyle={styles.nextButton}
           disabled={!this.state.name }
           onPress={() => this.setState({sec_screen:true})}
           title="Next"
         />

      

        
           </KeyboardAwareScrollView>   }
       </View> 

   
  )}
     else if (this.state.sec_screen && !this.state.third_screen && !this.state.fourth_screen){
      
             
          return(
          <View style={styles.container}> 
          <View style={styles.backAndSave}>
                   <TouchableHighlight
                     onPress={() => this.setState({sec_screen:false})}
                     style={styles.back}>
                     <AntDesign color='black' size={20} name="left" />
                   </TouchableHighlight>
                
                 </View>
                 
                 
                 {//number of rooms and type
                
      
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ justifyContent:'flex-start', alignSelf:'flex-start'}}>
            <View style={{alignItems:"center",justifyContent:"center",marginBottom:35}} >
               <Text style={styles.title}>Kindly tell us how many rooms are available and the type of room (Hostel/Apartment)</Text>
             </View>

             <Text style={styles.label}></Text>
              
               <TextInput
                 
                 placeholder="Type"
                 placeholderColor="#fff"
                 defaultValue={this.state.room_type}
                style={styles.input}
                 onChangeText={(text) => this.setState({room_type:text})}
                 />
                 <View  style={styles.divider} ></View>

                 <Text style={styles.label}></Text>

                 <TextInput
                 
                 placeholder="Number of rooms"
                 placeholderColor="#fff"
                 defaultValue={this.state.number_of_rooms}
                style={styles.input}
                 onChangeText={(text) => this.setState({number_of_rooms:text})}
                 />
                 <View  style={styles.divider} ></View>
      
              
      
               <Button
                 buttonStyle={styles.secNextButton}
                 disabled={!this.state.name }
                 onPress={() => this.setState({sec_screen:false})}
                 title="Next"
               />
      
            
      
              
                 </KeyboardAwareScrollView>   }
             </View> 
      
       )
     }
}
}


const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    flex:1,
    height:screenHeight,
    padding:18,
  },
  title:{
    alignSelf:"center",
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
  nextButton:{
    height:screenHeight*0.07,
    borderRadius:5,
    backgroundColor:"#E7C654",
    marginTop:screenHeight*0.49,
    alignSelf:'flex-end',
    width:screenWidth*0.25
    
  },
  secNextButton:{
    height:screenHeight*0.07,
    borderRadius:5,
    backgroundColor:"#E7C654",
    marginTop:screenHeight*0.2,
    alignSelf:'flex-end',
    width:screenWidth*0.25
    
  },
  backAndSave: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    marginBottom:40,
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




export default HostingScreen;