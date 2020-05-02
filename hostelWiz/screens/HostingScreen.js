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
       
       
  
      
          <View >
         <ScrollView>
         
          
           
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

     
      
                <Text>Street Address</Text>
              <TextInput placeholder="Eg. Third Otswe Steet Hse.No F593/3" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />

              <Text>City</Text>
              <TextInput placeholder="Eg. Accra" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />

              <Text>Region</Text>
              <TextInput placeholder="Greater Accra" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />


              <Text>Headline</Text>
              <TextInput placeholder="Headline" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />

              <Text>Description</Text>
              <TextInput placeholder="Headline" multiline = {true} numberOfLines = {4} placeholderColor="#c4c3cb" style={styles.loginFormTextInputArea}  />
          
          <View>
              <Text>Wifi</Text>
              <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={this.toggleSwitch}
        value={this.state.isEnabled}
      />
      </View>
      <View>
              <Text>TV Room</Text>
              <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={this.toggleSwitch}
        value={this.state.isEnabled}
      />
      </View>
      <View>
              <Text>Car Park</Text>
              <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={this.toggleSwitch}
        value={this.state.isEnabled}
      />
      </View>
      <View>
              <Text>Gym</Text>
              <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={this.toggleSwitch}
        value={this.state.isEnabled}
      />
      </View>
      <View>
              <Text>Laundry</Text>
              <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={this.toggleSwitch}
        value={this.state.isEnabled}
      />
      </View>

      <View>
              <Text>Study Room</Text>
              <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={this.toggleSwitch}
        value={this.state.isEnabled}
      />
      </View>

      <View>
              <Text>BathRoom</Text>
              <View style={styles.checkboxContainer}>

              <Text style={styles.label}>Private</Text>
                <CheckBox
                value={this.state.isSelected}
                onValueChange={this.setSelection}
                style={styles.checkbox}
                />

             <Text style={styles.label}>shared</Text>
                <CheckBox
                value={this.state.isSelected}
                onValueChange={this.setSelection}
                style={styles.checkbox}
                   />
       
      </View>
     
            

          <Text>BedRooms</Text>
          <View>
          <Text>Single</Text>
        <RadioButton
          value="first"
          status={this.state.checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'first' }); }}
        />
         <Text>Duo</Text>
        <RadioButton
          value="second"
          status={this.state.checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'second' }); }}
        />
          <Text>Trio</Text>
        <RadioButton
          value="third"
          status={this.state.checked === 'third' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'third' }); }}
        />
         <Text>Quadro</Text>
        <RadioButton
          value="fourth"
          status={this.state.checked === 'fourth' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'fourth' }); }}
        />
      </View>
      </View>


          
              <View style={{margin:20}}>
              <Button 
                buttonStyle={styles.loginButton}
              //onPress={() => this.onLoginPress()}
                onPress={() => this.props.navigation.navigate('Login')}
                title="SignUp"
              /> 
              </View>

             
            
              </ScrollView>
           
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
 