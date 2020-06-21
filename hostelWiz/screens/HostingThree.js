import * as React from 'react';
import {CheckBox,ScrollView, Switch , Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import styles from "../style";
import { RadioButton } from 'react-native-paper';







class HostingThree extends React.Component{
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
              <ScrollView>
         
          
           
        
     
      
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

             <Text style={styles.checkboxLabel}>Private</Text>
               <CheckBox
               value={this.state.isSelected}
               onValueChange={this.setSelection}
               style={styles.checkbox}
               />

            <Text style={styles.checkboxLabel}>shared</Text>
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
             onPress={() => this.props.navigation.navigate('HMnav')}
               title="Done"
             /> 
             </View>

            
           
             </ScrollView>
        </View>

   
  );}
}




export default HostingThree;