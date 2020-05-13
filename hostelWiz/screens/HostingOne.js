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
            viewNo:'one',
            buildingType:'Apartment',
            saleType:'Rent',
            city:'',
            region:'',
            headline:'',
            description:'',
            wifi:false,
            tv:false,
            car:false,
            gym:false,
            laundry:false,
            studyRoom:false,
            bathRoom:false,
            shared:false,
            private:false,

        };  
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.toggleWifi = this.toggleWifi.bind(this);
        this.toggleTv = this.toggleTv.bind(this);
        this.toggleCar = this.toggleCar.bind(this);
        this.toggleGym = this.toggleGym.bind(this);
        this.toggleLaundry = this.toggleLaundry.bind(this);
        this.toggleStudyRoom = this.toggleStudyRoom.bind(this);
        this.toggleBathRoom = this.toggleBathRoom.bind(this);
        this.setSelection = this.setSelection.bind(this);
        this.setShared = this.setShared.bind(this);
        this.setPrivate = this.setPrivate.bind(this);
    }  

    toggleSwitch(){
        this.setState({isEnabled:!this.state.isEnabled})
    }
    toggleWifi(){
      this.setState({wifi:!this.state.wifi})
  }
  toggleTv(){
    this.setState({tv:!this.state.tv})
}
toggleCar(){
  this.setState({car:!this.state.car})
}
toggleGym(){
  this.setState({gym:!this.state.gym})
}
toggleLaundry(){
  this.setState({laundry:!this.state.laundry})
}
toggleStudyRoom(){
  this.setState({studyRoom:!this.state.studyRoom})
}
toggleBathRoom(){
  this.setState({bathRoom:!this.state.bathRoom})
}

    setSelection(){
        this.setState({isSelected:!this.state.isSelected})
    }
    setShared(){
      this.setState({shared:!this.state.shared})
  }
  setPrivate(){
    this.setState({private:!this.state.private})
}
  setBathRoom(){
    this.setState({bathRoom:!this.state.bathRoom})
  }

  render(){
  return (
    <View style={styles.container}> 
       <ScrollView style={styles.formArea} showsVerticalScrollIndicator={false}>
       <Text style={styles.formTitle}>Add new Apartment</Text> 

       <View style={styles.firstDivider}></View>

       <View style={styles.formComponent}>

        <Text style={styles.label} >City</Text>
       
        <TextInput style={styles.textInput} placeholder="Eg. Accra" placeholderColor="#c4c3cb"  />
      

        </View>
        <View style={styles.formComponent}>

<Text style={styles.label} >Region</Text>

<TextInput style={styles.textInput} placeholder="Eg. Greater Accra" placeholderColor="#c4c3cb"  />


</View>
<View style={styles.formComponent}>

<Text style={styles.label} >Headline</Text>

<TextInput style={styles.textInput} placeholder="Eg. Headline" placeholderColor="#c4c3cb"  />


</View>
<View style={styles.formComponent}>

<Text style={styles.label} >Description</Text>

<TextInput style={styles.textDescription}  multiline = {true} numberOfLines = {4} placeholderColor="#c4c3cb"   />


</View>
<View style={styles.formComponent}>

<Text style={styles.label} >Street Address</Text>

<TextInput style={styles.textInput} placeholder="Eg. Third Otswe Steet Hse.No F593/3" placeholderColor="#c4c3cb"  />


</View>


<View style={styles.firstDivider}></View>

       <View style={styles.formComponent}>

           <Text style={styles.label} >Building Type</Text>
           <View  style={styles.select}>
           <Picker
       selectedValue={this.state.selectedValue}
      
     //  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
     >
       <Picker.Item label="Apartment" value="Apartment" />
       <Picker.Item label="Hostel" value="hostel" />
     </Picker>
           </View>

       </View>


    
      
          

   

<View style={styles.formComponent} >

<Text style={styles.label}>Sale Type</Text>
     <View style={styles.select}>
     <Picker
       selectedValue={this.state.selectedValue}
      
     //  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
     >
       <Picker.Item label="For rent" value="rent" />
       <Picker.Item label="For sale" value="sale" />
     </Picker>
     </View>
</View>


    
<View style={styles.firstDivider}></View>


<View style={styles.formComponent} >

<Text style={styles.switchLabel}>Wifi</Text>
    
     <Switch style={styles.switch}
    
       trackColor={{ false: "#767577", true: "#81b0ff" }}
       thumbColor={ "#f4f3f4"}
       ios_backgroundColor="#3e3e3e"
       onValueChange={this.toggleWifi}
       value={this.state.wifi}
     />
     <View style={styles.switchSpace}></View>
    <Text style={styles.switchLabel}>T.v.</Text>
    
    <Switch style={styles.switch}
   
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={"#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={this.toggleTv}
      value={this.state.tv}
    />
     
</View>

<View style={styles.formComponent} >

<Text style={styles.switchLabel}>Car</Text>
    
     <Switch style={styles.switch}
    
       trackColor={{ false: "#767577", true: "#81b0ff" }}
       thumbColor={"#f4f3f4"}
       ios_backgroundColor="#3e3e3e"
       onValueChange={this.toggleCar}
       value={this.state.car}
     />
     <View style={styles.switchSpace}></View>
    <Text style={styles.switchLabel}>Gym</Text>
    
    <Switch style={styles.switch}
   
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={"#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={this.toggleGym}
      value={this.state.gym}
    />
     
</View>

<View style={styles.formComponent} >

<Text style={styles.switchLabel}>Laundry</Text>
    
     <Switch style={styles.switch}
    
       trackColor={{ false: "#767577", true: "#81b0ff" }}
       thumbColor={"#f4f3f4"}
       ios_backgroundColor="#3e3e3e"
       onValueChange={this.toggleLaundry}
       value={this.state.laundry}
     />
     <View style={styles.switchSpace}></View>
    <Text style={styles.switchLabel}>Study Room</Text>
    
    <Switch style={styles.switch}
   
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={"#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={this.toggleStudyRoom}
      value={this.state.studyRoom}
    />
     
</View>



          

<View style={styles.firstDivider}></View>

<View><Text style={styles.bathRoomTitle}>Bath Room</Text></View>

<View style={styles.formComponent} >

<Text style={styles.switchLabel}>Private</Text>
<View style={styles.checkboxSpace}></View>
<CheckBox
               value={this.state.private}
               onValueChange={this.setPrivate}
               style={styles.checkbox}
                  />
     <View style={styles.switchSpace}></View>
    <Text style={styles.switchLabel}>Shared</Text>
    <View style={styles.checkboxSpace}></View>
    <CheckBox
               value={this.state.shared}
               onValueChange={this.setShared}
               style={styles.checkbox}
                  />
     
</View>

<View style={{marginBottom:20}}></View>


     
             <Button 
               buttonStyle={styles.acceptButton}
             //onPress={() => this.onLoginPress()}
             onPress={() => this.props.navigation.navigate('Htwo')}
               title="Next"
             /> 
           

       </ScrollView>    
         </View>

   
  );}
}



export default HostingOne;