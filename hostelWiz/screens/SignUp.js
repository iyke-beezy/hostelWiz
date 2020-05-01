import * as React from 'react';
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions} from 'react-native';
import styles from "../style";
import { Card,Button, Icon } from 'react-native-elements';


class SignUpScreen extends React.Component {




    render() {
      return (
        <View style={{marginTop:50}}>
       
  
      
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
            <Text style={styles.logoText}>HostelWiz</Text>
              <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
              <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
              <TextInput placeholder="name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}/>
              <TextInput placeholder="phonenumber" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
              <TextInput placeholder="group" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}/>
              <View style={{margin:20}}>
              <Button 
                buttonStyle={styles.loginButton}
              //onPress={() => this.onLoginPress()}
                onPress={() => this.props.navigation.navigate('Login')}
                title="SignUp"
              /> 
              </View>
           
            
            </View>
           
            </View>
          </View>
      
           
      
      );
    }
  }

  export default SignUpScreen;